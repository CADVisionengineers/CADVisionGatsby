import React from 'react'


import{ ClientListingQuery } from '../components/ClientListingQuery'


const  ClientListing= () => {
 const getClientList = () => {

    const ClientList =[];
    const Clients = ClientListingQuery();
    Clients.allWpTestimonial.edges.forEach((ClientEdge) => {
        ClientList.push({
            id:ClientEdge.node.id,
            clientname:ClientEdge.node.Testimonial.clientname,
            designation:ClientEdge.node.Testimonial.designation,
            comments:ClientEdge.node.Testimonial.comments,
            company:ClientEdge.node.Testimonial.company,
            picture:ClientEdge.node.Testimonial.picture?.node?.localFile,



        });
        
    });
   return ClientList;
 };

  const ClientList =getClientList();

  return(

<>
{ClientList.map((client) =>(
                <div  key={client.id} className="single-feedback-item1">

                <div className="feedback-desc1">
               
                    <p>{client.comments}</p>

                   <br></br>

                    <div className="client-info">
                        <h3>{client.clientname}</h3>
                        <span>{client.company}</span>
                    </div>
                    
                </div>
           
            </div>



    
))}
</>
  );
};

export default ClientListing