import express, { Application, NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import mongoSanitize from 'express-mongo-sanitize';


const corsOptions = {
    origin: 'http://localhost:4200',
    credentials: true,//access-control-allow-credentials:true
    optionSuccessStatus: 200
};

const expressConfig = (app: Application) => {
    app.use(cors(corsOptions));
    app.use(morgan('common'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(mongoSanitize());
}


export default expressConfig;