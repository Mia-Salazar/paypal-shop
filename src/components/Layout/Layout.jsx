import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main class="main">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;