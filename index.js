const express = require("express");
const connectDB = require("./config/database");
const userRouter = require("./routes/userRoutes");
const app = express();
require("dotenv/config");
const port = process.env.PORT || 3000;
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
  res.json("Welcome to the Videos Streaming API");
});
app.listen(port, () => console.log(`[SERVER] is running on :${port}`));
