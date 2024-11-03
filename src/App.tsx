import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import CurrentExams from "./pages/CurrentExams";
import PreviousExams from "./pages/PreviousExams";

const queryClient = new QueryClient();

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const user = localStorage.getItem("user");
  
  if (!user) {
    // Redirect to login page but save the attempted URL
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Check if the stored user data is still valid (not expired)
  try {
    const userData = JSON.parse(user);
    if (!userData.id || !userData.name) {
      localStorage.removeItem("user");
      return <Navigate to="/" state={{ from: location }} replace />;
    }
  } catch (e) {
    localStorage.removeItem("user");
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/current-exams"
            element={
              <PrivateRoute>
                <CurrentExams />
              </PrivateRoute>
            }
          />
          <Route
            path="/previous-exams"
            element={
              <PrivateRoute>
                <PreviousExams />
              </PrivateRoute>
            }
          />
          {/* Catch all route - redirect to login */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;