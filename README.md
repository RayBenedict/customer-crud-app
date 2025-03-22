# customer-crud-app

Simple customer CRUD application - CRM Online

## Overview

This application is a simple CRUD (Create, Read, Update, Delete) application for managing customer records. It consists of a Laravel backend and a React frontend, both containerized using Docker.

## Features

- Create a customer
- Update a customer
- Delete a customer
- List all customers
- View a customer

## Technologies Used

- Backend: Laravel
- Frontend: React.js
- Database: MySQL
- Search: Elasticsearch
- Containerization: Docker, Docker Compose
- CSS Framework: Bootstrap

## Prerequisites

- Docker
- Docker Compose

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/RayBenedict/customer-crud-app.git
cd customer-crud-app
```

## 2. Build and Run the Containers

- Run the following command to build and start the application:

```sh
docker-compose up -d --build
```
- This will start the backend, frontend, database, and Elasticsearch services.

## 3. Migrate the Database

- Once the containers are running, execute the database migrations:

```sh
docker exec -it laravel_app php artisan migrate --seed
```

## 4. Access the Application

- Backend API: http://localhost:8000/api/customers

- Frontend: http://localhost:3000

## Running Tests

- To run the Laravel backend tests, execute:
```sh
docker exec -it laravel_app php artisan test
```
- Stopping the Application

- To stop the containers, run:
```sh
docker-compose down
```
- Troubleshooting

- If you encounter issues:

## Check container logs:
```sh
docker-compose logs -f
```
## Restart the application:
```sh
docker-compose restart
```
- Ensure ports 8000 (backend) and 3000 (frontend) are not occupied.

## License

- This project is licensed under the MIT License.

## Enjoy using Customer CRUD App! 🚀
