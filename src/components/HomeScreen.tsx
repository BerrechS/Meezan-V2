import React, { useState, useEffect } from 'react'
import { Clock, BookOpen, Target, Calendar, Settings, Play, Pause, Plus, CheckCircle2 } from 'lucide-react'
import { usePrayer } from '../contexts/PrayerContext'
import { useSession } from '../contexts/SessionContext'
import { useNavigate } from 'react-router-dom'
import BalanceSettings from './BalanceSettings'

const HomeScreen: React.FC = () => {
  const navigate = useNavigate()
  const { nextPrayer, prayersToday, completedPrayers } = usePrayer()
  const { currentSession, startSession, stopSession, todayStats } = useSession()
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showSettings, setShowSettings] = useState(false)
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Read Quran 15min', completed: true },
    { id: 2, text: 'Complete project wireframes', completed: true },
    { id: 3, text: 'Review meeting notes', completed: false }
  ])
  const [newTask, setNewTask] = useState('')

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

  const formatHijriDate = (date: Date) => {
    // Simplified Hijri date - in real app would use proper conversion
    return "10 Dhul-Hijjah 1446"
  }

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  const handleClockIn = () => {
    if (currentSession) {
      stopSession()
    } else {
      startSession('Focus Work')
    }
  }

  const addTask = () => {
    if (newTask.trim() && tasks.length < 5) {
      setTasks([...tasks, { 
        id: Date.now(), 
        text: newTask.trim(), 
        completed: false 
      }])
      setNewTask('')
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const completedTasksCount = tasks.filter(task => task.completed).length

  return (
    <div className="min-h-screen bg-bg-primary pb-20">
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light text-text-primary">
              {getGreeting()}
            </h1>
            <p className="text-text-secondary">
              {currentTime.toLocaleDateString('en-US', { 
                weekday: 'long', 
                day: 'numeric', 
                month: 'long' 
              })} • {formatTime(currentTime)} • {formatHijriDate(currentTime)}
            </p>
          </div>
          <button 
            onClick={() => setShowSettings(true)}
            className="p-2 hover:bg-surface rounded-lg transition-colors"
          >
            <Settings className="w-6 h-6 text-text-secondary" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 pb-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Message */}
          <div className="text-center py-8">
            <h2 className="text-3xl font-light text-text-primary mb-2">
              BUILD YOUR DAY AROUND PRAYER
            </h2>
            <p className="text-text-secondary">
              Plan your work sessions around prayer times. Let your spiritual rhythm guide your productivity.
            </p>
          </div>

          {/* Next Prayer Card */}
          <div className="bg-accent-light p-6 rounded-xl border border-accent/20 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">NEXT PRAYER</span>
            </div>
            <div className="text-2xl font-semibold text-text-primary mb-1">
              {nextPrayer?.name} in {nextPrayer?.timeUntil}
            </div>
            <div className="text-sm text-text-secondary">
              {nextPrayer?.time} • Location-based
            </div>
          </div>

          {/* Clock In/Out Button */}
          <div className="text-center">
            <button
              onClick={handleClockIn}
              className={`px-8 py-4 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                currentSession
                  ? 'bg-secondary-accent text-white hover:bg-secondary-accent/90'
                  : 'bg-accent text-white hover:bg-accent-hover'
              }`}
            >
              {currentSession ? (
                <div className="flex items-center space-x-2">
                  <Pause className="w-5 h-5" />
                  <span>Clock Out ({currentSession.duration})</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Clock In</span>
                </div>
              )}
            </button>
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
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Focus time</span>
                </div>
                <div className="text-xl font-medium text-text-primary">{todayStats.focusTime}</div>
              </div>
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Prayers today</span>
                </div>
                <div className="text-xl font-medium text-text-primary">{completedPrayers}/5</div>
              </div>
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Tasks done</span>
                </div>
                <div className="text-xl font-medium text-text-primary">{completedTasksCount}/{tasks.length}</div>
              </div>
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Qur'an today</span>
                </div>
                <div className="text-xl font-medium text-text-primary">{todayStats.quranTime}</div>
              </div>
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Target className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Sessions</span>
                </div>
                <div className="text-xl font-medium text-text-primary">{todayStats.sessions}</div>
              </div>
              <div className="bg-bg-primary p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-accent" />
                  <span className="text-sm text-text-secondary">Avg Focus</span>
                </div>
                <div className="text-xl font-medium text-text-primary">{todayStats.avgFocus}</div>
              </div>
            </div>
          </div>

          {/* Today's Prayers */}
          <div className="bg-surface p-6 rounded-xl border border-border-light">
            <h3 className="text-lg font-medium text-text-primary mb-4">Today's Prayers</h3>
            <div className="space-y-3">
              {prayersToday.map((prayer) => (
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

          {/* Today's Intentions */}
          <div className="bg-surface p-6 rounded-xl border border-border-light">
            <h3 className="text-lg font-medium text-text-primary mb-4">Today's Intentions</h3>
            <div className="space-y-3 mb-4">
              {tasks.map((task) => (
                <div key={task.id} className="flex items-center space-x-3">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      task.completed
                        ? 'bg-success border-success text-white'
                        : 'border-border hover:border-accent'
                    }`}
                  >
                    {task.completed && <CheckCircle2 className="w-3 h-3" />}
                  </button>
                  <span className={`flex-1 ${
                    task.completed ? 'text-text-tertiary line-through' : 'text-text-primary'
                  }`}>
                    {task.text}
                  </span>
                </div>
              ))}
            </div>
            
            {tasks.length < 5 && (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTask()}
                  placeholder="Add intention..."
                  className="flex-1 px-3 py-2 border border-border rounded-lg bg-bg-primary focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
                />
                <button
                  onClick={addTask}
                  className="px-3 py-2 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Settings Modal */}
      {showSettings && (
        <BalanceSettings onClose={() => setShowSettings(false)} />
      )}
    </div>
  )
}

export default HomeScreen