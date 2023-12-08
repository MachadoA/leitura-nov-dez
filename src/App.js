import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Week from './Components/Pages/Week';
import Weeks from './Components/Pages/Weeks';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Container from './Components/Pages/Container';
import InstallApp from './Components/Controls/InstallApp';

import './App.css';

function App() {
  const [showModal, setShowModal] = useState(true);

  return (
    <BrowserRouter>
      <>
        <div>
        <Header />
        <AppContainer />
        <Footer pageUrl={window.location.href} />
        </div>
        <InstallApp showModal={showModal} setShowModal={setShowModal}/>
      </>  
    </BrowserRouter>
  );
}

function AppContainer() {
  const location = useLocation();
  const containerClass = location.pathname === '/Weeks' ? 'height-auto' : 'min-height';

  return (
    <Container customClass={containerClass}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Week' element={<Week />} />
        <Route path='/Weeks' element={<Weeks />} />
        {/* <Route path="/pdf/:file" render={() => null} /> */}
        {/* <Route path="/pdf/*" render={() => null} /> */}
      </Routes>
    </Container>
  );
}


export default App;
