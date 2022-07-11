const express = require('express');
const logger = require('morgan');
const { connect } = require('./mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

const apiRouter = require('./routers');

app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));

app.use('/api', apiRouter);

app.use((req, res) => {
    res.send(`Access Denied.\n잘못된 접근 입니다.`);
});

// bad format handling
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error(err);
        return res.status(400).send({
            status: 1,
            message: 'We recommend to check a syntax on your request!'
        });
    }
    next();
});

connect();

app.listen(port, (req, res) => {
    console.log(`Listening on Port ${port}!`);
});