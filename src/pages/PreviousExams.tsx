import Navigation from "@/components/Navigation";
import ExamCard from "@/components/ExamCard";

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
];

const PreviousExams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-transition">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          Previous Exams
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PREVIOUS_EXAMS.map((exam, index) => (
            <div
              key={exam.name}
              style={{ animationDelay: `${index * 100}ms` }}
              className="card-hover"
            >
              <ExamCard {...exam} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PreviousExams;