const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const xssProtection = require('x-xss-protection');
const cors = require('cors')
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');

const playerRoutes=require('./routes/playerRoutes')
const trainerRoutes=require('./routes/trainerRoutes')
const userRoutes=require('./routes/userRoutes')
const teamsDetailsRoutes=require('./routes/teamDetailsRoutes')
const tournamentRoutes=require('./routes/tournamentRoutes')
const adminRoutes=require('./routes/adminRoutes')
const playerInformationRoutes=require('./routes/playerInformationRoutes')

const app = express();

app.use(helmet());




if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
};


app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xssProtection());
app.use(cors());

app.use('/api/v1/players',playerRoutes);
app.use('/api/v1/trainer',trainerRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/team-details',teamsDetailsRoutes);
app.use('/api/v1/tournaments',tournamentRoutes);
app.use('/api/v1/admin',adminRoutes);
app.use('/api/v1/player-information',playerInformationRoutes);


app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);


module.exports = app;