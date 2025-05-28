import FocusCard from "../components/FocusCard";

import focuses from "../data/focuses";

export default function ThematicFocus() {
  return (
    <div className="pt-[100px] container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Thematic Focus</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Our work centers on addressing global challenges across multiple
          interdisciplinary themes.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {focuses.map((focus, index) => (
          <FocusCard focus={focus} key={index} index={0} />
        ))}
      </div>
    </div>
  );
}
