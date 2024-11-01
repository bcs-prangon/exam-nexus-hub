import Navigation from "@/components/Navigation";
import ExamCard from "@/components/ExamCard";

const CURRENT_EXAMS = [
  {
    name: "Mathematics Final",
    examDate: "2024-03-15",
    lastDate: "2024-03-20",
    examLink: "https://drive.google.com/example1",
    materialsLink: "https://drive.google.com/materials1",
  },
  {
    name: "Physics Midterm",
    examDate: "2024-03-18",
    examLink: "https://drive.google.com/example2",
    materialsLink: "https://drive.google.com/materials2",
  },
];

const CurrentExams = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-background/80">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 page-transition">
        <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">
          Current Exams
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {CURRENT_EXAMS.map((exam, index) => (
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

export default CurrentExams;