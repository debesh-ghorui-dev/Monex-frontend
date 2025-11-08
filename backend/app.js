import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectToDB from './connectToDB.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectToDB();

export default app;