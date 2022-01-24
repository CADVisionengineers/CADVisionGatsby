import React from 'react'
import {Link} from 'gatsby'
import{ ServicesListingQuery } from '../Services/ServicesListingQuery'
import { GatsbyImage, getImage,StaticImage } from "gatsby-plugin-image"

const  ServicesListing= () => {
 const getServicesList = () => {

    const ServicesList =[];
    const Services = ServicesListingQuery();
    Services.allWpService.edges.forEach((ServiceEdge) => {
        ServicesList.push({
          id:ServiceEdge.node.id,
            title:ServiceEdge.node.title,
            excerpt:ServiceEdge.node.excerpt,
            uri:ServiceEdge.node.uri,
            image:ServiceEdge.node.Icons?.icon?.localFile,




        });

    });
   return ServicesList;
 };

  const ServicesList =getServicesList();

  return(


<>
    
   
{ServicesList.map((service) =>(
   
                  <div  key={service.id} className="col-lg-6 col-md-6">
                <div className="features-box-one">

                  <div className="icon">
                <GatsbyImage image={getImage(service.image)}   alt="CadVision"/>
                                </div>

                      <h3>{service.title}</h3>
                    

                  
                     <div dangerouslySetInnerHTML={{ __html: service.excerpt}}/> 
                      <br></br>
                      <Link className="default-btn black-btn" to={service.uri} as="a" ><i className="bx bxs-arrow-to-right" style={{textAlign:'left'}}/>&nbsp;Read More<span></span></Link>

                       
                  </div>
                  
              </div>


             


))}

</>
  );
};

export default ServicesListing 