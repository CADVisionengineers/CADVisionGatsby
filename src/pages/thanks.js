import React from 'react'
import NavbarTwo from '../components/Layouts/NavbarTwo';
import Footer from '../components/Layouts/Footer';
const thanks = () => {
  return (
    <React.Fragment>
        <NavbarTwo />
        <br>
        </br>
        <section className="our-loving-clients ptb-100 bg-f4f5fe">
                <div className="container">
                 
         <div className="row">
    <h1>Thank you!</h1>
    <p>This is a custom thank you page for form submissions</p>
    </div>
    </div>
    </section>
    <Footer/>
  </React.Fragment>
  )
}
export default thanks