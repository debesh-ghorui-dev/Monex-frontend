import express from 'express';
import orderRoutes from '../controllers/order.controller';

const router = express.Router();

router.post('/new', orderRoutes.newOrder)