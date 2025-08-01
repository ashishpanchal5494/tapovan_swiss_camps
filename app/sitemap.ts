// app/sitemap.ts
import { MetadataRoute } from "next";


const blogData = [
  {
    id: 1,
    slug: "camping-in-rishikesh",
  },
  {
    id: 2,
    slug: "rafting-in-rishikesh",
  },
  {
    id: 3,
    slug: "bungeeJumping-in-rishikesh",
  },
  {
    id: 4,
    slug: "bikeRent-in-rishikesh",
  },
];


const baseUrl = "https://www.tapovanswisscampsofficial.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const today = new Date().toISOString();


  // 📝 Generate blog detail pages
  const blogPages: MetadataRoute.Sitemap = blogData.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: today,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // 📄 Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/booking-form`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/testimonial`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.5,
    },
     {
      url: `${baseUrl}/tents`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.9,
    },
     {
      url: `${baseUrl}/tents/1?id=1&title=Luxury+AC+Tent&mainPrice=9995&price=7495&image=assets%2Fimg%2Froom%2FACTent1.webp&beds=5&baths=1&adults=5&checkIn=&checkOut=&perHeadPrice=1499&description=Experience+unparalleled+comfort+in+our+Luxury+AC+Tents%2C+designed+for+those+who+seek+a+perfect+blend+of+nature+and+modern+amenities.+These+spacious+5-bed+tents+feature+climate+control+to+ensure+your+comfort+in+all+seasons%2C+along+with+attached+bathrooms+for+privacy.+Enjoy+premium+bedding%2C+tasteful+decor%2C+and+ample+space+to+relax+after+a+day+of+adventure.+<br%2F>+<i>Please+note<%2Fi>%3A+To+maintain+a+healthy+environment+for+all+guests%2C+smoking+and+consumption+of+alcohol+are+strictly+prohibited+in+all+tents.+We+kindly+request+all+guests+to+help+us+keep+the+tents+clean+and+in+excellent+condition+for+everyone%27s+enjoyment.+<br%2F>+Located+amidst+lush+greenery%2C+our+AC+tents+offer+a+serene+retreat+while+keeping+you+connected+with+essential+conveniences.+Perfect+for+families+or+groups+looking+for+a+luxurious+camping+experience+without+compromising+on+comfort.&metaDescription=Stay+in+a+luxury+AC+tent+in+Tapovan+Rishikesh+with+5+beds%2C+attached+bath+%26+modern+comfort.+Best+riverside+camping+experience+for+families+%40+₹1499.`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
     {
      url: `${baseUrl}/tents/2?id=2&title=Luxury+Cooler+Tent&mainPrice=7495&price=5995&image=assets%2Fimg%2Froom%2FcoolerTent1.webp&beds=5&baths=1&adults=5&checkIn=&checkOut=&perHeadPrice=1199&description=Stay+cool+and+comfortable+in+our+Luxury+Cooler+Tents%2C+designed+to+provide+natural+ventilation+and+temperature+regulation.+These+well-appointed+tents+feature+5+comfortable+beds+and+attached+bathrooms%2C+offering+a+perfect+balance+between+outdoor+living+and+essential+comforts.+<br%2F>+<i>Important+rules<%2Fi>%3A+For+the+safety+and+comfort+of+all+guests%2C+smoking+and+drinking+alcohol+inside+the+tents+is+not+permitted.+We+appreciate+your+cooperation+in+maintaining+cleanliness+and+taking+care+of+the+tent+facilities+during+your+stay.+<br%2F>+The+evaporative+cooling+system+ensures+a+pleasant+environment+even+during+warmer+days.+Enjoy+the+sounds+of+nature+from+your+private+tent%2C+surrounded+by+our+beautifully+landscaped+property.+Ideal+for+those+who+want+a+comfortable+camping+experience+with+a+touch+of+traditional+cooling+methods.&metaDescription=Book+luxury+cooler+tents+in+Tapovan+Rishikesh+with+5+beds+%26+attached+bath.+Enjoy+natural+ventilation+%26+riverside+camping+comfort+near+Ganga+%40+₹1199.`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.9,
    },
     {
      url: `${baseUrl}/tents/3?id=3&title=Ordinary+Tent&mainPrice=5995&price=4995&image=assets%2Fimg%2Froom%2FordinaryTent1.webp&beds=3&baths=&adults=5&checkIn=&checkOut=&perHeadPrice=999&description=For+the+authentic+camping+enthusiasts%2C+our+Ordinary+Tents+offer+a+genuine+outdoor+experience+with+basic+comforts.+These+3-bed+tents+provide+shared+bathroom+facilities+and+simple%2C+clean+accommodations.+<br%2F>+<i>Guest+policies+<%2Fi>%3A+We+maintain+a+strict+no-smoking+and+no-alcohol+policy+in+all+tents+to+ensure+a+pleasant+environment+for+all+visitors.+Guests+are+expected+to+keep+their+tents+tidy+and+report+any+issues+to+our+staff+immediately.+<br%2F>+Perfect+for+budget-conscious+travelers+and+backpackers+who+want+to+immerse+themselves+in+nature+without+distractions.+Located+in+our+scenic+property%2C+these+tents+allow+you+to+enjoy+starry+nights+and+fresh+mountain+air+while+still+having+access+to+our+common+amenities+like+dining+areas+and+recreational+spaces.&metaDescription=Budget+tents+for+camping+in+Tapovan+Rishikesh+with+3+beds+%26+common+bath.+Perfect+for+backpackers+%26+adventure+lovers+seeking+riverside+nature+stay+%40+₹999.`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.9,
    },
     {
      url: `${baseUrl}/team`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.7,
    },
     {
      url: `${baseUrl}/gallery`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.7,
    },
     {
      url: `${baseUrl}/faq`,
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.8,
    },
  ];

  return [...staticPages, ...blogPages,];
}
