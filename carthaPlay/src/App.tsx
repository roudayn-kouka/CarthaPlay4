import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { LoginForm } from './components/LoginForm';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { StudentDashboard } from './pages/StudentDashboard';
import { TeacherTracking } from './pages/TeacherTracking';
import { CreateGameForm } from './components/CreateGameForm';
import { GameList } from './components/GameList';
import GameApp from './frontend/carthaplay/src/GameApp';
import AffichageQst from './pages/AffichageQst';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/teacher" element={<LoginForm role="teacher" />} />
        <Route path="/login/student" element={<LoginForm role="student" />} />
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/create-game" element={<CreateGameForm />} />
        <Route path="/teacher/games" element={<GameList role="teacher" />} />
        <Route path="/teacher/tracking" element={<TeacherTracking />} />
        <Route path="/student/dashboard" element={<StudentDashboard />}/>
        <Route path="/student/games" element={<GameList role="student" />} />
        <Route path="/game" element={<GameApp />} />
        <Route path="/AffichageQst/:gameId" element={<AffichageQst />} />
      </Routes>
    </Router>
  );
}

export default App;