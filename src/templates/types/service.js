import React from 'react';
import Layout from '../../components/Layouts/NavbarTwo';
import { graphql, Link } from "gatsby"
import Footer from '../../components/Layouts/Footer';
import PageTitleArea from '../../components/Common/PageTitleArea';
import SEO from "../../components/Seo"
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';
const service = ({ data }) => {
    const { page } = data
    const { title, content, featuredImage, excerpt,seo} = page

    
    return (
        <>
            <React.Fragment>
                <Layout />
                <Helmet>
                  {seo.fullHead}
            <link rel="canonical" href={seo.canonical}/>
<title>{title}</title>
                </Helmet>
              
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
                <Footer />
            </React.Fragment>
        </>
    )
}

export const query = graphql`
query service ($id: String!) {
    page: wpService(id: { eq: $id }) {
      ...ServiceContent
    }
  }
`

export default service;
