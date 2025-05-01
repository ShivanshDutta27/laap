
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { User } from "@/types";
import { Link } from "react-router-dom";

interface StudentCardProps {
  student: User;
  averageScore?: number;
  completedAssessments?: number;
  totalAssessments?: number;
}

export function StudentCard({
  student,
  averageScore = 0,
  completedAssessments = 0,
  totalAssessments = 0,
}: StudentCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 border">
            <AvatarImage src={student.avatar} alt={student.name} />
            <AvatarFallback>{getInitials(student.name)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">{student.name}</CardTitle>
            <CardDescription>{student.email}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-1 text-sm">
              <span className="text-muted-foreground">Average Score</span>
              <span className="font-medium">{averageScore}%</span>
            </div>
            <Progress value={averageScore} className="h-2" />
          </div>
          <div className="text-sm">
            <span className="text-muted-foreground">Assessments: </span>
            <span className="font-medium">
              {completedAssessments}/{totalAssessments} completed
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/student/${student.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Progress
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
