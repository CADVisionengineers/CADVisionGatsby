import React, { Component } from 'react';
import ContactForm from './ContactForm';


class ContactFormArea extends Component {
    render() {
        return (
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="contact-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="contact-features-list">
                                    <h1>Please fill this form and we’ll get back to you.</h1 >


                                    <ul>
                                                    <li>
                                            <i className='bx bx-mail-send'></i>
                                            info@cadvisionengineers.com
                                        </li>
                                        <li>
            
                                            <i className='bx bx-map'></i>
                                            Location:  3rd Floor, High Spirits,
#19, Silicon Valley,<br></br>
Image Gardens Lane, Madhapur,<br></br>
Hyderabad - 500081, India.
                                        </li>

                                        <li>
                                            <i className='bx bxs-phone'></i>
                                            +91 40 4002 1014
                                        </li>
                                      
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                           
                                <ContactForm />
                            
                           
                                   </div>
                        </div>

                 
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactFormArea;
