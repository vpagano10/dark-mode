import React, {useState, useEffect} from 'react';
import NavBar from './components/Navbar';
import axios from 'axios';
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import './styles.scss';

const Home = () => {
    const [coinData, setCoinData] = useState([]);

    useEffect(() => {
        axios
        .get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then(res => setCoinData(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <NavBar />
            <div>
                <h1>Welcome to Crypto Tracker</h1>
                <p>On this page you can explore the most current most popular crypto currencies on the market. More features to come!</p>
            </div>
            <Charts coinData={coinData} />
        </div>
    )
}

export default Home;