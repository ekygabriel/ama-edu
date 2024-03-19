import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://www.anuoluwapomichaelayeni.com/about-me",
    },
    {
      url: "https://www.anuoluwapomichaelayeni.com/services/training-and-consultation",
    },
    {
      url: "https://www.anuoluwapomichaelayeni.com/services/courses",
    },
    {
      url: "https://www.anuoluwapomichaelayeni.com/portfolio",
    },
    {
      url: "https://www.anuoluwapomichaelayeni.com/about-me",
    },
  ];
}
