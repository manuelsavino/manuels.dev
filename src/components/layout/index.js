import React, { useEffect } from 'react';
import Nav from '../nav';
import Footer from '../footer';
import { initGA, logPageView } from '../../utils/analytics';
import Head from 'next/head';

export default function Layout({ children }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <div className=''>
      <Head>
        <title>manuels.dev</title>
      </Head>
      <Nav />
      <main className='dark:bg-gray-800'>{children}</main>
      <Footer />
    </div>
  );
}
