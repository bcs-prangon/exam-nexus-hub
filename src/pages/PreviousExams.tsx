import { useState } from "react";
import Navigation from "@/components/Navigation";
import ExamCard from "@/components/ExamCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PREVIOUS_EXAMS = [
  {
    name: "Chemistry Final 2023",
    examDate: "2023-12-15",
    examLink: "https://drive.google.com/example3",
    materialsLink: "https://drive.google.com/materials3",
    solutionLink: "https://drive.google.com/solution1",
  },
  {
    name: "Biology Midterm 2023",
    examDate: "2023-10-20",
    examLink: "https://drive.google.com/example4",
    materialsLink: "https://drive.google.com/materials4",
    solutionLink: "https://drive.google.com/solution2",
  },
  {
    name: "Physics Final 2023",
    examDate: "2023-11-01",
    examLink: "https://drive.google.com/example5",
    materialsLink: "https://drive.google.com/materials5",
    solutionLink: "https://drive.google.com/solution3",
  },
  {
    name: "Mathematics Midterm 2023",
    examDate: "2023-09-30",
    examLink: "https://drive.google.com/example6",
    materialsLink: "https://drive.google.com/materials6",
    solutionLink: "https://drive.google.com/solution4",
  },
  {
    name: "History Final 2023",
    examDate: "2023-12-20",
    examLink: "https://drive.google.com/example7",
    materialsLink: "https://drive.google.com/materials7",
    solutionLink: "https://drive.google.com/solution5",
  },
  {
    name: "Geography Midterm 2023",
    examDate: "2023-10-15",
    examLink: "https://drive.google.com/example8",
    materialsLink: "https://drive.google.com/materials8",
    solutionLink: "https://drive.google.com/solution6",
  },
  {
    name: "Biochemistry Final 2023",
    examDate: "2023-12-10",
    examLink: "https://drive.google.com/example9",
    materialsLink: "https://drive.google.com/materials9",
    solutionLink: "https://drive.google.com/solution7",
  },
  {
    name: "Literature Midterm 2023",
    examDate: "2023-11-25",
    examLink: "https://drive.google.com/example10",
    materialsLink: "https://drive.google.com/materials10",
    solutionLink: "https://drive.google.com/solution8",
  },
  {
    name: "Economics Final 2023",
    examDate: "2023-12-05",
    examLink: "https://drive.google.com/example11",
    materialsLink: "https://drive.google.com/materials11",
    solutionLink: "https://drive.google.com/solution9",
  },
  {
    name: "Statistics Midterm 2023",
    examDate: "2023-11-15",
    examLink: "https://drive.google.com/example12",
    materialsLink: "https://drive.google.com/materials12",
    solutionLink: "https://drive.google.com/solution10",
  },
];

const ITEMS_PER_PAGE = 10;

const PreviousExams = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredExams = PREVIOUS_EXAMS.filter((exam) =>
    exam.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredExams.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedExams = filteredExams.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-transition">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          Previous Exams
        </h1>
        <div className="relative max-w-md mx-auto mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search exams..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {paginatedExams.map((exam, index) => (
            <div
              key={exam.name}
              style={{ animationDelay: `${index * 100}ms` }}
              className="card-hover"
            >
              <ExamCard {...exam} />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    onClick={() => setCurrentPage(page)}
                    isActive={currentPage === page}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>
    </div>
  );
};

export default PreviousExams;
