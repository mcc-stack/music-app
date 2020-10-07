import React from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';

function BasicLayout({ children }) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default BasicLayout;
