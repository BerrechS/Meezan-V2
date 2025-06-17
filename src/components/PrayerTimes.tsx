import React, { useState } from 'react'
import { ArrowLeft, MapPin, Settings, Clock } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { usePrayer } from '../contexts/PrayerContext'

const PrayerTimes: React.FC = () => {
  const navigate = useNavigate()
  const { prayersToday, nextPrayer, markPrayerCompleted } = usePrayer()
  const [showSettings, setShowSettings] = useState(false)

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-surface rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-text-secondary" />
            </button>
            <div>
              <h1 className="text-2xl font-light text-text-primary">Prayer Times</h1>
              <p className="text-text-secondary flex items-center space-x-1">
                <MapPin className="w-4 h-4" />
                <span>Location-based • Today</span>
              </p>
            </div>
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
          {/* Next Prayer Card */}
          <div className="bg-accent-light p-8 rounded-xl border border-accent/20 text-center">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Clock className="w-6 h-6 text-accent" />
              <span className="text-sm font-medium text-accent uppercase tracking-wide">Next Prayer</span>
            </div>
            <div className="text-4xl font-light text-text-primary mb-2">
              {nextPrayer?.name}
            </div>
            <div className="text-2xl font-medium text-accent mb-2">
              in {nextPrayer?.timeUntil}
            </div>
            <div className="text-text-secondary">
              {nextPrayer?.time} • Location-based
            </div>
          </div>

          {/* Today's Prayers */}
          <div className="bg-surface p-6 rounded-xl border border-border-light">
            <h2 className="text-xl font-medium text-text-primary mb-6">Today's Prayers</h2>
            <div className="space-y-4">
              {prayersToday.map((prayer) => (
                <div
                  key={prayer.name}
                  className={`flex items-center justify-between p-4 rounded-lg transition-colors ${
                    prayer.completed ? 'bg-success/10' : 'bg-bg-primary'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => markPrayerCompleted(prayer.name)}
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        prayer.completed
                          ? 'bg-success border-success text-white'
                          : 'border-border hover:border-accent'
                      }`}
                    >
                      {prayer.completed && (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <div>
                      <div className="text-lg font-medium text-text-primary">{prayer.name}</div>
                      <div className="text-sm text-text-secondary">
                        {prayer.completed ? 'Completed' : 'Pending'}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium text-text-primary">{prayer.time}</div>
                    <div className="text-sm text-text-secondary">
                      {prayer.name === nextPrayer?.name && !prayer.completed ? (
                        <span className="text-accent">in {nextPrayer.timeUntil}</span>
                      ) : (
                        'Today'
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prayer Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface p-6 rounded-xl border border-border-light text-center">
              <div className="text-3xl font-light text-accent mb-2">
                {prayersToday.filter(p => p.completed).length}/5
              </div>
              <div className="text-text-secondary">Today's Prayers</div>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-border-light text-center">
              <div className="text-3xl font-light text-accent mb-2">28/35</div>
              <div className="text-text-secondary">This Week</div>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-border-light text-center">
              <div className="text-3xl font-light text-accent mb-2">95%</div>
              <div className="text-text-secondary">Monthly Average</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PrayerTimes