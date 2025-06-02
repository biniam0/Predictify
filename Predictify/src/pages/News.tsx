import { useQuery } from "@tanstack/react-query";
import NewsCard, { NewsType } from "../components/NewsCard";
import apiClient from "../configs/axiosConfig";

export default function News() {
  const { data: newsItems } = useQuery({
    queryKey: ["news"],
    queryFn: () => apiClient.get<NewsType[]>("/news").then((res) => res.data),
  });

  return (
    <section className="pt-[100px] px-4 md:px-12 bg-background text-foreground">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems?.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
}
