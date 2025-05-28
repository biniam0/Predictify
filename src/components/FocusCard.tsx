import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

interface FocusType {
  title: string;
  description: string;
  image: string;
}

interface FocusCardProps {
  focus: FocusType;
  index: number;
}

const FocusCard = ({ focus, index }: FocusCardProps) => {
  return (
    <Card key={index} className="overflow-hidden">
      <img
        src={focus.image}
        alt={focus.title}
        className="h-40 w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{focus.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{focus.description}</p>
      </CardContent>
    </Card>
  );
};

export default FocusCard;
