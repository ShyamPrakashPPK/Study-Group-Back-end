import express, { Application, NextFunction } from 'express';
import connectDB from './frameworks/database/mongoDb/connection';
import http, { Server } from 'http'
import serverConfig from './frameworks/webserver/server';
import expressConfig from './frameworks/webserver/express';
import routes from './frameworks/webserver/routes';
import errorHandlingMiddleware from './frameworks/webserver/middlewares/errorHandlingMiddleware';
import AppError from './utils/appError';
import { authService } from './frameworks/services/authService';
import configKeys from './config';


const app: Application = express();
const server = http.createServer(app);



//connection to mongodb
connectDB();

//configuring express
expressConfig(app)

//setting routes for each endpoint
routes(app)

//error handling middleware
app.use(errorHandlingMiddleware)

//catch 404 and forward to error handler
app.all('*', (req, res, next: NextFunction) => {
    next(new AppError('Not Found', 404))
});

serverConfig(server).startServer();

