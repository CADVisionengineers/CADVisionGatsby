import React from 'react'
import {Link} from 'gatsby'
import{ JobsListingQuery } from '../Jobs/JobsListingQuery'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const  JobsListing= () => {
 const getJobsList = () => {

    const JobsList =[];
    const Jobs = JobsListingQuery();
    Jobs.allWpJob.edges.forEach((JobsEdge) => {
        JobsList.push({
             uri:JobsEdge.node.uri,
            title:JobsEdge.node.title,
            type:JobsEdge.node.Jobs.type,
            experience:JobsEdge.node.Jobs.experience,
            qualification:JobsEdge.node.Jobs.qualification,
            skills:JobsEdge.node.Jobs.skills,
            jobRole:JobsEdge.node.Jobs.jobRole,
            location:JobsEdge.node.Jobs.location,
            jobDescription:JobsEdge.node.Jobs.jobDescription,
            additionalQualificationDesired:JobsEdge.node.Jobs.additionalQualificationDesired,
            selectionProcess:JobsEdge.node.Jobs.selectionProcess,



        });
        
    });
   return JobsList;
 };

  const JobsList =getJobsList();

  return(

<>       <div className="offers-component component">
<div className="simple-view">  
        <div className="jobs">
        <div className="filters-container">
      
      </div>
<div className="list-container list">
<div className="container">


{JobsList.map((Job) =>(
             
        <>   
   


<div className="job">
  <div className="row">
    <div className="col-md-8 col-xs-12 col-centered">
      <h5 className="job-title">
        <a href={Job.uri}>{Job.title}</a>
      </h5>
      
      
    </div>
    <div className="col-md-4 col-xs-12 apply-now col-centered">
      <Link className="btn btn-primary" to={Job.uri}>View Job</Link>
    </div>
    
    </div>
  </div>



  

 
</>

        


    
))}
</div>
</div>
</div>
</div>
 </div>
</>
  );
};

export default JobsListing