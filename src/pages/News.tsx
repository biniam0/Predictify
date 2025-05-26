import NewsCard from "../components/NewsCard";
import newsItems from "../data/news";

export default function News() {
  return (
    <section
      id="news"
      className="py-12 px-4 md:px-12 bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {newsItems.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </section>
  );
}
