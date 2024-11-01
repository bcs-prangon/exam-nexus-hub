import { Link, useNavigate } from "react-router-dom";
import { LogOut, BookOpen, ClipboardCheck, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";

const Navigation = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const userString = localStorage.getItem("user");
  const user = userString ? JSON.parse(userString) : null;

  const handleLogout = async () => {
    await logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-primary mr-8">BCS Prangon</h1>
            <div className="flex space-x-8">
              <Link 
                to="/current-exams" 
                className="nav-link flex items-center nav-item"
                style={{ animationDelay: "100ms" }}
              >
                <ClipboardCheck className="mr-2 h-5 w-5 text-primary" />
                Current Exams
              </Link>
              <Link 
                to="/previous-exams" 
                className="nav-link flex items-center nav-item"
                style={{ animationDelay: "200ms" }}
              >
                <BookOpen className="mr-2 h-5 w-5 text-primary" />
                Previous Exams
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {user && (
              <div className="flex items-center text-gray-700">
                <User className="h-5 w-5 mr-2" />
                <span>{user.name}</span>
              </div>
            )}
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="nav-link group nav-item"
              style={{ animationDelay: "300ms" }}
            >
              <LogOut className="mr-2 h-5 w-5 transition-transform group-hover:rotate-12" />
              Log out
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;