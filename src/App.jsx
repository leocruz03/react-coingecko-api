import { useState, useEffect } from "react";

// axios imported
import axios from "axios";

// components imported
import TableCoins from "./components/TableCoins";

export default function App() {

    // state search
    const [search, setSearch] = useState("");

    // state for the coins
    const [coins, setCoins] = useState([]);

    // Function to get the data from the API async and await the response
    const getData = async () => {
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1");
        setCoins(response.data);
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <h1>Coin Market Coingecko</h1>
            <div className="row">
                <input type="text" placeholder="Search a coin" className="form-control bg-dark text-light border-0 mt-4 text-center" 
                    value={ search } onChange={ (e) => setSearch(e.target.value) }
                />
                <TableCoins coins={ coins } search={ search } />
            </div>
        </div>
    );
};