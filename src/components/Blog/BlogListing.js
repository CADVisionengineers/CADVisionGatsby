import React from 'react'
import { Link } from 'gatsby'
import { BlogLisitingQuery } from '../Blog/BlogLisitingQuery'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BlogLisiting = () => {
    const getBlogList = () => {

        const BlogList = [];
        const Blogs = BlogLisitingQuery();
        Blogs.allWpPost.edges.forEach((BlogEdge) => {
            BlogList.push({
                uri: BlogEdge.node.uri,
                date: BlogEdge.node.date,
                title: BlogEdge.node.title,
                excerpt: BlogEdge.node.excerpt,
                content: BlogEdge.node.content,
                featuredImage: BlogEdge.node.featuredImage?.node?.localFile,

                author: BlogEdge.node.author.node.name,



            });

        });
        return BlogList;
    };

    const BlogList = getBlogList();

    return (

        <>

            {BlogList.map((post) => (

                <>




                    <div className="col-lg-6 col-md-6">

                        <div className="single-blog-post">

                            <div className="post-image">

                                <GatsbyImage image={getImage(post.featuredImage)}
                                    style={{ width: '100%', height:'auto', objectfit: "contain" }}


                                    alt title={post.title}


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
                                <i className='bx bx-user'></i>
                                &nbsp;
                                <Link to={post.uri} as="a" className="MetaUser"> 
                                  {post.author}
                                    </Link>
                                    &nbsp;   &nbsp;
                         
                                    <i className='bx bx-time'></i> 
                                    &nbsp;
                                                <Link to={post.uri} as="a" className="metadate">     {post. date}</Link>
                                        
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





            ))}

        </>
    );
};

export default BlogLisiting