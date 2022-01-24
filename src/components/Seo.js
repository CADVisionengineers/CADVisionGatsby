import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={(data) => {
        const metaDescription =
          description ||
       
          data.site.siteMetadata.description
        const titleText = title
          
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={titleText}
            titleTemplate={`%s`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                name: `keywords`,
                content: keywords,
              },
            {
              property:'og:local',
              content:'en_US,' 
            },
              {
                property: `og:title`,
                content: title,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
            ]
              
            
              .concat(meta)}
          />
        )
      }}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
    wp {
      generalSettings {
        title
        description
      }
    }
  }
`

export default Seo
