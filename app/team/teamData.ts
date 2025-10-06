export interface TeamMember {
  id: number;
  name: string;
  slug: string; // Clean URL slug
  role: string;
  image: string;
  description: string;
  expertise?: string[];
  experience?: string;
  education?: string;
  achievements?: string[];
  specialties?: string[];
  socialLinks: {
    facebook: string;
    twitter: string;
    instagram: string;
    whatsApp: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Anuj Panchal",
    slug: "anuj-panchal",
    role: "Operations Manager",
    image: "/assets/img/team/avatar.png",
    description:
      "Anuj Panchal holds a Master's degree and brings a wealth of knowledge and leadership to the team. With exceptional management skills and a strong ability to coordinate staff operations smoothly, he ensures the highest standards of service and organization at Tapovan Swiss Camps. His polite demeanor and professional attitude make him highly respected by both guests and team members alike.",
    expertise: ["Operations Management", "Customer Service", "Team Leadership"],
    experience: "5+ Years",
    education: "Master's Degree",
    achievements: ["Led 1000+ successful camping experiences", "Maintained 98% guest satisfaction rate"],
    specialties: ["Guest Relations", "Camp Operations", "Quality Assurance"],
    socialLinks: {
      facebook: "https://www.facebook.com/panchalanuj419",
      twitter: "#",
      instagram: "https://www.instagram.com/anuj_panchal_003/",
      whatsApp: "https://api.whatsapp.com/send?phone=+919205182131&text=I have a query",
    },
  },
  {
    id: 2,
    name: "Rohit Panchal",
    slug: "rohit-panchal",
    role: "Property Manager & Yoga Instructor",
    image: "/assets/img/team/rohit.jpeg",
    description:
      "Rohit Panchal is a certified professional yoga instructor with over 5 years of experience in teaching and practicing yoga. He holds a Master's degree in Yoga from Gurukul Kangri University, Haridwar, and brings a deep sense of discipline and mindfulness to the team. As the Property Manager at Tapovan Swiss Camps, he takes full responsibility for maintaining the space, ensuring cleanliness, comfort, and smooth operations throughout the resort. His dedication to both physical wellness and efficient management makes him a vital part of delivering a serene and rejuvenating experience for our guests.",
    expertise: ["Yoga Instruction", "Property Management", "Wellness Programs"],
    experience: "5+ Years",
    education: "Master's in Yoga - Gurukul Kangri University",
    achievements: ["Certified Yoga Instructor", "500+ successful wellness sessions"],
    specialties: ["Yoga & Meditation", "Wellness Coaching", "Property Management"],
    socialLinks: {
      facebook: "https://www.facebook.com/ro.hit.3785",
      twitter: "#",
      instagram: "https://www.instagram.com/rohit_panchal7055/",
      whatsApp: "https://api.whatsapp.com/send?phone=+918077570122&text=I have a query",
    },
  },
  {
    id: 3,
    name: "Ramesh Panchal",
    slug: "ramesh-panchal",
    role: "Founder & Owner",
    image: "/assets/img/team/avatar.png",
    description:
      "Ramesh Panchal is the visionary founder and owner of Tapovan Swiss Camps. With years of experience in the hospitality and tourism industry, he has built the camp with a mission to offer guests an unforgettable stay amidst the natural beauty of Tapovan. In addition to running the resort, he also owns *Vishwakarma Water*, a reputed construction company operating across multiple states in India. His entrepreneurial spirit, commitment to excellence, and dedication to quality service are the pillars that make Tapovan Swiss Camps a trusted and welcoming destination for guests from all over the country.",
    expertise: ["Business Strategy", "Hospitality Management", "Entrepreneurship"],
    experience: "10+ Years",
    education: "Business Management",
    achievements: ["Founded Tapovan Swiss Camps", "Built successful hospitality business"],
    specialties: ["Business Development", "Strategic Planning", "Hospitality Excellence"],
    socialLinks: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      whatsApp: "https://api.whatsapp.com/send?phone=+919897317071&text=I have a query",
    },
  },
  {
    id: 4,
    name: "Ashish Panchal",
    slug: "ashish-panchal",
    role: "Technical Director & Developer",
    image: "/assets/img/team/ashish.png",
    description:
      "Ashish Panchal is our technical expert and developer who ensures all digital systems run smoothly at Tapovan Swiss Camps. With expertise in web development and digital solutions, he manages our online presence, booking systems, and technical infrastructure. His innovative approach to technology helps us provide seamless digital experiences for our guests while maintaining the highest standards of service.",
    expertise: ["Web Development", "Digital Solutions", "System Management"],
    experience: "3+ Years",
    education: "Computer Science",
    achievements: ["Developed booking systems", "Enhanced digital presence"],
    specialties: ["Technology Solutions", "Digital Marketing", "System Optimization"],
    socialLinks: {
      facebook: "https://www.facebook.com/profile.php?id=100027377063868",
      twitter: "#",
      instagram: "https://www.instagram.com/ashishpanchal_5494/",
      whatsApp: "https://api.whatsapp.com/send?phone=+917060839220&text=I have a query",
    },
  },
];

// Helper function to get team member by slug
export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find(member => member.slug === slug);
}

// Helper function to get all team member slugs for static generation
export function getAllTeamMemberSlugs(): string[] {
  return teamMembers.map(member => member.slug);
}
