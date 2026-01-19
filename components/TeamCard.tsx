import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeamMemberProps {
  id: number;
  name: string;
  slug: string;
  role: string;
  image: string;
  description: string;
  expertise?: string[];
  experience?: string;
  education?: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    whatsApp: string;
  };
}

const TeamCard: React.FC<TeamMemberProps> = ({
  name,
  slug,
  role,
  image,
  expertise = [],
  experience,
  education,
  socialLinks,
}) => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div
        className="team-card bg-white rounded-4 shadow-sm h-100 overflow-hidden"
        style={{ animation: "fadeInUp 0.6s ease-out forwards" }}
      >
        <div className="team-image position-relative">
          <Link href={`/team/${slug}`}>
            <Image
              width={400}
              height={400}
              src={image.startsWith("/") ? image : `/${image}`}
              alt={`${name} - ${role} at Tapovan Swiss Camps`}
              className="img-fluid w-100"
              loading="lazy"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              style={{ height: "300px", objectFit: "cover" }}
            />
          </Link>
          <div className="team-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3">
            <div className="social-links d-flex gap-2">
              {socialLinks.facebook !== "#" && (
                <Link
                  href={socialLinks.facebook}
                  className="social-link facebook text-decoration-none d-flex align-items-center justify-content-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-facebook"></i>
                </Link>
              )}
              {socialLinks.instagram !== "#" && (
                <Link
                  href={socialLinks.instagram}
                  className="social-link instagram d-flex text-decoration-none align-items-center justify-content-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-instagram"></i>
                </Link>
              )}
              {socialLinks.whatsApp !== "#" && (
                <Link
                  href={socialLinks.whatsApp}
                  className="social-link whatsapp d-flex text-decoration-none align-items-center justify-content-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bx bxl-whatsapp"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="team-content p-4">
          <div className="team-info mb-3">
            <h3 className="h5 mb-1 fw-bold text-dark">{name}</h3>
            <p className="text-primary-custom mb-2 fw-semibold">{role}</p>
            {experience && (
              <div className="team-experience mb-2">
                <small className="text-muted">
                  <i className="bx bx-time me-1"></i>
                  {experience} Experience
                </small>
              </div>
            )}
            {education && (
              <div className="team-education mb-3">
                <small className="text-muted">
                  <i className="bx bx-graduation-cap me-1"></i>
                  {education}
                </small>
              </div>
            )}
          </div>
          {expertise && expertise.length > 0 && (
            <div className="team-expertise mb-3">
              <div className="expertise-tags d-flex flex-wrap gap-1">
                {expertise.slice(0, 2).map((skill, index) => (
                  <span
                    key={index}
                    className="badge bg-light text-primary-custom"
                  >
                    {skill}
                  </span>
                ))}
                {expertise.length > 2 && (
                  <span className="badge bg-light text-muted">
                    +{expertise.length - 2} more
                  </span>
                )}
              </div>
            </div>
          )}
          <div className="team-actions">
            <Link
              href={`/team/${slug}`}
              className="btn btn-outline-primary-custom btn-sm w-100"
            >
              <i className="bx bx-user me-2"></i>
              View Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
