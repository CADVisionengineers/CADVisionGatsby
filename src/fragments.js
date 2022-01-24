import { graphql } from "gatsby"

export const fragments = graphql`


fragment AvatarImage on File {
  childImageSharp {
    
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED ,formats: [WEBP])
    
  }
}


fragment ClientLogo on File {
  childImageSharp {
    
      gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED ,formats: [WEBP])
    
  }
}



fragment HeroImage on File {
  childImageSharp {
    gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH, formats: [WEBP])
  }
}



fragment Thumbnail on File {
  childImageSharp {
    gatsbyImageData(width: 1300, placeholder: BLURRED, layout: CONSTRAINED, formats: [WEBP])
  }
}

fragment Thumbnail1 on File {
  childImageSharp {
    gatsbyImageData(width:150, placeholder: BLURRED, layout: FIXED, formats: [WEBP])
  }
}
  fragment PostPreviewContent on WpPost {
    slug
    uri
    title
    databaseId
    excerpt
    date(formatString: "LL")
    featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            fluid(fit: COVER, maxHeight: 300){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    seo {
      title
      twitterDescription
      twitterTitle
      readingTime
      metaKeywords
      focuskw
      metaDesc
      cornerstone
      canonical
      opengraphTitle
      opengraphUrl
    }
    author {
      node {
        name
        firstName
        lastName
        uri
      }
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
    tags {
      nodes {
        name
        link
        uri
        posts {
          nodes {
            slug
            uri
          }
        }
      }
    }
  }

  fragment PostContent on WpPost {
    id
    slug
    title
    content
    date(formatString: "LL")
    excerpt
    featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            fluid(fit: COVER, maxHeight: 300){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    seo {
      title
      twitterDescription
      twitterTitle
      readingTime
      metaKeywords
      focuskw
      metaDesc
      cornerstone
      canonical
      opengraphTitle
      opengraphUrl
    }
    singlePost {
      postBannerBackgroundImage {
        sourceUrl
        localFile {
          childImageSharp {
            fluid(fit: COVER, maxHeight: 300){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    author {
      node {
        name
        firstName
        lastName
        uri
        description
        avatar {
          url
          width
         
          
        }
      }
    }
    categories {
      nodes {
        name
        slug
        uri
      }
    }
    tags {
      nodes {
        name
        link
        uri
        posts {
          nodes {
            slug
            uri
          }
        }
      }
    }
  }

  fragment PageContent on WpPage {
    title
    content
    databaseId
    featuredImage {
      node {
        altText
        sourceUrl
        localFile {
          childImageSharp {
            fluid(fit: COVER, maxHeight: 300){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    seo {
      fullHead
      focuskw
      metaDesc
      metaKeywords
      canonical
      cornerstone
      title
      twitterTitle
      twitterDescription
      readingTime
      opengraphUrl
      opengraphTitle
      opengraphSiteName
    }
    
  }

  fragment ServiceContent on WpService {
    slug
    link
    uri
    title
    excerpt
    content
    databaseId
    featuredImage {
      node {
        altText
        localFile {
          childImageSharp {
            fluid(fit: COVER, maxHeight: 300){
              ...GatsbyImageSharpFluid
            }
          }
        }
        sourceUrl
      }
    }
    seo {
      fullHead
      focuskw
      metaDesc
      metaKeywords
      canonical
      cornerstone
      title
      twitterTitle
      twitterDescription
      readingTime
      opengraphUrl
      opengraphTitle
      opengraphSiteName
    }
  }

  


  fragment WpJobFragment on WpJob {
    uri
    title
    slug
    link
    id
    databaseId
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
       altText
        localFile {
          childImageSharp {
            fluid {
              src
            }
          }
        }
        sourceUrl
      }
    }
  }
`
