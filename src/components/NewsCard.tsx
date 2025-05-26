import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";

interface NewsCardProps {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
}

const NewsCard = ({id, title, date, description, link}: NewsCardProps) => {
  return (
    <Card
      key={id}
      className="hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <p className="text-sm text-muted-foreground">{date}</p>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <a
          href={link}
          className="text-sm text-blue-600 mt-2 inline-block hover:underline"
        >
          Read More →
        </a>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
