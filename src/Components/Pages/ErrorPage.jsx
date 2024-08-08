import React from 'react'
import { useRouteError } from 'react-router-dom'
import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';

import styles from './ErrorPage.module.css';

export function ErrorPage() {
  const error = useRouteError();

  let title = 'Ocorreu um erro!';
  let message = 'Há algo errado por aqui!'

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Página não encontrada';
    message = 'Não foi possível encontrar o recurso ou a página.';
  }
  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
      <Footer />
    </>
  )
}
