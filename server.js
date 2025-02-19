// server.js - Entry point
require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const swaggerDocument = yaml.load("./swagger/swagger.yml");
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});

// Middlewares
app.use(limiter);
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("combined"));

// OpenAPI Documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
const v1Routes = require("./src/routes/v1Routes");
const v2Routes = require("./src/routes/v2Routes");
app.use("/api/v1", v1Routes);
app.use("/api/v2", v2Routes);

// Error Handling
const errorHandler = require("./src/middlewares/errorHandler");
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
