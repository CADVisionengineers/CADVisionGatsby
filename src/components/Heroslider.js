import React from "react"
import { useStaticQuery, graphql,Link } from "gatsby"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Img from 'gatsby-image';
const Heroslider = () => {
  

    const { Heroslider } = useStaticQuery(graphql`
    {
        Heroslider:allWpHeroslider(limit: 10, sort: {order: DESC, fields: date}) {
          edges {
            node {
              id
              databaseId
              slug
              uri
              title
              date(formatString: "LL")
              featuredImage {
                node {
                  localFile {
                    childImageSharp {
                      fluid(
                        fit: COVER
                        maxHeight: 1900
                        pngQuality: 100
                        pngCompressionSpeed: 100
                        quality: 100
                      ) {
                        ...GatsbyImageSharpFluid_withWebp
                      }
                    }
                  }
                }
              }
              CustomUrl {
                url
              }
            }
          }
        }
          
    }
  `)

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
      <>
 



 <Carousel
 
        swipeable={false}
        arrows={true}
      
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        keyBoardControl={true}
        
        responsive={responsive}
    >        

{Heroslider.edges.map(({ node }) => (

           
	
<div key={node.id}>

    <Link to={node.CustomUrl?.url} >
    
    

                   
       <Img fluid={node.featuredImage?.node?.localFile.childImageSharp.fluid}
         
         
         alt="Cadvision"
     />

</Link>

</div>
   


	))}
  </Carousel>


                



     
    
                
             
            
           
 
 
 </>

  )
}

export default Heroslider


