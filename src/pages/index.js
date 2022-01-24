import React from 'react';
import NavbarTwo from '../components/Layouts/NavbarTwo';

import ServicesStyleOne from '../components/Services/ServicesStyleOne';

import Heroslider from "../components/Heroslider"


import ClientsFeedbackSlider from '../components/Common/ClientsFeedbackSlider';
import SEO from "../components/Seo"

import OurLovingClients from '../components/Common/OurLovingClients';

import Footer from '../components/Layouts/Footer';
import { graphql} from 'gatsby'
import { GatsbyImage, getImage,StaticImage } from "gatsby-plugin-image"

const index = ({ data }) => (
    <React.Fragment>
        
<SEO title={"Leading Engineering and CAD Software Solutions Provider"}  keywords={"CAD software solutions,CAD Solutions"} description={"CADVision provides end to end services in developing CAD software solutions. Our CAD Solutions are designed and developed using product development approach."}  />
        <NavbarTwo />
   
     {/*   <MainBanner />*/}
        <Heroslider/>
      
      <div className="container">
        <div className="row">
          <div dangerouslySetInnerHTML={{ __html: data.wpPage?.content }} />

        </div>
      </div>
    
    <section className="about-area ptb-100">
      <div className="container">
      <div className="section-title">
            <h2>Our Product</h2>
          </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="about-image">

              <GatsbyImage image={getImage(data.wpPage.featuredImage?.node?.localFile)}


                alt='CADvision'
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="about-content">

              <div dangerouslySetInnerHTML={{ __html: data.wpPage?.Homepage?.section2 }} />
            </div>
          </div>

        </div>
      </div>
    </section>


        <ServicesStyleOne />



      

        <ClientsFeedbackSlider />

        {/*<FaqContent /> */}
        <section className="our-loving-clients ptb-100 bg-f4f5fe">
                <div className="container-fulid">
                    <div className="section-title">
                        <h2>Industries Served
</h2>
                    </div>
                  
                    <div className="clients-logo-list align-items-center ">
                        <div className="single-clients-logo">
                            <a>
                               
                                  <StaticImage src="../assets/images/clients/Industries-Automotive-CADVision-Engineers.png" alt="image" />
                                
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a>
                                  <StaticImage src="../assets/images/clients/Industries-Medical Devices-CADVision-Engineers.png" alt="image" />
                                
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a>
                               
                                  <StaticImage src="../assets/images/clients/Industries-Transportation-CADVision-Engineers.png" alt="image" />
                          
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a>
                               
                                  <StaticImage src="../assets/images/clients/Industries-Heavy-Engineering-CADVision-Engineers.png" alt="image" />
                               
                            </a>
                        </div>

                        <div className="single-clients-logo">
                            <a>
                   
                                  <StaticImage src="../assets/images/clients/Industries-Software-CADVision-Engineers.png" alt="image" />
                               
                            </a>
                        </div>
                        
                        <div className="single-clients-logo">
                            <a>
                   
                                  <StaticImage src="../assets/images/clients/Industries-Manufacturing-CADVision-Engineers.png" alt="image"/>
                               
                            </a>
                        </div>

                      
                      
                    </div>
                    
                </div>
            </section>
        <OurLovingClients />
              
        <Footer />
    </React.Fragment>
);



export default index;
export const query = graphql`
{
  wpPage(title: {eq: "Home"}) {
    Homepage {

      section2

    }
    featuredImage {
      node {
        localFile {
          ...AvatarImage
        }
      }
    }
    content
  }
}
`
