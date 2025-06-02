import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../../configs/axiosConfig";

import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

interface Focus {
  id?: number;
  title: string;
  description: string;
  imageUrl?: string;
}

export default function FocusesAdmin() {
  const { register, handleSubmit, reset } = useForm<Focus>();
  const queryClient = useQueryClient();

  /* ────────────────── fetch all focuses ────────────────── */
  const { data: focuses = [] } = useQuery({
    queryKey: ["focuses"],
    queryFn: async () => (await apiClient.get("/focuses")).data,
  });

  /* ────────────────── add a new focus ────────────────── */
  const mutation = useMutation({
    mutationFn: (newFocus: Focus) => apiClient.post("/add-focus", newFocus),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["focuses"] });
      reset();
    },
  });

  const onSubmit = (data: Focus) => mutation.mutate(data);

  /* ────────────────── UI ────────────────── */
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add Thematic Focus</h2>

      {/* form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title", { required: true })} />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Input id="description" {...register("description", { required: true })} />
        </div>

        <div>
          <Label htmlFor="imageUrl">Image URL (optional)</Label>
          <Input id="imageUrl" {...register("imageUrl")} />
        </div>

        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Adding…" : "Add Focus"}
        </Button>
      </form>

      {/* list */}
      <h3 className="text-lg font-semibold mt-8">Existing Focus Areas</h3>
      <ul className="mt-4 space-y-3">
        {focuses.map((f: Focus) => (
          <li key={f.id} className="border p-4 rounded-md">
            <p className="font-medium">{f.title}</p>
            <p className="text-sm">{f.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
