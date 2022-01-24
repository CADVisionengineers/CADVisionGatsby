import React, { Component } from 'react';

class SubscribeStyleTwo extends Component {
    render() {
        return (
            <section className="subscribe-area bg-f4f5fe">
                <div className="container">
                    <div className="subscribe-content">
                        <h2>We always try to be the best support to you as possible</h2>

                        <form className="newsletter-form">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-8">
                                    <input type="email" className="input-newsletter" placeholder="hello@spacle.com" name="email" required />
                                </div>

                                <div className="col-lg-4 col-md-4">
                                    <button type="submit">
                                        <i className="bx bxs-hot"></i> 
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Shape Images */}
                        <div className="shape14">
                            <img src="/images/shape/shape13.png" alt="image" />
                        </div>
                        <div className="shape15">
                            <img src="/images/shape/shape14.png" alt="image" />
                        </div>
                        <div className="shape16">
                            <img src="/images/shape/shape15.png" alt="image" />
                        </div>
                        <div className="shape17">
                            <img src="/images/shape/shape16.png" alt="image" />
                        </div>
                        <div className="shape18">
                            <img src="/images/shape/shape17.png" alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SubscribeStyleTwo;