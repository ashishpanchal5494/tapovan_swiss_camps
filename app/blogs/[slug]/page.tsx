import BlogDetailsPage from "./BlogDetailsPage";
import { getBlogBySlug, getAllBlogSlugs } from "@/data/blogData";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

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
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Post Not Found - Tapovan Swiss Camps",
      description: "The blog post you are looking for does not exist.",
      alternates: {
        canonical: `${BASE_URL}/blogs/${slug}`,
      },
    };
  }

  // Dynamic description based on blog content
  const description =
    blog.metaDescription || cleanContentForDescription(blog.content);
  const publishedTime = blog.publishedDate || "2023-05-02T12:00:00Z";
  const modifiedTime = blog.modifiedDate || "2024-05-22T12:00:00Z";

  // Dynamic keywords based on blog topic
  const getTopicKeywords = (slug: string) => {
    const baseKeywords = [
      "Rishikesh",
      "Tapovan Swiss Camps",
      "adventure",
      "travel guide",
      "Himalayan tourism",
    ];

    if (slug.includes("camping")) {
      return [
        ...baseKeywords,
        "camping in rishikesh",
        "luxury camping",
        "Swiss tents",
        "riverside camping",
        "best camping in rishikesh",
        "camping near ganga",
        "family camping",
        "couple camping",
        "group camping",
        "camping price",
        "camping booking",
        "AC tents rishikesh",
        "cooler tents",
        "ordinary tents",
        "camping amenities",
      ];
    } else if (slug.includes("rafting")) {
      return [
        ...baseKeywords,
        "rafting in rishikesh",
        "white water rafting",
        "ganga rafting",
        "shivpuri rafting",
        "brahmpuri rafting",
        "marine drive rafting",
        "rafting price",
        "rafting safety",
        "rafting guide",
        "best time for rafting",
        "rafting booking",
        "adventure sports",
      ];
    } else if (slug.includes("bungee")) {
      return [
        ...baseKeywords,
        "bungee jumping rishikesh",
        "highest bungee jump",
        "adrenaline sports",
        "bungee jumping price",
        "bungee jumping safety",
        "jumpin heights",
        "adventure activities",
        "extreme sports",
        "bungee jumping booking",
      ];
    } else if (slug.includes("bike")) {
      return [
        ...baseKeywords,
        "bike rental rishikesh",
        "royal enfield rent",
        "scooter rental",
        "motorcycle rental",
        "bike rent price",
        "explore rishikesh",
        "himalayan bike ride",
        "bike tour",
        "two wheeler rental",
      ];
    }

    return baseKeywords;
  };

  const topicKeywords = getTopicKeywords(slug);

  return {
    metadataBase: new URL(BASE_URL),
    title: `${blog.seoTitle || blog.title} | Tapovan Swiss Camps`,
    description,
    keywords: topicKeywords,
    authors: [{ name: "Tapovan Swiss Camps" }],
    creator: "Tapovan Swiss Camps",
    publisher: "Tapovan Swiss Camps",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: `${BASE_URL}/blogs/${blog.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: `${blog.seoTitle || blog.title}`,
      description,
      url: `${BASE_URL}/blogs/${blog.slug}`,
      siteName: "Tapovan Swiss Camps",
      locale: "en_IN",
      type: "article",
      publishedTime,
      modifiedTime,
      authors: ["Tapovan Swiss Camps"],
      tags: topicKeywords,
      images: [
        {
          url: `${BASE_URL}${blog.image}`,
          width: 1200,
          height: 630,
          alt: `${blog.title} - Tapovan Swiss Camps`,
          type: "image/webp",
        },
        ...(blog.additionalImages || []).map((img) => ({
          url: `${BASE_URL}${img}`,
          width: 1200,
          height: 630,
          alt: `${blog.title} - Additional Image`,
          type: "image/webp",
        })),
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.seoTitle || blog.title}`,
      description,
      images: [`${BASE_URL}${blog.image}`],
    },
  };
}

export default function BlogDetails() {
  return <BlogDetailsPage />;
}

// Enable static generation for better performance
export const dynamic = "force-static";
export const revalidate = 86400; // Revalidate every 24 hours
