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
import { Server as SocketIOServer, Socket } from 'socket.io';




const app: Application = express();

const server = http.createServer(app);

const io = new SocketIOServer();



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




io.on('connection', (socket: Socket) => {
    socket.on('join', (data) => {
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('user joined');
    });

    socket.on('message', (data) => {
        io.to(data.room).emit('new message', { user: data.user, message: data.message });
    });
});


serverConfig(server).startServer();

