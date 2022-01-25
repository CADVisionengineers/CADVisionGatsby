var plugins = [{
      name: 'gatsby-plugin-image',
      plugin: require('C:/Users/winhu/source/repos/winhubsolutions/CADVisionGatsby/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-sitemap',
      plugin: require('C:/Users/winhu/source/repos/winhubsolutions/CADVisionGatsby/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"output":"/sitemap","createLinkInHead":true,"entryLimit":45000,"query":"{ site { siteMetadata { siteUrl } } allSitePage { nodes { path } } }","excludes":[]},
    },{
      name: 'gatsby-plugin-offline',
      plugin: require('C:/Users/winhu/source/repos/winhubsolutions/CADVisionGatsby/node_modules/gatsby-plugin-offline/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('C:/Users/winhu/source/repos/winhubsolutions/CADVisionGatsby/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('C:/Users/winhu/source/repos/winhubsolutions/CADVisionGatsby/node_modules/gatsby-plugin-feed/gatsby-ssr'),
      options: {"plugins":[],"feeds":[{"query":"\n              {\n                allWpPost(sort: {fields: date, order: DESC}) {\n                  edges {\n                    node {\n                      slug\n                      content\n                      title\n                      excerpt\n                      date\n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml","title":"CADVision Rss Feed"}]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('C:/Users/winhu/source/repos/winhubsolutions/CADVisionGatsby/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"CADVision","short_name":"Cadvision","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"standalone","icon":"C:\\Users\\winhu\\source\\repos\\winhubsolutions\\CADVisionGatsby/src/assets/images/CADVision-Engineers.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"49938b3c3c7eed017fde510310132509"},
    },{
      name: 'gatsby-plugin-google-analytics',
      plugin: require('C:/Users/winhu/source/repos/winhubsolutions/CADVisionGatsby/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"UA-121830721-1","head":true,"anonymize":true,"respectDNT":true,"pageTransitionDelay":0,"exclude":[]},
    },{
      name: 'gatsby-plugin-html-attributes',
      plugin: require('C:/Users/winhu/source/repos/winhubsolutions/CADVisionGatsby/node_modules/gatsby-plugin-html-attributes/gatsby-ssr'),
      options: {"plugins":[],"lang":"en"},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
