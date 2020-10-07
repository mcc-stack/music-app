import React from 'react';
import { Link } from 'ice';
import Logo from './components/Logo';
import Avarter from './components/Avarter';
import style from './index.module.scss';

function Nav() {
  return (
    <div className={style.top_bar}>
      <div className={style.nav}>
        <Logo />
        <ul className={style.menu}>
          <li className={style.menu_item}>
            <Link to="/discover/recommend" className={style.menu_link}>
              <span>发现音乐</span>
            </Link>
          </li>
          <li className={style.menu_item}>
            <Link to="/my" className={style.menu_link}>
              <span> 我的音乐</span>
            </Link>
          </li>
          <li className={style.menu_item}>
            <Link to="/friends" className={style.menu_link}>
              <span>朋友</span>
            </Link>
          </li>
          <li className={style.menu_item}>
            <Link to="/shop" className={style.menu_link}>
              <span>商城</span>
            </Link>
          </li>
          <li className={style.menu_item}>
            <Link to="/musician" className={style.menu_link}>
              <span> 音乐人</span>
            </Link>
          </li>
          <li className={style.menu_item}>
            <Link to="/download" className={style.menu_link}>
              <span className={style.hot}>下载客户端</span>
            </Link>
          </li>
        </ul>
        <div className={style.nav_input}>
          <input placeholder="音乐/视频/电台/用户" />
        </div>
        <div className={style.creator_center}>
          <a>创作者中心</a>
        </div>
        <Avarter />
      </div>
    </div>
  );
}

export default Nav;
