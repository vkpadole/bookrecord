import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import privateRoutes from './routes/private.js';
import bookRoutes from './routes/book.js';
import path from 'path';
import hbs from 'hbs';
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.urlencoded({ extended: true }));
// Set the view engine to Handlebars.
// View Engine Setup 

// Set up the view engine and views path
const viewsPath = path.join(__dirname, 'views');
app.set('view engine', 'hbs');
app.set('views', viewsPath);

const PORT = process.env.PORT || 8080;

app.use(cookieParser());
app.use(express.json());
app.use("/book", bookRoutes);
app.use("/private", privateRoutes);

const connectDB = async function(){
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log("MongoDB connected");
    }
    catch(err) {
        console.log(err);
        process.exit(1);
    }
}

app.listen(PORT, function(){
    connectDB();
    console.log("App is running at port "+PORT);
});