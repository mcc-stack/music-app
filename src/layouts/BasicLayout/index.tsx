import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';

function BasicLayout({ children }) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default BasicLayout;
