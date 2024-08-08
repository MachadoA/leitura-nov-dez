import React from 'react'
import Header from '../layout/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../layout/Footer/Footer'

export default function RootLayout() {
  return (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
