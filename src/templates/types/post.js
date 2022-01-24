import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/Layouts/NavbarTwo"
import SEO from "../../components/Seo"
import ContentTypePagination from "../../components/ContentTypePagination"
import AuthorBio from "../../components/AuthorBio"
import PostMeta from "../../components/PostMeta"
import PostCategories from "../../components/PostCategories"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Footer from "../../components/Layouts/Footer"
import BlogSidebar from '../../components/Blog/BlogSidebar';
import PageTitleArea from "../../components/Common/PageTitleArea"
import TagList from "../../components/TagList"
import Img from 'gatsby-image';
import { Helmet } from "react-helmet"


const post = ({ data }) => {
  const { nextPage, previousPage, page } = data
  const {
    title,
    content,
    featuredImage,
    categories,
    excerpt,
    databaseId,
    author,
    date,
    tags,
    seo,
    slug,
    singlePost,
  } = page
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME || 'cadvision',
    config: { identifier: slug, title },
  }
  const imageurl=singlePost?.postBannerBackgroundImage?.localFile.childImageSharp.fluid
    const alt=singlePost?.postBannerBackgroundImage?.altText
  return (
    <>
      <Layout />
      <Helmet>
                  {seo.fullHead}
            <link rel="canonical" href={seo.canonical}/>
<title>{title}</title>
                </Helmet>
              
                <SEO title={seo.title} keywords={seo.focuskw} description={seo.metaDesc}  />
    <div className="page-banner">      


          
    <Img fluid={imageurl} alt={singlePost?.postBannerBackgroundImage.altText}/>
       

</div>  

                 
      <section className="blog-details-area ptb-100">
        <div className="container">

  
   
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-desc">  
         

                <div className="article-content">

                  <div className="entry-meta">
                    <PostMeta title={title} author={author} date={date} />

                  </div>
                  
               <br></br>
                  
                  <div dangerouslySetInnerHTML={{ __html: content }} />

                </div>

                {/* Article footer */}
                <div className="article-footer">
                  <div className="article-tags">

                    <TagList tags={tags.nodes} />



                  </div>
                </div>

                {/* Post navigation */}
                <div className="post-navigation">

                  <ContentTypePagination
                    previousPage={previousPage}
                    nextPage={nextPage}
                    contentType={"Post"}
                  />
                </div>

                {/* Comments */}

              </div>

            </div>

            <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            
            </div>
          </div>
        </div>
      </section>




      <div className="section-inner">
      
        <AuthorBio author={author} />

       
     
      </div>
       
      <Footer />
    </>
  )
}

export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      ...PostContent
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      uri
        title
        date(formatString: "LL")
        featuredImage {
          node {
            localFile {
              ...AvatarImage
            }
          }
        }
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      uri
      title
      date(formatString: "LL")
      featuredImage {
        node {
          localFile {
            ...AvatarImage
          }
        }
      }
    }
  }
`

export default post;
