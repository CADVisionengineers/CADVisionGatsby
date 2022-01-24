import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarTwo';
import PageTitleArea from '../components/Common/PageTitleArea';
import JobFormArea from '../components/Contact/JobFormArea';
import Footer from '../components/Layouts/Footer';
import SEO from "../components/Seo"
class Jobapplication extends Component {
    render() {
        return (
            <React.Fragment>
            <SEO title={"All You Need To Know About Job Application at CADVision"}  keywords={"JobApplicationForm"} description={"If you are willing to apply for a job at CADVision, one of the most popular Knowledge Based Engineering Company, you must fill the essential job application form."}  />
                <NavbarThree />
                <PageTitleArea 
                    pageTitle="Job Application Form" 
                   
                />  
                <JobFormArea />
                
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default Jobapplication;
