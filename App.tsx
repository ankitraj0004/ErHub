import React, { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import CourseDetail from './components/CourseDetail';
import { User } from './types';

type View = 'login' | 'home' | 'course';

interface AppState {
  user: User | null;
  currentView: View;
  selectedCourse: string | null;
  selectedBranch: string | null;
}

function App() {
  const [state, setState] = useState<AppState>({
    user: null,
    currentView: 'login',
    selectedCourse: null,
    selectedBranch: null
  });

  const handleLogin = (user: User) => {
    setState(prev => ({
      ...prev,
      user,
      currentView: 'home'
    }));
  };

  const handleLogout = () => {
    setState({
      user: null,
      currentView: 'login',
      selectedCourse: null,
      selectedBranch: null
    });
  };

  const handleCourseSelect = (courseId: string, branchId?: string) => {
    setState(prev => ({
      ...prev,
      currentView: 'course',
      selectedCourse: courseId,
      selectedBranch: branchId || null
    }));
  };

  const handleBackToHome = () => {
    setState(prev => ({
      ...prev,
      currentView: 'home',
      selectedCourse: null,
      selectedBranch: null
    }));
  };

  if (state.currentView === 'login') {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {state.user && (
        <Navbar
          user={state.user}
          onLogout={handleLogout}
          onCourseSelect={handleCourseSelect}
        />
      )}
      
      {state.currentView === 'home' && state.user && (
        <Home
          user={state.user}
          onCourseSelect={handleCourseSelect}
        />
      )}
      
      {state.currentView === 'course' && state.selectedCourse && (
        <CourseDetail
          courseId={state.selectedCourse}
          branchId={state.selectedBranch || undefined}
          onBack={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;