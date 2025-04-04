import React from "react";

interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  image: string;
  animationDuration: number;
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}

const TeamCard: React.FC<TeamMemberProps> = ({
  id,
  name,
  role,
  image,
  animationDuration,
  socialLinks,
}) => {
  return (
    <div
      className="col-lg-3 col-md-6 col-sm-6"
      data-aos="fade-up"
      data-aos-duration={animationDuration}
    >
      <div className="single-team-box">
        <div className="image">
          <a href={`team/${id}`}>
            <img src={image} alt={name} className="img-fluid" />
          </a>
          <ul className="social-link">
            <li>
              <a href={socialLinks.facebook} className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
            </li>
            <li>
              <a href={socialLinks.twitter} className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
            </li>
            <li>
              <a href={socialLinks.instagram} className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
            </li>
            <li>
              <a href={socialLinks.linkedin} className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
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
