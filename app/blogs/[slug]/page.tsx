import BlogDetailsPage from "./BlogDetailsPage";

// --- Blog Data (Assuming this is fetched or imported) ---
const blogData = [
  {
    id: 1,
    image: "/assets/img/blog/camping_rishikesh.webp",
    category: "India",
    title:
      "Camping in Rishikesh: The Ultimate Guide to an Unforgettable Himalayan Experience",
    slug: "camping-in-rishikesh",
    //     content: `Rishikesh, nestled in the foothills of the Himalayas and along the banks of the Ganga, is a paradise for adventure lovers. Among its many offerings, camping in Rishikesh is an experience that blends nature, thrill, and peace. Whether you&lsquo;re a solo traveler, a couple, or a family, camping here brings you close to the serene beauty of Uttarakhand.

    // Why Choose Rishikesh for Camping?
    // - Breathtaking Views: Enjoy stunning riverside or jungle surroundings.
    // - Adventure Activities: Combine camping with rafting, trekking, zip-lining, and bungee jumping.
    // - Spiritual Vibes: Meditate or join Ganga Aarti at Triveni Ghat.
    // - Affordable Packages: Luxury and budget-friendly options available for every traveler.

    // Types of Camping Experiences
    // - Riverside Camping – Stay near the Ganga, enjoy cool breezes and bonfires.
    // - Luxury Camping – Swiss tents with attached washrooms, meals, and modern amenities.
    // - Jungle Camping – For those who seek a rustic and raw nature vibe.

    // Best Time for Camping in Rishikesh
    // - October to June is ideal, with pleasant weather and active adventure sports.
    // - Avoid monsoon season (July–September) due to high water levels.

    // Top Activities to Enjoy While Camping
    // - White Water Rafting
    // - Bonfire with Music
    // - Nature Walks & Waterfall Hikes
    // - Ganga Aarti at Triveni Ghat
    // - Yoga & Meditation Sessions

    // What to Pack for Your Camping Trip
    // - Light woolens (even in summer nights)
    // - Trekking shoes
    // - Flashlight
    // - Power bank
    // - Reusable water bottle
    // - Sunglasses & sunscreen

    // Why Book with Tapovan Swiss Camps?
    // - Riverside location with mountain views
    // - Clean, hygienic Swiss tents
    // - Home-cooked meals & bonfire nights
    // - Group discounts & customizable packages
    // - Friendly and trained staff

    // \ud83d\udcde Book now via WhatsApp or use our easy online booking!

    // FAQs
    // Q. Is camping safe in Rishikesh?
    // A. Yes, especially when booked with licensed camps like Tapovan Swiss Camp.

    // Q. Can I bring kids or elderly people?
    // A. Absolutely! We have comfortable tents for families and couples.

    // Q. Are meals included in the package?
    // A. Yes, most packages include breakfast, lunch, and dinner.

    // Conclusion
    // Camping in Rishikesh is more than just a stay — it&lsquo;s a refreshing break from daily life. Whether it&lsquo;s sitting around a bonfire, rafting through wild rapids, or gazing at starry skies, the memories you make here will stay forever. Book your experience today!

    // \ud83d\udc49 Book Your Rishikesh Camping Experience Now`,
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

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// // Define your website's base URL for canonical and Open Graph URLs
const BASE_URL = "https://www.tapovanswisscampsofficial.com"; // **IMPORTANT: Replace with your actual domain**

// // // Function to clean up content for meta description (remove HTML entities like &lsquo; and shorten)
// // Function to clean up content for meta description
const cleanContentForDescription = (content: string, maxLength = 160) => {
  // Replace common HTML entities and markdown syntax
  const replacements: Record<string, string> = {
    "&lsquo;": "'",
    "&rsquo;": "'",
    "&ldquo;": '"',
    "&rdquo;": '"',
    "&mdash;": "—",
    "&nbsp;": " ",
    "\\*\\*": "", // Remove markdown bold
    "\\*": "", // Remove markdown italics
    "\\[.*\\]\\(.*\\)": "", // Remove markdown links
    "#+": "", // Remove markdown headings
    "-\\s": "", // Remove list markers
  };

  let cleaned = content;
  for (const [pattern, replacement] of Object.entries(replacements)) {
    cleaned = cleaned.replace(new RegExp(pattern, "g"), replacement);
  }

  // Remove HTML tags
  cleaned = cleaned.replace(/(<([^>]+)>)/gi, "");

  // Get the first meaningful paragraph (not empty after cleaning)
  const paragraphs = cleaned.split("\n").filter((p) => p.trim().length > 0);
  cleaned = paragraphs.length > 0 ? paragraphs[0] : cleaned;

  // Trim to max length without cutting words in middle
  if (cleaned.length > maxLength) {
    cleaned = cleaned.substring(0, maxLength);
    cleaned =
      cleaned.substring(0, Math.min(cleaned.length, cleaned.lastIndexOf(" "))) +
      "...";
  }

  return cleaned;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const blog = blogData.find((post) => post.slug === slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found - Tapovan Swiss Camps",
      description: "The blog post you are looking for does not exist.",
      alternates: {
        canonical: `${BASE_URL}/blog/${slug}`,
      },
    };
  }

  const description = cleanContentForDescription(blog.content);

  const publishedTime = "2023-05-02T12:00:00Z"; // Should be dynamic in real app
  const modifiedTime = "2024-05-22T12:00:00Z"; // Should be dynamic in real app

  return {
    metadataBase: new URL(BASE_URL),
    title: `${blog.title} | Tapovan Swiss Camps Blog`,
    description,
    keywords: [
      "Rishikesh camping",
      "camping in rishikesh",
      "camping in rishikesh tapovan",
      "riverside camping",
      "luxury camping",
      "jungle camping",
      "rafting in rishikesh",
      "ganga rafting",
      "shivpuri rafting",
      "shivpuri rafting price",
      "brahmpuri rafting",
      "brahmpuri rafting price",
      "marine drive rafting in rishikesh",
      "marine drive rafting in rishikesh price",
      "best time for rafting in rishikesh",
      "best time for camping in rishikesh",
      "yoga and meditation session",
      "book camping",
      "book rafting",
      "book bungee jumping",
      "rafting types",
      "rishikesh rafting price",
      "rishikesh rafting charge",
      "rishikesh rafting timing",
      "rafting in rishikesh",
      "rafting in rishikesh per person price",
      "rafting in rishikesh booking",
      "about camping in rishikesh",
      "about camping in rishikesh, tapovan",
      "about rishikesh",
      "rishikesh camping and rafting",
      "riverside camping in rishikesh",
      "best camping in rishikesh",
      "best camp in tapovan, rishikesh",
      "camping in rishikesh near ganga",
      "camping in rishikesh near river",
      "best camps in rishikesh near ganga",
      "cheapest camping in rishikesh",
      "Swiss camps Rishikesh",
      "Riverside camp Rishikesh",
      "Camp near Ganga river",
      "Ganga view camp Rishikesh",
      "Swimming pool camp in Rishikesh",
      "Rishikesh accommodation",
      "bungee jumping rishikesh",
      "bungee jumping in rishikesh",
      "bungee jumping in rishikesh price",
      "bungee jumping in rishikesh charges",
      "bungee jumping in rishikesh distance",
      "bungee jumping in rishikesh shivpuri",
      "bungee jumping in rishikesh age limit",
      "bungee jumping price per person",
      "bungee jumping price",
      "jumping heights",
      "best time for bungee jumping",
      "bike rent in rishikesh",
      "rishikesh bike rent",
      "bike rent price in rishikesh",
      "bikes available for rent",
      "activa rent price",
      "bike rent price",
      "bullet rent price in rishikesh",
    ],
    alternates: {
      canonical: `${BASE_URL}/blogs/${blog.slug}`,
    },
    openGraph: {
      title: `${blog.title} | Tapovan Swiss Camps`,
      description,
      url: `${BASE_URL}/blogs/${blog.slug}`,
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      type: "article",
      publishedTime,
      modifiedTime,
      authors: ["Tapovan Swiss Camps"],
      tags: [
        "Rishikesh camping",
        "camping in rishikesh",
        "camping in rishikesh tapovan",
        "riverside camping",
        "luxury camping",
        "jungle camping",
        "rafting in rishikesh",
        "ganga rafting",
        "shivpuri rafting",
        "shivpuri rafting price",
        "brahmpuri rafting",
        "brahmpuri rafting price",
        "marine drive rafting in rishikesh",
        "marine drive rafting in rishikesh price",
        "best time for rafting in rishikesh",
        "best time for camping in rishikesh",
        "yoga and meditation session",
        "book camping",
        "book rafting",
        "book bungee jumping",
        "rafting types",
        "rishikesh rafting price",
        "rishikesh rafting charge",
        "rishikesh rafting timing",
        "rafting in rishikesh",
        "rafting in rishikesh per person price",
        "rafting in rishikesh booking",
        "about camping in rishikesh",
        "about camping in rishikesh, tapovan",
        "about rishikesh",
        "rishikesh camping and rafting",
        "riverside camping in rishikesh",
        "best camping in rishikesh",
        "best camp in tapovan, rishikesh",
        "camping in rishikesh near ganga",
        "camping in rishikesh near river",
        "best camps in rishikesh near ganga",
        "cheapest camping in rishikesh",
        "Swiss camps Rishikesh",
        "Riverside camp Rishikesh",
        "Camp near Ganga river",
        "Ganga view camp Rishikesh",
        "Swimming pool camp in Rishikesh",
        "Rishikesh accommodation",
        "bungee jumping rishikesh",
        "bungee jumping in rishikesh",
        "bungee jumping in rishikesh price",
        "bungee jumping in rishikesh charges",
        "bungee jumping in rishikesh distance",
        "bungee jumping in rishikesh shivpuri",
        "bungee jumping in rishikesh age limit",
        "bungee jumping price per person",
        "bungee jumping price",
        "jumping heights",
        "best time for bungee jumping",
        "bike rent in rishikesh",
        "rishikesh bike rent",
        "bike rent price in rishikesh",
        "bikes available for rent",
        "activa rent price",
        "bike rent price",
        "bullet rent price in rishikesh",
      ],
      images: [
        {
          url: `${BASE_URL}${blog.image}`,
          width: 1200,
          height: 630,
          alt: blog.title,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | Tapovan Swiss Camps`,
      description,
      creator: "@tapovancamps", // Add your Twitter handle
      images: [`${BASE_URL}${blog.image}`],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function BlogDetails() {
  return <BlogDetailsPage />;
}
