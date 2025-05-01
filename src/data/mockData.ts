
import { User, Assessment, StudentAssessment, Progress, Question } from '../types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    email: 'teacher@example.com',
    role: 'teacher',
    avatar: 'https://i.pravatar.cc/150?img=32'
  },
  {
    id: '2',
    name: 'Michael Chen',
    email: 'student@example.com',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: '3',
    name: 'Jessica Smith',
    email: 'jessica.smith@example.com',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=25'
  },
  {
    id: '4',
    name: 'David Wilson',
    email: 'david.wilson@example.com',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=53'
  },
  {
    id: '5',
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'student',
    avatar: 'https://i.pravatar.cc/150?img=44'
  }
];

// Mock Questions
export const mockQuestions: Question[] = [
  {
    id: 'q1',
    text: 'What is the capital of France?',
    options: [
      { id: 'o1', text: 'London', isCorrect: false },
      { id: 'o2', text: 'Paris', isCorrect: true },
      { id: 'o3', text: 'Berlin', isCorrect: false },
      { id: 'o4', text: 'Madrid', isCorrect: false }
    ],
    difficultyLevel: 'easy'
  },
  {
    id: 'q2',
    text: 'What is 7 × 8?',
    options: [
      { id: 'o5', text: '54', isCorrect: false },
      { id: 'o6', text: '56', isCorrect: true },
      { id: 'o7', text: '58', isCorrect: false },
      { id: 'o8', text: '64', isCorrect: false }
    ],
    difficultyLevel: 'easy'
  },
  {
    id: 'q3',
    text: 'Which of the following is a prime number?',
    options: [
      { id: 'o9', text: '15', isCorrect: false },
      { id: 'o10', text: '21', isCorrect: false },
      { id: 'o11', text: '23', isCorrect: true },
      { id: 'o12', text: '27', isCorrect: false }
    ],
    difficultyLevel: 'medium'
  },
  {
    id: 'q4',
    text: 'What is the chemical symbol for gold?',
    options: [
      { id: 'o13', text: 'Go', isCorrect: false },
      { id: 'o14', text: 'Au', isCorrect: true },
      { id: 'o15', text: 'Ag', isCorrect: false },
      { id: 'o16', text: 'Gd', isCorrect: false }
    ],
    difficultyLevel: 'medium'
  },
  {
    id: 'q5',
    text: 'Which planet has the most moons?',
    options: [
      { id: 'o17', text: 'Jupiter', isCorrect: false },
      { id: 'o18', text: 'Saturn', isCorrect: true },
      { id: 'o19', text: 'Uranus', isCorrect: false },
      { id: 'o20', text: 'Neptune', isCorrect: false }
    ],
    difficultyLevel: 'hard'
  }
];

// Mock Assessments
export const mockAssessments: Assessment[] = [
  {
    id: 'a1',
    title: 'General Knowledge Quiz',
    description: 'Test your general knowledge with this quiz covering various subjects.',
    questions: [mockQuestions[0], mockQuestions[3], mockQuestions[4]],
    timeLimit: 10,
    createdBy: '1',
    createdAt: '2023-01-15T12:00:00Z',
    updatedAt: '2023-01-15T12:00:00Z',
    status: 'published'
  },
  {
    id: 'a2',
    title: 'Math Assessment',
    description: 'A basic math quiz to test arithmetic skills.',
    questions: [mockQuestions[1], mockQuestions[2]],
    timeLimit: 5,
    createdBy: '1',
    createdAt: '2023-02-10T15:30:00Z',
    updatedAt: '2023-02-10T15:30:00Z',
    status: 'published'
  },
  {
    id: 'a3',
    title: 'Science Test',
    description: 'Test your understanding of basic science concepts.',
    questions: [mockQuestions[3], mockQuestions[4]],
    timeLimit: 7,
    createdBy: '1',
    createdAt: '2023-03-05T09:45:00Z',
    updatedAt: '2023-03-05T09:45:00Z',
    status: 'draft'
  }
];

// Mock Student Assessments
export const mockStudentAssessments: StudentAssessment[] = [
  {
    id: 'sa1',
    assessmentId: 'a1',
    studentId: '2',
    startedAt: '2023-01-20T14:30:00Z',
    completedAt: '2023-01-20T14:38:00Z',
    score: 66.7,
    answers: [
      {
        questionId: 'q1',
        selectedOptionId: 'o2',
        timeSpent: 45,
        isCorrect: true
      },
      {
        questionId: 'q4',
        selectedOptionId: 'o14',
        timeSpent: 32,
        isCorrect: true
      },
      {
        questionId: 'q5',
        selectedOptionId: 'o17',
        timeSpent: 60,
        isCorrect: false
      }
    ],
    status: 'completed'
  },
  {
    id: 'sa2',
    assessmentId: 'a2',
    studentId: '2',
    startedAt: '2023-02-15T10:15:00Z',
    completedAt: '2023-02-15T10:19:00Z',
    score: 50,
    answers: [
      {
        questionId: 'q2',
        selectedOptionId: 'o6',
        timeSpent: 25,
        isCorrect: true
      },
      {
        questionId: 'q3',
        selectedOptionId: 'o9',
        timeSpent: 40,
        isCorrect: false
      }
    ],
    status: 'completed'
  },
  {
    id: 'sa3',
    assessmentId: 'a1',
    studentId: '3',
    startedAt: '2023-01-22T16:00:00Z',
    completedAt: '2023-01-22T16:07:00Z',
    score: 33.3,
    answers: [
      {
        questionId: 'q1',
        selectedOptionId: 'o1',
        timeSpent: 30,
        isCorrect: false
      },
      {
        questionId: 'q4',
        selectedOptionId: 'o14',
        timeSpent: 28,
        isCorrect: true
      },
      {
        questionId: 'q5',
        selectedOptionId: 'o17',
        timeSpent: 55,
        isCorrect: false
      }
    ],
    status: 'completed'
  }
];

// Mock Progress Data
export const mockProgress: Progress[] = [
  {
    studentId: '2',
    assessments: [
      {
        assessmentId: 'a1',
        score: 66.7,
        completedAt: '2023-01-20T14:38:00Z',
        timeSpent: 480, // in seconds
        difficultyLevel: 'medium'
      },
      {
        assessmentId: 'a2',
        score: 50,
        completedAt: '2023-02-15T10:19:00Z',
        timeSpent: 240,
        difficultyLevel: 'easy'
      }
    ],
    averageScore: 58.35,
    averageTimeSpent: 360,
    improvementRate: 0
  },
  {
    studentId: '3',
    assessments: [
      {
        assessmentId: 'a1',
        score: 33.3,
        completedAt: '2023-01-22T16:07:00Z',
        timeSpent: 420,
        difficultyLevel: 'medium'
      }
    ],
    averageScore: 33.3,
    averageTimeSpent: 420,
    improvementRate: 0
  }
];
