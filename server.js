const express = require('express');
const path = require('path');
const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
res.send('Do Later'));


app.post('/api/notes', (req, res) => {
console.log(req.body)
  res.send('Do Later')
});



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
