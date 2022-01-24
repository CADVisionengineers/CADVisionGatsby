import React, { Component,useState, useEffect } from "react";


import ContactInfo from './ContactInfo';
import JobForm from './JobForm'

    const JobFormArea = () => {
    
        const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
        // Load this effect on mount
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setVideos(JobForm);
      setLoading(false);
    }, 4000);
    // Cancel the timer while unmounting
    return () => clearTimeout(timer);
  }, []);

        return (
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="contact-inner">
                        <div className="row">
              
                            <div className="col-12">
                       
                       
                            
                                
                                <JobForm />
                            </div>
                        </div>

                      
                    </div>
                </div>
            </section>
        );
    }


export default JobFormArea;