export interface Tent {
  id: number;
  name: string;
  slug: string; // Clean URL slug
  title: string;
  seoTitle: string;
  metaDescription: string;
  mainPrice: number;
  price: number;
  image: string;
  altText: string;
  beds: number;
  baths: number | string;
  description: string;
  linkBooking: string;
  features: string[];
  amenities: string[];
  images: {
    id: number;
    url: string;
    alt: string;
  }[];
  category: string;
  capacity: {
    min: number;
    max: number;
  };
  highlights: string[];
  policies: string[];
}

export const tentRooms: Tent[] = [
  {
    id: 1,
    name: "Luxury AC Tent",
    slug: "luxury-ac-tent",
    title: "Luxury AC Tent",
    seoTitle: "Luxury AC Tent in Tapovan Rishikesh - Best camping experience at Tapovan swiss camps in @ ₹1499",
    metaDescription: "Stay in a luxury AC tent in Tapovan Rishikesh with 5 beds, attached bath & modern comfort. Best riverside camping experience for families @ ₹1499.",
    altText: "Luxury AC Glamping Tent in Rishikesh with mountain views",
    mainPrice: 1999,
    price: 1499,
    image: "assets/img/room/ACTent1.webp",
    beds: 5,
    baths: 1,
    description: "Experience unparalleled comfort in our Luxury AC Tents, designed for those who seek a perfect blend of nature and modern amenities. These spacious 5-bed tents feature climate control to ensure your comfort in all seasons, along with attached bathrooms for privacy. Enjoy premium bedding, tasteful decor, and ample space to relax after a day of adventure. <br/> <i>Please note</i>: To maintain a healthy environment for all guests, smoking and consumption of alcohol are strictly prohibited in all tents. We kindly request all guests to help us keep the tents clean and in excellent condition for everyone's enjoyment. <br/> Located amidst lush greenery, our AC tents offer a serene retreat while keeping you connected with essential conveniences. Perfect for families or groups looking for a luxurious camping experience without compromising on comfort.",
    linkBooking: "/booking-form",
    category: "Luxury",
    capacity: { min: 2, max: 5 },
    features: [
      "Air Conditioning",
      "Attached Bathroom",
      "Premium Bedding",
      "Climate Control",
      "Spacious Interior",
      "Modern Amenities"
    ],
    amenities: [
      "Comfortable Beds",
      "Clean Washrooms",
      "24/7 Water Supply",
      "Power Backup",
      "Swimming Pool",
      "Greenery With Flowers",
      "Dining Area",
      "Meals (Lunch, Dinner, Breakfast)",
      "Bonfire Area",
      "Outdoor Seating",
      "Volleyball Court, Cricket, Badminton",
      "Free Parking",
      "WiFi",
      "Security (CCTV)",
      "First Aid",
      "Menu (Order to Have)"
    ],
    images: [
      { id: 1, url: "/assets/img/room/ACTent1.webp", alt: "Luxury AC Tent exterior view" },
      { id: 2, url: "/assets/img/room/ACtent2.webp", alt: "Luxury AC Tent interior" },
      { id: 3, url: "/assets/img/room/washroom.webp", alt: "Attached bathroom" },
      { id: 4, url: "/assets/img/room/tentPhoto.webp", alt: "Tent setup" },
      { id: 5, url: "/assets/img/room/gardenPhoto.webp", alt: "Garden view" },
      { id: 6, url: "/assets/img/room/gardenPhoto1.webp", alt: "Beautiful garden" },
      { id: 7, url: "/assets/img/room/gardenPhoto2.webp", alt: "Natural surroundings" },
      { id: 8, url: "/assets/img/room/dining.webp", alt: "Dining area" },
      { id: 9, url: "/assets/img/room/pool.webp", alt: "Swimming pool" },
      { id: 10, url: "/assets/img/room/vollyball.webp", alt: "Volleyball court" },
      { id: 11, url: "/assets/img/room/group.webp", alt: "Group activities" }
    ],
    highlights: [
      "Premium AC comfort in nature",
      "Perfect for families and groups",
      "Riverside location with Ganga views",
      "Modern amenities with traditional charm"
    ],
    policies: [
      "No smoking or alcohol in tents",
      "Check-in: 12:00 PM, Check-out: 11:00 AM",
      "Children under 5 stay free",
      "Pets not allowed"
    ]
  },
  {
    id: 2,
    name: "Luxury Cooler Tent",
    slug: "luxury-cooler-tent",
    title: "Luxury Cooler Tent",
    seoTitle: "Luxury Cooler Tent in Tapovan Rishikesh - Best camping experience at Tapovan swiss camps in @ ₹1199",
    metaDescription: "Book luxury cooler tents in Tapovan Rishikesh with 5 beds & attached bath. Enjoy natural ventilation & riverside camping comfort near Ganga @ ₹1199.",
    altText: "Luxury Cooler Tent with natural ventilation in Rishikesh",
    mainPrice: 1499,
    price: 1199,
    image: "assets/img/room/coolerTent1.webp",
    beds: 5,
    baths: 1,
    description: "Stay cool and comfortable in our Luxury Cooler Tents, designed to provide natural ventilation and temperature regulation. These well-appointed tents feature 5 comfortable beds and attached bathrooms, offering a perfect balance between outdoor living and essential comforts. <br/> <i>Important rules</i>: For the safety and comfort of all guests, smoking and drinking alcohol inside the tents is not permitted. We appreciate your cooperation in maintaining cleanliness and taking care of the tent facilities during your stay. <br/> The evaporative cooling system ensures a pleasant environment even during warmer days. Enjoy the sounds of nature from your private tent, surrounded by our beautifully landscaped property. Ideal for those who want a comfortable camping experience with a touch of traditional cooling methods.",
    linkBooking: "/booking-form",
    category: "Luxury",
    capacity: { min: 2, max: 5 },
    features: [
      "Natural Ventilation",
      "Evaporative Cooling",
      "Attached Bathroom",
      "Comfortable Beds",
      "Traditional Cooling",
      "Spacious Design"
    ],
    amenities: [
      "Comfortable Beds",
      "Clean Washrooms",
      "24/7 Water Supply",
      "Power Backup",
      "Swimming Pool",
      "Greenery With Flowers",
      "Dining Area",
      "Meals (Lunch, Dinner, Breakfast)",
      "Bonfire Area",
      "Outdoor Seating",
      "Volleyball Court, Cricket, Badminton",
      "Free Parking",
      "WiFi",
      "Security (CCTV)",
      "First Aid",
      "Menu (Order to Have)"
    ],
    images: [
      { id: 1, url: "/assets/img/room/coolerTent1.webp", alt: "Luxury Cooler Tent" },
      { id: 2, url: "/assets/img/room/washroom.webp", alt: "Attached bathroom" },
      { id: 3, url: "/assets/img/room/tentPhoto.webp", alt: "Tent setup" },
      { id: 4, url: "/assets/img/room/gardenPhoto.webp", alt: "Garden view" },
      { id: 5, url: "/assets/img/room/gardenPhoto1.webp", alt: "Beautiful garden" },
      { id: 6, url: "/assets/img/room/gardenPhoto2.webp", alt: "Natural surroundings" },
      { id: 7, url: "/assets/img/room/dining.webp", alt: "Dining area" },
      { id: 8, url: "/assets/img/room/pool.webp", alt: "Swimming pool" },
      { id: 9, url: "/assets/img/room/vollyball.webp", alt: "Volleyball court" },
      { id: 10, url: "/assets/img/room/group.webp", alt: "Group activities" }
    ],
    highlights: [
      "Natural cooling system",
      "Eco-friendly ventilation",
      "Perfect for summer stays",
      "Traditional comfort with modern amenities"
    ],
    policies: [
      "No smoking or alcohol in tents",
      "Check-in: 12:00 PM, Check-out: 11:00 AM",
      "Children under 5 stay free",
      "Pets not allowed"
    ]
  },
  {
    id: 3,
    name: "Ordinary Tent",
    slug: "ordinary-tent",
    title: "Ordinary Tent",
    seoTitle: "Budget Camping Ordinary Tent in Tapovan Rishikesh - Best camping experience at Tapovan swiss camps in @ ₹999",
    metaDescription: "Budget tents for camping in Tapovan Rishikesh with 3 beds & common bath. Perfect for backpackers & adventure lovers seeking riverside nature stay @ ₹999.",
    altText: "Traditional camping tent in Rishikesh for budget travelers",
    mainPrice: 1199,
    price: 999,
    image: "assets/img/room/ordinaryTent1.webp",
    beds: 3,
    baths: "Common",
    description: "For the authentic camping enthusiasts, our Ordinary Tents offer a genuine outdoor experience with basic comforts. These 3-bed tents provide shared bathroom facilities and simple, clean accommodations. <br/> <i>Guest policies </i>: We maintain a strict no-smoking and no-alcohol policy in all tents to ensure a pleasant environment for all visitors. Guests are expected to keep their tents tidy and report any issues to our staff immediately. <br/> Perfect for budget-conscious travelers and backpackers who want to immerse themselves in nature without distractions. Located in our scenic property, these tents allow you to enjoy starry nights and fresh mountain air while still having access to our common amenities like dining areas and recreational spaces.",
    linkBooking: "/booking-form",
    category: "Budget",
    capacity: { min: 1, max: 3 },
    features: [
      "Authentic Camping",
      "Budget-Friendly",
      "Shared Facilities",
      "Basic Comforts",
      "Nature Immersion",
      "Backpacker Friendly"
    ],
    amenities: [
      "Comfortable Beds",
      "Common Washrooms",
      "24/7 Water Supply",
      "Power Backup",
      "Swimming Pool",
      "Greenery With Flowers",
      "Dining Area",
      "Meals (Lunch, Dinner, Breakfast)",
      "Bonfire Area",
      "Outdoor Seating",
      "Volleyball Court, Cricket, Badminton",
      "Free Parking",
      "WiFi",
      "Security (CCTV)",
      "First Aid",
      "Menu (Order to Have)"
    ],
    images: [
      { id: 1, url: "/assets/img/room/ordinaryTent1.webp", alt: "Ordinary Tent exterior" },
      { id: 2, url: "/assets/img/room/ordinaryTent2.webp", alt: "Ordinary Tent interior" },
      { id: 3, url: "/assets/img/room/ordinaryTent3.webp", alt: "Tent setup" },
      { id: 4, url: "/assets/img/room/gardenPhoto2.webp", alt: "Natural surroundings" },
      { id: 5, url: "/assets/img/room/gardenPhoto1.webp", alt: "Beautiful garden" },
      { id: 6, url: "/assets/img/room/dining.webp", alt: "Dining area" },
      { id: 7, url: "/assets/img/room/pool.webp", alt: "Swimming pool" },
      { id: 8, url: "/assets/img/room/vollyball.webp", alt: "Volleyball court" },
      { id: 9, url: "/assets/img/room/group.webp", alt: "Group activities" }
    ],
    highlights: [
      "Authentic camping experience",
      "Perfect for backpackers",
      "Budget-friendly option",
      "Close to nature"
    ],
    policies: [
      "No smoking or alcohol in tents",
      "Check-in: 12:00 PM, Check-out: 11:00 AM",
      "Children under 5 stay free",
      "Pets not allowed"
    ]
  }
];

// Helper function to get tent by slug
export function getTentBySlug(slug: string): Tent | undefined {
  return tentRooms.find(tent => tent.slug === slug);
}

// Helper function to get all tent slugs for static generation
export function getAllTentSlugs(): string[] {
  return tentRooms.map(tent => tent.slug);
}

// Helper function to get tents by category
export function getTentsByCategory(category: string): Tent[] {
  return tentRooms.filter(tent => tent.category === category);
}
