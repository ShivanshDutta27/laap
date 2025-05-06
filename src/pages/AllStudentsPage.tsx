import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { StudentCard } from "@/components/StudentCard";
import { mockUsers } from "@/data/mockData";
import { PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AllStudentsPage() {
  const students = mockUsers.filter((user) => user.role === "student");

  return (
    <MainLayout requireAuth allowedRoles={["teacher"]}>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">All Students</h1>
          <Link to="/add-student">
            <Button className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              Add Student
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              averageScore={75}
              completedAssessments={2}
              totalAssessments={3}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
