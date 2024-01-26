
const express = require('express');
const axios = require('axios');
require('dotenv').config(); // Load environment variables early in your code

const app = express();
// For Heroku
const port = process.env.PORT;
// For local
//const port = 3000;

// Using Express's built-in middleware for URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(__dirname));

// this is the root route handler
// app.get('/', (req, res) => {
//   res.send('Welcome to the CreateAssistant!');
// });

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

