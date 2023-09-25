const express = require('express');
const path = require('path');
const db = require('./db/db.json');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => res.send());

app.get('/api/db', (req, res) => res.json(db));

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);