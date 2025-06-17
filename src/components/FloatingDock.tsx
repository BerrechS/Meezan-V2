import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Home, BookOpen, Clock, Settings, Timer } from 'lucide-react'
import { usePrayer } from '../contexts/PrayerContext'

const FloatingDock: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { nextPrayer } = usePrayer()

  // Hide dock on landing and auth pages
  if (location.pathname === '/' || location.pathname === '/auth') {
    return null
  }

  // Hide dock during focus sessions
  if (location.pathname === '/focus') {
    return null
  }

  const dockItems = [
    { icon: Home, label: 'Home', path: '/dashboard' },
    { icon: BookOpen, label: 'Qur\'an', path: '/quran' },
    { icon: Timer, label: 'Focus', path: '/focus' },
    { icon: Clock, label: nextPrayer ? `${nextPrayer.name} in ${nextPrayer.timeUntil}` : 'Prayer', path: '/prayer' },
    { icon: Settings, label: 'Settings', path: '/settings' }
  ]

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-surface/80 backdrop-blur-md border border-border-light rounded-2xl p-2 shadow-kamelizer">
        <div className="flex items-center space-x-1">
          {dockItems.map((item, index) => {
            const isActive = location.pathname === item.path
            const Icon = item.icon
            
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`relative group p-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                  isActive 
                    ? 'bg-accent text-white' 
                    : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-text-primary text-contrast-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {item.label}
                </div>
                
                {/* Prayer indicator */}
                {item.icon === Clock && nextPrayer && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary-accent rounded-full animate-pulse" />
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FloatingDock