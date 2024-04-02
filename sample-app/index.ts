import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import router from "./routes";

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sidharth:Aether12@sidharth.mbsztl5.mongodb.net/eBinDb?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions);


app.use(router);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
