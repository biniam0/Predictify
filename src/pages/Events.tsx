import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

const events = [
  {
    id: 1,
    title: "Global Climate Symposium",
    date: "June 10, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Geneva, Switzerland",
    description:
      "Join top researchers discussing emerging trends in climate prediction and sustainability.",
    link: "#",
  },
  {
    id: 2,
    title: "AI for Social Impact Summit",
    date: "June 18, 2025",
    time: "2:00 PM - 6:00 PM",
    location: "Online",
    description:
      "A virtual summit exploring how AI is transforming humanitarian and social science research.",
    link: "#",
  },
  {
    id: 3,
    title: "Predictive Analytics Bootcamp",
    date: "July 5, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Berlin, Germany",
    description:
      "A hands-on workshop for early-career researchers to master predictive modeling tools.",
    link: "#",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      className="py-12 px-4 md:px-12 bg-background text-foreground"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card
            key={event.id}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <p className="text-sm text-muted-foreground">
                {event.date} — {event.time}
              </p>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-3">
                {event.description}
              </CardDescription>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                📍 {event.location}
              </p>
              <Button asChild>
                <a href={event.link}>Learn More</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
