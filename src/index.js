import mongoose from "mongoose";
import dotenv from 'dotenv/config';
import { dbName } from './constants.js'
import databaseConnection from "./db/index.js";
import mainApp from './app.js'


databaseConnection()
.then( (response) => {
    mainApp.listen(process.env.PORT || 1008, ()=> {
        console.log(`App Listening on PORT : ${process.env.PORT || 1008}`);
    });
    console.log(`DB CONNECTED : ${response}`);
})
.catch( (error)=>{
    console.log(`Connection Failed \nError Encountered\nError : ${error}`);
})