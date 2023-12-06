import React from 'react';
import styles from './Button.module.css'
import { Link } from 'react-router-dom';

export default function Button({onClick, label}) {
  return (
    <button className={styles.btn} onClick={onClick} >{label}</button>
  )
}
