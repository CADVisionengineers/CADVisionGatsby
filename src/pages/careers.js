import React from 'react';

import NavbarThree from '../components/Layouts/NavbarTwo';
import EmployeeFeedbackslider from "../components/Common/EmployeeFeedbackslider"

import Footer from '../components/Layouts/Footer';
import JobsListing from '../components/Jobs/JobsListing';
import { graphql,Link } from 'gatsby'
import PhotoSlider from '../components/photos/PhotoSlider';
import SEO from "../components/Seo"
import Img from 'gatsby-image';

const careers = ({ data }) => {
  

  return (
    <>
            <React.Fragment>
    <SEO title={"CADVision offers enriching career in software product development"}  keywords={"Careers"} description={"CADVision is based on trust and ownership. Working at Cadvision will provide you an opportunity to work with a highly efficient software product development team."}  />
 <NavbarThree />

    



                <div className="page-banner">      


          
  <Img fluid={data.wpPage.featuredImage?.node?.localFile.childImageSharp.fluid}
         
         
           alt="Cadvision Engineers Careers"
       />
       

</div>              
<section className="services-area ptb-100">
      <div className="container">
        <div className="row">
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.Careers.section1 }} />

        </div>
      </div>
      
    </section>

    <PhotoSlider/>
    <div className="container">
    <Link to="#job">
                            <a className="default-btn">
                                <i className="bx bxs-briefcase"></i> 
                                View all Our Jobs
                                <span></span>
                            </a>
                        </Link>
    </div> 
   
                <EmployeeFeedbackslider />
                <div className="container">
    <Link to="#job">
                            <a className="default-btn">
                                <i className="bx bxs-briefcase"></i> 
                                View all Our Jobs
                                <span></span>
                            </a>
                        </Link>
    </div> 
<section className="services-area ptb-100">
      <div className="container">
        <div className="row">
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.Careers.section2 }} />

        </div>
      </div>
    </section>

    <div id="job">
    <section  className="ptb-100">
                <div className="container">
                    <div className="section-title">

                        <h1 className="mb-2">
      Join us
    </h1>
    <p>
      Our Open Roles
    </p>
                    </div>
                    </div>
                <JobsListing />
                
                </section>
                </div>
             
                <Footer />
            </React.Fragment>
 </>
  )
         }
   

export const query = graphql`
{
  wpPage(title: {eq: "Careers"}) {
    Careers {
      section1
      section2
    }
    featuredImage {
      node {
        localFile {
          childImageSharp {
            fluid(fit: COVER, maxHeight: 300){
              ...GatsbyImageSharpFluid
            }
          }
        }
        sourceUrl 
      }
    }
  }
}
`
export default careers;
