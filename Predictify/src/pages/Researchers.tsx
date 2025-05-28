import { useEffect, useState } from "react";
// import axios from "axios";
import ResearcherCard, { Researcher } from "../components/ResearcherCard";
import apiClient from "../configs/axiosConfig";
// import researchers from "../data/researchers";

export default function Researchers() {
  const [researchers, setResearchers] = useState<Researcher[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await apiClient.get("/researchers").then((res) => res.data);
        setResearchers(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(researchers);

  return (
    <main className="pt-[100px] container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Meet Our Researchers
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {researchers.map((r) => (
          <ResearcherCard key={r.name} {...r} />
        ))}
      </div>
    </main>
  );
}
