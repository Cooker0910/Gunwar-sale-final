import React from 'react';

const Home = React.lazy(() => import('../pages/home/Home'));

const frontRoutes = [
  { path: '/', name: 'Landing Page', component: Home, exact: true },
];

const innerRoutes = [
];

export { frontRoutes, innerRoutes };