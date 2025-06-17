import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import AuthPage from './components/AuthPage'
import HomeScreen from './components/HomeScreen'
import QuranReader from './components/QuranReader'
import FocusTimer from './components/FocusTimer'
import PrayerTimes from './components/PrayerTimes'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { PrayerProvider } from './contexts/PrayerContext'
import { SessionProvider } from './contexts/SessionContext'
import FloatingDock from './components/FloatingDock'

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <PrayerProvider>
          <SessionProvider>
            <Router>
              <div className="min-h-screen bg-bg-primary text-text-primary">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/dashboard" element={<HomeScreen />} />
                  <Route path="/quran" element={<QuranReader />} />
                  <Route path="/focus" element={<FocusTimer />} />
                  <Route path="/prayer" element={<PrayerTimes />} />
                </Routes>
                <FloatingDock />
              </div>
            </Router>
          </SessionProvider>
        </PrayerProvider>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App