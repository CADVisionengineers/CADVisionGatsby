import {useStaticQuery,graphql} from 'gatsby'

export const LeadershipQuery = ()=> {
const LeadershipQuery = useStaticQuery(graphql`
  {

    allWpLeadership(sort: {fields: dateGmt}) {
      edges {
        node {
          Leadership {
            description
            designation
            name
            picture {
              localFile {
                ...AvatarImage
                ino
                uid
              }
            }
          }
          id
        }
      }
    }
  }
`)
return LeadershipQuery;

}