# OpenAPI Node.js Project

This project demonstrates the integration of OpenAI with a Node.js application, featuring API versioning, JWT authentication, and OpenAPI validation. The project includes two versions of the API (v1 and v2), where v1 is protected by JWT authentication and v2 is open. The project also includes middleware for security (Helmet), rate limiting, CORS, and error handling.

## Features

- **API Versioning**: Two versions of the API (v1 and v2) with different routes and functionalities.
- **JWT Authentication**: Secure access to v1 endpoints using JSON Web Tokens (JWT).
- **OpenAPI Validation**: Ensures that API requests and responses adhere to the defined OpenAPI specification.
- **Security Middleware**: Includes Helmet for setting secure HTTP headers, rate limiting to prevent abuse, and CORS for cross-origin resource sharing.
- **Swagger Documentation**: Comprehensive API documentation using Swagger/OpenAPI 3.0.
- **Error Handling**: Centralized error handling middleware for consistent error responses.
- **Logging**: Utility for logging requests and errors.

## Project Structure

```
openapi-project/
│-- src/
│   │-- config/ 
│   │   │-- auth.js
│   │-- controllers/
│   |---|-- authController.js
│   │   │-- v1Controller.js
│   │   │-- v2Controller.js
│   │-- routes/
│   │   │-- v1Routes.js
│   │   │-- v2Routes.js
│   │-- middlewares/
│   │   │-- errorHandler.js
│   │-- utils/
│   │   │-- logger.js
│   │-- app.js
│-- swagger/
│   │-- swagger.yaml
│-- .env
│-- .gitignore
│-- package.json
│-- README.md
│-- server.js
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/openapi-project.git
   cd openapi-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=3000
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the server:

   ```bash
   npm start
   ```

The server will start running on `http://localhost:3000`.

## API Documentation

The API documentation is available via Swagger UI. Once the server is running, you can access the documentation at:

```
http://localhost:3000/api-docs
```

## Middleware

- **Helmet**: Sets secure HTTP headers.
- **Rate Limiter**: Limits the number of requests from a single IP address.
- **CORS**: Enables Cross-Origin Resource Sharing.
- **Error Handling**: Centralized error handling middleware for consistent error responses.

## Logging

The project includes a logging utility (`logger.js`) that logs requests and errors to the console.

## Acknowledgments

- [OpenAPI](https://www.openapis.org/)
- [Swagger](https://swagger.io/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)

---