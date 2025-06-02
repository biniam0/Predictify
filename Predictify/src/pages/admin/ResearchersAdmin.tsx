import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import apiClient from "../../configs/axiosConfig";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

interface Researcher {
  id: number
  name: string;
  title?: string;
  imageUrl?: string;
  bio?: string;
}

export default function ResearchersAdmin() {
  const { register, handleSubmit, reset } = useForm<Researcher>();
  const queryClient = useQueryClient();
  const { data: researchers = [] } = useQuery({
    queryKey: ["researchers"],
    queryFn: async () => {
      const res = await apiClient.get("/researchers");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: (newResearcher: Researcher) =>
      apiClient.post("/add-researcher", newResearcher),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["researchers"] }),
  });

  const onSubmit = (data: Researcher) => {
    mutation.mutate(data);
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add Researcher</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input placeholder="Name" {...register("name", { required: true })} />
        <Input placeholder="Title" {...register("title")} />
        <Input placeholder="Image URL" {...register("imageUrl")} />
        <Input placeholder="Bio" {...register("bio")} />
        <Button type="submit">Add</Button>
      </form>

      <h3 className="text-lg font-semibold mt-8">Existing Researchers</h3>
      <ul className="mt-4 space-y-2">
        {researchers.map((r: Researcher) => (
          <li key={r.id} className="border p-4 rounded-md">
            {r.name} - {r.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
