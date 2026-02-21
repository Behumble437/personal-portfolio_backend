const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const createError = require("http-errors");
const serviceRoutes =
require("./routes/serviceRoutes");
const projectRoutes =
require("./routes/projectRoutes");
const referenceRoutes =
require("./routes/referenceRoutes");
const userRoutes =
require("./routes/userRoutes");

const connectDB = require("./db");
connectDB();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/services", serviceRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/references", referenceRoutes);
app.use("/api/users", userRoutes);

app.use((req,res,next)=>{
    next(createError(404));
});

app.use((err,req,res,next)=>{
    res.status(err.status||500).json({
        success:false,
        message:err.message
    });
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});