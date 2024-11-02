# Like Button API
## _An API for fetching and editing the like count of an article

## Features

- [x] users can fetch the likes of an article
- [x] users can like an article



## Getting Started

### Prerequisites

In order to install and run this project locally, you would need to install the following packages on your local machine.

- Node JS

### Installation

- Clone this repository

```
git clone [https://github.com/vicorandy/Norebase.git]
```

- Navigate to the project directory
- Run `npm install` or `yarn` to install the project dependencies
- Run `npm start` to start the project
- Soon as project is running please visit [http://localhost:5000/api-docs] to see and test end point
- The project uses Mongodb Cluster How ever i expose a cluster in the code base for connecting to the   cluster for an easier local setup this way you just have to clone the code base

#  Bonus Challenge: Improvements for Resilience and Scalability

## Abuse Prevention:
- Implement rate limiting, allowing a user to like an article only once within a certain timeframe.
- Use a Redis cache to track the user’s actions and limit based on IP or session ID.

## Handling High Traffic
- Caching: Use a Redis cache for storing the like count of popular articles. Frequently requested counts can be cached and updated every few seconds, minimizing database load.
- Load Balancing: Distribute requests across multiple servers to handle high concurrency.
- Implement sharding to split data across multiple servers, making the data accessible faster.
- Use a message queue (like Kafka or RabbitMQ) to queue like updates and process them in batches, reducing simultaneous database writes.

## Scaling for Millions of Concurrent Requests
- Like Requests: For scalability with concurrent like requests, use a message queue and a batch update approach to group multiple likes into a single database write.
- Read Requests: To handle high-volume like count requests, implement caching and load balancing across read replicas in the database.
