import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { routes } from './config/routes';
import Layout from './components/commons/Layout/Layout';

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={route.component}
            />
          ))}
          <Route>404</Route>
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
