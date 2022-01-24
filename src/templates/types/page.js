import React, { Component } from 'react';
import Layout from '../../components/Layouts/NavbarTwo';
import { graphql,Link } from "gatsby"
import Footer from '../../components/Layouts/Footer';
import SEO from "../../components/Seo"

import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
const page = ({ data }) => {
  const { page } = data
  const { title, content, featuredImage, excerpt, databaseId ,seo} = page

  return (
    <>
    <React.Fragment>
        <Helmet>
                  {seo.fullHead}
            <link rel="canonical" href={seo.canonical}/>

                </Helmet>
    <Layout/>


              
                <SEO title={seo.title} keywords={seo.focuskw} description={seo.metaDesc}  />
 
     
    <div className="page-banner">      


          
       <Img fluid={featuredImage?.node?.localFile.childImageSharp.fluid}
         
         
           alt={featuredImage?.node?.altText}
       />
              
    
       </div>  

  

              
      <div class="container">
      <div className="service-details ptb-100">
                <div className="container">
                   

                    <div className="service-details-content">
                    <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
                        
        
                          </div>
                </div>
            </div>

            </div>
                 
 <Footer/>
 </React.Fragment>
 </>
  )
}

export const query = graphql`
  query page($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPage(id: { eq: $id }) {
      ...PageContent
    }
    nextPage: wpPage(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPage(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`

export default page;
