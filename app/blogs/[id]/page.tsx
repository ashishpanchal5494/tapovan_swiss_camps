"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogDetails: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      className={
        isMobile
          ? "blog-area blog-details-area ptb-200"
          : "blog-area blog-details-area pt-60"
      }
    >
      <div className="container">
        {/* Blog Image */}
        <div className="blog-details-image" data-aos="fade-up">
          <Image
            src="/assets/img/blog/blog-4.jpg"
            alt="Blog Image"
            width={600}
            height={400}
            priority
          />
        </div>

        {/* Blog Title */}
        <h3 data-aos="fade-up" data-aos-duration="1400">
          How H10 Hotels grew their marketing database by capturing first-party
          data?
        </h3>

        {/* Blog Content */}
        <div
          className="blog-details-content"
          data-aos="fade-up"
          data-aos-duration="1600"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ut enim sagittis, lacinia elit non, fermentum mauris...
          </p>
        </div>

        {/* Comment Section */}
        <div
          className="comment-area"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <h4 className="title">2 Comments</h4>
          <ul className="comment-list">
            <li className="comment">
              <article className="comment-body">
                <div className="single-comment">
                  <div className="comment-img">
                    <Image
                      src="/assets/img/testimonial/testimonial-1.png"
                      alt="Author Image"
                      width={50}
                      height={50}
                      loading="lazy"
                    />
                  </div>
                  <div className="comment-inner">
                    <h6 className="commenter">
                      <Link
                        style={{ textDecoration: "none", color: "#507650" }}
                        href="#"
                        className="hover-flip-item"
                      >
                        <span data-text="Andrew Smith">Andrew Smith</span>
                      </Link>
                    </h6>
                    <div className="comment-meta">
                      <time className="time-spent">
                        Jan 10, 2024 at 10:09 pm
                      </time>
                      <div className="reply">
                        <Link
                          style={{
                            textDecoration: "none",
                          }}
                          href="#"
                          className="comment-reply-link hover-flip-item-wrapper"
                        >
                          <span data-text="Reply">Reply</span>
                        </Link>
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                  </div>
                </div>
              </article>
            </li>
          </ul>
        </div>

        {/* Comment Form */}
        <div
          className="comment-respond"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h4 className="title">Leave a Reply</h4>
          <form action="#">
            <p className="comment-notes">
              <span id="email-notes">
                Your email address will not be published.
              </span>
            </p>
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Comment"
                  ></textarea>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="name">
                    Name <span>*</span>
                  </label>
                  <input id="name" type="text" name="name" required />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="form-group">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <input id="email" type="email" name="email" required />
                </div>
              </div>
              <div className="col-lg-12">
                <button
                  type="submit"
                  className="axil-btn btn-bg-primary w-auto"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
