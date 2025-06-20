"use client";

import BlogCard from "@/components/BlogCard";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

const blogData = [
  {
    id: 1,
    image: "/assets/img/blog/camping_rishikesh.webp",
    category: "India",
    title:
      "Camping in Rishikesh: The Ultimate Guide to an Unforgettable Himalayan Experience",
    slug: "camping-in-rishikesh",
    content: `Rishikesh, nestled in the foothills of the Himalayas along the sacred Ganga River, has emerged as India's premier destination for riverside camping and adventure tourism. Whether you're seeking luxury camping in Rishikesh or a rustic jungle camping experience, this spiritual town offers diverse options for every traveler.

## Why Choose Rishikesh for Your Camping Adventure?

- **Breathtaking Riverside Camping**: Wake up to stunning views of the Ganga River from your Swiss tent
- **Adventure Camping Packages**: Combine your stay with white water rafting, trekking, and yoga sessions
- **Spiritual Camping Experience**: Meditate by the river or attend the famous Ganga Aarti at Triveni Ghat
- **Affordable Camping Options**: From budget tents to luxury Swiss camps with attached bathrooms

## Types of Camping Experiences in Rishikesh

### 1. Riverside Camping Near Ganga
Perfect for those who want to fall asleep to the sound of flowing water. Most riverside camps in Rishikesh offer:
- Comfortable Swiss tents
- Evening bonfires
- Riverside dining
- Easy access to rafting points

### 2. Luxury Camping in Tapovan
For travelers wanting comfort:
- Premium Swiss tents with attached washrooms
- Hot water facilities
- Multi-cuisine meals
- Mountain views

### 3. Jungle Camping in Shivpuri
A more adventurous option:
- Secluded forest location
- Basic amenities
- Closer to nature
- Perfect for group camping trips

## Best Time for Camping in Rishikesh

The ideal camping season runs from **October to June**, when the weather is pleasant and all adventure activities are operational. Monsoon season (July-September) is less ideal due to higher water levels and restricted rafting.

## Top 5 Activities to Combine with Your Rishikesh Camping Trip

1. **White Water Rafting** - Experience grade II-IV rapids on the Ganga
2. **Bonfire Nights** - Enjoy music and storytelling under the stars
3. **Waterfall Trekking** - Visit Neer Garh and other hidden waterfalls
4. **Yoga & Meditation** - Morning sessions by the river
5. **Visit Beatles Ashram** - Explore this iconic spiritual site

## What to Pack for Your Rishikesh Camping Trip

- Light woolens (evenings can be cool)
- Trekking shoes for nature walks
- Swimwear for rafting
- Sunscreen and sunglasses
- Reusable water bottle
- Power bank (limited charging facilities)

## Why Choose Tapovan Swiss Camps for Your Rishikesh Stay?

- Prime riverside location with mountain views
- Hygienic Swiss tents with modern amenities
- Delicious home-cooked vegetarian meals
- Customizable camping-rafting packages
- Expert staff to guide your adventures

## Frequently Asked Questions About Camping in Rishikesh

**Q: Is camping in Rishikesh safe for solo travelers?**  
A: Absolutely! Our camps have 24/7 security and are popular with solo adventurers.

**Q: What's included in a standard camping package?**  
A: Typically includes tent accommodation, meals, bonfire, and basic activities.

**Q: Can we book camping and rafting together?**  
A: Yes, we offer special combo packages that include both.

## Book Your Perfect Rishikesh Camping Experience Today

Whether you're looking for peaceful riverside camping or an action-packed adventure holiday, Rishikesh offers the best camping experiences in North India. Our Tapovan Swiss Camps provide the perfect base to explore this Himalayan paradise.

📞 Call/WhatsApp now to book your camping trip or check availability online!`,
  },
  {
    id: 2,
    image: "/assets/img/blog/rafting_rishikesh.webp",
    category: "India",
    title: "Rafting in Rishikesh – The Ultimate Adventure on the Ganga",
    slug: "rafting-in-rishikesh",
    content: `Rishikesh has earned its reputation as India's rafting capital, offering some of the most exciting white water rafting experiences in the Himalayas. From gentle grade I rapids to challenging grade IV stretches, the Ganga River provides perfect conditions for both beginners and experienced rafters.

## Why Rishikesh is India's Best Rafting Destination

- **Variety of Rapids**: Suitable for all skill levels
- **Scenic Beauty**: Raft through stunning Himalayan landscapes
- **Safety Standards**: Licensed operators with certified guides
- **Affordable Packages**: Cheaper than international rafting destinations
- **Perfect Combo**: Easily combined with camping and other adventures

## Detailed Guide to Rafting Stretches in Rishikesh

### 1. Brahmapuri to Rishikesh (9 KM)
- **Grade**: I-II (Beginner Friendly)
- **Duration**: 1.5-2 hours
- **Highlights**: Perfect for families and first-timers
- **Best For**: Those wanting a gentle introduction to rafting

### 2. Shivpuri to Rishikesh (16 KM) - Most Popular!
- **Grade**: II-III (Moderate)
- **Duration**: 2-3 hours
- **Famous Rapids**: Roller Coaster, Golf Course
- **Best For**: Adventure seekers wanting balanced thrills

### 3. Marine Drive to Rishikesh (24 KM)
- **Grade**: III (Intermediate)
- **Duration**: 3-4 hours
- **Best For**: Groups looking for extended rafting fun

### 4. Kaudiyala to Rishikesh (36 KM) - Expert Level!
- **Grade**: III-IV (Advanced)
- **Duration**: Full day
- **Challenging Rapids**: The Wall, Daniel's Dip
- **Best For**: Seasoned rafters seeking extreme adventure

## Best Time for Rafting in Rishikesh

The rafting season typically runs from **October to June**, with optimal conditions from November to April. Monsoon season (July-September) is closed for safety reasons.

## Essential Rafting Safety Tips

1. Always wear provided safety gear (helmet & life jacket)
2. Listen carefully to your guide's instructions
3. Secure loose items or leave valuables at camp
4. Stay hydrated but avoid alcohol before rafting
5. Know your limits - choose appropriate rapids

## What to Bring for Your Rafting Adventure

- Quick-dry clothing or swimwear
- Secure footwear (will get wet)
- Waterproof sunscreen
- Change of clothes for after
- Waterproof camera (if desired)

## Why Book Your Rafting with Tapovan Swiss Camps?

- Certified rafting partners with perfect safety record
- Convenient packages combining rafting and camping
- Free transport to starting points
- Expert guides with local knowledge
- Group discounts available

## Frequently Asked Questions

**Q: Is rafting safe for non-swimmers?**  
A: Yes! Life jackets keep you afloat and guides are trained to assist everyone.

**Q: What's the minimum age for rafting?**  
A: Generally 14 years for mild rapids, 16+ for more challenging stretches.

**Q: Can we get photos of our rafting trip?**  
A: Many operators offer professional photography services.

## Ready for the Ultimate Rafting Adventure?

Rishikesh offers world-class white water rafting at unbeatable prices. Whether you're looking for a gentle float or an adrenaline-pumping challenge, the Ganga has rapids to match every adventurer's dreams.

📞 Book your rafting package today and get ready to ride the river!`,
  },
  {
    id: 3,
    image: "/assets/img/blog/bangee_rishikesh.webp",
    category: "India",
    title:
      "Bungee Jumping in Rishikesh: Conquer India's Highest Jump at 83 Meters!",
    slug: "bungeeJumping-in-rishikesh",
    content: `Experience the ultimate adrenaline rush with bungee jumping in Rishikesh, home to India's highest fixed-platform jump at 83 meters (272 feet) above a stunning river valley. Operated to international safety standards, this is a bucket-list experience you'll never forget.

## Why Rishikesh is India's Premier Bungee Destination

- **Highest Jump in India**: 83-meter platform
- **Breathtaking Location**: Over a river in the Himalayan foothills
- **World-Class Safety**: Operated by experts from New Zealand
- **Combo Adventures**: Pair with giant swing or flying fox
- **Professional Media**: Optional HD videos of your jump

## Complete Bungee Jumping Experience Details

### The Jump Process:
1. Registration and safety briefing
2. Harness fitting and equipment check
3. Walk to the jump platform
4. The thrilling countdown and leap!
5. Rebound and lowering
6. Certificate presentation

### Technical Specifications:
- **Height**: 83 meters
- **Freefall**: Approximately 5 seconds
- **Location**: Mohan Chatti (20km from Rishikesh)
- **Operator**: Jumpin Heights (most experienced in India)

## Best Time for Bungee Jumping in Rishikesh

The ideal season runs from **October to June** when weather conditions are perfect. Avoid monsoon season (July-September) due to safety concerns.

## Essential Safety Information

- **Age Limit**: 12-60 years
- **Weight Limit**: 40-110 kg
- **Health Restrictions**: No heart conditions, high BP, or pregnancy
- **Clothing**: Fitted clothes (no loose items)
- **Footwear**: Secure shoes (provided if needed)

## What to Expect During Your Jump

- Intense adrenaline rush
- Breathtaking valley views
- Professional guidance at every step
- Sense of incredible accomplishment
- Optional video to relive the experience

## Why Book Your Bungee Jump with Tapovan Swiss Camps?

- Convenient transportation arrangements
- Special combo deals with camping
- Expert advice for first-time jumpers
- Hassle-free booking process
- Trusted local partners

## Frequently Asked Questions

**Q: Is bungee jumping really safe?**  
A: Yes, when performed at licensed facilities like Jumpin Heights with proper equipment and procedures.

**Q: Can I jump if I'm scared of heights?**  
A: Many jumpers conquer their fear this way! The staff are experts at calming nerves.

**Q: How should I prepare mentally?**  
A: Focus on the achievement rather than the fear - most say the anticipation is worse than the jump itself!

## Take the Leap of a Lifetime!

Bungee jumping in Rishikesh isn't just an activity - it's a transformative experience that tests your limits and rewards you with incredible memories. Whether you're an adrenaline junkie or looking to conquer fears, this is your moment.

📞 Book your jump today and get ready to fly!
  `,
  },
  {
    id: 4,
    image: "/assets/img/blog/bike_rent_rishikesh.webp",
    category: "India",
    title:
      "Bike Rental in Rishikesh: Complete 2025 Guide to Exploring on Two Wheels",
    slug: "bikeRent-in-rishikesh",
    content: `Discover the freedom of Rishikesh with bike rentals that let you explore Himalayan vistas, sacred ghats, and hidden waterfalls at your own pace. From economical scooters to powerful Royal Enfields, find the perfect ride for your Rishikesh adventure.

## Why Rent a Bike in Rishikesh?

- **Complete Freedom**: Explore beyond tourist buses and taxis
- **Cost Effective**: Cheaper than multiple cab rides
- **Scenic Routes**: Ride along the Ganga and through mountain roads
- **Flexible Stops**: Pause at viewpoints, cafes, and temples
- **Adventure Ready**: Access offbeat locations easily

## 2025 Bike Rental Options & Pricing

| Bike Model          | Best For            | Daily Rate (INR) |
|---------------------|---------------------|------------------|
| Honda Activa        | City Exploration    | ₹400-₹600        |
| Royal Enfield 350   | Long Distance Rides | ₹900-₹1300       |
| Bajaj Pulsar        | Balanced Performance| ₹700-₹1000       |
| Himalayan 411       | Off-Road Adventures | ₹1200-₹1600      |

*Prices may vary seasonally. Discounts available for weekly rentals.*

## Top 5 Scenic Bike Routes in Rishikesh

1. **Laxman Jhula to Neelkanth Mahadev Road**
   - Distance: 35km round trip
   - Highlights: Mountain views, waterfalls
   - Stop At: Garud Chatti waterfall

2. **Rishikesh to Kunjapuri Temple**
   - Distance: 25km uphill
   - Reward: Spectacular sunrise views
   - Tip: Start before dawn

3. **Riverside Ride to Shivpuri**
   - Distance: 16km along Ganga
   - Perfect For: Evening rides
   - Stop At: Beach cafes

4. **Beatles Ashram Loop**
   - Distance: 8km from Tapovan
   - Cultural Highlight: Famous music history

5. **Vashishta Gufa Meditation Ride**
   - Distance: 20km round trip
   - Peaceful Destination: Ancient cave

## Essential Rental Requirements

- Valid Driving License (International accepted)
- Original ID Proof (Passport/Aadhar)
- Security Deposit (₹500-₹2000)
- Minimum Age: 18 for scooters, 21 for bikes

## What's Included in Your Rental?

- Helmet (mandatory)
- Basic insurance
- 24/7 roadside assistance (with some providers)
- Unlimited kilometers (confirm with vendor)

## Safety Tips for Riding in Rishikesh

✔ Always wear your helmet  
✔ Check brakes and lights before riding  
✔ Avoid night riding on mountain roads  
✔ Go slow on wet roads  
✔ Don't overload the bike  
✔ Stay hydrated during rides  

## Why Book Through Tapovan Swiss Camps?

- Trusted local rental partners
- Best price guarantee
- Bike delivery at your campsite
- Combo deals with accommodation
- 24/7 support during your rental

## Frequently Asked Questions

**Q: Is an international license accepted?**  
A: Yes, along with your original passport.

**Q: What if the bike breaks down?**  
A: Reputable providers offer roadside assistance.

**Q: Can I rent for just a few hours?**  
A: Some providers offer hourly rentals at higher rates.

## Hit the Road - Book Your Bike Today!

Exploring Rishikesh by bike lets you discover hidden gems and create your own adventure. Whether you want to cruise along the Ganga or challenge Himalayan roads, two wheels offer the perfect freedom.

📞 Call now to reserve your bike or ask about our camping+bike packages!
    `,
  },
];

const generateStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Adventure Blogs – Tapovan Swiss Camps",
    description:
      "Explore expert travel tips and adventure guides for Rishikesh",
    url: "https://www.tapovanswisscampsofficial.com/blogs",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.tapovanswisscampsofficial.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Blogs",
          item: "https://www.tapovanswisscampsofficial.com/blogs",
        },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogData.map((blog, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          headline: blog.title,
          description: blog.content.substring(0, 200) + "...",
          url: `https://www.tapovanswisscampsofficial.com/blogs/${blog.slug}`,
          image: `https://www.tapovanswisscampsofficial.com${blog.image}`,
          datePublished: "2024-05-01T00:00:00Z", // Update with actual dates
          dateModified: "2024-05-20T00:00:00Z", // Update with actual dates
          author: {
            "@type": "Organization",
            name: "Tapovan Swiss Camps",
            url: "https://www.tapovanswisscampsofficial.com",
          },
          publisher: {
            "@type": "Organization",
            name: "Tapovan Swiss Camps",
            logo: {
              "@type": "ImageObject",
              url: "https://www.tapovanswisscampsofficial.com/logo.png",
              width: 600,
              height: 60,
            },
          },
        },
      })),
    },
  };

  return JSON.stringify(structuredData);
};

const BlogPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Efficient Mobile Resize Listener with debounce
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        checkMobile();
      }, 150);
    };

    checkMobile();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // AOS Init & Client Check
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <Loading />;

  const structuredData = generateStructuredData();
  return (
    <>
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      <div
        className={`blog-area ${isMobile ? "ptb-200" : "ptb-60"}`}
        suppressHydrationWarning
      >
        <div className="container">
          <div className="section-title">
            <h2>Adventure Blogs – Tapovan Swiss Camps</h2>
            <p>
              Read exciting stories and travel tips about camping, rafting,
              bungee jumping, and bike rentals in Rishikesh.
            </p>
          </div>
          <div className="row">
            {blogData.map((blog, index) => (
              <BlogCard key={blog.id ?? index} {...blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
