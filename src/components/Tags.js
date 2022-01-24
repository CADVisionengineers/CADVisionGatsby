import React from "react"
import { useStaticQuery, graphql,Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const Tags = () => {

    const { Tags } = useStaticQuery(graphql`
    {
        Tags: allWpTag {
            edges {
              node {
                name
                link
                id
                count
                slug
                uri
              }
            }
          }
    
          
    }
  `)

  

  return (
      <>
 

 
 
             {/* Tags */}
             <div className="widget widget_tag_cloud">
                    <h3 className="widget-title">Tags</h3>

                    <div className="tagcloud">
                    {Tags.edges.map(({ node }) => (
                        <Link to={node.uri} as="a">
                            {node.name}<span className="tag-link-count"></span>
                        </Link>

))}
                   </div>
                </div>




     
    
                
             
            
           
 
 
 </>

  )
}

export default Tags


