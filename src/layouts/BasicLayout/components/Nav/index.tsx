import React from 'react';
import { Link } from 'ice';
import Logo from './components/Logo';
import Avarter from './components/Avarter';
function Nav() {
  return (
    <div>
      <Logo />
      <Link to="/discover">发现音乐</Link>
      <Link to="/my">我的音乐</Link>
      <Link to="/friends">朋友</Link>
      <Link to="/shop">商城</Link>
      <Link to="/musician">音乐人</Link>
      <Link to="/download">下载客户端</Link>
      <Avarter />
    </div>
  );
}

export default Nav;
