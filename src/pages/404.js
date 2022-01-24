import React from "react"
import Layout from "../components/Layouts/NavbarTwo"
import Footer from "../components/Layouts/Footer"
import {Link} from "gatsby"
import imag from "../assets/images/404.png"
const NotFound = () => (
  <React.Fragment>
  <Layout/>
  <section className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="error-content">
                                <img src={imag} alt="error" />

                                <h3>Page Not Found</h3>
                                <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

                                <Link href="/">
                                    <a className="default-btn">
                                        <i className='bx bx-rotate-left'></i>
                                        Return to Home
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    <Footer/>
    </React.Fragment>
)

export default NotFound;
