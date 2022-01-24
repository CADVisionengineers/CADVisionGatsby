import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layouts/NavbarTwo"
import Seo from "../components/Seo"
import PageTitleArea from "../components/Common/PageTitleArea"
import Footer from '../components/Layouts/Footer';
import PostPreview from "../components/PostPreview"
import ArchivePagination from "../components/ArchivePagination"
import BlogSidebar from '../components/Blog/BlogSidebar';
const tags= ({ data, pageContext }) => {

  const {
    allWpPost: { nodes, pageInfo },
  } = data

  const { currentPage } = pageInfo

  const { archivePath, name, description } = pageContext


  return (
    <>
      <Layout />
      <Seo title="Home" description="Welcome to the Twenty Nineteen Theme." />
      <PageTitleArea
        pageTitle="Blog"
        pageDescription="News and Insights"
      />

<section className="blog-area ptb-100">
        <div className="container">
          <div className="row">
          <div className="col-lg-8 col-md-12">
               <div className="row">
            {nodes &&
              nodes.map((post, index) => {
                return (



                  <PostPreview
                    key={index}
                    post={post}
                    isLast={index === nodes.length - 1}
                  />




                )
              })}
     <div className="pagination-area">
            <ArchivePagination {...pageInfo} archivePath={archivePath} />

          </div>
</div>
</div>
         
<div className="col-lg-4 col-md-12">
              <BlogSidebar />
            
            </div>
          </div>
        </div>
        
      </section>





      <Footer />




    </>
  )
}
export const query = graphql`
query Tag($tagDatabaseId: Int!, $offset: Int!, $perPage: Int!) {
  allWpPost(limit:  $perPage, skip:  $offset
     sort: { fields: date, order: DESC }
     filter: {tags: {nodes: {elemMatch: {databaseId: {eq: $tagDatabaseId} }}}}) {
        nodes {
            ...PostPreviewContent
        }
        pageInfo {
            currentPage
            pageCount
        }
    }
}
`

export default tags