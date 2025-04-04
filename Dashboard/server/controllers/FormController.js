// /controllers/formController.js

import Form from '../models/FormModel.js'; // Correctly import the Form model

// Function to handle form submission
export const submitForm = async (req, res) => {
  try {
    const { email, phone, name } = req.body;

    // Validate required fields
    if (!email || !phone || !name) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Create a new form entry
    const newForm = new Form({
      email,
      phone,
      name
    });

    // Save the form data to the database
    const savedForm = await newForm.save();

    // Respond with the saved data
    res.status(201).json({
      message: 'Form submitted successfully!',
      formData: savedForm
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
