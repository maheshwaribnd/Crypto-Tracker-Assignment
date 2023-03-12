import axios from 'axios';

function getCoinData() {
	let coins = axios
		.get(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
		)
		.then((res) => {
            console.log("DATA1", res.data)
			return res.data
		})
		.catch((err) => {
			console.log(err);
		});

	if(coins) return coins
}

export default getCoinData;
