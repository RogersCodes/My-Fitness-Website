import React from 'react';
import { createBrowserRouter, Route, createRoutesFromElements } from 'react-router-dom';
import ROUTES from './route';

const router = createBrowserRouter(
  createRoutesFromElements(
    ROUTES.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} index={route.index} />
    ))
  )
);


export default router;
