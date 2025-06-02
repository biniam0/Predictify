import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../../configs/axiosConfig";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

interface Story {
  id?: number;
  title: string;
  author?: string;
  excerpt?: string;
  imageUrl?: string;
  link: string;
}

export default function StoriesAdmin() {
  const { register, handleSubmit, reset } = useForm<Story>();
  const queryClient = useQueryClient();

  const { data: stories = [] } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await apiClient.get("/stories");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: (newStory: Story) => apiClient.post("/add-stories", newStory),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      reset();
    },
  });

  const onSubmit = (data: Story) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add Story</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title", { required: true })} />
        </div>
        <div>
          <Label htmlFor="author">Author</Label>
          <Input id="author" {...register("author")} />
        </div>
        <div>
          <Label htmlFor="excerpt">Excerpt</Label>
          <Input id="excerpt" {...register("excerpt")} />
        </div>
        <div>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input id="imageUrl" {...register("imageUrl")} />
        </div>
        <div>
          <Label htmlFor="link">Link</Label>
          <Input id="link" {...register("link", { required: true })} />
        </div>
        <Button type="submit">Add Story</Button>
      </form>

      <h3 className="text-lg font-semibold mt-8">Existing Stories</h3>
      <ul className="mt-4 space-y-3">
        {stories.map((story: Story) => (
          <li key={story.id} className="border p-4 rounded-md">
            <p className="font-medium">{story.title}</p>
            {story.author && (
              <p className="text-sm text-gray-500">By {story.author}</p>
            )}
            {story.excerpt && <p className="text-sm">{story.excerpt}</p>}
            <a
              href={story.link}
              className="text-blue-600 text-sm underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
