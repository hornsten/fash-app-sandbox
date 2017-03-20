const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8000, (err) => {
    if (err) console.log(err);

    console.log('listening on: http://localhost:8000');
});
