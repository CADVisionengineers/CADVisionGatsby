import React, { Component } from 'react';
import {Link} from 'gatsby';

class BlogGrid extends Component {
    render() {
        return (
            <section className="blog-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
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

                                      {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <Link href="/blog/#">
                                    <a className="prev page-numbers">
                                        <i className='bx bxs-arrow-to-left'></i>
                                    </a>
                                </Link>

                                <Link href="/blog/#">
                                    <a className="page-numbers">1</a>
                                </Link>

                                <span className="page-numbers current">2</span>

                                <Link href="/blog/#">
                                    <a className="page-numbers">3</a>
                                </Link>

                                <Link href="/blog/#">
                                    <a className="page-numbers">4</a>
                                </Link>

                                <Link href="/blog/#">
                                    <a className="next page-numbers">
                                        <i className='bx bxs-arrow-to-right'></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogGrid;