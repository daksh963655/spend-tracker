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

// const productRouter = require("./routes/product.routes.js");
// const userRouter = require("./routes/user.routes.js");
// const categoryRouter = require("./routes/category.routes.js");
// const cmsRouter = require("./routes/cms.routes.js");
// const brandRouter = require("./routes/brand.routes.js")
// const wishlistRouter = require("./routes/wishlist.routes.js")
// const cartRouter = require("./routes/cart.routes.js")
// const couponRouter = require("./routes/coupon.routes.js")
// const commentRouter = require("./routes/comments.routes.js")

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

// app.use("/api/v1/product", productRouter);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/category", categoryRouter);
// app.use("/api/v1/cms", cmsRouter);
// app.use("/api/v1/brand", brandRouter);
// app.use("/api/v1/wishlist", wishlistRouter);
// app.use("/api/v1/cart", cartRouter);
// app.use("/api/v1/coupon", couponRouter);
// app.use("/api/v1/comment", commentRouter);



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