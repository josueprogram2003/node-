import express from "express";
import morgan from "morgan";
import postRoutes from "./routes/post.routes";

const app = express();
let cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Bienvenido a Node JS.......!");
});

app.use("/api/auth/post", postRoutes);

export default app;
