import {useStaticQuery,graphql} from 'gatsby'

export const PhotoListingQuery = ()=> {
const PhotoListingQuery = useStaticQuery(graphql`
  {  
    allWpPhoto {
      edges {
        node {
          featuredImage {
            node {
              localFile {
                ...ClientLogo
              }
              sourceUrl
              
            }
          }
        }
      }
    }
  }
`)
return PhotoListingQuery;

}