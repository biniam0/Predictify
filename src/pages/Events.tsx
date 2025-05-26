
import EventsCard from "../components/EventsCard";
import events from "../data/events";

export default function Events() {
  return (
    <section
      className="pt-[100px] py-12 px-4 md:px-12 bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventsCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
