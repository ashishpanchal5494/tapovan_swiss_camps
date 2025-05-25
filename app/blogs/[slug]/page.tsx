"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import "aos/dist/aos.css";
import { notFound, useParams } from "next/navigation";
import Head from "next/head";
import Link from "next/link";

const blogData = [
  {
    id: 1,
    image: "/assets/img/blog/camping_rishikesh.webp",
    category: "India",
    title:
      "Camping in Rishikesh: The Ultimate Guide to an Unforgettable Experience",
    slug: "camping-in-rishikesh",
    content: `Rishikesh, nestled in the foothills of the Himalayas and along the banks of the Ganga, is a paradise for adventure lovers. Among its many offerings, camping in Rishikesh is an experience that blends nature, thrill, and peace. Whether you&lsquo;re a solo traveler, a couple, or a family, camping here brings you close to the serene beauty of Uttarakhand.

Why Choose Rishikesh for Camping?
- Breathtaking Views: Enjoy stunning riverside or jungle surroundings.
- Adventure Activities: Combine camping with rafting, trekking, zip-lining, and bungee jumping.
- Spiritual Vibes: Meditate or join Ganga Aarti at Triveni Ghat.
- Affordable Packages: Luxury and budget-friendly options available for every traveler.

Types of Camping Experiences
- Riverside Camping – Stay near the Ganga, enjoy cool breezes and bonfires.
- Luxury Camping – Swiss tents with attached washrooms, meals, and modern amenities.
- Jungle Camping – For those who seek a rustic and raw nature vibe.

Best Time for Camping in Rishikesh
- October to June is ideal, with pleasant weather and active adventure sports.
- Avoid monsoon season (July–September) due to high water levels.

Top Activities to Enjoy While Camping
- White Water Rafting
- Bonfire with Music
- Nature Walks & Waterfall Hikes
- Ganga Aarti at Triveni Ghat
- Yoga & Meditation Sessions

What to Pack for Your Camping Trip
- Light woolens (even in summer nights)
- Trekking shoes
- Flashlight
- Power bank
- Reusable water bottle
- Sunglasses & sunscreen

Why Book with Tapovan Swiss Camps?
- Riverside location with mountain views
- Clean, hygienic Swiss tents
- Home-cooked meals & bonfire nights
- Group discounts & customizable packages
- Friendly and trained staff

\ud83d\udcde Book now via WhatsApp or use our easy online booking!

FAQs
Q. Is camping safe in Rishikesh?
A. Yes, especially when booked with licensed camps like Tapovan Swiss Camp.

Q. Can I bring kids or elderly people?
A. Absolutely! We have comfortable tents for families and couples.

Q. Are meals included in the package?
A. Yes, most packages include breakfast, lunch, and dinner.

Conclusion
Camping in Rishikesh is more than just a stay — it&lsquo;s a refreshing break from daily life. Whether it&lsquo;s sitting around a bonfire, rafting through wild rapids, or gazing at starry skies, the memories you make here will stay forever. Book your experience today!

\ud83d\udc49 Book Your Rishikesh Camping Experience Now`,
  },
  {
    id: 2,
    image: "/assets/img/blog/rafting_rishikesh.webp",
    category: "India",
    title: "Rafting in Rishikesh – The Ultimate Adventure on the Ganga",
    slug: "rafting-in-rishikesh",
    content: `Rishikesh, the gateway to the Himalayas and the yoga capital of the world, is also India’s most sought-after destination for white water rafting. Whether you’re an adrenaline junkie or a first-time adventurer, **rafting in Rishikesh** offers the perfect blend of thrill and nature.

---

## Why Choose Rishikesh for Rafting?

- **Scenic Beauty:** The Ganga River flows through forested mountains and peaceful valleys.
- **Diverse Rapids:** Ranging from Grade I to Grade IV, suitable for both beginners and experts.
- **Safe & Regulated:** Licensed operators with certified guides ensure a safe experience.
- **Affordable Thrill:** Compared to global rafting destinations, Rishikesh offers budget-friendly adventure.

---

## Popular Rafting Routes

1. **Brahmapuri to Rishikesh (9 KM)**  
   - Ideal for families and first-timers  
   - Grade I & II rapids  
   - Duration: 1.5 to 2 hours  

2. **Shivpuri to Rishikesh (16 KM)**  
   - Most popular stretch  
   - Includes rapids like Roller Coaster & Golf Course  
   - Duration: 2 to 3 hours  

3. **Marine Drive to Rishikesh (24 KM)**  
   - Moderate level, perfect for group thrill  
   - Duration: 3 to 4 hours  

4. **Kaudiyala to Rishikesh (36 KM)**  
   - Advanced route with Grade IV rapids like “The Wall”  
   - Only for experienced rafters  

---

## Best Time for Rafting in Rishikesh

- **October to June** is ideal for rafting.
- **Avoid July to September** due to monsoon and high water levels.

---

## Safety Tips for Rafters

- Always wear a life jacket and helmet.
- Listen carefully to your rafting instructor.
- Avoid rafting if you have major health conditions.
- Don&lsquo;t carry valuables or electronics.
- Never attempt rafting under the influence of alcohol.

---

## What to Bring

- Quick-dry clothes or swimwear
- River sandals or waterproof footwear
- Sunscreen and sunglasses with straps
- Change of clothes
- Towel and water bottle

---

## Why Book Rafting with Tapovan Swiss Camps?

- Certified rafting partners with licensed guides  
- Packages available with camping + rafting combo  
- Free transport from campsite to rafting point  
- Riverside Swiss tents with meals and bonfire  
- Special discounts for groups and couples

---

## FAQs

**Q. Is rafting in Rishikesh safe for beginners?**  
Yes, routes like Brahmapuri and Shivpuri are safe and perfect for beginners with trained guides.

**Q. What is the age limit for rafting?**  
Generally, 14 to 60 years, but may vary slightly by operator and river conditions.

**Q. Can non-swimmers go rafting?**  
Absolutely. Life jackets are mandatory and guides are trained for all situations.

---

## Conclusion  
**Rafting in Rishikesh** is not just an adventure—it&lsquo;s a life-changing experience that combines nature, thrill, and serenity. Whether you come with friends, family, or solo, it&lsquo;s bound to be unforgettable. Book your rafting + camping combo with **Tapovan Swiss Camp** today and make memories that flow with the Ganga!

👉 **Ready to raft? [Contact Us Now on WhatsApp]**

---

Would you like a **featured image** for this blog? I can generate one showing a group rafting scene on the Ganga with lush hills in the background.`,
  },
  {
    id: 3,
    image: "/assets/img/blog/bangee_rishikesh.webp",
    category: "India",
    title: "Bungee Jumping in Rishikesh – Leap into the Ultimate Thrill",
    slug: "bungee-jumping-in-rishikesh",
    content: `Rishikesh, the adventure capital of India, offers one of the most thrilling experiences you can imagine – **bungee jumping**. If you crave an adrenaline rush and want to conquer your fears, this is your chance to take a leap (literally) over the stunning river valley of the Ganges.
  
  ---
  
  ## Why Try Bungee Jumping in Rishikesh?
  
  - **India&lsquo;s Highest Bungee Site:** With a height of 83 meters (272 feet), Rishikesh is home to the country&lsquo;s tallest fixed-platform jump.
  - **Scenic Location:** Jump off a cliff surrounded by the Shivalik Hills, over a river stream for a breathtaking view.
  - **Safety First:** Operated by trained professionals and safety experts from New Zealand.
  - **Bucket List Worthy:** This is not just a sport—it's a personal achievement you'll never forget.
  
  ---
  
  ## Top Bungee Spot in Rishikesh
  
  **Jumpin Heights – Mohan Chatti**  
  - Height: 83 meters  
  - Location: 20 km from Tapovan  
  - Certified by international safety standards  
  - Also offers: Flying Fox and Giant Swing
  
  ---
  
  ## Best Time for Bungee Jumping
  
  - **October to June** is the perfect time with clear skies and pleasant weather.
  - **Avoid Monsoon Season** (July–September) due to safety concerns from rain and high winds.
  
  ---
  
  ## Safety Guidelines
  
  - Age Limit: 12 years and above  
  - Weight Limit: 40 kg to 110 kg  
  - People with heart conditions, high BP, or recent surgeries should avoid the jump  
  - Wear comfortable, tight-fitting clothes  
  - Avoid jumping on a full stomach
  
  ---
  
  ## What to Expect
  
  - A short briefing by certified instructors  
  - Harnessing and security checks  
  - A walk to the edge (the most thrilling part!)  
  - The jump and rebound  
  - Certificate of completion and video (optional extra)
  
  ---
  
  ## Why Book with Tapovan Swiss Camps?
  
  - Easy cab arrangements to Jumpin Heights  
  - Discounted combos of **camping + bungee jumping**  
  - Clean, safe Swiss tents near Tapovan  
  - Meals, bonfire, and adventure all in one package  
  - Personalized itinerary for groups and couples
  
  ---
  
  ## FAQs
  
  **Q. Is bungee jumping in Rishikesh safe?**  
  Yes, especially with licensed operators like Jumpin Heights, following strict safety standards.
  
  **Q. Can I jump if I&lsquo;ve never done it before?**  
  Absolutely. Most jumpers are first-timers, and staff guide you through every step.
  
  **Q. Can I get a video of my jump?**  
  Yes, professional HD videos and photos are available for purchase at the site.
  
  ---
  
  ## Conclusion
  
  **Bungee jumping in Rishikesh** is more than an adventure—it's a memory of courage, freedom, and joy. Ready to feel alive like never before? Book your **bungee + camping combo** with Tapovan Swiss Camp and jump into one of the wildest experiences of your life.
  
  👉 **Book Now via WhatsApp or contact us online!**
  `,
  },
  {
    id: 4,
    image: "/assets/img/blog/bike_rent_rishikesh.webp",
    category: "India",
    title: "Bike Rent in Rishikesh – Ultimate Guide for 2025",
    slug: "bike-rent-in-rishikesh",
    content: `Want to explore Rishikesh on two wheels? Renting a bike in Rishikesh is the smartest, most adventurous way to soak in the Himalayan vibes and spiritual charm. Whether you&lsquo;re here for a short trip or an extended stay, a rented scooter or Royal Enfield gives you the freedom to ride at your own pace.

  🏍️ Why Choose Bike Rental in Rishikesh?
  Freedom to Explore: No fixed routes—ride to waterfalls, temples, or cafes when you want.

  Cost-Effective Travel: Save money on taxis and travel like a local.

  Scenic Routes: Ride along the Ganges, through forests, and up to hilltops.

  Adventure Friendly: Great for solo travelers, couples, and even groups.

  🔥 Popular Bikes Available for Rent
  Bike Model	Ideal For	Rental (Per Day)
  Activa / Jupiter	City travel	₹400 – ₹600
  Royal Enfield 350	Long distances	₹900 – ₹1300
  Avenger / Pulsar	Comfort rides	₹700 – ₹1000
  Himalayan / Xpulse	Off-road travel	₹1200 – ₹1600

  Prices may vary by season and rental duration.

  📍 Top Places to Ride Your Bike in Rishikesh
  Neer Garh Waterfall – Just 6 km away, a serene trek & bike combo.

  Laxman Jhula to Shivpuri Stretch – Scenic riverside road.

  Beatles Ashram (Chaurasi Kutia) – Spiritual ride with forest views.

  Kunjapuri Temple – Sunrise ride to a mountain-top temple.

  Vashishta Cave – Peaceful meditation spot outside the city buzz.

  ✅ Requirements for Bike Rental
  Valid Driving License

  Original ID Proof (Aadhar, Passport, etc.)

  Security Deposit (₹500 – ₹2000 depending on the vehicle)

  Age: 18+ for gearless, 21+ for geared bikes

  🔧 Inclusions & Add-ons
  Free helmets (mandatory)

  Unlimited kilometers (check with provider)

  Pickup/drop at Tapovan Swiss Camp (optional)

  Add-ons: Raincoat, luggage carrier, mobile holder

  🕒 Best Time for Bike Rides in Rishikesh
  October to April: Cool breeze, clear skies – perfect for outdoor rides.

  Avoid July–August: Rainy season can be slippery and dangerous.

  🔐 Safety Tips Before You Ride
  Inspect brakes, lights, horn before renting

  Always wear a helmet and follow local traffic rules

  Avoid riding at night in hilly or forested areas

  Don&lsquo;t overspeed—enjoy the journey, not just the destination!

  💬 FAQs
  Q: Is bike rental safe in Rishikesh?
  Yes, especially if you follow traffic rules and rent from a trusted provider.

  Q: Can I rent a bike without a license?
  No, a valid license is mandatory.

  Q: Are bikes available for self-drive only?
  Yes, most rentals are self-drive. Some providers offer guided rides too.

  Q: Do I need to refill fuel?
  Yes, bikes are usually provided with limited fuel. You refill as needed.

  📞 Why Book Bike Rental with Tapovan Swiss Camp?
  Trusted local tie-ups for best rates

  Hassle-free bike delivery at campsite

  Combo deals: Bike + Camping + Rafting packages

  24/7 assistance & flexible booking

  Group discounts available

  🚀 Conclusion
  Riding through Rishikesh on a bike is more than just travel—it&lsquo;s an experience. With bike rental services easily available, there&lsquo;s no reason to miss out on the hidden beauty of this Himalayan town. Whether it&lsquo;s adventure or peace you seek, a two-wheeler gives you the perfect balance.

  👉 Book your bike rental in Rishikesh now and explore like a local!`,
  },
];

