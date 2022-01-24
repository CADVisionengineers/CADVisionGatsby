import React from "react"
import { Link } from "gatsby"
import PostMeta from "./PostMeta"
import Img from 'gatsby-image';
const PostPreview = ({ post, isLast }) => {
    return (
        <>

  

<div className="col-lg-6 col-md-6">
         <div className="single-blog-post">  
                <div className="post-image">
                 
                 

<Img fluid={post.featuredImage?.node?.localFile.childImageSharp.fluid}
         
         alt={post.featuredImage?.node?.altText}
     />
<div className="date"><i class="bx bx-calendar"></i> {post.date}</div>
                </div>
                <div className="post-content">
                    <h3>
                            <Link
                                to={post.uri}
                                dangerouslySetInnerHTML={{ __html: post.title }}
                            />
                    </h3>
                    <div className="post-info">
                        <PostMeta
                            title={post.title}
                            author={post.author}
                            date={post.date}
                        />
                        <div className="details-btn">
                            <Link to={post.uri}>
                                <a>
                                  <i className="bx bx-right-arrow-alt"></i>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>



        </>
    )
}

export default PostPreview
