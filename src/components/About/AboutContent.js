import React, { Component } from 'react';

class AboutContent extends Component {
    render() {
        return (
            <section className="about-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <span className="sub-title">How we are Founded</span>
                                <h2>Take your business to the next level</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p>Every month they moved their money the old way – which wasted their time and money. So they invented a beautifully simple workaround that became a billion-dollar business.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <img src="/images/about-img.jpg" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;