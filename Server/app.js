require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const http = require("http"); // Required to create an HTTP server

const app = express();

const server = http.createServer(app);

app.use(
  cors({
    origin: [process.env.CORS_ORIGIN, process.env.CORS_ORIGIN_1],
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev")); //HTTP request logger middleware for node.js

const userRouter = require("./Routes/user.routes.js");

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

app.use("/api/v1/user", userRouter);

mongoose.set("strictQuery", false);
mongoose
  .connect(`${MONGO_URL}${DB_NAME}`)
  .then(() => {
    console.log("Connected to MongoDB");
    server.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });
