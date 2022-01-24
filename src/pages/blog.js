import React, { Component } from 'react';
import NavbarThree from '../components/Layouts/NavbarTwo';
import SEO from "../components/Seo"
import Blogimg from "../assets/images/Blog-CADVision-Engineers.png"
import BlogSidebar from "../components/Blog/BlogSidebar"
import OurLovingClients from '../components/Common/ClientsFeedbackSlider';
import Footer from '../components/Layouts/Footer';
import BlogLisiting from '../components/Blog/BlogListing';

class blog extends Component {
    render() {
        return (
            <React.Fragment>
            <SEO title={"Learn Crucial Details About The CAD Customization Software"}  keywords={"Blog"} description={"CADVision Engineers Private Limited is a renowned software development company focused on a set of engineering software product development and services."}  />
                <NavbarThree />
                <div className="page-title-area" style={{
       backgroundImage:"url("+ Blogimg +")"}} >
            
             <div className="container">
                    <div className="page-title-content">
                       
                        
                    </div>
                </div>
          
               </div>
                <section className="blog-area ptb-100">
        <div className="container">
          <div className="row">
          <div className="col-lg-8 col-md-12">
               <div className="row">
                
             <BlogLisiting/>
                </div>
                      
                      </div>
           <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            
            </div>
            </div>
            </div>
</section>
                <Footer />
            </React.Fragment>
        );
    }
}
export default blog;
