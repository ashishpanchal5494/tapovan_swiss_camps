import Image from "next/image";
import Link from "next/link";
import React from "react";

interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
  animationDuration: number;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    whatsApp: string;
  };
}

const TeamCard: React.FC<TeamMemberProps> = ({
  id,
  name,
  role,
  image,
  description,
  socialLinks,
}) => {
  return (
    <div className="col-6 col-sm-6 col-md-6 col-lg-3">
      <div className="single-team-box">
        <div className="image">
          <Link
            href={{
              pathname: `/team/${id}`,
              query: {
                name: name,
                role: role,
                image: image,
                description: description,
                facebook: socialLinks.facebook,
                twitter: socialLinks.twitter,
                whatsApp: socialLinks.whatsApp,
                instagram: socialLinks.instagram,
              },
            }}
          >
            <Image
              width={400}
              height={400}
              src={image.startsWith("/") ? image : `/${image}`}
              alt={name}
              className="img-fluid"
            />
          </Link>
          <ul className="social-link">
            <li>
              <Link
                href={socialLinks.facebook}
                className="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-facebook"></i>
              </Link>
            </li>
            <li>
              <Link
                href={socialLinks.twitter}
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-twitter"></i>
              </Link>
            </li>
            <li>
              <Link
                href={socialLinks.instagram}
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-instagram"></i>
              </Link>
            </li>
            <li>
              <Link
                href={socialLinks.whatsApp}
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-whatsapp"></i>
              </Link>
            </li>
          </ul>
        </div>
        <div className="content">
          <h3>{name}</h3>
          <span>{role}</span>
          <i className="bx bx-share-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
