import React, { Component } from 'react';
import loadable from '@loadable/component';
import LogoList from "../../components/logoList"
const OwlCarousel = loadable(() => import('react-owl-carousel3'));


const options = {

  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 60,
  mergeFit:true,
navText:['<','>'],
  autoplayTimeout:5000,
  responsive: {
      0: {
          items: 2,
      },
      576: {
          items: 3,
      },
      768: {
          items: 4 ,
      },
      1200: {
          items: 6,
      }
  }
}



  
class OurLovingClients extends Component {
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


          <section className="partner-area ptb-100 bg-f8fbfa">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-12">
                            <div className="partner-title">
                                <h3>Our Clients:</h3>
                            </div>
                        </div>

                        <div className="col-lg-9 col-md-12">
                            {this.state.display ? <OwlCarousel 
                                className="partner-slides owl-carousel owl-theme"
                                    {...options}
                                > 
                          
                                 <LogoList/>
                                

                  </OwlCarousel> : ''}
                        </div>
                    </div>
            <br></br>
                    <p style={{textAlign:'Right',fontSize:10}}>All company and product names or logos mentioned herein may be trademarks of their respective companies or owners.
</p>
                </div>
            </section>
         
         
        )
    }
  }
        

  
export default OurLovingClients;
