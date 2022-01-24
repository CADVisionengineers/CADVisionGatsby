import React from 'react'
import{ LeadershipQuery } from '../Leadership/LeadershipQuery'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton
} from 'react-accessible-accordion';

const  LeadershipListing= () => {
 const getLeadershipList = () => {

    const LeadershipList =[];
    const Leaderships = LeadershipQuery();
    Leaderships.allWpLeadership.edges.forEach((LeadershipEdge) => {
        LeadershipList.push({
            Leadershipname:LeadershipEdge.node.Leadership.name,
            id:LeadershipEdge.node.id,
            description:LeadershipEdge.node.Leadership.description,
            designation:LeadershipEdge.node.Leadership.designation,
            picture:LeadershipEdge.node.Leadership.picture?.node?.localFile,



        });
        
    });
   return LeadershipList;
 };

  const LeadershipList =getLeadershipList();

  return(

<>
<section className="faq-area ptb-100 bg-color-f4f5fe">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="faq-accordion">
                              

                                <Accordion allowZeroExpanded preExpanded={[' cG9zdDozNjI1 ']}>
                                {LeadershipList.map((Leadership) => (
                                    <AccordionItem uuid={Leadership.id}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton>
                                            {Leadership.Leadershipname}-{ Leadership.designation }
                                                                                     </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                        <div dangerouslySetInnerHTML={{ __html: Leadership.description }} />
                                        </AccordionItemPanel>
                                    </AccordionItem>
  ))}
                                     </Accordion>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </section>

      
      

</>
  );
};

export default LeadershipListing