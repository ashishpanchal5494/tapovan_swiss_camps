"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Dynamically import Loading component to reduce initial bundle
const Loading = dynamic(() => import("@/components/Loading"), { ssr: false });

// Define the type for an image object
type GalleryImage = {
  id: number;
  image: string;
};

// Image data with TypeScript typing
const ImageData: GalleryImage[] = [
  { id: 1, image: "/assets/img/gallery/party.webp" },
  { id: 2, image: "/assets/img/gallery/party2.webp" },
  { id: 3, image: "/assets/img/gallery/party3.webp" },
  { id: 4, image: "/assets/img/gallery/party4.webp" },
  { id: 5, image: "/assets/img/gallery/party5.webp" },
  { id: 6, image: "/assets/img/gallery/party6.webp" },
  { id: 7, image: "/assets/img/gallery/party7.webp" },
  { id: 8, image: "/assets/img/gallery/party8.webp" },
  { id: 9, image: "/assets/img/gallery/party9.webp" },
  { id: 10, image: "/assets/img/gallery/party10.webp" },
  { id: 11, image: "/assets/img/gallery/slider-2.webp" },
  { id: 12, image: "/assets/img/gallery/gardenPhoto.webp" },
  { id: 13, image: "/assets/img/gallery/gardenPhoto1.webp" },
  { id: 14, image: "/assets/img/gallery/gardenPhoto2.webp" },
  { id: 15, image: "/assets/img/gallery/gardenPhoto3.webp" },
  { id: 16, image: "/assets/img/gallery/gardenPhoto4.webp" },
  { id: 17, image: "/assets/img/gallery/ACTent1.webp" },
  { id: 18, image: "/assets/img/gallery/ACtent2.webp" },
  { id: 19, image: "/assets/img/gallery/coolerTent1.webp" },
  { id: 20, image: "/assets/img/gallery/washroom.webp" },
  { id: 21, image: "/assets/img/gallery/tentPhoto.webp" },
  { id: 22, image: "/assets/img/gallery/ordinaryTent2.webp" },
  { id: 23, image: "/assets/img/gallery/ordinaryTent3.webp" },
  { id: 24, image: "/assets/img/gallery/morning.webp" },
  { id: 25, image: "/assets/img/gallery/pool.webp" },
  { id: 26, image: "/assets/img/gallery/pool2.webp" },
  { id: 27, image: "/assets/img/gallery/pool3.webp" },
  { id: 28, image: "/assets/img/gallery/pool4.webp" },
  { id: 29, image: "/assets/img/gallery/vollyball.webp" },
  { id: 30, image: "/assets/img/gallery/vollyball2.webp" },
  { id: 31, image: "/assets/img/gallery/vollyball3.webp" },
  { id: 32, image: "/assets/img/gallery/group.webp" },
  { id: 33, image: "/assets/img/gallery/group2.webp" },
  { id: 34, image: "/assets/img/gallery/group3.webp" },
  { id: 35, image: "/assets/img/gallery/group4.webp" },
  { id: 36, image: "/assets/img/gallery/group5.webp" },
  { id: 37, image: "/assets/img/gallery/group6.webp" },
  { id: 38, image: "/assets/img/gallery/rafting.webp" },
  { id: 39, image: "/assets/img/gallery/rafting2.webp" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  if (!isClient) {
    return <Loading />;
  }

  const openModal = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Tapovan Swiss Camps Photos",
          description:
            "Gallery showcasing our luxury camping facilities and activities in Rishikesh",
          url: "https://tapovanswisscampsofficial.com/gallery",
          image: [
            "https://tapovanswisscampsofficial.com/assets/img/gallery/tentPhoto.webp",
            "https://tapovanswisscampsofficial.com/assets/img/gallery/pool.webp",
            "https://tapovanswisscampsofficial.com/assets/img/gallery/rafting.webp",
          ],
        })}
      </script>

      <div
        className={
          isMobile ? "gallery-container ptb-200" : "gallery-container ptb-60"
        }
      >
        <h2 className="gallery-title">Our Camp & Resort Gallery</h2>

        <div className="seo-content-section">
          <h1>Experience Luxury Camping Through Our Gallery</h1>
          <p>
            Browse our collection of premium camping photos showcasing the
            unique experience at Tapovan Swiss Camps. From our{" "}
            <strong>luxury Swiss tents in Rishikesh</strong> to exciting{" "}
            <strong>riverside activities</strong>, these images capture why
            we&lsquo;re considered the{" "}
            <strong>best glamping destination near the Ganges</strong>.
          </p>

          <h2>Gallery Highlights</h2>
          <ul>
            <li>
              <strong>Luxury Tent Accommodations</strong> - See our premium AC
              and cooler tents
            </li>
            <li>
              <strong>Scenic Riverside Views</strong> - Beautiful Ganga river
              panoramas
            </li>
            <li>
              <strong>Adventure Activities</strong> - Volleyball, rafting and
              pool moments
            </li>
            <li>
              <strong>Group Camping Experiences</strong> - Perfect for families
              and friends
            </li>
          </ul>
        </div>

        <div className="gallery-grid">
          {ImageData.map((item) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => openModal(item.image)}
            >
              <Image
                src={item.image}
                alt={`Gallery Image ${item.id}`}
                className="gallery-img"
                width={400}
                height={300}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <Image
                src={selectedImage}
                alt="Enlarged Gallery Image"
                width={400}
                height={600}
                loading="lazy"
                className="modal-img"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
