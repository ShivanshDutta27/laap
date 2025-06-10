import { useParams } from 'react-router-dom'
import { mockUsers, mockAssessments, mockProgress } from '../data/mockData'
import { Card, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function StudentProgressPage() {
  const { id } = useParams()
  const student = mockUsers.find(u => u.id === id && u.role === 'student')
  const progress = mockProgress.find(p => p.studentId === id)

  if (!student || !progress) return <div>Student not found</div>

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={student.avatar} />
          <AvatarFallback>{student.name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-2xl font-bold">{student.name}</h1>
          <p className="text-muted-foreground">{student.email}</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">Progress Summary</h2>
          <p><strong>Average Score:</strong> {progress.averageScore}%</p>
          <p><strong>Avg Time Spent:</strong> {progress.averageTimeSpent}s</p>
          <p><strong>Improvement Rate:</strong> {(progress.improvementRate * 100).toFixed(1)}%</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-4">
          <h2 className="text-xl font-semibold">Assessments</h2>
          {progress.assessments.map((a, i) => {
            const assessment = mockAssessments.find(x => x.id === a.assessmentId)
            if (!assessment) return null

            return (
              <div key={i} className="border rounded-xl p-4 space-y-2">
                <div className="flex justify-between">
                  <div className="font-medium">{assessment.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(a.completedAt).toLocaleDateString()}
                  </div>
                </div>
                <p className="text-sm">Difficulty: {a.difficultyLevel}</p>
                <p className="text-sm">Time Spent: {a.timeSpent}s</p>
                <div className="text-sm">Score: {a.score}%</div>
                <Progress value={a.score} />
              </div>
            )
          })}
        </CardContent>
      </Card>
    </div>
  )
}
