import { useQuery } from "@tanstack/react-query";
import ResearcherCard, { Researcher } from "../components/ResearcherCard";
import apiClient from "../configs/axiosConfig";

export default function Researchers() {
  const { data: researchers } = useQuery({
    queryKey: ["researchers"],
    queryFn: () =>
      apiClient.get<Researcher[]>("/researchers").then((res) => res.data),
  });

  return (
    <main className="pt-[100px] container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Meet Our Researchers
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {researchers?.map((r) => (
          <ResearcherCard key={r.name} {...r} />
        ))}
      </div>
    </main>
  );
}
