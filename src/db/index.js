import mongoose from "mongoose";
import { dbName } from "../constants.js";
import express from 'express';
// import dotenv from"dotenv/config";

const myApp = express()



const databaseConnection = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_STRING}/${dbName}`);
        // console.log(`${connectionInstance}`);
        
        console.log(`MONGO DB SERVER CONNECTED WITH HOST : ${connectionInstance.connection.host}`);
        return "Connection Successful"
    } catch (error) {
        console.log(`REALLY SORRY !, YOU HAVE TO DEAL WITH THIS ISSUE ON YOUR OWN\nERROR : ${error}`);
        process.exit(1);
    }
}

export default databaseConnection;