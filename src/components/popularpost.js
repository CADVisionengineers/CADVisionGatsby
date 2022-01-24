import React from "react"
import { useStaticQuery, graphql,Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const popularpost = () => {

    const { Popularpost } = useStaticQuery(graphql`
    {
      Popularpost: allWpPost(limit: 10, sort: {order: DESC, fields: date}) {
        edges {
          node {
            databaseId
            slug
            uri
            title
            excerpt
            content
            date(formatString: "LL") 
            featuredImage {
              node {
              altText
                localFile {
                  ...Thumbnail1
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
 

 <div className="widget widget_spacle_posts_thumb">
                    <h3 className="widget-title">Popular Posts</h3>

                    {Popularpost.edges.map(({ node }) => (
        <article className="item" title={node.title} >
                        <Link to={node.uri} className="thumb">
                           
                            <GatsbyImage image={getImage(node.featuredImage?.node?.localFile)} 
                style={{width: '100%',height: 80 }}
                      
                        alt title={node.featuredImage?.node?.altText}
                    />
                           
                        </Link>

                        <div className="info">
                            <time>{node.date}</time>
                            <h4 className="title usmall">
                                <Link to={node.uri} dangerouslySetInnerHTML={{ __html: node.title }} />
                                
                            </h4>
                        </div>

                        <div className="clear"></div>
                    </article>
                      ))}
                </div>



     
    
                
             
            
           
 
 
 </>

  )
}

export default popularpost
