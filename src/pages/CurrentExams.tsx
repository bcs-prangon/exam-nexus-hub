import Navigation from "@/components/Navigation";
import ExamCard from "@/components/ExamCard";

const CURRENT_EXAMS = [
  {
    name: "Week 13 - গণিত প্র্যাক্টিস পরীক্ষা",
    examDate: "2024-11-01",
    examLink: "https://script.google.com/macros/s/AKfycbz_pEXEAGr9OEruYUhZQdjnOUYJInuZB7NDS9rXS2IG_v6e8clF2kps0NGMolLGqUL_WA/exec",
    materialsLink: "https://drive.google.com/file/d/1fiHN35d6Q3nyt8GtQWnLHjP1-gumkwRq/view?usp=drive_link",
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
