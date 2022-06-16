import React from 'react';
import ReactDOM from 'react-dom';
import "../src/styles/style.css";
import App from './App';
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis";
/**
 * подключение к облачному серверу Moralis
 */
Moralis.start({
    serverUrl: "https://jrffsta5kgpz.usemoralis.com:2053/server" ,
    appId: "RHdGOpDM94gMymPyI6IRXBRGp5mybwmQibCkdn5m"
})

ReactDOM.render(
    <React.StrictMode>
        <MoralisProvider serverUrl="https://jrffsta5kgpz.usemoralis.com:2053/server" appId="RHdGOpDM94gMymPyI6IRXBRGp5mybwmQibCkdn5m">
            <App />
        </MoralisProvider>
    </React.StrictMode>,
    document.getElementById('root')
 );
