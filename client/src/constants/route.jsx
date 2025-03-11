import React, { Children } from 'react';
import Home from '../pages/home';
import Workouts from '../pages/Workouts';
import NoPage from '../pages/NoPage';
import NutritionPage from '../pages/NutritionPage';
import Faqs from '../pages/FAQS';
import Blog from '../pages/Blog';
import SignUpPage from '../pages/SignUpPage';
import LoginPage from '../pages/LoginPage';
import Dashboardw from '../pages/DashBoard';
import ProtectedRoute from '../components/Dashboard/DashboardProtectedroute';
import CategoryBlogs from '../components/Blogs/CategoryBlogs';
import FullBlog from '../components/Blogs/FullBlog';
import Terms from '../components/TermsOfService/Terms';

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
    path: '/nutrition',
    element: <NutritionPage />,
  },
  {
    path: '/faqs',
    element: <Faqs />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/blog/category/:category', // Category page
    element: <CategoryBlogs />,
  },
  {
    path: '/blog/:category/:blogTitle', // Blog details page
    element: <FullBlog />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute><Dashboardw /></ProtectedRoute>,
  },
  {
    path: '*',
    element: <NoPage />, // Catch-all for non-existent pages
  },
  {
    path: '/terms',
    element: <Terms />,
  }
];

export default ROUTES;
