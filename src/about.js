import React from 'react';
import NavBar from './components/Navbar';
import './styles.scss';

const About = () => {
    return (
        <div>
            <NavBar />
            <div>
                <h1>About Crypto Tracker</h1>
                <p>What's going on in the crypto currency world right now? Why should we be interested? Who should I know about?<br />These are the questions we try to answer here at crypto tracket</p>
            </div>
        </div>
    )
}

export default About;