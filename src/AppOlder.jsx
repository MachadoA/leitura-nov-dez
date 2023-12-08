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
          {/* <Route path="/pdf/:file" render={() => null} /> */}
          {/* <Route path="/pdf/*" render={() => null} /> */}
        </Routes>
      </Container>
      <Footer pageUrl={window.location.href} />

      {/* Adicionando meta tags para ícones na tela inicial */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Lucas e Atos" />
      <link rel="apple-touch-icon" href="/reading-bible.png" />

      {/* Adicionando meta tag manifest para Android */}
      <link rel="manifest" href="/manifest.json" />
    </>
  );
}

export default App;
