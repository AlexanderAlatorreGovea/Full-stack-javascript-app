const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;
//here is the middleware section
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
//we are connecting to mongoose here
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('mongodb connection established successfully');
});
//we are importing the files here
const exercisesRouter = require('./routes/exercises');
const userRouter = require('./routes/users')

//when someone goes to /exercises the client is going to get all the info from that rout
//when someone goes to /users they will get that info too
app.use('/exercises', exercisesRouter);
app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});