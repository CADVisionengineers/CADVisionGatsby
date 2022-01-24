import React from "react"
import AuthorIcon from "../assets/svg/author.inline.svg"
import { Link } from "gatsby"
import DateIcon from "../assets/svg/date.inline.svg"
import CommentIcon from "../assets/svg/comment.inline.svg"

const PostMeta = ({ author, title, date }) => {
  author = author?.node
  return (
 <>
 <div className="entry-meta">
         <ul >
           <li>
          <i className='bx bx-user'></i>
          
         
  
            {" "}
            <Link to={author.uri} as="a" className="MetaUser"> 
              {author.firstName
                ? author.lastName
                  ? author.firstName + " " + author.lastName
                  : author.firstName
                : author.name}
            </Link>
            &nbsp;
            </li>

            <li>
                                                <i className='bx bx-time'></i> 
                          
                                                <Link to={author.uri} as="a" className="metadate">     {date}</Link>
                                                </li>
                                                </ul>
                                                </div>
</>

  )
}

export default PostMeta
