import React, { useState, useEffect } from 'react'
import { Clock, BookOpen, Target, Calendar, Settings } from 'lucide-react'

const HomeScreen: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-text-primary">
              Good evening, User
            </h1>
            <p className="text-text-secondary">
              {formatDate(currentTime)} • {formatTime(currentTime)}
            </p>
          </div>
          <button className="p-2 hover:bg-surface rounded-lg transition-colors">
            <Settings className="w-6 h-6 text-text-secondary" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Next Prayer Card */}
          <div className="bg-accent-light p-6 rounded-xl border border-accent/20 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">NEXT PRAYER</span>
            </div>
            <div className="text-2xl font-semibold text-text-primary mb-1">
              Maghrib in 2h 15m
            </div>
            <div className="text-sm text-text-secondary">
              18:45 • Location-based
            </div>
          </div>

          {/* Week Navigation */}
          <div className="bg-surface p-6 rounded-xl border border-border-light">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-text-primary">This week</h2>
              <button className="text-accent hover:text-accent-hover text-sm">
                Show log
              </button>
            </div>
            <div className="flex justify-center space-x-4 mb-6">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <button
                  key={day}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    index === 2
                      ? 'bg-accent text-white'
                      : 'text-text-secondary hover:bg-surface-hover'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Focus time</span>
                </div>
                <div className="text-xl font-medium text-text-primary">2h 30m</div>
              </div>
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Prayers today</span>
                </div>
                <div className="text-xl font-medium text-text-primary">3/5</div>
              </div>
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Tasks done</span>
                </div>
                <div className="text-xl font-medium text-text-primary">2/3</div>
              </div>
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Qur'an today</span>
                </div>
                <div className="text-xl font-medium text-text-primary">15m</div>
              </div>
            </div>
          </div>

          {/* Today's Prayers */}
          <div className="bg-surface p-6 rounded-xl border border-border-light">
            <h3 className="text-lg font-medium text-text-primary mb-4">Today's Prayers</h3>
            <div className="space-y-3">
              {[
                { name: 'Fajr', time: '05:30', completed: true },
                { name: 'Dhuhr', time: '12:45', completed: true },
                { name: 'Asr', time: '15:45', completed: true },
                { name: 'Maghrib', time: '18:45', completed: false },
                { name: 'Isha', time: '20:15', completed: false },
              ].map((prayer) => (
                <div key={prayer.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      prayer.completed ? 'bg-success' : 'bg-border'
                    }`} />
                    <span className="text-text-primary">{prayer.name}</span>
                  </div>
                  <span className="text-text-secondary text-sm">{prayer.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomeScreen