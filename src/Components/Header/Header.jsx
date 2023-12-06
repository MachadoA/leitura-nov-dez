import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import readingBible from '../../img/reading-bible.png'


export default function Header() {
  return (
    <header className={styles.header}>
        <nav className={styles.navbar}>
                <Link to="/"> <img className={styles.logo} src={readingBible} alt='bible home' /></Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">Home</Link></li>
                    <li className={styles.item}><Link to="/Week">Dia</Link></li>
                    <li className={styles.item}><Link to="/Weeks">Plano Completo</Link></li>
                </ul>
        </nav>
    </header>
    // <>
    //     <h1>nav</h1>
    // </>
  )
}
