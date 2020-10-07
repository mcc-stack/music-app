import React from 'react';
import { Link } from 'ice';

function DiscoverLayout({ children }) {
  return (
    <>
      <ul>
        <li>
          <Link to="/recommend">推荐</Link>
        </li>
        <li>
          <Link to="/rank">排行榜</Link>
        </li>
        <li>
          <Link to="/music_list">歌单</Link>
        </li>
        <li>
          <Link to="/host_station">主播电台</Link>
        </li>
        <li>
          <Link to="/singer">歌手</Link>
        </li>
        <li>
          <Link to="/new_disc">新碟上架</Link>
        </li>
      </ul>
      <div>{children}</div>
    </>
  );
}

export default DiscoverLayout;
