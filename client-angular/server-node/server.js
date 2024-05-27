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
                "anno": 1937,
                "nome": "Guernica",
                "autore": "Pablo Picasso",
                "descrizione": "Guernica è un'opera che trascende la specifica tragedia del bombardamento di Guernica per diventare un simbolo universale contro la guerra e la sofferenza. Picasso non rappresenta solo l'orrore del momento, ma denuncia la brutalità di tutte le guerre e il dolore che esse infliggono ai civili innocenti. ",
                "img": "https://www.artribune.com/wp-content/uploads/2017/04/Pablo-Picasso-Guernica-1937.-Museo-Nacional-Centro-de-Arte-Reina-Sof%C3%ADa-c-Sucesi%C3%B3n-Pablo-Picasso-VEGAP-2017-scaled.jpg"
            },
            {
                "anno": 1932,
                "nome": "Ragazza di fronte allo specchio",
                "autore": "Pablo Picasso",
                "descrizione": "C'è chi la interpreta come un ritratto intimo di Marie-Thérèse, chi come una metafora della condizione della donna nella società, e chi ancora come un'opera che anticipa gli orrori della guerra imminente.",
                "img": "https://images2.corriereobjects.it/methode_image/2016/10/01/Cultura/Foto%20Cultura%20-%20Trattate/arte-kM2D-U43230400114609vHD-1224x916@Corriere-Web-Sezioni-593x443.jpg"
            },
            {
                "anno": 1937,
                "nome": "Ritratto donna Maar",
                "autore": "Pablo Picasso",
                "descrizione": " Il Ritratto di Dora Maar è considerato uno dei capolavori del Cubismo sintetico di Picasso. L'opera cattura la bellezza e l'intelligenza di Dora Maar, ma allo stesso tempo ne rivela l'interiorità tormentata e la fragilità emotiva.",
                "img": "https://www.arteworld.it/wp-content/uploads/2023/04/Ritratto-Dora-Maar-Picasso.jpg"
            },
            {
                "anno": 2002,
                "nome": "Baloon Girl",
                "autore": "Banksy",
                "descrizione": "L'opera è ricca di interpretazioni. Il palloncino rosso può essere visto come simbolo di speranza, sogni e desideri che rischiano di sfuggire via. La bambina, con la sua espressione malinconica, potrebbe rappresentare la perdita dell'innocenza o la fragilità dei sogni di fronte alle difficoltà della vita.",
                "img": "https://www.artribune.com/wp-content/uploads/2017/04/Pablo-Picasso-Guernica-1937.-Museo-Nacional-Centro-de-Arte-Reina-Sof%C3%ADa-c-Sucesi%C3%B3n-Pablo-Picasso-VEGAP-2017-scaled.jpg"
            },
            {
                "anno": 1956,
                "nome": "Golgota, Concetto spaziale",
                "autore": "Lucio Fontana",
                "descrizione": "L'uso dei tagli da parte di Fontana è un elemento distintivo del suo movimento Spazialismo. In quest'opera, i tagli servono a simboleggiare le ferite di Cristo e la violenza della sua crocifissione. Creano anche un senso di movimento e dinamismo, suggerendo il dolore e la sofferenza patiti da Cristo.",
                "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWCG0OhwLpTitbnB5dHfryjK8gYm2rJYyJM5U8lCOWQ&s"
            },
            {
                "anno": 1923,
                "nome": "Composizione VIII",
                "autore": "Vasilij Vasil'evič Kandinskij",
                "descrizione": "Il dipinto è aperto a interpretazioni, ma è generalmente visto come una rappresentazione del mondo interiore dell'artista. Le forme possono rappresentare diversi aspetti della sua personalità o le sue emozioni, e i colori possono rappresentare diversi stati d'animo o sentimenti.",
                "img": "https://abbecedarte.wordpress.com/wp-content/uploads/2014/03/kandinsky-composizione-viii.jpg"
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
            {
                "anno": 2024,
                "nome": "Highrises",
                "autore": "Hythacg",
                "valore": "0,25 ETH",
                "img": "https://i.seadn.io/gae/GhdWaR5hrdOa6L0T6TWZvHwDDZew4qgxSlpaFkpUWCrERCop-G0EDwHl97oBKur5RA6AIuBKkjJP-jopeT--M2yTRVQSNgz139aU"
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
                "anno": 1503,
                "nome": "La Gioconda",
                "autore": "Leonardo da Vinci",
                "descrizione": "La Gioconda è stata interpretata in molti modi diversi, ma è generalmente vista come un ritratto di una donna idealizzata. Il dipinto è stato elogiato per la sua bellezza, la sua maestria tecnica e la sua perspicacia psicologica.",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/La_Gioconda.jpg/80px-La_Gioconda.jpg"
            },
            {
                "anno": 1621,
                "nome": "Ratto di Proserpina",
                "autore": "Gian Lorenzo Bernini",
                "descrizione": "Si tratta di un gruppo scultoreo in marmo bianco che raffigura il rapimento di Proserpina, dea delle messi, da parte di Plutone, dio degli Inferi.",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/RapeOfProserpina.jpg/161px-RapeOfProserpina.jpg"
            },
            {
                "anno": 1597,
                "nome": "Narciso",
                "autore": "Michelangelo Caravaggio",
                "descrizione": "Narciso è incapace di amare nessuno al di fuori di sé stesso, e il suo amore per il proprio riflesso è alla fine distruttivo. Il dipinto suggerisce che il vero amore si basa sul rispetto e sulla comprensione reciproci e non può esistere nel vuoto.",
                "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Michelangelo_Merisi_da_Caravaggio_-_Narcissus_-_WGA04109.jpg/250px-Michelangelo_Merisi_da_Caravaggio_-_Narcissus_-_WGA04109.jpg"
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