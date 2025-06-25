export interface User {
  id: string;
  name: string;
  email: string;
  program: string;
  branch: string;
}

export interface Course {
  id: string;
  name: string;
  branches: Branch[];
}

export interface Branch {
  id: string;
  name: string;
  code: string;
  description: string;
  semesters: Semester[];
}

export interface Semester {
  id: string;
  number: number;
  subjects: Subject[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  materials: StudyMaterial[];
}

export interface StudyMaterial {
  id: string;
  title: string;
  type: 'pdf' | 'video' | 'notes' | 'assignment';
  url: string;
  description: string;
}