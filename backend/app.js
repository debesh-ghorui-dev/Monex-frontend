import express from 'express';
import connectToDB from './connectToDB.js';

const app = express();
connectToDB();

export default app;