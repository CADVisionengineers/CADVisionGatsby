module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"CADVision","short_name":"Cadvision","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"standalone","icon":"C:\\Users\\winhu\\source\\repos\\winhubsolutions\\CADVisionGatsby/src/assets/images/CADVision-Engineers.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"49938b3c3c7eed017fde510310132509"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-121830721-1","head":true,"anonymize":true,"respectDNT":true,"pageTransitionDelay":0,"exclude":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"https://businesso.vigilant-burnell.147-182-171-252.plesk.page/graphql","verbose":true,"develop":{"hardCacheMediaFiles":true,"nodeUpdateInterval":5000,"hardCacheData":false},"debug":{"graphql":{"writeQueriesToDisk":true,"showQueryVarsOnError":false,"showQueryOnError":false,"copyQueryOnError":false,"panicOnError":false,"onlyReportCriticalErrors":true,"copyNodeSourcingQueryAndExit":false,"printIntrospectionDiff":false},"preview":false,"timeBuildSteps":false,"disableCompatibilityCheck":false,"throwRefetchErrors":false},"html":{"fallbackImageMaxWidth":800,"useGatsbyImage":true,"imageMaxWidth":null,"imageQuality":90,"createStaticFiles":true,"generateWebpImages":false},"schema":{"requestConcurrency":5,"previewRequestConcurrency":2,"perPage":20,"timeout":300000,"queryDepth":15,"circularQueryLimit":5,"typePrefix":"Wp"},"excludeFieldNames":["blocksJSON","saveContent"],"type":{"Post":{"limit":35},"CoreParagraphBlockAttributesV2":{"exclude":true},"RootQuery":"{ excludeFieldNames: ['viewer', 'node', 'schemaMd5'], },"}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
