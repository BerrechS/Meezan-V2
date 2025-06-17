import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

interface Prayer {
  name: string
  time: string
  completed: boolean
}

interface NextPrayer {
  name: string
  time: string
  timeUntil: string
}

interface PrayerContextType {
  prayersToday: Prayer[]
  nextPrayer: NextPrayer | null
  completedPrayers: number
  markPrayerCompleted: (prayerName: string) => void
  calculateNextPrayer: () => void
}

const PrayerContext = createContext<PrayerContextType | undefined>(undefined)

export const usePrayer = () => {
  const context = useContext(PrayerContext)
  if (context === undefined) {
    throw new Error('usePrayer must be used within a PrayerProvider')
  }
  return context
}

interface PrayerProviderProps {
  children: ReactNode
}

export const PrayerProvider: React.FC<PrayerProviderProps> = ({ children }) => {
  const [prayersToday, setPrayersToday] = useState<Prayer[]>([
    { name: 'Fajr', time: '05:30', completed: true },
    { name: 'Dhuhr', time: '12:45', completed: true },
    { name: 'Asr', time: '15:45', completed: true },
    { name: 'Maghrib', time: '18:45', completed: false },
    { name: 'Isha', time: '20:15', completed: false },
  ])

  const [nextPrayer, setNextPrayer] = useState<NextPrayer | null>(null)

  const calculateNextPrayer = () => {
    const now = new Date()
    const currentTime = now.getHours() * 60 + now.getMinutes()

    for (const prayer of prayersToday) {
      if (!prayer.completed) {
        const [hours, minutes] = prayer.time.split(':').map(Number)
        const prayerTime = hours * 60 + minutes
        
        let timeUntil: string
        if (prayerTime > currentTime) {
          const diff = prayerTime - currentTime
          const hoursUntil = Math.floor(diff / 60)
          const minsUntil = diff % 60
          
          if (hoursUntil > 0) {
            timeUntil = `${hoursUntil}h ${minsUntil}m`
          } else {
            timeUntil = `${minsUntil}m`
          }
        } else {
          // Next day Fajr
          const tomorrowFajr = 5 * 60 + 30 // 5:30 AM
          const minsUntilMidnight = (24 * 60) - currentTime
          const totalMins = minsUntilMidnight + tomorrowFajr
          const hoursUntil = Math.floor(totalMins / 60)
          const minsUntil = totalMins % 60
          timeUntil = `${hoursUntil}h ${minsUntil}m`
        }

        setNextPrayer({
          name: prayer.name,
          time: prayer.time,
          timeUntil
        })
        return
      }
    }

    // If all prayers completed, show tomorrow's Fajr
    const tomorrowFajr = prayersToday[0]
    const now24h = now.getHours() * 60 + now.getMinutes()
    const fajrTime = 5 * 60 + 30
    const minsUntilMidnight = (24 * 60) - now24h
    const totalMins = minsUntilMidnight + fajrTime
    const hoursUntil = Math.floor(totalMins / 60)
    const minsUntil = totalMins % 60

    setNextPrayer({
      name: 'Fajr',
      time: '05:30',
      timeUntil: `${hoursUntil}h ${minsUntil}m`
    })
  }

  const markPrayerCompleted = (prayerName: string) => {
    setPrayersToday(prev => 
      prev.map(prayer => 
        prayer.name === prayerName 
          ? { ...prayer, completed: true }
          : prayer
      )
    )
  }

  const completedPrayers = prayersToday.filter(prayer => prayer.completed).length

  useEffect(() => {
    calculateNextPrayer()
    const interval = setInterval(calculateNextPrayer, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [prayersToday])

  const value = {
    prayersToday,
    nextPrayer,
    completedPrayers,
    markPrayerCompleted,
    calculateNextPrayer
  }

  return (
    <PrayerContext.Provider value={value}>
      {children}
    </PrayerContext.Provider>
  )
}