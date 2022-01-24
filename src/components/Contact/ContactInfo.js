import React, { Component } from 'react';
import {Link} from 'gatsby';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info">
                <div className="contact-info-content">
                    <h3>Contact us by Phone Number or Email Address</h3>

                    <h2>
                        <span className="number"> +91 40 4002 1014</span>
                        <span className="or">OR</span>
                        <span className="email">Info@cadvisionengineers.com</span>
                    </h2>

                  </div>
            </div>
        );
    }
}

export default ContactInfo;