import React, {useState, useEffect} from 'react';
import NavBar from './components/Navbar';
import axios from 'axios';
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import './styles.scss';
import styled from 'styled-components';

const HomeDiv = styled.div`
    margin: 2%;
    padding: 2%;
    border: 4px solid grey;
`;
const PageTitle = styled.h1`
    font-weight: bold;
    padding: 2%;
`;
const PageContent = styled.p`
    padding: 2%;
    font-size: 1.6rem;
    line-height: 1.5;
`;

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
            <HomeDiv>
                <PageTitle>Welcome to Crypto Tracker</PageTitle>
                <PageContent>On this page you can explore the most current most popular crypto currencies on the market. More features to come!</PageContent>
            </HomeDiv>
            <Charts coinData={coinData} />
        </div>
    )
}

export default Home;