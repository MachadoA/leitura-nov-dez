import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Week from './Components/Pages/Week';
import Weeks from './Components/Pages/Weeks';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Container from './Components/Pages/Container';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const containerClass = location.pathname === '/Weeks' ? 'height-auto' : 'min-height';

  return (
    <>
      <Header />
      <Container customClass={containerClass}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/Week' element={<Week />} />
          <Route path='/Weeks' element={<Weeks />} />
          <Route path="/pdf/:file" render={() => null} />
          <Route path="/pdf/*" render={() => null} />
        </Routes>
      </Container>
      <Footer pageUrl={window.location.href} />
    </>
  );
}

export default App;
