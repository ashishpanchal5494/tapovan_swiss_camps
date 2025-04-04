"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
  title: string;
}

const Breadcrumb = ({ title }: BreadcrumbProps) => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <section className="breadscrumb-section ptb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadscrumb-contain">
              <h2>{title}</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <i className="bx bx-home-circle"></i>
                    </Link>
                  </li>
                  {pathSegments.map((segment, index) => {
                    const href = `/${pathSegments
                      .slice(0, index + 1)
                      .join("/")}`;
                    return (
                      <li
                        key={index}
                        className={`breadcrumb-item ${
                          index === pathSegments.length - 1 ? "active" : ""
                        }`}
                        aria-current={
                          index === pathSegments.length - 1 ? "page" : undefined
                        }
                      >
                        {index === pathSegments.length - 1 ? (
                          segment.replace(/-/g, " ")
                        ) : (
                          <Link href={href}>{segment.replace(/-/g, " ")}</Link>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
