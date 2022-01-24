import React from "react"
  import { StaticQuery, graphql,Link} from "gatsby"
  
  const PrimaryNav = () => (
    <StaticQuery
      query={graphql`
        query {
          allWpMenuItem(sort: {fields: order, order: ASC}, filter: {menu: {node: {name: {eq: "Menu"}}}}) {
            edges {
              node {
              id
              title: label
              path
              target
              parent: parentId
              url
              }
            }
          }
        }
      `}
      render={data => {
        return (

          <ul className="navbar-nav mx-auto">
              {data &&
                data.allWpMenuItem &&
                data.allWpMenuItem.edges &&
                data.allWpMenuItem.edges[0] &&
                data.allWpMenuItem.edges[0].node &&
                data.allWpMenuItem.edges[0].node.items &&
                data.allWpMenuItem.edges[0].node.items.map(
                  prop => {
                    return (
                      
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          href={prop.url}
                          alt={prop.title}
                        >
                          {prop.title}
                        </Link>
                        <ul className="dropdown-menu">
                          {prop &&
                            prop.wordpress_children &&
                            prop.wordpress_children.map(child => {
                              console.log("child ", child)
  
                              return (
                                <Link
                                  className="nav-link"
                                  onCanPlayThroughCapture={child.url}
                                  alt={child.title}
                                >
                                  {child.title}
                                </Link>
                              )
                            })}
                        </ul>
                      </li>
                    )
                  }
                )}
            </ul>
        
        )
      }}
    />
  )

  
export default PrimaryNav;