import { Calendar, Book, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExamCardProps {
  name: string;
  examDate: string;
  lastDate?: string;
  examLink: string;
  materialsLink: string;
  solutionLink?: string;
}

const ExamCard = ({
  name,
  examDate,
  lastDate,
  examLink,
  materialsLink,
  solutionLink,
}: ExamCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Exam Date: {examDate}
          {lastDate && <span className="ml-2">Last Date: {lastDate}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Button asChild className="btn-primary">
            <a href={examLink} target="_blank" rel="noopener noreferrer">
              <ClipboardList className="mr-2 h-4 w-4" />
              Take Exam
            </a>
          </Button>
          <Button asChild className="btn-secondary">
            <a href={materialsLink} target="_blank" rel="noopener noreferrer">
              <Book className="mr-2 h-4 w-4" />
              Study Materials
            </a>
          </Button>
          {solutionLink && (
            <Button asChild className="btn-accent">
              <a href={solutionLink} target="_blank" rel="noopener noreferrer">
                Solution
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExamCard;