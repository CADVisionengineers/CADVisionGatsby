import React, { Component } from 'react';
import {Link} from 'gatsby';
import MailChimpForm from '../MailChimpForm';

class Footer extends Component {
    render() {
        let currentYear = new Date().getFullYear();
        return (
           
            <footer className="footer-area">
              
                <div className="container">
                    <div className="row">
                  
                  

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <br></br>
                                <h3>Company</h3>

                                <ul className="services-list">
                                    <li>
                                        <Link to="/overview">
                                            Overview
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/mission-values">
                                            Mission & Values

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/Leadership">
                                            Leadership

                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link to="/careers">
                                           Careers
                                        </Link>
                                    </li>
                                    <li>
<Link to="/contact">

 Contact Us

</Link>

                                    </li>
            <li>
                                        <Link to="http://support.cadvisionengineers.com/">
                                           Support
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <br></br>
                                <h3>CEAD</h3>

                                <ul className="support-list">
                                    <li>
                                        <Link to="/cead">
                                        Introduction
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cead/cdeds-methodology">
                                        CDEDS Methodology
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cead/customer-success-story">
                                          Success stories

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/cead/resources">
                                            Resources

                                        </Link>
                                    </li>
                                   
                                    
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <br></br>
                                <h3>Services</h3>

                                <ul className="support-list">
                                    <li>
                                        <Link to="/services/cad-customization-services">
                                        CAD Customization Services
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/custom-engineering-solutions">
                                        Custom Engineering Solutions

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services/knowledge-based-engineering">
                                            Knowledge Based Engineering


                                        </Link>
                                    </li>
                                    <li>
                                <Link to="/services/outsourced-product-development">
                                    Outsourced Software Product Development


                                        </Link>
                                    </li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6">
                            <div className="single-footer-widget">
                                <br></br>
                                <h3>Resources</h3>

                                <ul className="support-list">
                                    <li>
                                        <Link to="/blog">
                                            Blog

                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/case-studies">
                                            Case Studies


                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/videos">
                                           Videos


                                        </Link>
                                    </li>
                                    
                                    
                                    
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6" id="mail">
                            <div className="single-footer-widget">
                                <br></br>
                                <h3>Follow Us
</h3>

                               

                                <ul className="social">
                                    <li>
                                    <a href="https://www.facebook.com/CADVisionEngineers"  target="_blank" aria-label="Facebook">
                                           
                                                <i className="bx bxl-facebook"></i>
                                            
                                        </a>
                                    </li>
                                    <li>
                                    <a href="https://www.youtube.com/channel/UCg2Vg6nrYsxotwGu6bLd2Bw"  target="_blank" aria-label="Youtube">
                                      
                                                <i className="bx bxl-youtube"></i>
                                          
                                        </a>
                                    </li>
                                    <li>
                                    <a href="https://www.linkedin.com/company/cadvision-engineers-private-limited"  target="_blank" aria-label="Linkedin">
                                          
                                                <i className="bx bxl-linkedin"></i>
                                           
                                        </a>
                                    </li>
                                
                                
                                </ul>
                            </div>
                            
                        
                        <MailChimpForm/>
                        </div>
                    </div>
           <div class="copyright-area"><p class=" lleft">© CADVision Engineers. All Rights Reserved.</p><p class=" lright"><a href="/disclaimer"><p> Disclaimer    </p></a>&nbsp; &nbsp;<a href="/privacy-policy"><p>Privacy policy</p></a></p></div>
        
                </div>
            
            </footer>
        )      
    } 
}

export default Footer;
