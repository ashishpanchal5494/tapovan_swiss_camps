"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";

import "aos/dist/aos.css";

const Loading = dynamic(() => import("@/components/Loading"), { ssr: false });

// Optimize Dynamic Import
const TeamCard = dynamic(() => import("@/components/TeamCard"), {
  ssr: false,
  loading: () => <Loading />,
});

const teamMembers = [
  {
    id: 1,
    name: "Anuj Panchal",
    role: "Manager",
    image: "/assets/img/team/team-1.jpg",
    animationDuration: 1200,
    socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 2,
    name: "Rohit Panchal",
    role: "Property Manager",
    image: "/assets/img/team/team-2.jpg",
    animationDuration: 1400,
    socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 3,
    name: "Ramesh Panchal",
    role: "Owner",
    image: "/assets/img/team/team-3.jpg",
    animationDuration: 1600,
    socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
  {
    id: 4,
    name: "Ashish Panchal",
    role: "Developer",
    image: "/assets/img/team/team-4.jpg",
    animationDuration: 1800,
    socialLinks: { facebook: "#", twitter: "#", instagram: "#", linkedin: "#" },
  },
];

const Team: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section style={{ marginTop: "50px" }} className="team-area pb-60">
      <div className="container">
        <div
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1200"
          suppressHydrationWarning
        >
          <h2>Our Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua. Quis ipsum
            suspendisse ultrices gravida.
          </p>
        </div>
        <div className="row justify-content-center">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
