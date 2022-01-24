import {useStaticQuery,graphql} from 'gatsby'

export const EmpListingQuery = ()=> {
const EmpListingQuery = useStaticQuery(graphql`
  {
    allWpEmployeespeak {
      edges {
        node {
          Employeespeaks {
            designation
            name
            testimonial
          }
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED)
                }
              }
              sourceUrl
              id
              altText
            }
          }
        }
      }
    }
  }
`)
return EmpListingQuery;

}