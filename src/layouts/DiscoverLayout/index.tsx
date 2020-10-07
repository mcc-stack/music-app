import React from 'react';
import { Link } from 'ice';
import style from './index.module.scss';

function DiscoverLayout({ children }) {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.discover_nav}>
          <ul className={style.discover_menu}>
            <li className={style.discover_menu_item}>
              <Link to="/recommend">推荐</Link>
            </li>
            <li className={style.discover_menu_item}>
              <Link to="/rank">排行榜</Link>
            </li>
            <li className={style.discover_menu_item}>
              <Link to="/music_list">歌单</Link>
            </li>
            <li className={style.discover_menu_item}>
              <Link to="/host_station">主播电台</Link>
            </li>
            <li className={style.discover_menu_item}>
              <Link to="/singer">歌手</Link>
            </li>
            <li className={style.discover_menu_item}>
              <Link to="/new_disc">新碟上架</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </>
  );
}

export default DiscoverLayout;
