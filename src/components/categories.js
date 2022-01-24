import React from "react"
import { useStaticQuery, graphql,Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const categories = () => {

    const { categories } = useStaticQuery(graphql`
    {
        categories:allWpCategory {
            edges {
              node {
                id
                name
                uri
                slug
                count
              }
            }
          }
    
          
    }
  `)

  

  return (
      <>
 

 
                <div className="widget widget_categories">
                    <h3 className="widget-title">Categories</h3>

                    <ul>
                    {categories.edges.map(({ node }) => (
                        <li>
                            <Link href={node.uri}>
                                <a>{node.name} <span className="post-count">{node.count}</span></a>
                            </Link>
                        </li>
                     ))}
                          </ul>
                </div>




     
    
                
             
            
           
 
 
 </>

  )
}

export default categories


