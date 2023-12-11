import React, { useEffect, useState } from 'react';
import style from './Popup.module.css'
import Button from '../Button/Button';

export default function Popup() {

    const [popupDisplayed, setpopupDisplayed] = useState(false)
    const [installPrompt, setInstallPrompt] = useState(null);

   useEffect(() => {
     const popupStored = localStorage.getItem('popupDisplayed')
     if(!popupStored) {
       setpopupDisplayed(true)
     }
   }, [])

   useEffect(() => {
    const handleInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPrompt(event);
      console.log('Evento beforeinstallprompt capturado:', event);
    };

    window.addEventListener('beforeinstallprompt', handleInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt);
    };
  }, []);

   const handleModalResponse = (answer) => {
    //console.log('handleModalResponse chamado com:', answer);
    if (answer === 'yes' && installPrompt) {
        setpopupDisplayed(false);
        localStorage.setItem('popupDisplayed', 'true');
        installPrompt.prompt();
        //console.log('clicou em sim')
    } else {
        setpopupDisplayed(false);
        localStorage.setItem('popupDisplayed', 'true');
        //console.log('clicou em não')
    }
   }


  return (
    popupDisplayed && (
      <div className={style.modal}>
        <div className={style.container}>
          <h2>Deseja adicionar à tela inicial?</h2>
          <div className={style.btns}>
            <Button label="Sim" onClick={() => { handleModalResponse('yes')}} />
            <Button label="Não" onClick={() => { handleModalResponse('no')}} />
          </div>
        </div>
      </div>
    )
  )
}
