import React, { useEffect, useState } from 'react';
import styles from './Weeks.module.css';
import Button from '../Button/Button';


export default function Weeks() {
  const [weeksData, setWeeksData] = useState([]);

  useEffect(() => {
    const WeeksInformations = async () => {
      try {
        const response = await fetch('/data/lucasAtos.json');
        const data = await response.json();

        setWeeksData(data);

        const equalData = data.reduce((saveDatos, week) => {
          const { weekday } = week;
          if (!saveDatos[weekday]) {
            saveDatos[weekday] = week;
          }
          return saveDatos;
        }, {});
        const onlyElement = Object.values(equalData);

        setWeeksData(onlyElement);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    WeeksInformations();
  }, []);

  const handleViewPlan = (week) => {

    const link = document.createElement('a');
    link.href = `/pdf/${week}`;
    link.download = `${week}`; 
    link.click();
  };

  return (
    <main className={styles.container}>
      {weeksData.map((week) => (
        <section key={week.id} className={styles.weeksContainer}>
          <h2>Semana {week.weekday}</h2>
          <p className={styles.information}>{week.week}</p>
          <p className={styles.informationWeek}>{week.readWeek}</p>
          <Button label="ver plano" onClick={() => handleViewPlan(week.file)} />
        </section>
      ))}
    </main>
  );
}
