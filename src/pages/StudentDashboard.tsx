
import { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useAuth } from '@/contexts/AuthContext';
import { StatCard } from '@/components/StatCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AssessmentCard } from '@/components/AssessmentCard';
import { mockAssessments, mockStudentAssessments } from '@/data/mockData';
import { PerformanceChart } from '@/components/PerformanceChart';
import { Award, BookCheck, Clock } from 'lucide-react';
import { Assessment, StudentAssessment } from '@/types';

const chartData = [
  { name: 'Assessment 1', score: 70, time: 580 },
  { name: 'Assessment 2', score: 80, time: 520 },
];

export default function StudentDashboard() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Filter assessments and results for the current student
  const studentId = currentUser?.id || '';
  const studentAssessments = mockStudentAssessments.filter(sa => sa.studentId === studentId);
  
  const completedAssessmentIds = studentAssessments
    .filter(sa => sa.status === 'completed')
    .map(sa => sa.assessmentId);
  
  const availableAssessments = mockAssessments
    .filter(a => a.status === 'published' && !completedAssessmentIds.includes(a.id));

  const completedAssessments: { assessment: Assessment; score: number }[] = studentAssessments
    .filter(sa => sa.status === 'completed')
    .map(sa => {
      const assessment = mockAssessments.find(a => a.id === sa.assessmentId);
      return {
        assessment: assessment!,
        score: sa.score || 0
      };
    });

  // Calculate stats
  const totalAssessments = completedAssessments.length + availableAssessments.length;
  const completionRate = totalAssessments > 0 
    ? Math.round((completedAssessments.length / totalAssessments) * 100) 
    : 0;
  
  const averageScore = completedAssessments.length > 0
    ? Math.round(completedAssessments.reduce((sum, item) => sum + item.score, 0) / completedAssessments.length)
    : 0;

  return (
    <MainLayout requireAuth allowedRoles={['student']}>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Student Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome, {currentUser?.name}! Here's your learning progress.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Completion Rate"
            value={`${completionRate}%`}
            description={`${completedAssessments.length} of ${totalAssessments} assessments`}
            icon={<BookCheck className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Average Score"
            value={`${averageScore}%`}
            description="Across all completed assessments"
            icon={<Award className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Average Time"
            value="15:30"
            description="Minutes per assessment"
            icon={<Clock className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full sm:w-auto grid grid-cols-3 h-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="available">Available</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8 mt-6">
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Your Performance Trend</h3>
                <PerformanceChart data={chartData} />
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Upcoming Assessments</h3>
                  {availableAssessments.length > 0 ? (
                    <div className="space-y-4">
                      {availableAssessments.slice(0, 3).map(assessment => (
                        <AssessmentCard
                          key={assessment.id}
                          assessment={assessment}
                          isStudent={true}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-muted p-4 rounded-md text-center">
                      <p>No upcoming assessments</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Recent Results</h3>
                  {completedAssessments.length > 0 ? (
                    <div className="space-y-4">
                      {completedAssessments.slice(0, 3).map(({ assessment, score }) => (
                        <AssessmentCard
                          key={assessment.id}
                          assessment={assessment}
                          isStudent={true}
                          isCompleted={true}
                          score={score}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="bg-muted p-4 rounded-md text-center">
                      <p>No completed assessments yet</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="available" className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Available Assessments</h3>
            {availableAssessments.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {availableAssessments.map(assessment => (
                  <AssessmentCard
                    key={assessment.id}
                    assessment={assessment}
                    isStudent={true}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-muted p-8 rounded-md text-center">
                <p className="text-muted-foreground">No assessments available at the moment.</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Completed Assessments</h3>
            {completedAssessments.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {completedAssessments.map(({ assessment, score }) => (
                  <AssessmentCard
                    key={assessment.id}
                    assessment={assessment}
                    isStudent={true}
                    isCompleted={true}
                    score={score}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-muted p-8 rounded-md text-center">
                <p className="text-muted-foreground">You haven't completed any assessments yet.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
