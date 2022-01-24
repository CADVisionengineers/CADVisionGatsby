import React from "react"
import Layout from "../components/Layouts/NavbarTwo"
import Footer from "../components/Layouts/Footer"
import imageurl from "../assets/images/Leadership.png"
import SEO from "../components/Seo"

import LeadershipListing from "../components/Leadership/LeadershipListing";


const Leadership = () => (
  <React.Fragment>
  <SEO title={"Highly Efficient Leaders Leading the CADVision Company"}  keywords={"Leadership"} description={"CADVision is led by highly skilled professionals who leave no stone unturned for the growth and success of the organization with their constant hard work."}  />
  <Layout/>
  <div className="page-banner">        

          
<img src={imageurl} />
       
            

</div>  

  <LeadershipListing/>
    <Footer/>
    </React.Fragment>
)

export default Leadership;
