import React from 'react'
import { Link } from 'react-router-dom';
import styles from './ButtonLink.module.css'


export default function ButtonLink({to, label}) {
  return (
    <Link className={styles.btnLink} to={to}>{label}</Link>
  )
}
