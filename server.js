const express = require('express');
const fs = require('fs');
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

app.get('/api/notes', (req, res) =>{
  const data = fs.readFileSync('./db/db.json', 'utf8')
console.log(data),

res.send()}
)


app.post('/api/notes', (req, res) => {
console.log(req.body)
  fs.appendFile("./db/db.json",JSON.stringify(req.body), (err) => {
    if (err) {
        console.log(err);
    }
    else {
        // Get the file contents after the append operation 
        console.log("\nFile Contents of file after append:",
            fs.readFileSync("./db/db.json", "utf8"));
    }})
    res.send()
});



app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
