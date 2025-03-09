async function fetchCryptoData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
        const data = await response.json();
        displayCryptoData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayCryptoData(data) {
    const cryptoList = document.getElementById('crypto-list');
    cryptoList.innerHTML = '';

    data.forEach(crypto => {
        const cryptoDiv = document.createElement('div');
        cryptoDiv.className = 'crypto';
        cryptoDiv.innerHTML = `
            <img src="${crypto.image}" alt="" class="my-image">
            <span class="name">${crypto.name} (${crypto.symbol.toUpperCase()})</span>
            <span class="price">$${crypto.current_price}</span>
            <span class="name">تغییر قیمت ATH: ${crypto.ath_change_percentage}%</span>
        `;
        cryptoList.appendChild(cryptoDiv);
    });
}

fetchCryptoData();
