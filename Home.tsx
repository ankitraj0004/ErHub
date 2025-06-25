import React from 'react';
import { BookOpen, Users, Award, TrendingUp, Download, Video, FileText, PenTool } from 'lucide-react';
import { courses } from '../data/courses';
import { User } from '../types';

interface HomeProps {
  user: User;
  onCourseSelect: (courseId: string, branchId?: string) => void;
}

export default function Home({ user, onCourseSelect }: HomeProps) {
  const stats = [
    { icon: BookOpen, label: 'Courses', value: '50+', color: 'text-blue-600' },
    { icon: Users, label: 'Students', value: '10K+', color: 'text-emerald-600' },
    { icon: Award, label: 'Certifications', value: '25+', color: 'text-purple-600' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%', color: 'text-orange-600' },
  ];

  const features = [
    {
      icon: Download,
      title: 'Download Materials',
      description: 'Access PDFs, notes, and study guides offline',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      icon: Video,
      title: 'Video Lectures',
      description: 'Watch recorded lectures and tutorials',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: FileText,
      title: 'Digital Notes',
      description: 'Comprehensive notes for all subjects',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      icon: PenTool,
      title: 'Assignments',
      description: 'Practice assignments and solutions',
      color: 'bg-orange-50 text-orange-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome back, <span className="text-yellow-300">{user.name}</span>!
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Continue your journey in {user.program} - {user.branch}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onCourseSelect(user.program.toLowerCase().replace('.', '').replace(' ', '-'))}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                Access My Materials
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200">
                Explore All Courses
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-4`}>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access comprehensive study materials, video lectures, and practice assignments for all engineering disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${feature.color} mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore All Programs
            </h2>
            <p className="text-xl text-gray-600">
              Choose from our comprehensive collection of engineering and management programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div key={course.id} className="bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                   onClick={() => onCourseSelect(course.id)}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{course.name}</h3>
                  <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {course.branches.length} Branches
                  </div>
                </div>
                <div className="space-y-2">
                  {course.branches.slice(0, 3).map((branch) => (
                    <div key={branch.id} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-sm">{branch.name}</span>
                    </div>
                  ))}
                  {course.branches.length > 3 && (
                    <div className="text-sm text-gray-500 ml-5">
                      +{course.branches.length - 3} more branches
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students who are advancing their careers with our comprehensive study materials
          </p>
          <button
            onClick={() => onCourseSelect(user.program.toLowerCase().replace('.', '').replace(' ', '-'))}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
          >
            Start Learning Now
          </button>
        </div>
      </section>
    </div>
  );
}