import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const mainApp = express();

mainApp.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true,
}
))

mainApp.use(express.json({limit : "16kb"}));

mainApp.use(express.urlencoded({extended : true,limit : "16kb"}))

mainApp.use(express.static("public"));

mainApp.use(cookieParser());

export default mainApp;
