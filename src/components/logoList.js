import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const logoList = () => {
   
    
  const { logoList } = useStaticQuery(graphql`
  {
   
    logoList:  allWpClientlogo {
      edges {
        node {
          id
          Clientlogos {
            logo {
              sourceUrl
              localFile {
                childImageSharp {
                  fixed(width: 100, height: 90, fit: CONTAIN, quality: 100, background: "white") {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`)
  return (
      <>
    {logoList.edges.map(({ node }) => (
       <div key={node.id}>



    
  <Img fixed={node.Clientlogos?.logo?.localFile?.childImageSharp?.fixed}
      
      
         
         alt="CadVision"
     />




</div>



))}
</>
  );
};




export default logoList;


