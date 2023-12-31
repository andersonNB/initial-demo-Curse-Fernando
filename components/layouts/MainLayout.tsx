import Head from "next/head";
import styles from './MainLayout.module.css';
import React from 'react';
import { Navbar } from "../Navbar";

export const MainLayout = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className={styles.container} style={{ backgroundColor: '#E5CFF7' }}>
            <Head>
                <title>Course Fernando</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={`${styles.main}`}>
                {children}
            </main>
        </div>
    )
}
