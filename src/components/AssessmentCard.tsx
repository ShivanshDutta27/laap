
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Assessment } from "@/types";
import { Link } from "react-router-dom";

interface AssessmentCardProps {
  assessment: Assessment;
  isStudent?: boolean;
  isCompleted?: boolean;
  score?: number;
}

export function AssessmentCard({ 
  assessment, 
  isStudent = false,
  isCompleted = false,
  score 
}: AssessmentCardProps) {
  return (
    <Card className="card-hover overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle>{assessment.title}</CardTitle>
          {assessment.status === 'draft' && (
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Draft
            </Badge>
          )}
          {assessment.status === 'published' && (
            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
              Published
            </Badge>
          )}
          {isCompleted && (
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Completed
            </Badge>
          )}
        </div>
        <CardDescription>{assessment.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Questions</p>
            <p className="font-medium">{assessment.questions.length}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Time Limit</p>
            <p className="font-medium">{assessment.timeLimit} minutes</p>
          </div>
          {isCompleted && score !== undefined && (
            <div className="col-span-2 mt-2">
              <p className="text-muted-foreground">Your Score</p>
              <p className="font-medium">{score}%</p>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        {isStudent ? (
          <Link to={isCompleted ? `/results/${assessment.id}` : `/take-assessment/${assessment.id}`} className="w-full">
            <Button className="w-full" variant={isCompleted ? "outline" : "default"}>
              {isCompleted ? "View Results" : "Take Assessment"}
            </Button>
          </Link>
        ) : (
          <div className="flex gap-2 w-full">
            <Link to={`/edit-assessment/${assessment.id}`} className="flex-1">
              <Button variant="outline" className="w-full">Edit</Button>
            </Link>
            <Link to={`/view-results/${assessment.id}`} className="flex-1">
              <Button className="w-full">View Results</Button>
            </Link>
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
