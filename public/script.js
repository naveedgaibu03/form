// script.js

async function fetchPrices() {
    try {
        const response = await fetch('/getPrices');
        const prices = await response.json();

        console.log('Prices:', prices);

        const notaryPriceElement = document.getElementById('notaryPrice');
        const rentDeedPrice = prices['Rent Deed'];

        if (typeof rentDeedPrice !== 'undefined') {
            notaryPriceElement.textContent = 'Notary Price: ' + rentDeedPrice + ' Rs';
        } else {
            notaryPriceElement.textContent = 'N/A';
        }
    } catch (error) {
        console.error('Error fetching prices:', error);
    }
}

// Call the function when the page loads
fetchPrices();
