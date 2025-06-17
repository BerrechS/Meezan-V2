import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Scale, Clock, BookOpen, Target, Users, ArrowRight } from 'lucide-react'

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-primary via-bg-secondary to-bg-tertiary">
      {/* Header */}
      <header className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Scale className="w-8 h-8 text-accent" />
            <span className="text-2xl font-semibold text-text-primary">Meezan</span>
          </div>
          <button
            onClick={() => navigate('/auth')}
            className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Scale className="w-16 h-16 text-accent mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-light text-text-primary mb-6 leading-tight">
              Balance Your
              <br />
              <span className="text-accent">Dīn & Dunyā</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              A minimalist productivity app designed for Muslims who want to align their daily workflow with their spiritual duties.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => navigate('/auth')}
              className="px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent-hover transition-all duration-200 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-border text-text-primary rounded-xl hover:bg-surface transition-colors">
              Learn More
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="bg-surface p-6 rounded-xl border border-border-light hover:shadow-lg transition-shadow">
              <Clock className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-medium text-text-primary mb-2">Prayer-Centric</h3>
              <p className="text-text-secondary text-sm">Build your day around the 5 daily prayers</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-border-light hover:shadow-lg transition-shadow">
              <BookOpen className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-medium text-text-primary mb-2">Qur'an Reading</h3>
              <p className="text-text-secondary text-sm">Track your daily spiritual nourishment</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-border-light hover:shadow-lg transition-shadow">
              <Target className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-medium text-text-primary mb-2">Focus Sessions</h3>
              <p className="text-text-secondary text-sm">Deep work aligned with prayer times</p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-border-light hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-medium text-text-primary mb-2">Community</h3>
              <p className="text-text-secondary text-sm">Connect with like-minded Muslims</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LandingPage