import React, { useEffect, useRef } from 'react';
import style from './InstallApp.module.css'
import Button from '../Button/Button';

export default function InstallApp({showModal, setShowModal}) {
    let deferredPrompt;

    const deferredPromptRef = useRef();

    const handleModalResponse = (response) => {
        setShowModal(false);
    
        if (response === 'yes' && deferredPrompt) {
          deferredPrompt.prompt();
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('Usuário aceitou a instalação');
            } else {
              console.log('Usuário recusou a instalação');
            }
          });
        }
      };
    
      useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
          event.preventDefault();
          deferredPromptRef.current = event;
          setShowModal(true);
        };
    
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
        return () => {
          window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
      }, [setShowModal]);
    
      return (
        showModal && (
          <div className={style.modal}>
            <div className={style.container}>
              <h2>Deseja acrescentar ao ecrã principal?</h2>
              <div className={style.btns}>
                <Button label="Sim" onClick={() => handleModalResponse('yes')} />
                <Button label="Não" onClick={() => handleModalResponse('no')} />
              </div>
            </div>
          </div>
        )
      );
    }