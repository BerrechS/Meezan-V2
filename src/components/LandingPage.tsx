import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Scale, Clock, BookOpen, Target, Users, ArrowRight, Moon, Sun } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const LandingPage: React.FC = () => {
  const navigate = useNavigate()
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-secondary-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tertiary-accent/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Scale className="w-8 h-8 text-accent" />
            <span className="text-2xl font-light text-text-primary tracking-tight">Meezan</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-surface rounded-lg transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-text-secondary" />
              ) : (
                <Sun className="w-5 h-5 text-text-secondary" />
              )}
            </button>
            <button
              onClick={() => navigate('/auth')}
              className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-all duration-200 hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            {/* Balance Visual */}
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Scale className="w-20 h-20 text-accent" />
                <div className="absolute -top-2 -left-8 text-sm text-text-secondary font-medium">Dīn</div>
                <div className="absolute -top-2 -right-8 text-sm text-text-secondary font-medium">Dunyā</div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-text-primary mb-6 leading-tight tracking-tight">
              BUILD YOUR DAY
              <br />
              <span className="text-accent">AROUND PRAYER</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed mb-4">
              Plan your work sessions around prayer times. Let your spiritual rhythm guide your productivity.
            </p>
            <p className="text-lg text-text-tertiary max-w-2xl mx-auto">
              For the Muslim who wants to live a day of presence, not just productivity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button
              onClick={() => navigate('/auth')}
              className="px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent-hover transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span className="font-medium">Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="px-8 py-4 border border-border text-text-primary rounded-xl hover:bg-surface transition-all duration-200 hover:scale-105"
            >
              View Demo
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-xl border border-border-light hover:shadow-kamelizer transition-all duration-300 hover:scale-105">
              <Clock className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-medium text-text-primary mb-2">Prayer-Centric</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Build your day around the 5 daily prayers with intelligent scheduling</p>
            </div>
            <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-xl border border-border-light hover:shadow-kamelizer transition-all duration-300 hover:scale-105">
              <BookOpen className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-medium text-text-primary mb-2">Qur'an Reading</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Track your daily spiritual nourishment with beautiful Arabic text</p>
            </div>
            <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-xl border border-border-light hover:shadow-kamelizer transition-all duration-300 hover:scale-105">
              <Target className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-medium text-text-primary mb-2">Focus Sessions</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Deep work sessions aligned with prayer times and natural rhythms</p>
            </div>
            <div className="bg-surface/80 backdrop-blur-sm p-6 rounded-xl border border-border-light hover:shadow-kamelizer transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-medium text-text-primary mb-2">Balance</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Harmonize spiritual duties with worldly productivity</p>
            </div>
          </div>

          {/* Quote */}
          <div className="mt-20 max-w-2xl mx-auto">
            <blockquote className="text-xl text-text-secondary italic leading-relaxed">
              "And the heaven He raised and imposed the balance (Meezan)"
            </blockquote>
            <cite className="text-text-tertiary text-sm mt-2 block">— Quran 55:7</cite>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage