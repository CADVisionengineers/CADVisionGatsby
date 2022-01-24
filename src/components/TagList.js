import React from 'react'
import slugify from '../utils/slugify'
import {Link} from "gatsby"


const TagList = ({ tags }) => {
    if (tags && tags.length > 0) {
        const allTags = tags.map((tag) => (
            
                <Link key={tag.uri} to={tag.uri} as="a" >
                    {tag.name}
                </Link>
          
        ))

        return (
            <div className="widget widget_tag_cloud">
            <h3 className="widget-title">Tags</h3>

            <div className="tagcloud">

           
           
                {allTags}
            </div>
            </div>
                
        )
    }
    // No Tags
    return null
}

export default TagList
