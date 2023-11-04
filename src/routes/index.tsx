import { lazy } from 'react';

const UserList = lazy(() => import('@pages/UserList'));
const Profile = lazy(() => import('@pages/Profile'));

const coreRoutes = [
  {
    path: '/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/user-list',
    title: 'User',
    component: UserList,
  },
  // {
  //   path: "/data",
  //   children: [
  //     {
  //       path: "/test", 
  //       component: Profile,
  //     },
  //     {
  //       path: "login",
  //       component: Profile,
  //     },
  //   ],
  // },
  
];

const routes = [...coreRoutes];
console.log(routes, "routes routes");

export default routes;
