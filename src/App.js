// import React from 'react';

// Styles
import { GlobalStyle } from "./GlobalStyle";

// Rounting
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Header />
    <Routes>
      <Route path={`${process.env.PUBLIC_URL}`} element={<Home />} />
      <Route path={`${process.env.PUBLIC_URL}/:movieId`} element={<Movie />} />
      <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
