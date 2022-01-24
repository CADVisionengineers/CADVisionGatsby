import React from 'react'
import {Link} from 'gatsby'
import{ EmpListingQuery } from '../components/EmpListingQuery'
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const  EmpListing= () => {
 const getEmpList = () => {

    const EmpList =[];
    const Employees = EmpListingQuery();
    Employees.allWpEmployeespeak.edges.forEach((EmpEdge) => {
        EmpList.push({
            name:EmpEdge.node.Employeespeaks.name,
            designation:EmpEdge.node.Employeespeaks.designation,
            testimonial:EmpEdge.node.Employeespeaks.testimonial,
           
            picture:EmpEdge.node.featuredImage?.node?.localFile,
            altText:EmpEdge.node.featuredImage?.node?.altText,
            id:EmpEdge.node.featuredImage?.node?.id,


        });
        
    });
   return EmpList;
 };

  const EmpList =getEmpList();

  return(

<>
{EmpList.map((Employee) =>(
                <div  key={EmpList.id} className="single-feedback-item">
 
                <GatsbyImage image={getImage(Employee.picture)}
 
 style={{width: 200,height: 300,position:"absolute",objectFit:'contain'}}
className="gatsby"
alt={EmpList.altText}
       />

                <div className="feedback-desc">
  

                    <p>{Employee.testimonial}</p>

                
                

                    <div className="client-info">
                        <h3>{Employee.name}</h3>
                        <span>{Employee.designation}</span>
                    </div>
                </div>
            </div>


    
))}
</> 
  );
};

export default EmpListing