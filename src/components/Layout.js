import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

import FooterMenusWidgets from "./FooterMenusWidgets"
import MenuModal from "./MenuModal"

const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
 
    <>
      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

      <main id="site-content" role="main">
        {children}
      </main>

      <FooterMenusWidgets />

      <Footer />
 </>
  )
}

export default Layout