const BlogDetails: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { slug } = useParams();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) return notFound();

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.title} />
      </Head>
      <div
        className={
          isMobile
            ? "blog-area blog-details-area ptb-200"
            : "blog-area blog-details-area pt-60"
        }
      >
        <div className="container">
          {/* Breadcrumbs */}

          {/* Blog Image */}
          <div className="blog-details-image">
            <Image
              src={blog.image}
              alt={`${blog.title} - Tapovan Swiss Camp`}
              width={600}
              height={400}
              priority
              quality={85}
            />
          </div>

          {/* Blog Title */}
          <h1>{blog.title}</h1>

          {/* Blog Content */}
          <div className="blog-details-content">
            <div>
              {blog.content.split("\n").map((para, idx) => (
                <div
                  dangerouslySetInnerHTML={{ __html: para.trim() }}
                  key={idx}
                ></div>
              ))}
            </div>
          </div>

          {/* Social Sharing */}
          <div className="social-sharing">
            <Link
              style={{ textDecoration: "none" }}
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                blog.title
              )}&url=${encodeURIComponent(
                `https://tapovanswisscampsofficial.com/blog/${blog.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on Twitter
            </Link>
            <Link
              style={{ textDecoration: "none" }}
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `https://tapovanswisscampsofficial.com/blogs/${blog.slug}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Share on Facebook
            </Link>
          </div>

          {/* Related Posts */}
          <div className="related-posts">
            <h3>You Might Also Like</h3>
            <div className="row">
              {blogData
                .filter((b) => b.id !== blog.id)
                .slice(0, 3)
                .map((related, key) => (
                  <div key={key} className="col-lg-4 col-md-6">
                    <div className="content-blog blog-grid">
                      <div className="inner">
                        <div className="thumbnail">
                          <Link
                            href={`/blogs/${related.slug}`}
                            key={related.id}
                          >
                            <Image
                              width={600}
                              height={600}
                              src={
                                related.image.startsWith("/")
                                  ? related.image
                                  : `/${related.image}`
                              }
                              alt={related.title}
                            />
                          </Link>
                          <div className="blog-category">
                            <Link style={{ textDecoration: "none" }} href="#">
                              {related.category}
                            </Link>
                          </div>
                        </div>
                        <div className="content">
                          <h5 className="title">
                            <Link
                              style={{ textDecoration: "none" }}
                              href={`/blogs/${related.slug}`}
                            >
                              {related.title}
                            </Link>
                          </h5>
                          <div className="read-more-btn">
                            <Link
                              style={{ textDecoration: "none" }}
                              className="blog-btn"
                              href={`/blogs/${related.slug}`}
                            >
                              Read More{" "}
                              <i className="bx bx-right-arrow-alt"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
