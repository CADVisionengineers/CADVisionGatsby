require("dotenv").config({
  path: `.env`,
})

// require .env.development or .env.production
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
GATSBY_STALL_RETRY_LIMIT= 5
GATSBY_STALL_TIMEOUT= 30000
GATSBY_CONNECTION_TIMEOUT= 300000

module.exports = {
  siteMetadata: {
    title: `Leading Engineering and CAD Software Solutions Provider `,
    description: `CADVision provides end to end services in developing CAD software solutions. Our CAD Solutions are designed and developed using product development approach..`,
    author: `@CADVision`,
    siteUrl:'https://cadvisionengineers.com'
  },
 flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    FAST_REFRESH: true,
     FAST_DEV: true,

  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-gatsby-cloud`,
    'gatsby-plugin-sitemap',
  {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://cadvisionengineers.com',
        sitemap: 'https://cadvisionengineers.com/sitemap/sitemap-0.xml',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }]
          },
          production: {
  
           policy: [{ userAgent: '*', disallow: ['/tag/*','/archives/','/blog/tag/*','/wp-includes/','/cgi-bin/','/blog/category/*','/blog/author/admin','/recommends/','/go/','/comments/feed/','/trackback/', '/index.php', '/xmlrpc.php','*?wptheme','/search?','/?p=*','/author'] }]
            
          }
        }
      }
    },
    'gatsby-plugin-sharp',
    `gatsby-plugin-offline`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    {
      resolve: `gatsby-plugin-feed`,
      options: {
       
        
        feeds: [
          {
            serialize: ({ query: { site, allWpPost } }) => {
              return allWpPost.edges.map((edge) => {
                return {
                  title: edge.node.title,
                  description: edge.node.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.content }],
                };
              });
            },
            query: `
              {
                allWpPost(sort: {fields: date, order: DESC}) {
                  edges {
                    node {
                      slug
                      content
                      title
                      excerpt
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "CADVision Rss Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CADVision`,
        short_name: `Cadvision`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `${__dirname}/src/assets/images/CADVision-Engineers.png`,
       
        
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `css`,
        path: `${__dirname}/src/assets/css`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-121830721-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
    // Setting this parameter is optional
    anonymize: true,
    // Setting this parameter is also optional
    respectDNT: true,
    // Avoids sending pageview hits from custom paths
    // Delays sending pageview hits on route update (in milliseconds)
    pageTransitionDelay: 0,
    // Enables Google Optimize using your container Id
         },
},
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://cadvisionengineers.us1.list-manage.com/subscribe/post?u=30c5478473b0aced5798008e5&amp;id=6f571ea49b', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
  },

    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL ||'https://businesso.vigilant-burnell.147-182-171-252.plesk.page/graphql',
        verbose: true,
        develop: {
          hardCacheMediaFiles: true,
        },
        debug: {
          graphql: {
            writeQueriesToDisk: true,
          },
        },
        html: {
          fallbackImageMaxWidth: 800,
        },
        schema: {
          requestConcurrency: 5, // currently set to 15
        previewRequestConcurrency: 2, 
        perPage: 20,
          timeout: 300000,// currently set to 5
        },
        // fields can be excluded globally.
        // this example is for wp-graphql-gutenberg.
        // since we can get block data on the `block` field
        // we don't need these fields
        excludeFieldNames: [`blocksJSON`, `saveContent`],
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development`
                ? // Lets just pull 50 posts in development to make it easy on ourselves.
                  35
                : // And then we can pull all posts in production
                  null,
          },
          // this shows how to exclude entire types from the schema
          // this example is for wp-graphql-gutenberg
          CoreParagraphBlockAttributesV2: {
            exclude: true,
          },
        },
      },
    },
   
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
   
  ],
 
}
