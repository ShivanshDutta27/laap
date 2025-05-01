
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";

const Index = () => {
  const { isAuthenticated, currentUser } = useAuth();

  if (isAuthenticated && currentUser) {
    // Redirect based on user role
    if (currentUser.role === 'teacher') {
      return <Navigate to="/teacher-dashboard" replace />;
    } else if (currentUser.role === 'student') {
      return <Navigate to="/student-dashboard" replace />;
    }
  }

  // Show landing page for non-authenticated users
  return <LandingPage />;
};

export default Index;
