// server.js - Entry point
require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');
const yaml = require("yamljs");
const swaggerUi = require("swagger-ui-express");
const swaggerPath = path.join(__dirname, "swagger", "swagger.yml");
const swaggerDocument = yaml.load(swaggerPath);
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const OpenApiValidator = require("express-openapi-validator");
const { verifyToken } = require('./src/config/auth');
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  });

const app = express();

const PORT = process.env.PORT || 3000;

// Middlewares
app.use(limiter);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));
app.use(bodyParser.json());

// Dynamically set the base URL based on environment
const baseUrl = PROCESS.env.BASEURL || `http://localhost:${PORT}`;  // Local development URL

// Replace the placeholder with the correct base URL
swaggerDocument.servers[0].url = baseUrl;
// OpenAPI Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// OpenAPI Validator Middleware
app.use(
    OpenApiValidator.middleware({
      apiSpec: swaggerPath,
      validateRequests: true, // Validate request body, params, query
      validateResponses: true, // Validate responses before sending
    })
  );

// Routes
const v1Routes = require("./src/routes/v1Routes");
const v2Routes = require("./src/routes/v2Routes");
const authRoutes = require('./src/routes/authRoutes');

// Use auth routes
app.use('/api/auth', authRoutes);
app.use("/api/v1", verifyToken, v1Routes);
app.use("/api/v2", v2Routes);

// Error Handling
const errorHandler = require("./src/middlewares/errorHandler");
app.use(errorHandler);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
