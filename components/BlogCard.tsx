import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  slug: string;
  priority?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = memo(
  ({ image, category, title, slug, priority = false }) => {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="content-blog blog-grid">
          <div className="inner">
            <div className="thumbnail">
              <Link href={`/blogs/${slug}`} prefetch={false}>
                <Image
                  width={400}
                  height={300}
                  src={image.startsWith("/") ? image : `/${image}`}
                  alt={`${title} - Tapovan Swiss Camps Blog`}
                  loading={priority ? "eager" : "lazy"}
                  priority={priority}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
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
                <Link
                  style={{ textDecoration: "none" }}
                  href={`/blogs/${slug}`}
                >
                  {title}
                </Link>
              </h5>
              <div className="read-more-btn">
                <Link
                  style={{ textDecoration: "none" }}
                  className="blog-btn"
                  href={`/blogs/${slug}`}
                  aria-label={`Read more about ${title}`}
                >
                  Read More about: {title.split(" ").slice(0, 4).join(" ")}
                  {title.split(" ").length > 4 && "..."}
                  <i className="bx bx-right-arrow-alt" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

BlogCard.displayName = "BlogCard";

export default BlogCard;
