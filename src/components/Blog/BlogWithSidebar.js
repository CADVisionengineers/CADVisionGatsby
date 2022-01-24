import React, { Component } from 'react';
import {Link} from 'gatsby';
import BlogSidebar from './BlogSidebar';

class BlogWithSidebar extends Component {
    render() {
        return (
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog/blog1.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <i className='bx bx-calendar'></i> Feb 14, 2020
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>50 world-changing people, We lost in the 2010s</a>
                                                </Link>
                                            </h3>

                                            <div className="post-info">
                                                <div className="post-by">
                                                    <img src="/images/author/author1.jpg" alt="image" />
                                                    <h6>Sarah Taylor</h6>
                                                </div>

                                                <div className="details-btn">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog/blog2.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <i className='bx bx-calendar'></i> Feb 16, 2020
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Don't buy a tech gift until you read these rules</a>
                                                </Link>
                                            </h3>

                                            <div className="post-info">
                                                <div className="post-by">
                                                    <img src="/images/author/author2.jpg" alt="image" />
                                                    <h6>Michel John</h6>
                                                </div>

                                                <div className="details-btn">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog/blog3.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <i className='bx bx-calendar'></i> Feb 18, 2020
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>The golden rule of buying a phone as a gift</a>
                                                </Link>
                                            </h3>

                                            <div className="post-info">
                                                <div className="post-by">
                                                    <img src="/images/author/author3.jpg" alt="image" />
                                                    <h6>Lucy Eva</h6>
                                                </div>

                                                <div className="details-btn">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog/blog4.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <i className='bx bx-calendar'></i> Feb 19, 2020
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Configure redux into your WordPress theme</a>
                                                </Link>
                                            </h3>

                                            <div className="post-info">
                                                <div className="post-by">
                                                    <img src="/images/author/author4.jpg" alt="image" />
                                                    <h6>Michel John</h6>
                                                </div>

                                                <div className="details-btn">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog/blog5.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <i className='bx bx-calendar'></i> Feb 20, 2020
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>How to setup redux in react next application</a>
                                                </Link>
                                            </h3>

                                            <div className="post-info">
                                                <div className="post-by">
                                                    <img src="/images/author/author5.jpg" alt="image" />
                                                    <h6>Lucy Eva</h6>
                                                </div>

                                                <div className="details-btn">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog/blog6.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <i className='bx bx-calendar'></i> Feb 21, 2020
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>How to resubmit rejected item into themeforest?</a>
                                                </Link>
                                            </h3>

                                            <div className="post-info">
                                                <div className="post-by">
                                                    <img src="/images/author/author5.jpg" alt="image" />
                                                    <h6>Lucy Eva</h6>
                                                </div>

                                                <div className="details-btn">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog/blog7.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <i className='bx bx-calendar'></i> Feb 22, 2020
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>How to resubmit rejected item into themeforest?</a>
                                                </Link>
                                            </h3>

                                            <div className="post-info">
                                                <div className="post-by">
                                                    <img src="/images/author/author7.jpg" alt="image" />
                                                    <h6>Sarah Taylor</h6>
                                                </div>

                                                <div className="details-btn">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog-post">
                                        <div className="post-image">
                                            <Link href="/blog-details">
                                                <a>
                                                    <img src="/images/blog/blog8.jpg" alt="image" />
                                                </a>
                                            </Link>

                                            <div className="date">
                                                <i className='bx bx-calendar'></i> Feb 23, 2020
                                            </div>
                                        </div>

                                        <div className="post-content">
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>How to the active menu based on url in next.js?</a>
                                                </Link>
                                            </h3>

                                            <div className="post-info">
                                                <div className="post-by">
                                                    <img src="/images/author/author8.jpg" alt="image" />
                                                    <h6>Michel John</h6>
                                                </div>

                                                <div className="details-btn">
                                                    <Link href="/blog-details">
                                                        <a>
                                                            <i className="bx bx-right-arrow-alt"></i>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Pagination */}
                                <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        <Link href="/blog2/#">
                                            <a className="prev page-numbers">
                                                <i className='bx bxs-arrow-to-left'></i>
                                            </a>
                                        </Link>

                                        <Link href="/blog2/#">
                                            <a className="page-numbers">1</a>
                                        </Link>

                                        <span className="page-numbers current">2</span>

                                        <Link href="/blog2/#">
                                            <a className="page-numbers">3</a>
                                        </Link>

                                        <Link href="/blog2/#">
                                            <a className="page-numbers">4</a>
                                        </Link>

                                        <Link href="/blog2/#">
                                            <a className="next page-numbers">
                                                <i className='bx bxs-arrow-to-right'></i>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogWithSidebar;