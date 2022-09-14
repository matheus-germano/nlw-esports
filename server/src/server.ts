import express from 'express';

const app = express();

app.get('/', () => console.log("ola"));

app.listen(3333);