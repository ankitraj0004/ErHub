import React, { useState } from 'react';
import { Menu, X, BookOpen, User, LogOut, ChevronDown } from 'lucide-react';
import { courses } from '../data/courses';
import { User as UserType } from '../types';

interface NavbarProps {
  user: UserType;
  onLogout: () => void;
  onCourseSelect: (courseId: string, branchId?: string) => void;
}

export default function Navbar({ user, onLogout, onCourseSelect }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (courseId: string) => {
    setActiveDropdown(activeDropdown === courseId ? null : courseId);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">EduHub</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              {courses.map((course) => (
                <div key={course.id} className="relative">
                  <button
                    onClick={() => toggleDropdown(course.id)}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {course.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  
                  {activeDropdown === course.id && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-1 z-10 border">
                      {course.branches.map((branch) => (
                        <button
                          key={branch.id}
                          onClick={() => {
                            onCourseSelect(course.id, branch.id);
                            setActiveDropdown(null);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        >
                          <div className="font-medium">{branch.name}</div>
                          <div className="text-xs text-gray-500">{branch.description}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 border-l border-gray-200 pl-4">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{user.name}</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            {courses.map((course) => (
              <div key={course.id}>
                <button
                  onClick={() => toggleDropdown(course.id)}
                  className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-md"
                >
                  {course.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {activeDropdown === course.id && (
                  <div className="pl-4 space-y-1">
                    {course.branches.map((branch) => (
                      <button
                        key={branch.id}
                        onClick={() => {
                          onCourseSelect(course.id, branch.id);
                          setActiveDropdown(null);
                          setIsOpen(false);
                        }}
                        className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-white rounded-md"
                      >
                        {branch.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-gray-200 pt-2">
              <div className="flex items-center px-3 py-2">
                <User className="h-5 w-5 text-gray-600" />
                <span className="ml-2 text-sm font-medium text-gray-700">{user.name}</span>
              </div>
              <button
                onClick={onLogout}
                className="w-full flex items-center px-3 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-white rounded-md"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}