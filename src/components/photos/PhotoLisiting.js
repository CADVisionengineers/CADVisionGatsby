import React from 'react'
import {Link} from 'gatsby'
import{ PhotoListingQuery } from '../photos/PhotoListingQuery'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const  PhotoListing= () => {
 const getphotoList = () => {

    const photoList =[];
    const photos = PhotoListingQuery    ();
    photos.allWpPhoto.edges.forEach((photoEdge) => {
        photoList.push({
        
            id:photoEdge.node.featuredImage?.node?.id,
            picture:photoEdge.node.featuredImage?.node?.localFile,

            altText:photoEdge.node.featuredImage?.node?.altText,

        });
        
    });
   return photoList;
 };
 const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  const photoList =getphotoList();

  return(

<>
<ul style={{paddingLeft:0}}> 
<Carousel
        ssr
        swipeable={false}
        arrows={true}
      
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        keyBoardControl={true}
        
        responsive={responsive}
    > 
   
{photoList.map((photo) =>(

              <li key={photoList.id}>
                
          
                <GatsbyImage image={getImage(photo.picture)}
 style={{ width:'100%',height:400}}

alt={photoList.altText}

       />

          
          
            </li>


    
))}
</Carousel>
</ul>
</> 
  );
};

export default PhotoListing