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
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-8">Previous Exams</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PREVIOUS_EXAMS.map((exam) => (
            <ExamCard key={exam.name} {...exam} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default PreviousExams;