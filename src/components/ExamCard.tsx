import { Calendar, Book, ClipboardList, ArrowRight } from "lucide-react";
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
    <Card className="card-hover overflow-hidden">
      <CardHeader className="space-y-3">
        <CardTitle className="text-xl font-bold text-gray-800">{name}</CardTitle>
        <CardDescription className="flex items-center gap-3 text-gray-600">
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-primary" />
            {examDate}
          </span>
          {lastDate && (
            <span className="flex items-center gap-2 text-secondary">
              <ArrowRight className="h-4 w-4" />
              {lastDate}
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-3">
          <Button asChild className="btn-primary group">
            <a href={examLink} target="_blank" rel="noopener noreferrer">
              <ClipboardList className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Take Exam
            </a>
          </Button>
          <Button asChild className="btn-secondary group">
            <a href={materialsLink} target="_blank" rel="noopener noreferrer">
              <Book className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Study Materials
            </a>
          </Button>
          {solutionLink && (
            <Button asChild className="btn-accent group">
              <a href={solutionLink} target="_blank" rel="noopener noreferrer">
                <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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