import React from 'react';
import NavBar from './components/Navbar';
import './styles.scss';
import styled from 'styled-components';

const AboutDiv = styled.div`
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
const SectionTitle = styled.h2`
    font-weight: bold;
    text-align: left;
    margin: 2% 0% 0% 4%;
`;
const SectionContent = styled.p`
    padding: 2%;
    font-size: 1.6rem;
    line-height: 1.5;
    text-align: left;
    margin: 2% 0% 0% 4%;
`;
const FooterDiv = styled.div`
    margin: 2%;
    border: 4px solid grey;
`;
const FooterContent = styled.p`
    padding: 2%;
    font-size: 1.6rem;
    line-height: 1.5;
`;

const About = () => {
    return (
        <div>
            <NavBar />
            <AboutDiv>
                <PageTitle>About Crypto Tracker</PageTitle>
                <PageContent>What's going on in the crypto currency world right now? Why should we be interested? Who should I know about?<br />These are the questions we try to answer here at crypto tracket</PageContent>
            </AboutDiv>
            <div>
                <SectionTitle>What's New?</SectionTitle>
                <SectionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SectionContent>
                <SectionTitle>Why Should We Care?</SectionTitle>
                <SectionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SectionContent>
                <SectionTitle>Active Coins</SectionTitle>
                <SectionContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</SectionContent>
            </div>
            <FooterDiv>
                <FooterContent>For more information on different crypto currencies, and to keep up with the latest news in the industry, visit some of the links provided below.</FooterContent>
            </FooterDiv>
        </div>
    )
}

export default About;