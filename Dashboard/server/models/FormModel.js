// /models/FormModel.js

import mongoose from 'mongoose';

// Define the form schema
const formSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  name: { type: String, required: true },
}, { timestamps: true });

const Form = mongoose.model('Form', formSchema);

// Export the model as the default export
export default Form;
