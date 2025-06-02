import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import apiClient from "../../configs/axiosConfig";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";

interface Event {
  id?: number;
  title: string;
  location?: string;
  date: string; // handled as string for input[type="date"]
  description?: string;
  imageUrl?: string;
}

export default function EventsAdmin() {
  const { register, handleSubmit, reset } = useForm<Event>();
  const queryClient = useQueryClient();

  const { data: events = [] } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await apiClient.get("/events");
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: (newEvent: Event) => apiClient.post("/add-event", newEvent),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      reset();
    },
  });

  const onSubmit = (data: Event) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-4">Add Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input id="title" {...register("title", { required: true })} />
        </div>
        <div>
          <Label htmlFor="location">Location</Label>
          <Input id="location" {...register("location")} />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" {...register("date", { required: true })} />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input id="description" {...register("description")} />
        </div>
        <div>
          <Label htmlFor="imageUrl">Image URL</Label>
          <Input id="imageUrl" {...register("imageUrl")} />
        </div>
        <Button type="submit">Add Event</Button>
      </form>

      <h3 className="text-lg font-semibold mt-8">Existing Events</h3>
      <ul className="mt-4 space-y-3">
        {events.map((event: Event) => (
          <li key={event.id} className="border p-4 rounded-md">
            <p className="font-medium">{event.title}</p>
            {event.location && <p className="text-sm text-gray-500">{event.location}</p>}
            <p className="text-sm">{event.date}</p>
            {event.description && <p className="text-sm">{event.description}</p>}
            {event.imageUrl && (
              <img src={event.imageUrl} alt={event.title} className="w-full h-auto mt-2 rounded" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
