import React from 'react';
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
import BlogDetails from '../components/Blogs/BlogDetails';
import BlogSection from '../components/Blogs/BlogSection';

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
      path: '/blog/:category',
      element: <CategoryBlogs />
    },
    {
      path: '/blog/:blogTitle',
      element: <BlogDetails />
    },
    {
      path: '/blog',
      element: <BlogSection />
    },
    {
      path: '/signup',
      element: <SignUpPage />
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/dashboard',
      element: <Dashboardw />
    },
    {
      path: '/dashboard',
      element: <ProtectedRoute />
    }
  ];
  
  export default ROUTES;
  