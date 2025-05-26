import ResearcherCard from "../components/ResearcherCard";
import researchers from "../data/researchers";

export default function ResearchersPage() {
  return (
    <main id="about" className="container mx-auto px-4 py-10">
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
