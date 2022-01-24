import React from "react"
import { useStaticQuery, graphql,Link} from "gatsby"
import { flatListToHierarchical } from "../utils"
import { useLocation } from "@reach/router"
const Menu = () => {
  const data = useStaticQuery(graphql`
  {
    allWpMenuItem(sort: {fields: order, order: ASC}, filter: {menu: {node: {name: {eq: "Menu"}}}}) {
      nodes {
        id
        title: label
        path
        target
        parent: parentId
        url
        childItems {
          nodes {
            id
            url
            title
            path
            target
          }
        }
      }
    }
  }
`)
  const location = useLocation()

  const menuItems = flatListToHierarchical(data.allWpMenuItem.nodes, {
    idKey: "id",
    childrenKey: "routes",
    parentKey: "parent",
  })

 
  
  return (
    <ul className="navbar-nav mx-auto">
        {menuItems &&
        menuItems.map((menuItem) => {
          const { url, title, id, routes } = menuItem
          const group = url.split("/")[1]
          const isActive = location.pathname.includes(group)
          if (routes && routes.length) {
            return (
              <li className="nav-item">
              <Link className="nav-link" to={url}>{title} <i className="bx bx-chevron-down" /></Link>
              <ul className="dropdown-menu">
            
              
              
                  {routes.map((route) => {
                    const { url, title, id ,childItems} = route
                    return (
                      <li className="nav-item"  key={id}>
                      <Link className="nav-link"
                    as="a" to={url}
    
                    >
                      {title}
                    
                    
                    </Link>
         
         
                    </li>
                    )
                  }
                  )}
                
               
          </ul>

                </li> 
            )
             } else{
             return(

          
              <li className="nav-item">
              <Link className="nav-link"
                key={id} as="a" to={url}

              >
                {title}
              </Link>
         

            </li>
             
             )


            }
         
            
           
          })}
        


    </ul>




  )
}

export default Menu
