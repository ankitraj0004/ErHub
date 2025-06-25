import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 'btech',
    name: 'B.Tech',
    branches: [
      {
        id: 'cse',
        name: 'Computer Science Engineering',
        code: 'CSE',
        description: 'Core computer science and software engineering concepts',
        semesters: [
          {
            id: 'sem1',
            number: 1,
            subjects: [
              {
                id: 'math1',
                name: 'Engineering Mathematics I',
                code: 'MATH101',
                credits: 4,
                materials: [
                  {
                    id: 'mat1',
                    title: 'Calculus Notes',
                    type: 'pdf',
                    url: '#',
                    description: 'Comprehensive calculus study material'
                  }
                ]
              },
              {
                id: 'physics',
                name: 'Engineering Physics',
                code: 'PHY101',
                credits: 3,
                materials: []
              },
              {
                id: 'programming',
                name: 'Programming Fundamentals',
                code: 'CSE101',
                credits: 4,
                materials: []
              }
            ]
          }
        ]
      },
      {
        id: 'ece',
        name: 'Electronics & Communication Engineering',
        code: 'ECE',
        description: 'Electronics, communication systems, and signal processing',
        semesters: []
      },
      {
        id: 'me',
        name: 'Mechanical Engineering',
        code: 'ME',
        description: 'Mechanical systems, thermodynamics, and manufacturing',
        semesters: []
      },
      {
        id: 'ce',
        name: 'Civil Engineering',
        code: 'CE',
        description: 'Infrastructure, construction, and environmental engineering',
        semesters: []
      },
      {
        id: 'ee',
        name: 'Electrical Engineering',
        code: 'EE',
        description: 'Power systems, control systems, and electrical machines',
        semesters: []
      }
    ]
  },
  {
    id: 'mba',
    name: 'MBA',
    branches: [
      {
        id: 'finance',
        name: 'Finance',
        code: 'FIN',
        description: 'Financial management and investment strategies',
        semesters: []
      },
      {
        id: 'marketing',
        name: 'Marketing',
        code: 'MKT',
        description: 'Marketing strategies and consumer behavior',
        semesters: []
      },
      {
        id: 'hr',
        name: 'Human Resources',
        code: 'HR',
        description: 'Personnel management and organizational behavior',
        semesters: []
      }
    ]
  },
  {
    id: 'mca',
    name: 'MCA',
    branches: [
      {
        id: 'software',
        name: 'Software Development',
        code: 'SD',
        description: 'Advanced software engineering and development',
        semesters: []
      },
      {
        id: 'data-science',
        name: 'Data Science',
        code: 'DS',
        description: 'Data analytics and machine learning',
        semesters: []
      }
    ]
  },
  {
    id: 'diploma',
    name: 'Diploma',
    branches: [
      {
        id: 'computer-science',
        name: 'Computer Science',
        code: 'CS',
        description: 'Fundamental computer science concepts',
        semesters: []
      },
      {
        id: 'electronics',
        name: 'Electronics',
        code: 'EL',
        description: 'Basic electronics and communication',
        semesters: []
      }
    ]
  },
  {
    id: 'mtech',
    name: 'M.Tech',
    branches: [
      {
        id: 'ai-ml',
        name: 'Artificial Intelligence & Machine Learning',
        code: 'AIML',
        description: 'Advanced AI and ML concepts',
        semesters: []
      },
      {
        id: 'vlsi',
        name: 'VLSI Design',
        code: 'VLSI',
        description: 'Very Large Scale Integration design',
        semesters: []
      }
    ]
  }
];