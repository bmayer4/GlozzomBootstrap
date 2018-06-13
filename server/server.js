const express = require('express');  
const bodyParser = require('body-parser');
const path = require('path');
const publicPath = path.join(__dirname, '..', 'client')

const app = express();

app.use(bodyParser.json());

    app.use(express.static('client'));   //!!!

    app.get('*', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'));
    });

const PORT = process.env.PORT || 3000;  

app.listen(PORT, () => {
    console.log(`Server is up!`);
});