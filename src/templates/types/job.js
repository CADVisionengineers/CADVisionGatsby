import React from 'react';
import Layout from '../../components/Layouts/NavbarTwo';
import { graphql, Link } from "gatsby"
import Footer from '../../components/Layouts/Footer';
import JobTitleArea from '../../components/Common/JobTitleArea';
import Seo from "../../components/Seo"

import imgurl from "../../assets/images/job_banner.jpg"
import loadable from '@loadable/component'
const SocialShare = loadable(() => import('../../components/SubNavbar'))

const Job = ({ data }) => {
    const { page } = data
    const { title,uri,databaseId ,Jobs,id,featuredImage} = page

  const imageurl=featuredImage?.node?.sourceUrl
    return (
        <>
            <React.Fragment>
                <Layout />

                <div className="page-title-area"  > 
          
             <div className="container">
                    <div className="page-title-content">
     <div class="info-container"  >
  <div class="info">
    
  <h2
dangerouslySetInnerHTML={{ __html: title }}
/>
      <ul className="job">

          
        
        
          <li>
            <i class="bx bx-current-location"></i>
            {Jobs.location}
          </li>
        
      </ul>
    
  </div>
</div>
                    </div>
                </div>
               
           </div>
                
                <div className="breadcrumbs">
  <div className="container">
    <ul>
      <li>
        <Link  as="a" to="/Career/#job">Job openings  {'>'} </Link>
      </li>
      <li>
        <a className="active" href="#"> { <p dangerouslySetInnerHTML={{ __html: title }}/>}</a>
      </li>
    </ul>
  </div>   
</div>
                   
        <section className="blog-details-area ptb-100">
                      

               <div className="container">
               <div className="row">
               <div className="col-lg-8 col-md-12">
                 
                   <div className="contact-inner">
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><strong><u><span >Title:</span></u></strong><span >&nbsp;{Jobs.title}</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><strong><span >&nbsp;</span></strong></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><strong><u><span >Type:</span></u></strong><span >&nbsp;{Jobs.type}</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><span >&nbsp;</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><strong><u><span >Experience:</span></u></strong><span >&nbsp;{Jobs.experience}</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><span >&nbsp;</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><strong><u><span >Jobs Description:</span></u></strong></p>
 
<div dangerouslySetInnerHTML={{ __html: Jobs.jobDescription}}/> 
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm', textAlign: 'justify'}}><span >&nbsp;</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm', textAlign: 'justify'}}><strong><u><span >Qualification:</span></u></strong><span >&nbsp; {Jobs.qualification}</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm', textAlign: 'justify'}}><span >&nbsp;</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm', textAlign: 'justify'}}><strong><u><span >Location:</span></u></strong><span >&nbsp;{Jobs.location}</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm', textAlign: 'justify'}}><span >&nbsp;</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm', textAlign: 'justify'}}><strong><u><span >Skills:&nbsp;</span></u></strong></p>
 <div dangerouslySetInnerHTML={{ __html: Jobs.skills }}/>            
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><span >&nbsp;</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm', textAlign: 'justify'}}><strong><u><span >Additional Qualification Desired:&nbsp;</span></u></strong></p>
  <div dangerouslySetInnerHTML={{ __html: Jobs.additionalQualificationDesired }} style={{color:'#4a6f8a'}}  /> 
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><span >&nbsp;</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><strong><u><span >Selection Process:</span></u></strong></p>
  <div  dangerouslySetInnerHTML={{ __html: Jobs.selectionProcess }} />
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm'}}><span >&nbsp;</span></p>
  <p style={{marginTop: '0cm', marginRight: '0cm', marginBottom: '.0001pt', marginLeft: '0cm', lineHeight: '115%', fontSize: 15, fontFamily: '"Calibri",sans-serif'}}>&nbsp;</p>
  </div>


  </div>
  <div className="col-lg-4 col-md-12">
  <div className="contact-inner">
  <div className="sidebar">
  <a className="btn btn-thebiggest" href="/JobApplicationForm">Apply for this Job</a>

  <div className="socials-share">
    <h4>
      Share this job opening
    </h4>
    <div className="share clearfix">



                              <SocialShare />

                             </div>
  </div>
</div>
</div>
     
      </div>
   </div>
   </div>
  </section>
                <Footer />
            </React.Fragment>
        </>
    )
}

export const query = graphql`
query Jobs ($id: String!) {
    page: wpJob(id: { eq: $id }) {
      ...WpJobFragment
    }
  }
`

export default Job;
