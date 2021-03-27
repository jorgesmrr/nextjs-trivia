import React, { FC } from "react";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../store/store";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Head from "next/head";

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <div>
        <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
                rel="stylesheet"
            />
        </Head>

        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    </div>
);

export default App;
