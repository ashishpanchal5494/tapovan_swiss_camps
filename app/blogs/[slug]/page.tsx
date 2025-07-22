import BlogDetailsPage from "./BlogDetailsPage";

// --- Blog Data (Assuming this is fetched or imported) ---
const blogData = [
  {
    id: 1,
    image: "/assets/img/blog/gardenPhoto.webp",
    additionalImages: [
      "/assets/img/gallery/dining.webp",
      "/assets/img/gallery/vollyball.webp",
      "/assets/img/gallery/party.webp",
    ],
    category: "India",
    title: "Camping in Rishikesh - Tapovan Swiss Camps Ultimate Guide",
    slug: "camping-in-rishikesh",
    content: `

     <p style="font-weight: bold; font-size: 20px; margin-bottom: 20px;">Rishikesh, nestled in the foothills of the majestic Himalayas and along the sacred Ganga River, has emerged as India’s premier destination for riverside camping and adventure tourism. Whether you're seeking a luxury camping experience or prefer a rustic jungle escape, this spiritual town offers something for every kind of traveler. </p>


      <p style="margin-bottom: 10px;" >Tapovan Swiss Camps offers one of the finest luxury camping experiences in Rishikesh. Starting at just ₹999, our camp is perfect for families, couples, solo travelers, and adventure seekers. We provide comfortable AC and Cooler tents, stunning river views, serene nature surroundings, and top-notch services. Guests typically arrive at our camp around 12PM for check-in, where they are welcomed and guided to their pre-booked accommodations — be it <a style="color: #507650; font-weight: 600;" href="/tents/1?id=1&title=Luxury+AC+Tent&mainPrice=10495&price=7995&image=assets%2Fimg%2Froom%2FACTent1.webp&beds=5&baths=1&adults=5&checkIn=&checkOut=&perHeadPrice=1599&description=Experience+unparalleled+comfort+in+our+Luxury+AC+Tents%2C+designed+for+those+who+seek+a+perfect+blend+of+nature+and+modern+amenities.+These+spacious+5-bed+tents+feature+climate+control+to+ensure+your+comfort+in+all+seasons%2C+along+with+attached+bathrooms+for+privacy.+Enjoy+premium+bedding%2C+tasteful+decor%2C+and+ample+space+to+relax+after+a+day+of+adventure.+<br%2F>+<i>Please+note<%2Fi>%3A+To+maintain+a+healthy+environment+for+all+guests%2C+smoking+and+consumption+of+alcohol+are+strictly+prohibited+in+all+tents.+We+kindly+request+all+guests+to+help+us+keep+the+tents+clean+and+in+excellent+condition+for+everyone%27s+enjoyment.+<br%2F>+Located+amidst+lush+greenery%2C+our+AC+tents+offer+a+serene+retreat+while+keeping+you+connected+with+essential+conveniences.+Perfect+for+families+or+groups+looking+for+a+luxurious+camping+experience+without+compromising+on+comfort.&metaDescription=Book+our+luxury+AC+tents+in+Rishikesh+with+5+beds%2C+private+bath+%26+climate+control.+Perfect+for+family+glamping+with+modern+amenities+amidst+nature.">Luxury AC Tents</a>, <a style="color: #507650; font-weight: 600;" href="/tents/2?id=2&title=Luxury+Cooler+Tent&mainPrice=8495&price=6495&image=assets%2Fimg%2Froom%2FcoolerTent1.webp&beds=5&baths=1&adults=5&checkIn=&checkOut=&perHeadPrice=1299&description=Stay+cool+and+comfortable+in+our+Luxury+Cooler+Tents%2C+designed+to+provide+natural+ventilation+and+temperature+regulation.+These+well-appointed+tents+feature+5+comfortable+beds+and+attached+bathrooms%2C+offering+a+perfect+balance+between+outdoor+living+and+essential+comforts.+<br%2F>+<i>Important+rules<%2Fi>%3A+For+the+safety+and+comfort+of+all+guests%2C+smoking+and+drinking+alcohol+inside+the+tents+is+not+permitted.+We+appreciate+your+cooperation+in+maintaining+cleanliness+and+taking+care+of+the+tent+facilities+during+your+stay.+<br%2F>+The+evaporative+cooling+system+ensures+a+pleasant+environment+even+during+warmer+days.+Enjoy+the+sounds+of+nature+from+your+private+tent%2C+surrounded+by+our+beautifully+landscaped+property.+Ideal+for+those+who+want+a+comfortable+camping+experience+with+a+touch+of+traditional+cooling+methods.&metaDescription=Experience+natural+cooling+in+our+premium+tents+near+Ganga.+Perfect+for+couples+and+families+seeking+comfortable+camping+in+Rishikesh."> Luxury Cooler Tents </a>, or <a style="color: #507650; font-weight: 600;" href="/tents/3?id=3&title=Ordinary+Tent&mainPrice=5995&price=4995&image=assets%2Fimg%2Froom%2FordinaryTent1.webp&beds=3&baths=&adults=5&checkIn=&checkOut=&perHeadPrice=999&description=For+the+authentic+camping+enthusiasts%2C+our+Ordinary+Tents+offer+a+genuine+outdoor+experience+with+basic+comforts.+These+3-bed+tents+provide+shared+bathroom+facilities+and+simple%2C+clean+accommodations.+<br%2F>+<i>Guest+policies+<%2Fi>%3A+We+maintain+a+strict+no-smoking+and+no-alcohol+policy+in+all+tents+to+ensure+a+pleasant+environment+for+all+visitors.+Guests+are+expected+to+keep+their+tents+tidy+and+report+any+issues+to+our+staff+immediately.+<br%2F>+Perfect+for+budget-conscious+travelers+and+backpackers+who+want+to+immerse+themselves+in+nature+without+distractions.+Located+in+our+scenic+property%2C+these+tents+allow+you+to+enjoy+starry+nights+and+fresh+mountain+air+while+still+having+access+to+our+common+amenities+like+dining+areas+and+recreational+spaces.&metaDescription=Affordable+camping+tents+in+Rishikesh+for+backpackers+and+adventure+seekers.+Experience+real+camping+with+basic+amenities+near+the+Ganges."> Ordinary Tents </a>. Our well-maintained property boasts large open spaces ideal for group adventures and relaxation.</p>

     

      <div class="flex flex-col md:flex-row items-start gap-4">
        <div class="flex-1">
         <p>Our staff prepares a delicious buffet lunch featuring homely dishes like dal, roti, rice, aalu zeera, raita, and salad, served in a clean and organized dining area. Guests can also choose to order from our à la carte menu for a customized meal experience. Tapovan Swiss Camps is well-known for its exceptional food and service, consistently praised as the best camping in Rishikesh.</p>
        </div>
        <Image src="/assets/img/gallery/dining.webp" alt="Dining Area" width={500} height={400} className="rounded-xl shadow" style="width: 650px; margin: 10px 0;" />
      </div>

      <p>Our beautifully landscaped garden filled with vibrant flowers offers a peaceful escape for nature lovers. In the evening, we serve freshly made snacks including tea and aalu-pyaaz pakoras, which can be enjoyed in our poolside seating area — a favorite hangout for guests to relax and unwind.</p>

      <div class="flex flex-col md:flex-row items-start gap-4">
        <div class="flex-1">
          <p>We provide a dedicated playground where guests can enjoy outdoor games like volleyball, badminton, and cricket. For indoor fun, we offer activities such as chess, carrom, and magic cards — ensuring entertainment for all age groups.</p>
        </div>
        <Image src="/assets/img/gallery/vollyball.webp" alt="Volleyball Ground" width={400} height={300} className="rounded-xl shadow" style="width: 650px; margin: 10px 0;" />
      </div>
      <p> Surrounded by majestic mountains and waterfalls, Tapovan Swiss Camps is located in main Tapovan, making it easily accessible to nearby attractions such as:
<p>- Tapovan (1 km)</p>
<p>- Ganga Aarti Point (1.5 km)</p>
<p>- Tapovan Market (1 km)</p>
<p>- Street Food Lane (1.2 km)</p>
<p>- Triveni Ghat (4.5 km)</p>
<p>- Neelkanth Mahadev Temple (22 km)</p>
<p>- Secret Waterfall (0.5 km)</p>
<p>- River Rafting Point (1 km)</p>

<p>We also arrange bike rentals directly from the camp so that our guests can conveniently explore Rishikesh and its surroundings.</p>

      <p>Our team arranges river rafting experiences from the camp itself. After a thrilling adventure on the river, guests can return to their tents to relax and enjoy freshly prepared meals. At Tapovan Swiss Camps, we take pride in offering the best facilities, services, and an unforgettable camping experience. It’s not just a stay — it’s a memory in the making.</p>

      <div class="flex flex-col md:flex-row items-start gap-4">
        <div class="flex-1">
          <p>We hold a valid liquor license, so guests can responsibly enjoy drinks and food by the camp’s scenic seating area. Evenings come alive with our DJ party sessions, where music, lights, and bonfires create a vibrant ambiance. As the owner, I often find it hard to describe the joy these moments bring — it's something you have to experience to truly understand. We provide a decorated buffet dinner setup, complete with a cozy bonfire to elevate the luxury camping feel. At night, the entire camp glows with shimmering lights as music fills the air — an atmosphere our guests absolutely love.
</p>
        </div>
        <Image src="/assets/img/gallery/party.webp" alt="DJ Night and Lights" width={400} height={300} className="rounded-xl shadow" style="width: 650px; margin: 10px 0;"/>
      </div>

      <p>When guests rise the next morning and step outside their tents, they are greeted by golden sunlight, fresh mountain air, blooming flowers, and peaceful greenery. We serve morning tea, followed by a hearty breakfast of aalu ke parathe and poha — freshly prepared and full of flavor.</p>

      <p>Checkout time is always a bittersweet moment — filled with laughter, heartfelt goodbyes, and plenty of photo sessions. Guests often capture memories with selfies and group shots surrounded by the beautiful camp landscape.</p>

      <h3 style="margin-top: 20px;"><a style="color: #507650;  font-weight: 600;" href="/booking-form">Book </a> Your Best Rishikesh Camping Experience Today</h3>
      <p>Whether you're searching for a peaceful camping in rishikesh or an action-packed adventure, Rishikesh offers it all. Tapovan Swiss Camps is the perfect base for your camping experience.</p>
      
    `,
  },
  {
    id: 2,
    image: "/assets/img/blog/rafting_rishikesh.webp",
    category: "India",
    title: "Rafting in Rishikesh - Tapovan Swiss Camps starts ₹499",
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

`,
  },
  {
    id: 3,
    image: "/assets/img/blog/bangee_rishikesh.webp",
    category: "India",
    title: "Bungee Jumping in Rishikesh - Tapovan Swiss Camps",
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


  `,
  },
  {
    id: 4,
    image: "/assets/img/blog/bike_rent_rishikesh.webp",
    category: "India",
    title:
      "Bike Rental in Rishikesh - Complete 2025 Guide to Exploring on Two Wheels",
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

  const description =
    blog.slug === "camping-in-rishikesh"
      ? "Tapovan Swiss Camps offers one of the finest luxury camping experiences in Rishikesh. Starting at just ₹999, our camp is perfect for families, couples, solo travelers, and adventure seekers. We provide comfortable AC and Cooler tents, stunning river views, serene nature surroundings, and top-notch services. Book your stay today for best camping experience"
      : cleanContentForDescription(blog.content);

  const publishedTime = "2023-05-02T12:00:00Z"; // Should be dynamic in real app
  const modifiedTime = "2024-05-22T12:00:00Z"; // Should be dynamic in real app

  return {
    metadataBase: new URL(BASE_URL),
    title: `${blog.title}  `,
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
      title: `${blog.title}`,
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
  };
}

export default function BlogDetails() {
  return <BlogDetailsPage />;
}
