import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quotes from './components/Quotes';
import NotFound from './components/notFound';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </>
);

export default App;
