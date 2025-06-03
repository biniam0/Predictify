import { useQuery } from "@tanstack/react-query";
import StoryCard, { StoryType } from "../components/StoryCard";
import apiClient from "../configs/axiosConfig";

export default function Stories() {
  const { data: storiesItem } = useQuery({
    queryKey: ["stories"],
    queryFn: () =>
      apiClient.get<StoryType[]>("/stories").then((res) => res.data),
  });
  return (
    <section
      className="pt-[100px] pb-12 px-4 md:px-12 bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Impact Stories</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {storiesItem?.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </section>
  );
}
