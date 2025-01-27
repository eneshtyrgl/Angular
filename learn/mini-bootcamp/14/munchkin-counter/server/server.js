const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const playersFilePath = path.join(__dirname, '../src/assets/data/players.json');

// Serve static files from the Angular app
const angularAppPath = path.join(__dirname, '../dist/munchkin-counter');
app.use(express.static(angularAppPath));

app.get('/api/players', (req, res) => {
  fs.readFile(playersFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading players file');
    }
    res.send(JSON.parse(data));
  });
});

app.put('/api/players', (req, res) => {
  const players = req.body;
  fs.writeFile(playersFilePath, JSON.stringify(players, null, 2), 'utf8', (err) => {
    if (err) {
      return res.status(500).send('Error writing players file');
    }
    res.send('Players updated successfully');
  });
});

// Serve the Angular app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(angularAppPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});