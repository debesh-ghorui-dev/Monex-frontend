import { model } from 'mongoose';
import holdingsSchema from '../schemas/holdingsSchema.js';

const holdingsModel = model("holding", holdingsSchema);

export default holdingsModel;