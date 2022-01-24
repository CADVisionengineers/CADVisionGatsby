import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarTwo';
import JobTitleArea from '../components/Common/JobTitleArea';

import FreeTrialArea from '../components/Common/FreeTrialArea';
import Footer from '../components/Layouts/Footer';
import JobsListing from '../components/Jobs/JobsListing';
import Seo from "../components/Seo"
class Jobs extends Component {
    render() {
        return (
            <>
            <React.Fragment>
                                     
    <NavbarThree />

   
               <br></br>
               
               <br></br>
                <JobTitleArea 
                   
                />
                <section className="ptb-100">
                <div className="container">
                    <div className="section-title">

                        <h1 className="mb-2">
      Join us
    </h1>
    <p>
      Our Open Roles
    </p>
                    </div>
                    </div>
                <JobsListing />
                
                </section>
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
</>
        );
    }
}

export default Jobs;
