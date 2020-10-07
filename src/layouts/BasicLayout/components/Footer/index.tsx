import React from 'react';
import logo from '@/assets/img/footer.png';
import style from './index.module.scss';

function Footer() {
  return (
    <div>
      <img src={logo} className={style.footer} />
    </div>
  );
}

export default Footer;
