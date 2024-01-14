const express = require('express');
const fs = require('fs');
const csv = require('csv-parser');
const csvFilePath = __dirname + '/prices.csv';

const app = express();
const port = 4000;

let prices = {};

// This to read CSV file and update prices
function readCSV() {
    fs.createReadStream(csvFilePath)
        .pipe(csv())
        .on('data', (row) => {
            console.log('CSV Row:', row);

            if (row.category && row.price) {
                prices[row.category] = parseInt(row.price);
            } else {
                console.log('Invalid row:', row);
            }
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            console.log('Prices:', prices);
        });
}

console.log('Current files/folders in the directory:', fs.readdirSync(__dirname));
app.use(express.static('public'));
// it will read the Initial read of CSV
readCSV();

// Endpoint to get updated prices
app.get('/getPrices', (req, res) => {
    res.json(prices);
});

// Root route handler
app.get('/', (req, res) => {
    res.send('Hello, this is your server!');
});

// This will Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
