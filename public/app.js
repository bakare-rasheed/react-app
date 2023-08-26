const express = require('express');
const path = require('path');

const app = express();

// Serve static assets from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up the route to serve the index.html file directly
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set up the port for the server to listen on
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
