import StoryCard from "../components/StoryCard";
import stories from "../data/stories";

export default function Stories() {
  return (
    <section
      id="stories"
      className="py-12 px-4 md:px-12 bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Impact Stories</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
