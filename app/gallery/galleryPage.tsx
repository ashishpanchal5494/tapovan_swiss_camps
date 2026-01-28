"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import Link from "next/link";

// Dynamically import Loading component to reduce initial bundle
const Loading = dynamic(() => import("@/components/Loading"), { ssr: false });

// Define the type for an image object
type GalleryImage = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  alt: string;
  featured?: boolean;
};

// Enhanced image data with categories and SEO-optimized content
const ImageData: GalleryImage[] = [
  // Luxury Tents Category
  {
    id: 17,
    image: "/assets/img/gallery/ACTent1.webp",
    category: "tents",
    title: "Luxury AC Swiss Tent",
    description: "Premium air-conditioned Swiss tent with modern amenities",
    alt: "Luxury AC Swiss tent accommodation at Tapovan Swiss Camps Rishikesh",
    featured: true,
  },
  {
    id: 18,
    image: "/assets/img/gallery/ACtent2.webp",
    category: "tents",
    title: "Deluxe AC Tent Interior",
    description: "Spacious interior of our premium AC tent",
    alt: "Interior view of deluxe AC tent with comfortable bedding at Tapovan Swiss Camps",
    featured: true,
  },
  {
    id: 19,
    image: "/assets/img/gallery/coolerTent1.webp",
    category: "tents",
    title: "Cooler Tent",
    description: "Comfortable cooler tent for budget-conscious travelers",
    alt: "Cooler tent accommodation at Tapovan Swiss Camps with natural ventilation",
    featured: false,
  },
  {
    id: 21,
    image: "/assets/img/gallery/tentPhoto.webp",
    category: "tents",
    title: "Swiss Tent Exterior",
    description: "Beautiful exterior view of our Swiss tents",
    alt: "Swiss tent exterior view at Tapovan Swiss Camps with mountain backdrop",
    featured: true,
  },
  {
    id: 22,
    image: "/assets/img/gallery/ordinaryTent2.webp",
    category: "tents",
    title: "Standard Tent",
    description: "Cozy standard tent accommodation",
    alt: "Standard tent accommodation at Tapovan Swiss Camps Rishikesh",
    featured: false,
  },
  {
    id: 23,
    image: "/assets/img/gallery/ordinaryTent3.webp",
    category: "tents",
    title: "Tent Setup",
    description: "Well-organized tent setup in natural surroundings",
    alt: "Tent setup and camping arrangement at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 20,
    image: "/assets/img/gallery/washroom.webp",
    category: "facilities",
    title: "Modern Washroom",
    description: "Clean and modern washroom facilities",
    alt: "Modern washroom facilities at Tapovan Swiss Camps with clean amenities",
    featured: false,
  },

  // Pool & Recreation Category
  {
    id: 25,
    image: "/assets/img/gallery/pool.webp",
    category: "recreation",
    title: "Swimming Pool",
    description: "Refreshing swimming pool for guests",
    alt: "Swimming pool at Tapovan Swiss Camps with mountain views",
    featured: true,
  },
  {
    id: 26,
    image: "/assets/img/gallery/pool2.webp",
    category: "recreation",
    title: "Pool Area",
    description: "Beautiful pool area with scenic views",
    alt: "Pool area at Tapovan Swiss Camps with natural surroundings",
    featured: false,
  },
  {
    id: 27,
    image: "/assets/img/gallery/pool3.webp",
    category: "recreation",
    title: "Pool Activities",
    description: "Guests enjoying pool activities",
    alt: "Guests enjoying swimming pool activities at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 28,
    image: "/assets/img/gallery/pool4.webp",
    category: "recreation",
    title: "Poolside Relaxation",
    description: "Relaxing by the poolside",
    alt: "Poolside relaxation area at Tapovan Swiss Camps Rishikesh",
    featured: false,
  },

  // Adventure Activities Category
  {
    id: 29,
    image: "/assets/img/gallery/vollyball.webp",
    category: "activities",
    title: "Volleyball Game",
    description: "Exciting volleyball matches at the camp",
    alt: "Volleyball game at Tapovan Swiss Camps with guests playing",
    featured: true,
  },
  {
    id: 30,
    image: "/assets/img/gallery/vollyball2.webp",
    category: "activities",
    title: "Beach Volleyball",
    description: "Beach volleyball by the riverside",
    alt: "Beach volleyball game at Tapovan Swiss Camps near Ganga river",
    featured: false,
  },
  {
    id: 31,
    image: "/assets/img/gallery/vollyball3.webp",
    category: "activities",
    title: "Team Sports",
    description: "Team building through sports activities",
    alt: "Team sports activities at Tapovan Swiss Camps for group bonding",
    featured: false,
  },
  {
    id: 38,
    image: "/assets/img/gallery/rafting.webp",
    category: "activities",
    title: "White Water Rafting",
    description: "Thrilling white water rafting adventure",
    alt: "White water rafting adventure at Tapovan Swiss Camps Rishikesh",
    featured: true,
  },
  {
    id: 39,
    image: "/assets/img/gallery/rafting2.webp",
    category: "activities",
    title: "Rafting Experience",
    description: "Guests enjoying rafting on Ganga",
    alt: "Guests enjoying rafting experience on Ganga river at Tapovan Swiss Camps",
    featured: true,
  },

  // Group & Social Category
  {
    id: 32,
    image: "/assets/img/gallery/group.webp",
    category: "groups",
    title: "Happy Campers",
    description: "Group of happy campers enjoying their stay",
    alt: "Happy campers group photo at Tapovan Swiss Camps Rishikesh",
    featured: true,
  },
  {
    id: 33,
    image: "/assets/img/gallery/group2.webp",
    category: "groups",
    title: "Family Gathering",
    description: "Family gathering at the campsite",
    alt: "Family gathering at Tapovan Swiss Camps with scenic backdrop",
    featured: false,
  },
  {
    id: 34,
    image: "/assets/img/gallery/group3.webp",
    category: "groups",
    title: "Friends Reunion",
    description: "Friends enjoying their reunion at camp",
    alt: "Friends reunion at Tapovan Swiss Camps with group activities",
    featured: false,
  },
  {
    id: 35,
    image: "/assets/img/gallery/group4.webp",
    category: "groups",
    title: "Group Activities",
    description: "Engaging group activities and games",
    alt: "Group activities and team building at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 36,
    image: "/assets/img/gallery/group5.webp",
    category: "groups",
    title: "Camp Community",
    description: "Building community through camping",
    alt: "Camp community and social interaction at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 37,
    image: "/assets/img/gallery/group6.webp",
    category: "groups",
    title: "Memorable Moments",
    description: "Creating memorable moments together",
    alt: "Memorable moments and group photos at Tapovan Swiss Camps",
    featured: false,
  },

  // Party & Events Category
  {
    id: 1,
    image: "/assets/img/gallery/party.webp",
    category: "events",
    title: "Evening Party",
    description: "Vibrant evening party at the camp",
    alt: "Evening party celebration at Tapovan Swiss Camps with bonfire",
    featured: true,
  },
  {
    id: 2,
    image: "/assets/img/gallery/party2.webp",
    category: "events",
    title: "Camp Celebration",
    description: "Special celebrations at the campsite",
    alt: "Camp celebration and party at Tapovan Swiss Camps Rishikesh",
    featured: false,
  },
  {
    id: 3,
    image: "/assets/img/gallery/party3.webp",
    category: "events",
    title: "Social Gathering",
    description: "Social gatherings and events",
    alt: "Social gathering and party at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 4,
    image: "/assets/img/gallery/party4.webp",
    category: "events",
    title: "Festive Atmosphere",
    description: "Festive atmosphere at the camp",
    alt: "Festive atmosphere and party at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 5,
    image: "/assets/img/gallery/party5.webp",
    category: "events",
    title: "Night Celebration",
    description: "Night celebrations and entertainment",
    alt: "Night celebration and party at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 6,
    image: "/assets/img/gallery/party6.webp",
    category: "events",
    title: "Group Party",
    description: "Group party and social events",
    alt: "Group party and celebration at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 7,
    image: "/assets/img/gallery/party7.webp",
    category: "events",
    title: "Camp Entertainment",
    description: "Entertainment and party activities",
    alt: "Camp entertainment and party activities at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 8,
    image: "/assets/img/gallery/party8.webp",
    category: "events",
    title: "Evening Entertainment",
    description: "Evening entertainment and fun",
    alt: "Evening entertainment and party at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 9,
    image: "/assets/img/gallery/party9.webp",
    category: "events",
    title: "Social Events",
    description: "Social events and celebrations",
    alt: "Social events and party at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 10,
    image: "/assets/img/gallery/party10.webp",
    category: "events",
    title: "Camp Festivities",
    description: "Camp festivities and celebrations",
    alt: "Camp festivities and party celebration at Tapovan Swiss Camps",
    featured: false,
  },

  // Nature & Scenery Category
  {
    id: 11,
    image: "/assets/img/gallery/slider-2.webp",
    category: "nature",
    title: "Scenic Views",
    description: "Beautiful scenic views of the campsite",
    alt: "Scenic views and natural beauty at Tapovan Swiss Camps Rishikesh",
    featured: true,
  },
  {
    id: 12,
    image: "/assets/img/gallery/gardenPhoto.webp",
    category: "nature",
    title: "Garden Area",
    description: "Beautiful garden area at the camp",
    alt: "Garden area and natural landscaping at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 13,
    image: "/assets/img/gallery/gardenPhoto1.webp",
    category: "nature",
    title: "Natural Landscaping",
    description: "Natural landscaping and greenery",
    alt: "Natural landscaping and garden at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 14,
    image: "/assets/img/gallery/gardenPhoto2.webp",
    category: "nature",
    title: "Garden Views",
    description: "Serene garden views and nature",
    alt: "Garden views and natural surroundings at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 15,
    image: "/assets/img/gallery/gardenPhoto3.webp",
    category: "nature",
    title: "Natural Beauty",
    description: "Natural beauty of the campsite",
    alt: "Natural beauty and garden landscape at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 16,
    image: "/assets/img/gallery/gardenPhoto4.webp",
    category: "nature",
    title: "Green Environment",
    description: "Green and eco-friendly environment",
    alt: "Green environment and natural garden at Tapovan Swiss Camps",
    featured: false,
  },
  {
    id: 24,
    image: "/assets/img/gallery/morning.webp",
    category: "nature",
    title: "Morning Views",
    description: "Beautiful morning views at the camp",
    alt: "Morning views and sunrise at Tapovan Swiss Camps Rishikesh",
    featured: true,
  },
];

