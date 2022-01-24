import React, { Component } from 'react';
import {Link} from 'gatsby';

class TeamMember extends Component {
    render() {
        return (
            <section className="team-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Meet Our experts always ready to help you</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team5.jpg" alt="image" />

                                    <ul className="social">
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Alex Maxwel</h3>
                                    <span>CEO & Founder</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team6.jpg" alt="image" />
                                    
                                    <ul className="social">
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Sarah Taylor</h3>
                                    <span>UX/UI Designer</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team7.jpg" alt="image" />
                                    
                                    <ul className="social">
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Lee Munroe</h3>
                                    <span>Web Developer</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/team8.jpg" alt="image" />
                                    
                                    <ul className="social">
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/about/#">
                                                <a target="_blank">
                                                    <i className="bx bxl-instagram"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Calvin Klein</h3>
                                    <span>Support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamMember;