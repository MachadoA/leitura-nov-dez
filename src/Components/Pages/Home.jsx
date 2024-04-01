import React, { useEffect, useState } from 'react';
import bible from '../../img/bible-children-mobile.jpg';
import bibleDesktop from '../../img/bible-children-desktop.jpg';
import ButtonLink from '../Button/ButtonLink';

import styles from './Home.module.css'

export default function Home() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resizer', handleResize);
    return () => {
      window.removeEventListener('resizer', handleResize);
    };
  }, [])

  const imageUrl = width > 900 ? bibleDesktop : bible;

  return (
    <section className={styles.homeContainer}>
        <h1>Bem-vindo(a) ao teu plano de Leitura Lucas e Atos!</h1>
        <img className={styles.bible} src={imageUrl} alt='Children read the bible' />
        <div className={styles.btnSide}>
          <ButtonLink label='Leitura do dia' to="/Week" />
          <ButtonLink label='Ver plano' to="/Weeks" />
        </div>
    </section>
  )
}
