const express = require("express");
const cors = require("cors");
require("dotenv").config();
const rootRouter = require("./routes");
const path = require("path");

console.log(path);
const { env } = process;
const { PORT } = env;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", rootRouter);

app.listen(PORT, () => console.log(`Server is up and runing on ${PORT}`));
