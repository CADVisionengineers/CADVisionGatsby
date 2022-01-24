import {useStaticQuery,graphql} from 'gatsby'

export const ClientListingQuery = ()=> {
const ClientListingQuery = useStaticQuery(graphql`
  {

    allWpTestimonial(limit: 10) {
        edges {
          node {
            id
            Testimonial {
              clientname
              comments
              company
              designation
              
            }
          }
        }
      }
  }
`)
return ClientListingQuery;

}