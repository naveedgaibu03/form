# Notary Form Project

This project is a simple web form that includes a checkbox for Notary Price. The Notary Price is fetched from a server that reads the prices from a CSV file. The project uses Node.js for the server, and the client-side is built with HTML, CSS, and JavaScript.

## Project Structure

- `server.js`: Node.js server file that reads prices from the CSV file and exposes an endpoint to fetch them.
- `prices.csv`: CSV file containing the categories and corresponding prices.
- `public`: Folder containing client-side files.
  - `index.html`: HTML file with the form and Notary Price display.
  - `style.css`: CSS file for styling.
  - `script.js`: JavaScript file for client-side logic.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the server: `node server.js`

Visit [http://localhost:4000](http://localhost:4000) in your browser to see the Notary Form.

## Modifying Prices

To update Notary Prices, modify the `prices.csv` file. The server will read the updated prices automatically.

## Dependencies

- [Express](https://expressjs.com/): Web framework for Node.js
- [csv-parser](https://www.npmjs.com/package/csv-parser): CSV parsing library for Node.js

## Author

Naveed Gaibu
