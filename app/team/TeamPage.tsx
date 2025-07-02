"use client";

import dynamic from "next/dynamic";

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
    description:
      "Anuj Panchal holds a Master’s degree and brings a wealth of knowledge and leadership to the team. With exceptional management skills and a strong ability to coordinate staff operations smoothly, he ensures the highest standards of service and organization at Tapovan Swiss Camps. His polite demeanor and professional attitude make him highly respected by both guests and team members alike.",
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
    description:
      "Rohit Panchal is a certified professional yoga instructor with over 5 years of experience in teaching and practicing yoga. He holds a Master’s degree in Yoga from Gurukul Kangri University, Haridwar, and brings a deep sense of discipline and mindfulness to the team. As the Property Manager at Tapovan Swiss Camps, he takes full responsibility for maintaining the space, ensuring cleanliness, comfort, and smooth operations throughout the resort. His dedication to both physical wellness and efficient management makes him a vital part of delivering a serene and rejuvenating experience for our guests.",
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
    description:
      "Ramesh Panchal is the visionary founder and owner of Tapovan Swiss Camps. With years of experience in the hospitality and tourism industry, he has built the camp with a mission to offer guests an unforgettable stay amidst the natural beauty of Tapovan. In addition to running the resort, he also owns *Vishwakarma Water*, a reputed construction company operating across multiple states in India. His entrepreneurial spirit, commitment to excellence, and dedication to quality service are the pillars that make Tapovan Swiss Camps a trusted and welcoming destination for guests from all over the country.",

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
    description: "",
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

const TeamPage: React.FC = () => {
  // Generate Person schema for each team member
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tapovan Swiss Camps",
    url: "https://tapovanswisscampsofficial.com",
    logo: "https://tapovanswisscampsofficial.com/assets/img/logo.png",
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
      description: member.description,
      image: `https://tapovanswisscampsofficial.com/${member.image}`,

      sameAs: Object.values(member.socialLinks).filter((link) => link !== "#"),
    })),
  };

  return (
    <>
      {/* Organization & Team Schema */}
      <script type="application/ld+json">{JSON.stringify(teamSchema)}</script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://tapovanswisscampsofficial.com",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Our Team",
              item: "https://tapovanswisscampsofficial.com/team",
            },
          ],
        })}
      </script>

      <section style={{ marginTop: "50px" }} className="team-area pb-60">
        <div className="container">
          <div className="section-title">
            <h1>Tapovan Swiss Camps Team</h1>
            <p className="lead">
              The heart and soul behind your unforgettable Rishikesh camping
              experience. Our dedicated team combines{" "}
              <strong>local expertise</strong> with{" "}
              <strong>camping and rafting professionals</strong> to create
              magical moments by the Ganges.
            </p>
          </div>
          <div className="row justify-content-center">
            {teamMembers.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamPage;
