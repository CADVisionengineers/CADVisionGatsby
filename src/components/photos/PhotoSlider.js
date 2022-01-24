    import React, { Component } from 'react';
    import loadable from '@loadable/component';

    
    import PhotoLisiting from "../photos/PhotoLisiting"
   
    

    class PhotoSlider extends Component {

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
                    <div className="container-fulid">
                        <div className="section-title">
                            <h2>Gallery  <br></br><span>CADVision</span></h2>
                        </div>

                     
                            <PhotoLisiting/>
                                  
                    </div>
                    
                </section>
            );
        }
    }


    export default PhotoSlider;


