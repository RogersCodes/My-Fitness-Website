import React from 'react';
import Home from '../pages/home';
import Workouts from '../pages/Workouts';
import NoPage from '../pages/NoPage';
import NutritionPage from '../pages/NutritionPage';
import Faqs from '../pages/FAQS';
import Blog from '../pages/Blog';
import SignUpPage from '../pages/SignUpPage';

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
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/signup',
      element: <SignUpPage />
    }
  ];
  
  export default ROUTES;
  