import React, { Component } from 'react';
import ServicesListing from "../Services/ServicesListing"
class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="features-area pt-100 pb-70 bg-f4f6fc">
                
                <div className="container">
                    
                <div className="section-title">
                        <h2>Software Development Services</h2>
                    </div>
                    <div className="row">
                    <ServicesListing/>
                    </div>
              </div>
              </section>
               
           
        )
    }

}
export default ServicesStyleOne