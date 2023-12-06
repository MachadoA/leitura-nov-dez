import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './footer.module.css';

function Footer() {

  return (
    <footer className={styles.footer}>
      {/* <ul className={styles.socialList}>
        <li className={styles.item}><a href="#"> <FaFacebook /></a></li>
        <li className={styles.item}><a href="#"><FaInstagram /></a></li>
        <li className={styles.item}><a href="#"><FaWhatsapp /></a></li>
      </ul> */}
      <p className={styles.name}> Novembro/ Dezembro 2023</p>
    </footer>
  );
}

export default Footer;