export default function GalleryPage() {
  const blurDataUrl =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";
  const pageSize = 12;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredImages, setFilteredImages] = useState(ImageData);
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const preloadedImagesRef = useRef<Set<string>>(new Set());

  const pathname = usePathname();
  const showBreadcrumb = pathname === "/gallery";

  // Category definitions
  const categories = [
    { id: "all", name: "All Photos", count: ImageData.length },
    {
      id: "tents",
      name: "Luxury Tents",
      count: ImageData.filter((img) => img.category === "tents").length,
    },
    {
      id: "activities",
      name: "Adventure Activities",
      count: ImageData.filter((img) => img.category === "activities").length,
    },
    {
      id: "recreation",
      name: "Pool & Recreation",
      count: ImageData.filter((img) => img.category === "recreation").length,
    },
    {
      id: "groups",
      name: "Group Experiences",
      count: ImageData.filter((img) => img.category === "groups").length,
    },
    {
      id: "events",
      name: "Parties & Events",
      count: ImageData.filter((img) => img.category === "events").length,
    },
    {
      id: "nature",
      name: "Nature & Scenery",
      count: ImageData.filter((img) => img.category === "nature").length,
    },
    {
      id: "facilities",
      name: "Facilities",
      count: ImageData.filter((img) => img.category === "facilities").length,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Filter images based on selected category
  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredImages(ImageData);
    } else {
      setFilteredImages(
        ImageData.filter((img) => img.category === selectedCategory)
      );
    }
    setVisibleCount(pageSize);
  }, [selectedCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  if (!isClient) {
    return <Loading />;
  }

  const openModal = (image: string) => {
    prefetchImage(image);
    setIsModalLoading(true);
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalLoading(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const getImageDetails = (imagePath: string) => {
    return ImageData.find((img) => img.image === imagePath);
  };

  const prefetchImage = (imagePath: string) => {
    if (typeof window === "undefined") return;
    if (preloadedImagesRef.current.has(imagePath)) return;
    const preloadImg = new window.Image();
    preloadImg.src = imagePath;
    preloadedImagesRef.current.add(imagePath);
  };

  return (
    <>
      {/* Enhanced Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Tapovan Swiss Camps Photo Gallery",
          description:
            "Comprehensive gallery showcasing luxury camping facilities, adventure activities, and scenic views at Tapovan Swiss Camps in Rishikesh",
          url: "https://www.tapovanswisscampsofficial.com/gallery",
          image: ImageData.filter((img) => img.featured).map(
            (img) => `https://www.tapovanswisscampsofficial.com${img.image}`
          ),
          mainEntity: ImageData.map((img) => ({
            "@type": "ImageObject",
            contentUrl: `https://www.tapovanswisscampsofficial.com${img.image}`,
            name: img.title,
            description: img.description,
            caption: img.alt,
          })),
        })}
      </script>

      {/* Hero Section */}
      <section
        className={`gallery-hero bg-gradient-to-br from-green-50 to-blue-50 ${
          isMobile ? "pt-200" : "pt-60"
        }`}
      >
        {showBreadcrumb && (
          <nav aria-label="breadcrumb" className="container mb-2 mb-md-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Gallery
              </li>
            </ol>
          </nav>
        )}
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              <div className="hero-content">
                <h1
                  className="display-6 display-md-5 display-lg-4 fw-bold text-dark mb-3 mb-md-4"
                  style={{ fontSize: isMobile ? "1.5rem" : undefined }}
                >
                  Photo Gallery
                </h1>
                <p
                  className="lead text-muted mb-4 mb-md-5 px-2 px-md-0"
                  style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                >
                  Discover the beauty of{" "}
                  <span className="text-primary-custom fw-semibold">
                    luxury camping
                  </span>{" "}
                  and{" "}
                  <span className="text-primary-custom fw-semibold">
                    adventure activities
                  </span>{" "}
                  at Tapovan Swiss Camps
                </p>
                <div
                  className="hero-stats d-flex justify-content-center gap-2 gap-md-3 gap-lg-4 mb-4"
                  style={{
                    flexWrap: isMobile ? "nowrap" : "wrap",
                    gap: isMobile ? "0.5rem" : undefined,
                  }}
                >
                  <div
                    className="stat-item text-center px-2"
                    style={{
                      flex: isMobile ? "1 1 0" : undefined,
                      minWidth: isMobile ? "0" : undefined,
                    }}
                  >
                    <div
                      className="h5 h4-md text-primary-custom mb-1"
                      style={{ fontSize: isMobile ? "1rem" : undefined }}
                    >
                      {ImageData.length}+
                    </div>
                    <small
                      className="text-muted"
                      style={{ fontSize: isMobile ? "0.7rem" : undefined }}
                    >
                      Photos
                    </small>
                  </div>
                  <div
                    className="stat-item text-center px-2"
                    style={{
                      flex: isMobile ? "1 1 0" : undefined,
                      minWidth: isMobile ? "0" : undefined,
                    }}
                  >
                    <div
                      className="h5 h4-md text-primary-custom mb-1"
                      style={{ fontSize: isMobile ? "1rem" : undefined }}
                    >
                      {categories.length - 1}
                    </div>
                    <small
                      className="text-muted"
                      style={{ fontSize: isMobile ? "0.7rem" : undefined }}
                    >
                      Categories
                    </small>
                  </div>
                  <div
                    className="stat-item text-center px-2"
                    style={{
                      flex: isMobile ? "1 1 0" : undefined,
                      minWidth: isMobile ? "0" : undefined,
                    }}
                  >
                    <div
                      className="h5 h4-md text-primary-custom mb-1"
                      style={{ fontSize: isMobile ? "1rem" : undefined }}
                    >
                      HD
                    </div>
                    <small
                      className="text-muted"
                      style={{ fontSize: isMobile ? "0.7rem" : undefined }}
                    >
                      Quality
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="category-filters py-4 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="category-tabs d-flex justify-content-center gap-2 gap-md-3 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`btn-[#507650] rounded-pill px-3 px-md-4 py-2 text-nowrap ${
                      selectedCategory === category.id
                        ? "btn-primary-custom text-white"
                        : "btn"
                    }`}
                    onClick={() => handleCategoryChange(category.id)}
                    style={{
                      fontSize: isMobile ? "0.75rem" : undefined,
                      padding: isMobile ? "0.4rem 0.8rem" : undefined,
                    }}
                  >
                    {category.name}
                    <span
                      className="badge bg-light text-dark ms-2"
                      style={{ fontSize: isMobile ? "0.65rem" : undefined }}
                    >
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="seo-content py-4 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="seo-content-section text-center">
                <h2
                  className="h3 h2-md mb-3"
                  style={{ fontSize: isMobile ? "1.1rem" : undefined }}
                >
                  Experience Luxury Camping Through Our gallery
                </h2>
                <p
                  className="lead mb-4"
                  style={{ fontSize: isMobile ? "0.85rem" : undefined }}
                >
                  Browse our collection of premium camping photos showcasing the
                  unique experience at Tapovan Swiss Camps. From our{" "}
                  <strong>luxury Swiss tents in Rishikesh</strong> to exciting{" "}
                  <strong>riverside activities</strong>, these images capture
                  why we&apos;re considered the{" "}
                  <strong>best glamping destination near the Ganges</strong>.
                </p>

                <div className="row text-start">
                  <div className="col-md-6">
                    <h3
                      className="h5 mb-3"
                      style={{ fontSize: isMobile ? "0.95rem" : undefined }}
                    >
                      Gallery Highlights
                    </h3>
                    <ul
                      className="list-unstyled"
                      style={{ fontSize: isMobile ? "0.8rem" : undefined }}
                    >
                      <li className="mb-2">
                        <i
                          className="bx bx-check-circle text-primary-custom me-2"
                          style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                        ></i>
                        <strong>Luxury Tent Accommodations</strong> - Premium AC
                        and cooler tents
                      </li>
                      <li className="mb-2">
                        <i
                          className="bx bx-check-circle text-primary-custom me-2"
                          style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                        ></i>
                        <strong>Scenic Riverside Views</strong> - Beautiful
                        Ganga river panoramas
                      </li>
                      <li className="mb-2">
                        <i
                          className="bx bx-check-circle text-primary-custom me-2"
                          style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                        ></i>
                        <strong>Adventure Activities</strong> - Volleyball,
                        rafting and pool moments
                      </li>
                      <li className="mb-2">
                        <i
                          className="bx bx-check-circle text-primary-custom me-2"
                          style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                        ></i>
                        <strong>Group Camping Experiences</strong> - Perfect for
                        families and friends
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <h3
                      className="h5 mb-3"
                      style={{ fontSize: isMobile ? "0.95rem" : undefined }}
                    >
                      What You&apos;ll See
                    </h3>
                    <ul
                      className="list-unstyled"
                      style={{ fontSize: isMobile ? "0.8rem" : undefined }}
                    >
                      <li className="mb-2">
                        <i
                          className="bx bx-check-circle text-primary-custom me-2"
                          style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                        ></i>
                        <strong>Modern Amenities</strong> - Clean facilities and
                        comfortable accommodations
                      </li>
                      <li className="mb-2">
                        <i
                          className="bx bx-check-circle text-primary-custom me-2"
                          style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                        ></i>
                        <strong>Natural Beauty</strong> - Lush gardens and
                        mountain backdrops
                      </li>
                      <li className="mb-2">
                        <i
                          className="bx bx-check-circle text-primary-custom me-2"
                          style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                        ></i>
                        <strong>Social Events</strong> - Parties, celebrations,
                        and group activities
                      </li>
                      <li className="mb-2">
                        <i
                          className="bx bx-check-circle text-primary-custom me-2"
                          style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                        ></i>
                        <strong>Memorable Moments</strong> - Real guest
                        experiences and happy memories
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section py-4 py-md-5">
        <div className="container">
          <div className="row">
            {filteredImages.slice(0, visibleCount).map((item, index) => (
              <div key={item.id} className="col-6 col-md-4 col-lg-3 mb-4">
                <div
                  className="gallery-item position-relative overflow-hidden rounded-3 shadow-sm"
                  onClick={() => openModal(item.image)}
                  onMouseEnter={() => prefetchImage(item.image)}
                  onFocus={() => prefetchImage(item.image)}
                  onTouchStart={() => prefetchImage(item.image)}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="gallery-img w-100 h-auto"
                    width={400}
                    height={300}
                    loading={index < 4 ? "eager" : "lazy"}
                    quality={75}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    fetchPriority={index < 2 ? "high" : "auto"}
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    style={{
                      transition: "transform 0.3s ease",
                      objectFit: "cover",
                      height: isMobile ? "200px" : "250px",
                    }}
                  />
                  <div
                    className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-3"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(0,0,0,0.7))",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <div className="text-white">
                      <h6
                        className="mb-1"
                        style={{ fontSize: isMobile ? "0.85rem" : undefined }}
                      >
                        {item.title}
                      </h6>
                      <small
                        className="d-block"
                        style={{ fontSize: isMobile ? "0.7rem" : undefined }}
                      >
                        {item.description}
                      </small>
                    </div>
                  </div>
                  {item.featured && (
                    <div className="featured-badge position-absolute top-0 end-0 m-2">
                      <span
                        className="badge bg-primary-custom"
                        style={{ fontSize: isMobile ? "0.65rem" : undefined }}
                      >
                        Featured
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {filteredImages.length > visibleCount && (
            <div className="d-flex justify-content-center mt-3">
              <button
                className="btn btn-primary-custom text-white px-4"
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + pageSize, filteredImages.length)
                  )
                }
              >
                Load More Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div
          className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          onClick={closeModal}
          style={{
            backgroundColor: "rgba(0,0,0,0.9)",
            zIndex: 9999,
            backdropFilter: "blur(5px)",
          }}
        >
          <div
            className="modal-content position-relative"
            onClick={(e) => e.stopPropagation()}
          >
            {isModalLoading && (
              <div
                className="position-absolute top-50 start-50 translate-middle text-white d-flex align-items-center gap-2"
                style={{ zIndex: 10001 }}
              >
                <span className="spinner-border spinner-border-sm" />
                <span>Loading image...</span>
              </div>
            )}
            <button
              className="btn-close position-absolute top-0 end-0 m-3"
              onClick={closeModal}
              style={{
                backgroundColor: "white",
                opacity: 0.8,
                zIndex: 10000,
              }}
            ></button>
            <Image
              src={selectedImage}
              alt={getImageDetails(selectedImage)?.alt || "Gallery Image"}
              width={800}
              height={600}
              className="modal-img rounded-3"
              loading="eager"
              fetchPriority="high"
              priority
              quality={80}
              sizes="90vw"
              placeholder="blur"
              blurDataURL={blurDataUrl}
              unoptimized
              onLoadingComplete={() => setIsModalLoading(false)}
              onError={() => setIsModalLoading(false)}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                opacity: isModalLoading ? 0 : 1,
                transition: "opacity 0.2s ease",
              }}
            />
            {getImageDetails(selectedImage) && (
              <div
                className="modal-caption position-absolute bottom-0 start-0 w-100 p-3 text-white"
                style={{
                  background: "linear-gradient(transparent, rgba(0,0,0,0.8))",
                  borderBottomLeftRadius: "1rem",
                  borderBottomRightRadius: "1rem",
                }}
              >
                <h5
                  className="mb-1"
                  style={{ fontSize: isMobile ? "0.9rem" : undefined }}
                >
                  {getImageDetails(selectedImage)?.title}
                </h5>
                <p
                  className="mb-0 small"
                  style={{ fontSize: isMobile ? "0.75rem" : undefined }}
                >
                  {getImageDetails(selectedImage)?.description}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
