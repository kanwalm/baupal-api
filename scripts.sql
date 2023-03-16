CREATE DATABASE baupal;

CREATE TABLE energy_consumption (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  consumption FLOAT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
