import React from 'react';
import Home from '../pages/home';
import Workouts from '../pages/Workouts';
import NoPage from '../pages/NoPage';
import NutritionPage from '../pages/NutritionPage';
import Faqs from '../pages/FAQS';

const ROUTES = [
    {
      path: '/',
      element: <Home />,
      index: true,
    },
    {
      path: '/workouts',
      element: <Workouts />,
    },
    {
      path: '*',
      element: <NoPage />
    },
    {
      path: '/nutrition',
      element: <NutritionPage />
    },
    {
      path: '/faqs',
      element: <Faqs />
    }
  ];
  
  export default ROUTES;
  