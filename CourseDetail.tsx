import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Download, Play, FileText, Clock, Star, Users } from 'lucide-react';
import { courses } from '../data/courses';
import { Course, Branch } from '../types';

interface CourseDetailProps {
  courseId: string;
  branchId?: string;
  onBack: () => void;
}

export default function CourseDetail({ courseId, branchId, onBack }: CourseDetailProps) {
  const [selectedBranch, setSelectedBranch] = useState<string | null>(branchId || null);
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course not found</h2>
          <button
            onClick={onBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const branch = selectedBranch ? course.branches.find(b => b.id === selectedBranch) : null;

  const materialTypes = [
    { type: 'pdf', icon: FileText, label: 'PDF Notes', color: 'text-red-600 bg-red-50' },
    { type: 'video', icon: Play, label: 'Video Lectures', color: 'text-blue-600 bg-blue-50' },
    { type: 'notes', icon: BookOpen, label: 'Study Notes', color: 'text-green-600 bg-green-50' },
    { type: 'assignment', icon: Download, label: 'Assignments', color: 'text-purple-600 bg-purple-50' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-gray-900">{course.name}</h1>
              <p className="text-gray-600">Engineering Program</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Branches */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Branches</h3>
              <div className="space-y-2">
                {course.branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch.id)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedBranch === branch.id
                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="font-medium">{branch.name}</div>
                    <div className="text-xs text-gray-500 mt-1">{branch.code}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {!selectedBranch ? (
              /* Course Overview */
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {course.name} Program
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Comprehensive study materials and resources for all {course.name} branches
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">
                        {course.branches.length} Branches
                      </div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">5000+ Students</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <Star className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                      <div className="font-semibold text-gray-900">4.8 Rating</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {course.branches.map((branch) => (
                      <div
                        key={branch.id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                        onClick={() => setSelectedBranch(branch.id)}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {branch.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{branch.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {branch.code}
                          </span>
                          <button className="text-blue-600 hover:text-blue-700 font-medium">
                            View Materials →
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Material Types Overview */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Materials</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {materialTypes.map((material) => (
                      <div key={material.type} className="text-center p-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${material.color} mb-4`}>
                          <material.icon className="h-8 w-8" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">{material.label}</h4>
                        <p className="text-sm text-gray-600">
                          Access comprehensive {material.label.toLowerCase()} for all subjects
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Branch Detail */
              <div className="space-y-6">
                {branch && (
                  <>
                    <div className="bg-white rounded-lg shadow-sm p-8">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">{branch.name}</h2>
                          <p className="text-lg text-gray-600 mt-2">{branch.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-medium">
                            {branch.code}
                          </div>
                        </div>
                      </div>

                      {branch.semesters.length > 0 ? (
                        <div className="space-y-6">
                          {branch.semesters.map((semester) => (
                            <div key={semester.id} className="border border-gray-200 rounded-lg p-6">
                              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                Semester {semester.number}
                              </h3>
                              <div className="grid md:grid-cols-2 gap-4">
                                {semester.subjects.map((subject) => (
                                  <div key={subject.id} className="bg-gray-50 rounded-lg p-4">
                                    <div className="flex items-center justify-between mb-2">
                                      <h4 className="font-medium text-gray-900">{subject.name}</h4>
                                      <span className="text-sm text-gray-500">{subject.credits} credits</span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">{subject.code}</p>
                                    {subject.materials.length > 0 && (
                                      <div className="flex flex-wrap gap-2">
                                        {subject.materials.map((material) => (
                                          <button
                                            key={material.id}
                                            className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
                                          >
                                            {material.title}
                                          </button>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                          <h3 className="text-xl font-medium text-gray-900 mb-2">
                            Study Materials Coming Soon
                          </h3>
                          <p className="text-gray-600 mb-6">
                            We're working on adding comprehensive study materials for {branch.name}.
                            Check back soon for updates!
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
                            {materialTypes.map((material) => (
                              <div key={material.type} className="text-center p-4 bg-gray-50 rounded-lg">
                                <material.icon className={`h-6 w-6 mx-auto mb-2 ${material.color.split(' ')[0]}`} />
                                <div className="text-xs text-gray-600">{material.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}