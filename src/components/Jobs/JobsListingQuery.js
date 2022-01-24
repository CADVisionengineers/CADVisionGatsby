import {useStaticQuery,graphql} from 'gatsby'

export const JobsListingQuery = ()=> {
const JobsListingQuery = useStaticQuery(graphql`
  {
    
    allWpJob {
      edges {
        node {
          uri
          title
          slug
          link
          id
          Jobs {
            title
            type
            experience
            qualification
            skills
            location
            jobDescription
            additionalQualificationDesired
            selectionProcess
            jobRole
          }
                  featuredImage {
                    node {
                      localFile {
                        childImageSharp {
                          fluid {
                            src
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
  }
`)
return JobsListingQuery;

}