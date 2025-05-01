
import { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useAuth } from '@/contexts/AuthContext';
import { StatCard } from '@/components/StatCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AssessmentCard } from '@/components/AssessmentCard';
import { StudentCard } from '@/components/StudentCard';
import { mockAssessments, mockUsers } from '@/data/mockData';
import { Link } from 'react-router-dom';
import { PerformanceChart } from '@/components/PerformanceChart';
import { PlusCircle, Users, BookCheck, TrendingUp } from 'lucide-react';

const chartData = [
  { name: 'Jan', score: 65, time: 120 },
  { name: 'Feb', score: 59, time: 110 },
  { name: 'Mar', score: 80, time: 90 },
  { name: 'Apr', score: 81, time: 85 },
  { name: 'May', score: 75, time: 100 },
  { name: 'Jun', score: 85, time: 80 },
];

export default function TeacherDashboard() {
  const { currentUser } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const students = mockUsers.filter(user => user.role === 'student');
  const assessments = mockAssessments;

  return (
    <MainLayout requireAuth allowedRoles={['teacher']}>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
              Welcome back, {currentUser?.name}! Here's an overview of your teaching activities.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link to="/create-assessment">
              <Button className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" /> Create Assessment
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Total Students"
            value={students.length}
            icon={<Users className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Assessments Created"
            value={assessments.length}
            icon={<BookCheck className="h-4 w-4 text-muted-foreground" />}
          />
          <StatCard
            title="Average Score"
            value="75.5%"
            icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
          />
        </div>

        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full sm:w-auto grid grid-cols-3 h-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="assessments">Assessments</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-8 mt-6">
            <div className="grid gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Student Performance Overview</h3>
                <PerformanceChart data={chartData} />
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Recent Assessments</h3>
                    <Link to="/assessments">
                      <Button variant="link" className="p-0 h-auto">View All</Button>
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {assessments.slice(0, 3).map(assessment => (
                      <AssessmentCard key={assessment.id} assessment={assessment} />
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">Top Students</h3>
                    <Link to="/students">
                      <Button variant="link" className="p-0 h-auto">View All</Button>
                    </Link>
                  </div>
                  <div className="space-y-4">
                    {students.slice(0, 3).map(student => (
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
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="assessments" className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">All Assessments</h3>
              <Link to="/create-assessment">
                <Button className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" /> Create Assessment
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {assessments.map(assessment => (
                <AssessmentCard key={assessment.id} assessment={assessment} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="students" className="mt-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">All Students</h3>
              <Link to="/add-student">
                <Button className="flex items-center gap-2">
                  <PlusCircle className="h-4 w-4" /> Add Student
                </Button>
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {students.map(student => (
                <StudentCard 
                  key={student.id} 
                  student={student} 
                  averageScore={75} 
                  completedAssessments={2}
                  totalAssessments={3}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
