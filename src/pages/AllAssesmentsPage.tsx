import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { AssessmentCard } from "@/components/AssessmentCard";
import { mockAssessments } from "@/data/mockData";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AllAssessmentsPage() {
  return (
    <MainLayout requireAuth allowedRoles={["teacher"]}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">All Assessments</h1>
          <Link to="/create-assessment">
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Create Assessment
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mockAssessments.map((assessment) => (
            <AssessmentCard key={assessment.id} assessment={assessment} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
