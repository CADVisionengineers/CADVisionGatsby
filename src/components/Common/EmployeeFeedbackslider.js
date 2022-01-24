import React, { Component } from 'react';
import loadable from '@loadable/component';
const OwlCarousel = loadable(() => import('react-owl-carousel3'));
import EmpListing from "../../components/EmpListing"
const options = {
    loop:true,
    mergeFit:true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout:3000,
    margin: 30,
   
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 1,
        },
        1024: {
            items: 
            1,
        },
        1200: {
            items: 1,
        }
    }
}

class EmployeeFeedbackslider extends Component {

    _isMounted = false;
    state = {
        display:false
    }
    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        return (
            <section className="feedback-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Employee Speaks  <span>CADVision</span></h2>
                    </div>

                    {this.state.display ? <OwlCarousel 
                    className="feedback-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <EmpListing/>
                                </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}


export default EmployeeFeedbackslider;


