const path = require(`path`)
const glob = require(`glob`)

const createBlog = require(`./create/createBlog`)
const createContentTypes = require(`./create/createContentTypes`)
const createCategories = require(`./create/createCategories`)
const createAuthors = require(`./create/createAuthors`)
const createTags = require(`./create/createTags`)
const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/**/*.js`, { cwd: sitePath })
}



exports.createPages = async (props) => {
  const { data: wpSettings } = await props.graphql(/* GraphQL */ `
    {
      wp {
        readingSettings {
          postsPerPage
        }
      }
    }
  `)
  
 const { createRedirect } = await props.actions
	
	createRedirect({
    fromPath: '/company/overview',
    toPath: '/overview',
    isPermanent: true,

  });

createRedirect({
    fromPath: '/cead/cead-product-brochure/',
    toPath: '/cead',
  });
	createRedirect({
    fromPath: '/cead/constraint-driven-engineering-design-synthesis/',
    toPath: '/cead/cdeds-methodology',
  });
	createRedirect({
    fromPath: '/cead/customer-success-case-study/',
    toPath: '/cead/customer-success-story',
  });
	createRedirect({
    fromPath: '/resources/',
    toPath: '/cead/resources',
    isPermanent: true

  });	
	
createRedirect({
    fromPath: '/cead/cead-faq/',
    toPath: 'https://cadvisionengineers.com',
  });
				createRedirect({
    fromPath: '/cead/resellers/',
    toPath: 'https://cadvisionengineers.com',
  });
				createRedirect({
    fromPath: '/cead/request-a-demo/',
    toPath: 'https://cadvisionengineers.com',
  });
				createRedirect({
    fromPath: '/services/write-to-us/',
    toPath: 'https://cadvisionengineers.com',
  });
					createRedirect({
    fromPath: '/plug-ins/',
    toPath: 'https://cadvisionengineers.com',
  });
					createRedirect({
    fromPath: '/plug-ins/spell-checker-macro/',
    toPath: 'https://cadvisionengineers.com',
  });
					createRedirect({
    fromPath: '/plug-ins/import-and-export-macro/',
    toPath: 'https://cadvisionengineers.com',
  });
					createRedirect({
    fromPath: '/plug-ins/font-checker-macro/',
    toPath: 'https://cadvisionengineers.com',
  });
			createRedirect({
    fromPath: 'https://cadvisionengineers.com/Career/',
    toPath: 'https://cadvisionengineers.com/careers',
  });
	
				createRedirect({
    fromPath: '/blog/category/uncategorized/',
    toPath: 'https://cadvisionengineers.com',
  });
	createRedirect({
    fromPath: '/cead/cead-product-brochure-datasheet',
    toPath: 'https://cadvisionengineers.com',
  });
	
		createRedirect({
    fromPath: '/cead/customer-success-case-study/www.terex.in/',
    toPath: '/cead/customer-success-case-study/terex-case-study',
  });
	
			createRedirect({
    fromPath: '/cead/customer-success-case-study/www.terex.in',
    toPath: '/cead/customer-success-case-study/terex-case-study',
  });
	
		createRedirect({
    fromPath: '/design-synthesis-vs-design-iterations/',
    toPath: '/resources/design-synthesis-vs-design-iterations',
  });
		createRedirect({
    fromPath: '/company/clients-and-testimonials/',
    toPath: 'https://cadvisionengineers.com',
  });
	
			createRedirect({
    fromPath: '/cead/cead-videos/',
    toPath: '/videos/',
  });
	
			createRedirect({
    fromPath: '/services/overview/',
    toPath: 'https://cadvisionengineers.com',
  });
	
			createRedirect({
    fromPath: '/blog/challenges-in-kbe-2/',
    toPath: '/blog/challenges-in-kbe/',
  });
	
			createRedirect({
    fromPath: '/career/',
    toPath: '/careers',
  });
	
		createRedirect({
    fromPath: '/cead/cead-product-brochure-datasheet',
    toPath: 'https://cadvisionengineers.com',
  });
	
	
	
			createRedirect({
    fromPath: '/resources/iterations-vs-design-synthesis',
    toPath: '/resources/design-synthesis-vs-design-iterations',
  });
	createRedirect({
    fromPath: '/resources/mechanical-engineering-software-looking-for-a-new-paradigm',
    toPath: '/resources/mechanical-engineering-software',
  });
		createRedirect({
    fromPath: '/resources/iterations-vs-design-synthesis',
    toPath: '/resources/design-synthesis-vs-design-iterations',
  });
		createRedirect({
    fromPath: '/services/product-development-services',
    toPath: '/services/outsourced-product-development',
  });
		createRedirect({
    fromPath: '/services/kbe-knowledge-based-engineering',
    toPath: '/services/knowledge-based-engineering',
  });

	
		createRedirect({
    fromPath: '/services/case-studies/',
    toPath: '/case-studies/',
  });
			createRedirect({
    fromPath: '/services/case-studies/custom-bom-editor',
    toPath: '/case-studies/custom-bom-editor',
  });
			createRedirect({
    fromPath: '/services/case-studies/web-based-viewer-for-3d-cad-models/',
    toPath: '/case-studies/web-based-viewer-for-3d-cad-models',
  });
			createRedirect({
    fromPath: '/services/case-studies/cad-data-migration/',
    toPath: '/case-studies/migration-of-pmi-data-during-exchange-of-cad-data',
  });
	
				createRedirect({
    fromPath: '/challenges-in-kbe/',
    toPath: '/blog/challenges-in-kbe',
  });
	
				createRedirect({
    fromPath: '/cad-data-interoperability/',
    toPath: '/blog/cad-data-interoperability',
  });
	
				createRedirect({
    fromPath: '/cad-customization-introduction/',
    toPath: '/blog/cad-customization-introduction',
  });
	
	createRedirect({
    fromPath: '/company/leadership',
    toPath: '/Leadership',
  });
	createRedirect({
    fromPath: '/jobs/senior-software-engineer/',
    toPath: '/Career',
  });
	createRedirect({
    fromPath: '/jobs/software-engineer-senior-software-engineer/',
    toPath: '/Career',
  });
	createRedirect({
    fromPath: '/cead/resources',
    toPath: '/design-synthesis-vs-design-iterations/',
  });
	
	
		createRedirect({
    fromPath: '/blog/category/uncategorized/',
    toPath: '/blog',
  });
	
  const perPage = wpSettings.wp.readingSettings.postsPerPage || 10
  const blogURI = "/"
  const templates = getTemplates()

  await createContentTypes(props, { templates })
  await createBlog(props, { perPage, blogURI })
  await createCategories(props, { perPage })
  await createAuthors(props, { perPage })
  await createTags(props, { perPage })
}
 


const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

// We do this, because the Avatar doesn't get handled as a File from the gatsby-source plugin yet. This might change in the future.
exports.createResolvers = async ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions

  await createResolvers({
    WpAvatar: {
      imageFile: {
        type: "File",
        async resolve(source) {
          let sourceUrl = source.url

          return await createRemoteFileNode({
            url: encodeURI(sourceUrl),
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          })
        },
      },
    },
  })
}


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-simple-chatbot/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}




