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
    name: "Monthly Exam October",
    examDate: "2024-10-24",
    examLink: "https://script.google.com/macros/s/AKfycbyioAk5ogc13AKDX1SKv8CDZs5lSqkPpsAy74gf3WHHUuLW5Ew_z_qAQNK4EOxRm2KolA/exec",
    materialsLink: "https://drive.google.com/drive/folders/1mzZxSlkqSMb9dMhS3SPj1gufk8xlMLSH",
    solutionLink: "https://drive.google.com/file/d/11Ai9q5ap9ZvvFlvgYzDzeqgNVhXHan7k",
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
