import { model } from 'mongoose';
import positionsSchema from '../schemas/positionsSchema.js';

const positionsModel = new model("position", positionsSchema);

export default positionsModel;