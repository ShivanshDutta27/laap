import React from 'react';
import { useParams } from 'react-router-dom';
import { mockAssessments, mockStudentAssessments, mockUsers, mockQuestions } from '../data/mockData';

const AssessmentResultPage: React.FC = () => {
  const { id } = useParams();
  const assessmentId = id as string;

  const assessment = mockAssessments.find(a => a.id === assessmentId);
  const studentAttempts = mockStudentAssessments.filter(sa => sa.assessmentId === assessmentId);

  if (!assessment) return <div>Assessment not found.</div>;

  const totalStudents = studentAttempts.length;
  const totalScore = studentAttempts.reduce((sum, sa) => sum + sa.score, 0);
  const avgScore = totalStudents > 0 ? totalScore / totalStudents : 0;

  const avgTimeSpent =
    totalStudents > 0
      ? studentAttempts.reduce(
          (sum, sa) =>
            sum +
            sa.answers.reduce((qSum, q) => qSum + q.timeSpent, 0),
          0
        ) / totalStudents
      : 0;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{assessment.title} - Results</h2>
      <p className="mb-2 text-gray-700">Description: {assessment.description}</p>
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <p><strong>Total Questions:</strong> {assessment.questions.length}</p>
        <p><strong>Students Attempted:</strong> {totalStudents}</p>
        <p><strong>Average Score:</strong> {avgScore.toFixed(2)}%</p>
        <p><strong>Average Time Spent:</strong> {Math.round(avgTimeSpent)} seconds</p>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-2">Student Performance</h3>
      <div className="space-y-3">
        {studentAttempts.map(sa => {
          const user = mockUsers.find(u => u.id === sa.studentId);
          return (
            <div key={sa.id} className="border p-3 rounded-md bg-white shadow-sm">
              <p><strong>{user?.name}</strong> - Score: {sa.score}%</p>
              <p>
                Time Taken:{" "}
                {sa.answers.reduce((sum, a) => sum + a.timeSpent, 0)} seconds
              </p>
              <ul className="ml-4 list-disc">
                {sa.answers.map(ans => {
                  const question = mockQuestions.find(q => q.id === ans.questionId);
                  return (
                    <li key={ans.questionId}>
                      {question?.text.slice(0, 40)}... –{" "}
                      {ans.isCorrect ? "Correct" : "Incorrect"}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssessmentResultPage;
