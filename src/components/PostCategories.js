import React from "react"
import { Link } from "gatsby"

const PostCategories = ({ categories }) => {
  if (!categories?.nodes || categories.nodes === 0) return null

  return (
    <>
          {categories.nodes.map((category, index) => (
          <Link to={category.uri} key={index} rel="category tag" as="a">
            {category.name}
          </Link>
        ))}
    </>
  )
}

export default PostCategories
