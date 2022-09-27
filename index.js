const express = require('express');
const app = express();
const PORT = 5000;

const mygroupReq = require('./routes/routes.mygroup');
const mssvReq = require('./routes/routes.19110355');
const messReq = require('./routes/routes.message');

app.use(express.json());
app.use(express.text());

app.use('/', mygroupReq);
app.use('/19110355', mssvReq);
app.use('/message', messReq);

app.use((req, res, next) => {
    const error = new Error("not found");
    return res.status(404).json({
        message: error.message,
    });
});

app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})