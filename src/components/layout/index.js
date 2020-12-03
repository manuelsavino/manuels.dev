import React from 'react';
import Nav from '../nav';
import Footer from '../footer';

export default function Layout({ children }) {
  return (
    <div className=''>
      <Nav />
      <main className='dark:bg-gray-800'>{children}</main>
      <Footer />
    </div>
  );
}
