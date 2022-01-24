import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarTwo';
import PageTitleArea from '../components/Common/PageTitleArea';
import ServicesStyleOne from '../components/Services/ServicesStyleOne';


import OurLovingClients from '../components/Common/OurLovingClients';
import Footer from '../components/Layouts/Footer';
import Seo from "../components/Seo"
class Services extends Component {
    render() {
        return (
            
            <React.Fragment>
                <Seo/>
                <NavbarThree />
                <PageTitleArea 
                    pageTitle="Services" 
                    pageDescription="Our Services" 
                />
                <ServicesStyleOne />
               
               
                <OurLovingClients />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services