import CoinRow from "./CoinRow";

export default function TableCoins({ coins, search }) {

    const filteredCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())
    });

    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                    <th>Volume (24h)</th>
                    <th>Circulating Supply</th>
                    <th>Total Supply</th>
                    <th>Change (24h)</th>
                </tr>
            </thead>

            <tbody>
                { filteredCoins.map(crypto => {
                    return (
                        <CoinRow crypto={ crypto } />
                    );
                }) }
            </tbody>
        </table>
    );
};