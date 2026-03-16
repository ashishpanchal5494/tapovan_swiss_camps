"use client";

import React from "react";
import Link from "next/link";

const SeoContent: React.FC = () => {
    return (
        <article className="seo-content-section py-5 bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <header className="mb-4 text-center">
                            <h2 className="fw-bold text-dark fs-3">
                                The Ultimate <span className="text-primary-custom">Camping</span> Experience in Rishikesh
                            </h2>
                        </header>

                        <section className="seo-text-block text-muted" style={{ lineHeight: "1.8", fontSize: "0.95rem" }}>
                            <p>
                                When it comes to experiencing the true beauty of the Himalayas, nothing beats authentic <strong>camping in Rishikesh</strong>. Nestled along the serene banks of the Ganga river, Tapovan Swiss Camps offers the perfect blend of luxury and raw nature. Whether you are looking for an adventurous weekend getaway or a peaceful retreat away from the city, our <Link href="/tents" className="text-primary-custom text-decoration-none fw-semibold">luxury camping tents</Link> provide an unmatched experience.
                            </p>

                            <h3 className="h5 fw-bold text-dark mt-4 mb-3">Why Choose Our Riverside Camping?</h3>
                            <p>
                                Choosing the right spot for <strong>camping</strong> is crucial for a memorable trip. Our premium Swiss tents, including high-end AC and cooler options, ensure that you enjoy the wilderness without sacrificing comfort. Imagine waking up to the gentle sound of the river, stepping out of your tent, and breathing in the fresh mountain air. From thrilling white-water rafting and nature walks to relaxing evening bonfires and yoga sessions, our campsite is designed to offer the best of Rishikesh.
                            </p>

                            <h3 className="h5 fw-bold text-dark mt-4 mb-3">Luxury Camping Meets Adventure</h3>
                            <p>
                                We believe that <strong>camping</strong> should be accessible and enjoyable for everyone—families, couples, and solo travelers alike. Our secure, well-maintained campsite features modern amenities, delicious authentic meals, and a pristine swimming pool. Dive into the heart of Uttarakhand&apos;s natural beauty and let us host your next unforgettable <Link href="/booking-form" className="text-primary-custom text-decoration-none fw-semibold">camping adventure</Link>.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default SeoContent;
