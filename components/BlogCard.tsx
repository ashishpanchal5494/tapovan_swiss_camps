import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  id: number;
  image: string;
  category: string;
  title: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, image, category, title }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="content-blog blog-grid"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div className="inner">
          <div className="thumbnail">
            <Link href={`/blogs/${id}`}>
              <Image
                width={600}
                height={600}
                src={image.startsWith("/") ? image : `/${image}`}
                alt="Blog Image"
              />
            </Link>
            <div className="blog-category">
              <Link style={{ textDecoration: "none" }} href="#">
                {category}
              </Link>
            </div>
          </div>
          <div className="content">
            <h5 className="title">
              <Link style={{ textDecoration: "none" }} href={`/blogs/${id}`}>
                {title}
              </Link>
            </h5>
            <div className="read-more-btn">
              <Link
                style={{ textDecoration: "none" }}
                className="blog-btn"
                href={`/blogs/${id}`}
                prefetch={true} // Explicitly enable prefetch (default in Next.js)
              >
                Read More <i className="bx bx-right-arrow-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
