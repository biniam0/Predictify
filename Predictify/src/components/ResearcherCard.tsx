import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

type Researcher = {
  name: string;
  title: string;
  image?: string;
  bio?: string;
};

export default function ResearcherCard({ name, title, image, bio }: Researcher) {
  return (
    <Card className="p-4 shadow-md hover:shadow-lg transition rounded-2xl w-full">
      <CardContent className="flex flex-col items-center text-center">
        <Avatar className="w-24 h-24">
          <AvatarImage src={image} alt={name} style={{objectFit: "cover"}}/>
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3 className="text-lg font-semibold mt-4">{name}</h3>
        <p className="text-sm text-muted-foreground">{title}</p>
        {bio && <p className="text-sm mt-2 text-gray-500">{bio}</p>}
      </CardContent>
    </Card>
  );
}
