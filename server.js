const express = require('express');
const path = require('path');
const session = require('express-session');

// Initialize the express app
const app = express();

// Set up session handling with a secure secret
app.use(session({
  secret: 'sEvW23s64WTGUFJIPEJQF20fh', 
  resave: false,
  saveUninitialized: true
}));

// Middleware to parse the request body
app.use(express.urlencoded({ extended: true }));

// Serve static files like your main.js, images, CSS, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the login page
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { uname, psw } = req.body;

  // Check credentials
  if (uname === 'sever' || uname === 'Sever' || uname === 'hortensia' || 
      uname == 'Hortensia' || uname == 'mihai' || uname == 'Mihai' || uname == 'raluca' || uname == 'Raluca') {
    // Redirect to Google if the credentials match
    res.redirect('https://www.google.nl');
  } else {
    // Send an error message if they don't
    res.send('Invalid credentials');
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});