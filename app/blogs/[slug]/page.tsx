// import { Metadata, ResolvingMetadata } from "next"; // Import Metadata type

import BlogDetailsPage from "./BlogDetailsPage";

export default function BlogDetails({ params }: { params: { slug: any } }) {
  return <BlogDetailsPage params={params} />;
}
