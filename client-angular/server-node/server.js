// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors'); //HTTP access control (CORS) for cross origin requests
app.use(cors()); //Setup cors
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response for NFT
app.get('/api/modern', (req, res) => {
    var jsonData = {
        "Modern": [
            {
                "anno": 2019,
                "nome": "Banana Split",
                "autore": "Banana master",
                "wikipedia": "https://it.wikipedia.org/wiki/Sekiro:_Shadows_Die_Twice",
                "img": "https://assets1.ignimgs.com/2018/09/04/sekiro---button-1536103897438.jpg"
            },
        ],
     };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

// Set our api response for NFT
app.get('/api/NFT', (req, res) => {
    var jsonData = {
        "NFT": [
            {
                "anno": 2019,
                "nome": "Nakamigos",
                "autore": "Nakamigos #1202",
                "valore": "0.79 ETH",
                "img": "https://i.seadn.io/s/raw/files/3c886a7295e7a89829ea0f2ffc1c3240.png"
            },
            {
                "anno": 2020,
                "nome": "UNIC APE #1",
                "autore": "54B044",
                "valore": "0,9 MATIC",
                "img": "https://i.seadn.io/s/raw/files/08d8baa001bfdb9cf0b94cb04c356feb.jpg"
            },
        ],
     };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });

//API response for ancient
app.get('/api/ancient', (req, res) => {
    var jsonData = {
        "Ancient": [
            {
                "anno": 2019,
                "nome": "Sekiro: Shadows Die Twice",
                "autore": "FromSoftware",
                "wikipedia": "https://it.wikipedia.org/wiki/Sekiro:_Shadows_Die_Twice",
                "img": "https://assets1.ignimgs.com/2018/09/04/sekiro---button-1536103897438.jpg"
            },
        ],
     };

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
    });
// Catch all other routes and return the index file
app.get('*', (req, res) => {
res.send('app works!');
//res.sendFile(path.join(__dirname, 'dist/index.html'));
});
/**
* Get port from environment and store in Express.
*/
const port = process.env.PORT || '3000';
app.set('port', port);
/**
* Listen on provided port, on all network interfaces.
*/
app.listen(port, () => {console.log('Example app listening on port 3000!');});