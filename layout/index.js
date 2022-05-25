import React from 'react'
import { Meta } from './Meta'
import { NavBar, Footer } from '../containers'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <NavBar />
      {children}
      <Footer />
    </>
  )
}

export { Layout }