
// User Types
export type Role = 'teacher' | 'student';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}

export interface Student extends User {
  grade: string;
  teacherId: string;
}

export interface Teacher extends User {
  subject: string;
  students: string[]; // Student IDs
}

// Assessment Types
export interface Question {
  id: string;
  text: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  }[];
  difficultyLevel: 'easy' | 'medium' | 'hard';
  timeLimit?: number; // in seconds
}

export interface Assessment {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit: number; // in minutes
  createdBy: string; // Teacher ID
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  status: 'draft' | 'published';
}

export interface StudentAssessment {
  id: string;
  assessmentId: string;
  studentId: string;
  startedAt: string;
  completedAt?: string;
  score?: number;
  answers: {
    questionId: string;
    selectedOptionId: string;
    timeSpent: number; // in seconds
    isCorrect: boolean;
  }[];
  status: 'pending' | 'in-progress' | 'completed';
}

// Progress Types
export interface Progress {
  studentId: string;
  assessments: {
    assessmentId: string;
    score: number;
    completedAt: string;
    timeSpent: number;
    difficultyLevel: 'easy' | 'medium' | 'hard';
  }[];
  averageScore: number;
  averageTimeSpent: number;
  improvementRate: number;
}

// Dummy data types
export interface DummyData {
  users: User[];
  assessments: Assessment[];
  studentAssessments: StudentAssessment[];
  progress: Progress[];
}
