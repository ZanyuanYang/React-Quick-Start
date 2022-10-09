import React from 'react';
import {
	Routes,
	Route,
} from "react-router-dom";
import { Home, Error } from './pages';

function App() {
  return (
    <Routes>
		<Route exact path="/" element={<Home />}></Route>
		<Route path="*" element={<Error />}></Route>
	</Routes>
  );
}

export default App
