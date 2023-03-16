import express from 'express';
import bodyParser from 'body-parser';
import energyConsumptionRoutes from './routes/energyConsumptionRoutes';
import { AppDataSource } from './data-source';
import cluster from 'cluster';
import os from 'os';
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

AppDataSource.initialize()
  .then(async () => {
    const numCPUs = os.cpus().length;

    if (cluster.isMaster) {
      console.log(`Master ${process.pid} is running`);

      // Fork workers
      for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
      }

      cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
        cluster.fork();
      });
    } else {
      // Workers can share any TCP connection
      // In this case it is an HTTP server
      app.use('/api', energyConsumptionRoutes);
      app.listen(port, () => {
        console.log(`Server running on port ${port}`);
      });
    }
  })
  .catch((error) => console.error(error));
