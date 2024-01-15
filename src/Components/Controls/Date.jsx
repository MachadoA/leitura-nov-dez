import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';

import style from './Date.module.css';
export default function DateNow() {
  const [currentDate, setCurrentDate] = useState('');
  const [sentence, setSentence] = useState(null);

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const weekday = now.toLocaleString('default', { weekday: 'long' });
      const day = now.getDate();
      const month = now.toLocaleString('default', { month: 'long' });
      const year = now.getFullYear();

      setCurrentDate(`${weekday}, ${day} de ${month} de ${year}`);
    };

    const intervalId = setInterval(updateDate, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const calculateId = () => {
      const startDate = new Date('2023-11-12');
      const currentDate = new Date();
      const diffInDays = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24));
      const calculatedId = 0 + diffInDays;


      return calculatedId;
    };

    const fetchSentence = async () => {
      try {
        const response = await fetch('/data/lucasAtos.json');
        const data = await response.json(); 
        if (data && Array.isArray(data) && data.length > 0) {        
          const calculatedId = calculateId();
          const setenceToday = data.find((item) => item.id === calculatedId);

          setSentence(setenceToday || null);
        }
        else {
          console.error('O JSON não contém um array válido ou está vazio.');
        }
      } catch (error) {
        console.error('Erro ao buscar frases:', error);
      }
    };

    fetchSentence();
  }, []);

  const handleViewPlan = (weekFile) => {
    const link = document.createElement('a');
    link.href = `/pdf/${weekFile}`;
    link.download = `${weekFile}`; 
    link.click();
  };

  return (
    <>
    {sentence ? (
    <section key={sentence.id} className={style.weekContainer}>
        <article className={style.articles} key={sentence.id}>
          <h2>Semana atual: {sentence.week}</h2>
          <p>Leituras: {sentence.readWeek}</p>
        </article>

        <article className={style.main}>
          <p> Dia {sentence.date}</p>
          <p className={style.date}>{currentDate}</p>
          <p>Leitura do Dia: {sentence.read || 'Plano de leitura encerrado!'}</p>
        </article>

        <article className={style.articles}>
          <h2>Direcionamento para o resumo:</h2>
          <p className={style.question}>{sentence.question}</p>
          <Button label="baixar" onClick={() => handleViewPlan(sentence.file)}/>          
        </article>
    </section>
    ) : (
      <section className={style.weekContainer}>
        <article className={style.main}>
          <p className={style.date}>{currentDate}</p>
          <p>Plano de leitura encerrado em 31 de dezembro de 2023.</p>
        </article>
      </section>
    )
  }
  </>
  );
}
