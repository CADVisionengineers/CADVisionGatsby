
import {useStaticQuery,graphql} from 'gatsby'

export const BlogLisitingQuery = ()=> {
const BlogLisitingQuery = useStaticQuery(graphql`
  {  
    allWpPost {
        edges {
          node {
            content
            date(formatString: "LL")
            id
            link
            slug
            title
            
            uri
            featuredImage {
              node {
                localFile {
                  ...Thumbnail
                }
              }
            }
            author {
              node {
                name
                lastName
                firstName
                uri
                id
                slug
                
              }
            }
          }
        }
      }
  }
`)
return BlogLisitingQuery;

}