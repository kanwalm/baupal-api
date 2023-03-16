# Baupal Energy Consumption API

This is a Node.js and TypeScript-based API that allows users to submit forms with information about their energy consumption. The API is designed to be scalable, using caching and database storage to handle large amounts of data.

## Installation

To install the API, follow these steps:

1. Clone this repository to your local machine.
2. Install the required dependencies by running `yarn install`.
3. Create a PostgreSQL database on your local machine and start postgres service.
4. Copy schema.db.config.json to db.config.json and update the database configuration.
5. Start the API server by running `yarn dev`.

## Running the App with Docker

To run the app with Docker, you'll need to follow these steps:

1. Install Docker on your local machine if you haven't already.
2. Clone the repository to your local machine.
3. Create a PostgreSQL database on your local machine and start postgres service.
4. Run docker
5. Copy schema.db.config.json to db.config.json and update the database configuration.
6. Run `yarn docker:local` to start the API server.

## Usage

### Get All Consumptions

To retrieve all consumptions, send a `GET` request to the `api/energy-consumptions` endpoint

### Get Consumption By ID

To retrieve all consumptions, send a `GET` request to the `api/energy-consumptions/{id}` endpoint

### Create Consumption

To create a new consumption, send a `POST` request to the `api/energy-consumptions` endpoint with the following JSON body:

```json
{
  "consumption": 100,
  "user_id": "200"
}
```

You can also use the curl command:

```bash

curl -X POST -H "Content-Type: application/json" -d '{"consumption": 100, "user_id": "200"}' http://localhost:3000/api/energy-consumptions

```
