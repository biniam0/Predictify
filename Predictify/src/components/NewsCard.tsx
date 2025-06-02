import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";

export interface NewsType {
  id: number;
  title: string;
  date: string;
  imageUrl: string;
  description: string;
  link: string;
}

interface NewsCardProps {
  news: NewsType;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Card
      key={news.id}
      className="hover:shadow-lg transition-shadow duration-300"
    >
      <CardHeader>
        <CardTitle>{news.title}</CardTitle>
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-40 object-cover rounded-md"
        />
        <p className="text-sm text-muted-foreground">{news.date}</p>
      </CardHeader>
      <CardContent>
        <CardDescription>{news.description}</CardDescription>
        <a
          href={news.link}
          className="text-sm text-blue-600 mt-2 inline-block hover:underline"
          target="_blank"
        >
          Read More →
        </a>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
