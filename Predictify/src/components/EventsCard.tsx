import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

export interface EventType {
  id: number;
  title: string;
  date: string;
  time: string
  location: string;
  description: string;
  image?: string;
  link:string
}

interface EventCardProps {
  event: EventType;
}

const EventsCard = ({event}: EventCardProps) => {
  return (
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
        <CardDescription className="mb-3">{event.description}</CardDescription>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          📍 {event.location}
        </p>
        <Button asChild>
          <a href={event.link}>Learn More</a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default EventsCard;
