import React, { Component } from 'react';
import {Link} from 'gatsby';
import BlogComments from './BlogComments';
import BlogSidebar from './BlogSidebar';

class BlogDetailsContent extends Component {
    render() {
        return (
            <section className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog/single-blog.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className='bx bx-time'></i> 
                                                <Link href="/blog-details/#">
                                                    <a>September 31, 2020</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-user'></i>
                                                <Link href="/blog-details/#">
                                                    <a>Steven Smith</a>
                                                </Link> 
                                            </li>
                                        </ul>
                                    </div>

                                    <h2>Making peace with the feast or famine of freelancing</h2>

                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                                    <blockquote>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                        <cite>Tom Cruise</cite>
                                    </blockquote>

                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat.</p>
 
                                    <ul className="block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/gallery1.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/gallery2.jpg" alt="image" />
                                            </figure>
                                        </li>

                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/gallery3.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul>

                                    <h3 className="mb-0">Four major elements that we offer:</h3>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="features-list">
                                                <li>
                                                    <i className='bx bx-check-double'></i> 
                                                    Scientific Skills For getting a better result
                                                </li>
                                                <li>
                                                    <i className='bx bx-check-double'></i> 
                                                    Communication Skills to getting in touch
                                                </li>
                                                <li>
                                                    <i className='bx bx-check-double'></i> 
                                                    A Career Overview opportunity Available
                                                </li>
                                                <li>
                                                    <i className='bx bx-check-double'></i> 
                                                    A good Work Environment For work
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="col-md-6">
                                            <ul className="features-list">
                                                <li>
                                                    <i className='bx bx-check-double'></i> 
                                                    Scientific Skills For getting a better result
                                                </li>
                                                <li>
                                                    <i className='bx bx-check-double'></i> 
                                                    Communication Skills to getting in touch
                                                </li>
                                                <li>
                                                    <i className='bx bx-check-double'></i> 
                                                    A Career Overview opportunity Available
                                                </li>
                                                <li>
                                                    <i className='bx bx-check-double'></i> 
                                                    A good Work Environment For work
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                     
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus.
                                    </p>
                                </div>

                                {/* Article footer */}
                                <div className="article-footer">
                                    <div className="article-tags">
                                        <Link href="/blog-details/#">
                                            <a>Fashion</a>
                                        </Link>

                                        <Link href="/blog-details/#">
                                            <a>Smart</a>
                                        </Link>

                                        <Link href="/blog-details/#">
                                            <a>Marketing</a>
                                        </Link>

                                        <Link href="/blog-details/#">
                                            <a>Games</a>
                                        </Link>

                                        <Link href="/blog-details/#">
                                            <a>Travel</a>
                                        </Link>
                                    </div>
                                </div>

                                {/* Post navigation */}
                                <div className="post-navigation">
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <Link href="/blog-details/#">
                                                <a>
                                                    <span className="image-prev">
                                                        <img src="/images/blog/blog2.jpg" alt="image" />
                                                        <span className="post-nav-title">Prev</span>
                                                    </span>
                
                                                    <span className="prev-link-info-wrapper">
                                                        <span className="prev-title">Don't buy a tech gift until you read these rules</span>
                                                        <span className="meta-wrapper">
                                                            <span className="date-post">January 21, 2020</span>
                                                        </span>
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
            
                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <Link href="/blog-details/#">
                                                <a>
                                                    <span className="next-link-info-wrapper">
                                                        <span className="next-title">The golden rule of buying a phone as a gift</span>
                                                        <span className="meta-wrapper">
                                                            <span className="date-post">January 21, 2020</span>
                                                        </span>
                                                    </span>
                
                                                    <span className="image-next">
                                                        <img src="/images/blog/blog3.jpg" alt="image" />
                                                        <span className="post-nav-title">Next</span>
                                                    </span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Comments */}
                                <BlogComments />
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

export default BlogDetailsContent;