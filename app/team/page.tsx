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
    image: "/assets/img/team/avatar.png",
    animationDuration: 1200,
    socialLinks: {
      facebook: "https://www.facebook.com/panchalanuj419",
      twitter: "#",
      instagram: "https://www.instagram.com/anuj_panchal_003/",
      whatsApp:
        "https://api.whatsapp.com/send?phone=+919205182131&text=I have a query",
    },
  },
  {
    id: 2,
    name: "Rohit Panchal",
    role: "Property Manager",
    image: "/assets/img/team/rohit.jpeg",
    animationDuration: 1400,
    socialLinks: {
      facebook: "https://www.facebook.com/ro.hit.3785",
      twitter: "#",
      instagram: "https://www.instagram.com/rohit_panchal7055/",
      whatsApp:
        "https://api.whatsapp.com/send?phone=+918077570122&text=I have a query",
    },
  },
  {
    id: 3,
    name: "Ramesh Panchal",
    role: "Owner",
    image: "/assets/img/team/avatar.png",
    animationDuration: 1600,
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      whatsApp:
        "https://api.whatsapp.com/send?phone=+919897317071&text=I have a query",
    },
  },
  {
    id: 4,
    name: "Ashish Panchal",
    role: "Developer",
    image: "/assets/img/team/ashish.png",
    animationDuration: 1800,
    socialLinks: {
      facebook: "https://www.facebook.com/profile.php?id=100027377063868",
      twitter: "#",
      instagram: "https://www.instagram.com/ashishpanchal_5494/",
      whatsApp:
        "https://api.whatsapp.com/send?phone=+917060839220&text=I have a query",
    },
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
            Meet the dedicated team behind Tapovan Swiss Camps – a group of
            passionate individuals working together to ensure every guest
            experiences comfort, adventure, and genuine hospitality. From
            management and operations to tech and innovation, each member brings
            a unique skill set that makes our resort a peaceful and well-run
            escape into nature.
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
