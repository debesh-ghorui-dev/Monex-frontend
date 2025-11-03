import { model } from 'mongoose';
import orderSchema from '../schemas/ordersSchema.js';

const orderModel = new model("holding", orderSchema);

export default orderModel;