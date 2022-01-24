import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/Layouts/NavbarTwo"
import Seo from "../components/Seo"
import PageTitleArea from "../components/Common/PageTitleArea"
import Footer from '../components/Layouts/Footer';
import PostPreview from "../components/PostPreview"
import ArchivePagination from "../components/ArchivePagination"
import BlogSidebar from '../components/Blog/BlogSidebar';
const Archive = (props) => {

  const {
    data: {
      allWpPost: { nodes, pageInfo },
    },
    pageContext: { archiveType, archivename, archivePath, archiveName },
  } = props

  return (
    <>
      <Layout />
      <Seo/>
      <PageTitleArea
        pageTitle="Blog"
        pageDescription="News and Insights"
        bg="url(https://e-scholars.com/blog/wp-content/uploads/2021/02/company_overview.jpg)"
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


      <br></br>

      <Footer />




    </>
  )
}

export const query = graphql`
  query ArchivePage(
    $offset: Int!
    $perPage: Int!
    $userDatabaseId: Int
    $categoryDatabaseId: Int
  ) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: {
        author: {
          node: { databaseId: { eq: $userDatabaseId } }}
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        ...PostPreviewContent
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      }
    }
  }
`

export default Archive
