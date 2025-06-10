import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import NotFound from "./pages/NotFound";
import AllAssessmentsPage from "./pages/AllAssesmentsPage";
import AllStudentsPage from "./pages/AllStudentsPage"
import CreateAssessmentsPage from "./pages/CreateAssessmentsPage";
import EditAssessment from "./pages/EditAssessment";
import AssessmentResult from "./pages/AssessmentResult";
import StudentProgressPage from "./pages/StudentProgress";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/unauthorized" element={<UnauthorizedPage />} />
            <Route path="/assessments" element={<AllAssessmentsPage />} />
            <Route path="/students" element={<AllStudentsPage />} />
            <Route path="/create-assessment" element={<CreateAssessmentsPage/>} />
            <Route path="/edit-assessment/:id" element={<EditAssessment />} />
            <Route path="/view-results/:id" element={<AssessmentResult />} />
            <Route path="/student/:id" element={<StudentProgressPage />} />
            <Route path="/about" element={ <About /> } />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
