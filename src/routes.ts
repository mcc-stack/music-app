import BasicLayout from '@/layouts/BasicLayout';
import MyMusic from '@/pages/Home/MyMusic';
import Friends from '@/pages/Home/Friends';
import Shop from '@/pages/Home/Shop';
import Musician from '@/pages/Home/Musician';
import DownLoad from '@/pages/Home/Download';
// import HomeNotFound from '@/pages/Home/404';

import DiscoverLayout from './layouts/DiscoverLayout';
import Recommend from '@/pages/DiscoverMusic/Recommend';
import Rank from '@/pages/DiscoverMusic/Rank';
import MusicList from '@/pages/DiscoverMusic/MusicList';
import HostStation from '@/pages/DiscoverMusic/HostStation';
import Singer from '@/pages/DiscoverMusic/Singer';
import NewDisc from '@/pages/DiscoverMusic/NewDisc';
// import DisCoverNotFound from '@/pages/Home/DiscoverMusic/404';

const routerConfig = [
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/discover',
        component: DiscoverLayout,
        children: [
          {
            path: '/recommend',
            component: Recommend
          },
          {
            path: '/rank',
            component: Rank
          },
          {
            path: '/music_list',
            component: MusicList
          },
          {
            path: '/host_station',
            component: HostStation
          },
          {
            path: '/singer',
            component: Singer
          },
          {
            path: '/new_disc',
            component: NewDisc
          }
        ]
      },
      {
        path: '/my',
        component: MyMusic
      },
      {
        path: '/friends',
        component: Friends
      },
      {
        path: '/shop',
        component: Shop
      },
      {
        path: '/musician',
        component: Musician
      },
      {
        path: '/download',
        component: DownLoad
      }
    ]
  }
];

export default routerConfig;
