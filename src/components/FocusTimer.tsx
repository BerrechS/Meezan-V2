import React, { useState, useEffect } from 'react'
import { Play, Pause, Square, Coffee, RotateCcw } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useSession } from '../contexts/SessionContext'

const FocusTimer: React.FC = () => {
  const navigate = useNavigate()
  const { currentSession, startSession, stopSession, pauseSession, resumeSession } = useSession()
  const [timeLeft, setTimeLeft] = useState(25 * 60) // 25 minutes in seconds
  const [isRunning, setIsRunning] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [project, setProject] = useState('Focus Work')

  useEffect(() => {
    let interval: NodeJS.Timeout
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setIsRunning(false)
      // Auto start break or work session
      if (isBreak) {
        setTimeLeft(25 * 60) // Back to work
        setIsBreak(false)
      } else {
        setTimeLeft(5 * 60) // 5 minute break
        setIsBreak(true)
      }
    }

    return () => clearInterval(interval)
  }, [isRunning, timeLeft, isBreak])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const handleStart = () => {
    if (!currentSession) {
      startSession(project)
    }
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
    if (currentSession) {
      pauseSession()
    }
  }

  const handleStop = () => {
    setIsRunning(false)
    setTimeLeft(25 * 60)
    setIsBreak(false)
    if (currentSession) {
      stopSession()
    }
  }

  const handleReset = () => {
    setIsRunning(false)
    setTimeLeft(isBreak ? 5 * 60 : 25 * 60)
  }

  return (
    <div className="min-h-screen bg-bg-primary flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Timer Display */}
        <div className="text-center mb-8">
          <div className="text-6xl font-light text-text-primary mb-4">
            {formatTime(timeLeft)}
          </div>
          <div className="text-lg text-text-secondary mb-2">
            {isBreak ? 'Break Time' : 'Focus Time'}
          </div>
          <div className="text-sm text-text-tertiary">
            {currentSession ? `Working on: ${currentSession.project}` : 'Ready to start'}
          </div>
        </div>

        {/* Project Input */}
        {!currentSession && (
          <div className="mb-6">
            <input
              type="text"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="What are you working on?"
              className="w-full px-4 py-3 border border-border rounded-lg bg-surface focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-center"
            />
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-center space-x-4 mb-8">
          {!isRunning ? (
            <button
              onClick={handleStart}
              className="flex items-center space-x-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent-hover transition-colors"
            >
              <Play className="w-5 h-5" />
              <span>Start</span>
            </button>
          ) : (
            <button
              onClick={handlePause}
              className="flex items-center space-x-2 px-6 py-3 bg-secondary-accent text-white rounded-lg hover:bg-secondary-accent/90 transition-colors"
            >
              <Pause className="w-5 h-5" />
              <span>Pause</span>
            </button>
          )}
          
          <button
            onClick={handleReset}
            className="flex items-center space-x-2 px-6 py-3 border border-border text-text-primary rounded-lg hover:bg-surface transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            <span>Reset</span>
          </button>
          
          <button
            onClick={handleStop}
            className="flex items-center space-x-2 px-6 py-3 border border-border text-text-primary rounded-lg hover:bg-surface transition-colors"
          >
            <Square className="w-5 h-5" />
            <span>Stop</span>
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <button
            onClick={() => setTimeLeft(15 * 60)}
            className="py-2 px-4 border border-border rounded-lg hover:bg-surface transition-colors text-sm"
          >
            15m
          </button>
          <button
            onClick={() => setTimeLeft(25 * 60)}
            className="py-2 px-4 border border-border rounded-lg hover:bg-surface transition-colors text-sm"
          >
            25m
          </button>
          <button
            onClick={() => setTimeLeft(45 * 60)}
            className="py-2 px-4 border border-border rounded-lg hover:bg-surface transition-colors text-sm"
          >
            45m
          </button>
        </div>

        {/* Back to Dashboard */}
        <div className="text-center">
          <button
            onClick={() => navigate('/dashboard')}
            className="text-accent hover:text-accent-hover transition-colors"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

export default FocusTimer