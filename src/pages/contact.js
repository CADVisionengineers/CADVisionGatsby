import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarTwo';
import PageTitleArea from '../components/Common/PageTitleArea';
import ContactFormArea from '../components/Contact/ContactFormArea';
import SEO from "../components/Seo"
import Footer from '../components/Layouts/Footer';
import contact from "../assets/images/ContactUs.png"
class Contact extends Component {
    render() {
        return (
            <React.Fragment>
           <SEO title={"Among CAD Software Development Companies"}  keywords={"CAD software development companies,CAD development companies"} description={"We are among the leading CAD software development companies offering wide range of services. If you are looking for CAD development companies, contact us today."}  />
                <NavbarThree />
                <div className="page-banner">        

          
       <img src={contact} />
              
    
           

       </div> 
      
                <ContactFormArea />
                <h1>CAD software development companies</h1>
                <div className="responsive-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15224.710790833335!2d78.385822!3d17.451207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2cc7e74de7d9d160!2sCADVision%20Engineers%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1613683402321!5m2!1sen!2sin" width={1200} height="100%"  allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
              
                  
                <Footer />
            </React.Fragment>
        );
    }
}

export default Contact;
