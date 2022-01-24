import {useStaticQuery,graphql} from 'gatsby'

export const ServicesListingQuery = ()=> {
const ServicesListingQuery = useStaticQuery(graphql`
  {
    allWpService {
      edges {
        node {
          id
          title
          uri
          slug
          excerpt
          content
          Icons {
            icon {
              localFile {
                ...AvatarImage
              }
            }
          }
        }
      }
    }
    }
`)
return ServicesListingQuery;

} 