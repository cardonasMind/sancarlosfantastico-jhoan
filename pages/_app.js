import React from "react";

import { FactsContextProvider } from "../src/config/FactsProvider";

import Head from "next/head";

import 'rsuite/lib/styles/index.less';

const App = ({ Component, pageProps }) => {
    return (
        <FactsContextProvider>
            <div id="page">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <title>San Carlos fantástico | Proyecto turístico Jhoan Rodríguez</title>
                    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
                    <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
                    <meta name="theme-color" content="#000" />
                </Head>

                <Component {...pageProps} />
                        
                <style jsx global>{`
                    * {
                        font-size: 12px;
                        margin: 0;
                        box-sizing: border-box;
                    }
        
                    body {
                        margin: 0;
                        background-color: #121212;
                    }
        
                    #page {
                        min-height: 100vh;
                    }
        
                    h1 {
                        font-size: 1.6rem;
                        font-weight: 700;
                        font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
                        line-height: inherit;
                    }
        
                    h2 {
                        font-size: 1.4rem;
                        font-weight: 500;
                        line-height: inherit;
                    }
        
                    h3 {
                        font-size: 1.2rem;
                        font-weight: 500;
                        line-height: inherit;
                    }
        
                    h4 {
                        font-size: 1.1rem;
                        font-weight: 500;
                        line-height: inherit;
                    }
        
                    :root {
                        --vive-blue: #00a6ff;
                        --beach: #00D9C0;
                        --yellow: #F7F052;
                    }

                    .paper {
                        box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
                        background: white;
                        border-radius: .6rem;
                    }
                    
                    `}</style>
            </div>
        </FactsContextProvider>
    )
}

export default App;