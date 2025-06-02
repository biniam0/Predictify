import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../../configs/axiosConfig";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

interface News {
  id?: number;
  title: string;
  publishedAt: string; // <-- match backend
  description: string;
  imageUrl: string
  link: string;
}

export default function NewsAdmin() {
  const { register, handleSubmit, reset } = useForm<News>();
  const queryClient = useQueryClient();

  const { data: news = [] } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await apiClient.get("/news");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: (newNews: News) => apiClient.post("/add-news", newNews),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      reset();
    },
  });

  const onSubmit = (data: News) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add News</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title")} />
        </div>
        <div>
          <Label htmlFor="publishedAt">Date</Label>
          <Input id="publishedAt" type="date" {...register("publishedAt")} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input id="description" {...register("description")} />
        </div>
        <div>
          <Label htmlFor="imageUrl">Image</Label>
          <Input id="imageUrl" {...register("imageUrl")} />
        </div>
        <div>
          <Label htmlFor="link">Link</Label>
          <Input id="link" {...register("link")} />
        </div>
        <Button type="submit">Add News</Button>
      </form>

      <h3 className="text-lg font-semibold mt-8">Existing News</h3>
      <ul className="mt-4 space-y-3">
        {news.map((item: News) => (
          <li key={item.id} className="border p-4 rounded-md">
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-gray-500">{item.publishedAt}</p>
            <p className="text-sm">{item.description}</p>
            <a
              href={item.link}
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
