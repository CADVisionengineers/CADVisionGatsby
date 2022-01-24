import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
const ContentTypePagination = ({ previousPage, nextPage, contentType }) => {
  return (
    <>
    {previousPage && (
    <div className="prev-link-wrapper">
    <div className="info-prev-link-wrapper">
        <Link to={previousPage.uri}>
            <a>
                <span className="image-prev">
                <GatsbyImage image={getImage(previousPage.featuredImage?.node?.localFile)} 
         alt title={previousPage.title}
                     
    />
                    <span className="post-nav-title">Prev</span>
                </span>

                <span className="prev-link-info-wrapper">
                    <span className="prev-title" dangerouslySetInnerHTML={{ __html: previousPage.title }}/>
                    <span className="meta-wrapper">
                        <span className="date-post">{previousPage.date}</span>
                    </span>
                </span>
            </a>
        </Link>
    </div>
</div>
)}

 {nextPage && (
<div className="next-link-wrapper">
    <div className="info-next-link-wrapper">
        <Link to={nextPage.uri}>
            <a>
                <span className="next-link-info-wrapper">
                    <span className="next-title" dangerouslySetInnerHTML={{ __html: nextPage.title }}/>
                    <span className="meta-wrapper">
                        <span className="date-post">{nextPage.date}</span>
                    </span>
                </span>

                <span className="image-next">
                <GatsbyImage image={getImage(nextPage.featuredImage?.node?.localFile)} 
         alt title={nextPage.title}
                     
    />
                    <span className="post-nav-title">Next</span>
                </span>
            </a>
        </Link>
    </div>
</div>
)}
</>
    
    
  )
}

export default ContentTypePagination
