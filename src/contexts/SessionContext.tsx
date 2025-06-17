import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Session {
  id: string
  project: string
  startTime: Date
  endTime?: Date
  duration: string
  isActive: boolean
}

interface SessionStats {
  focusTime: string
  sessions: number
  quranTime: string
  avgFocus: string
}

interface SessionContextType {
  currentSession: Session | null
  sessions: Session[]
  todayStats: SessionStats
  startSession: (project: string) => void
  stopSession: () => void
  pauseSession: () => void
  resumeSession: () => void
}

const SessionContext = createContext<SessionContextType | undefined>(undefined)

export const useSession = () => {
  const context = useContext(SessionContext)
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider')
  }
  return context
}

interface SessionProviderProps {
  children: ReactNode
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
  const [currentSession, setCurrentSession] = useState<Session | null>(null)
  const [sessions, setSessions] = useState<Session[]>([])
  const [sessionTimer, setSessionTimer] = useState<NodeJS.Timeout | null>(null)

  const formatDuration = (startTime: Date, endTime?: Date) => {
    const end = endTime || new Date()
    const diff = Math.floor((end.getTime() - startTime.getTime()) / 1000 / 60)
    const hours = Math.floor(diff / 60)
    const minutes = diff % 60
    
    if (hours > 0) {
      return `${hours}h ${minutes}m`
    }
    return `${minutes}m`
  }

  const startSession = (project: string) => {
    const newSession: Session = {
      id: Date.now().toString(),
      project,
      startTime: new Date(),
      duration: '0m',
      isActive: true
    }
    
    setCurrentSession(newSession)
    
    // Start timer to update duration
    const timer = setInterval(() => {
      setCurrentSession(prev => {
        if (!prev) return null
        return {
          ...prev,
          duration: formatDuration(prev.startTime)
        }
      })
    }, 1000)
    
    setSessionTimer(timer)
  }

  const stopSession = () => {
    if (currentSession && sessionTimer) {
      clearInterval(sessionTimer)
      
      const completedSession: Session = {
        ...currentSession,
        endTime: new Date(),
        duration: formatDuration(currentSession.startTime, new Date()),
        isActive: false
      }
      
      setSessions(prev => [...prev, completedSession])
      setCurrentSession(null)
      setSessionTimer(null)
    }
  }

  const pauseSession = () => {
    if (sessionTimer) {
      clearInterval(sessionTimer)
      setSessionTimer(null)
    }
  }

  const resumeSession = () => {
    if (currentSession && !sessionTimer) {
      const timer = setInterval(() => {
        setCurrentSession(prev => {
          if (!prev) return null
          return {
            ...prev,
            duration: formatDuration(prev.startTime)
          }
        })
      }, 1000)
      
      setSessionTimer(timer)
    }
  }

  // Calculate today's stats
  const todayStats: SessionStats = {
    focusTime: '2h 30m',
    sessions: sessions.length,
    quranTime: '15m',
    avgFocus: sessions.length > 0 ? '45m' : '0m'
  }

  useEffect(() => {
    return () => {
      if (sessionTimer) {
        clearInterval(sessionTimer)
      }
    }
  }, [sessionTimer])

  const value = {
    currentSession,
    sessions,
    todayStats,
    startSession,
    stopSession,
    pauseSession,
    resumeSession
  }

  return (
    <SessionContext.Provider value={value}>
      {children}
    </SessionContext.Provider>
  )
}