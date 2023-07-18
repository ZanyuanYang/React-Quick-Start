import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Error } from "./pages";

const routes = [
  { path: "/", element: <Home />, auth: false },
//   { path: "/dashboard", element: <Dashboard />, auth: true },
  { path: "*", element: <Error />, auth: false },
];

function App() {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
}

export default App;
