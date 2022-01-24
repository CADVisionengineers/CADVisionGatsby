import React, { Component } from 'react';
import {Link} from 'gatsby';
import CommenstForm from './CommenstForm';

class BlogComments extends Component {
    render() {
        return (
            <div className="comments-area">
                <h3 className="comments-title">2 Comments:</h3>

                <ol className="comment-list">
                    <li className="comment">
                        <article className="comment-body">
                            <footer className="comment-meta">
                                <div className="comment-author vcard">
                                    <img src="/images/author/author1.jpg" className="avatar" alt="image" />
                                    <b className="fn">John Jones</b>
                                    <span className="says">says:</span>
                                </div>

                                <div className="comment-metadata">
                                    Feb 24, 2020 at 10:59 am
                                </div>
                            </footer>

                            <div className="comment-content">
                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                            </div>

                            <div className="reply">
                                <Link href="/blog-details/#">
                                    <a className="comment-reply-link">Reply</a>
                                </Link>
                            </div>
                        </article>

                        <ol className="children">
                            <li className="comment">
                                <article className="comment-body">
                                    <footer className="comment-meta">
                                        <div className="comment-author vcard">
                                            <img src="/images/author/author2.jpg" className="avatar" alt="image" />
                                            <b className="fn">Steven Smith</b>
                                            <span className="says">says:</span>
                                        </div>

                                        <div className="comment-metadata">
                                            <a href="/blog-details/#">
                                                Feb 24, 2020 at 10:59 am
                                            </a>
                                        </div>
                                    </footer>

                                    <div className="comment-content">
                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                    </div>

                                    <div className="reply">
                                        <Link href="/blog-details/#">
                                            <a className="comment-reply-link">Reply</a>
                                        </Link>
                                    </div>
                                </article>

                                <ol className="children">
                                    <li className="comment">
                                        <article className="comment-body">
                                            <footer className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src="/images/author/author3.jpg" className="avatar" alt="image" />
                                                    <b className="fn">Sarah Taylor</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <a href="/blog-details/#">
                                                        Feb 24, 2020 at 10:59 am
                                                    </a>
                                                </div>
                                            </footer>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link href="/blog-details/#">
                                                    <a className="comment-reply-link">Reply</a>
                                                </Link>
                                            </div>
                                        </article>
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>

                    <li className="comment">
                        <article className="comment-body">
                            <footer className="comment-meta">
                                <div className="comment-author vcard">
                                    <img src="/images/author/author4.jpg" className="avatar" alt="image" />
                                    <b className="fn">John Doe</b>
                                    <span className="says">says:</span>
                                </div>

                                <div className="comment-metadata">
                                    Feb 24, 2020 at 10:59 am
                                </div>
                            </footer>

                            <div className="comment-content">
                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                            </div>

                            <div className="reply">
                                <Link href="/blog-details/#">
                                    <a className="comment-reply-link">Reply</a>
                                </Link>
                            </div>
                        </article>

                        <ol className="children">
                            <li className="comment">
                                <article className="comment-body">
                                    <footer className="comment-meta">
                                        <div className="comment-author vcard">
                                            <img src="/images/author/author5.jpg" className="avatar" alt="image" />
                                            <b className="fn">James Anderson</b>
                                            <span className="says">says:</span>
                                        </div>

                                        <div className="comment-metadata">
                                            Feb 24, 2020 at 10:59 am
                                        </div>
                                    </footer>

                                    <div className="comment-content">
                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                    </div>

                                    <div className="reply">
                                        <Link href="/blog-details/#">
                                            <a className="comment-reply-link">Reply</a>
                                        </Link>
                                    </div>
                                </article>
                            </li>
                        </ol>
                    </li>
                </ol>

                {/* CommenstForm */}
                <CommenstForm />
            </div>
        );
    }
}

export default BlogComments;