import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "./ui/card";
import { Button } from "./ui/button";

interface StoryType {
  id: number;
  title: string;
  author: string;
  excerpt: string;
  image: string;
  link: string;
}

interface StoryCardType {
  story: StoryType;
}

const StoryCard = ({ story }: StoryCardType) => {
  return (
    <Card
      key={story.id}
      className="overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-40 object-cover"
      />
      <CardHeader>
        <CardTitle>{story.title}</CardTitle>
        <p className="text-xs text-muted-foreground">By {story.author}</p>
      </CardHeader>
      <CardContent>
        <CardDescription>{story.excerpt}</CardDescription>
        <div className="mt-4">
          <Button asChild>
            <a href={story.link}>Read More</a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoryCard;
