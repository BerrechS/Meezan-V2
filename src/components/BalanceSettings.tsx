import React, { useState } from 'react'
import { X, Moon, Sun, Volume2, VolumeX, Bell, BellOff, LogOut } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

interface BalanceSettingsProps {
  onClose: () => void
}

const BalanceSettings: React.FC<BalanceSettingsProps> = ({ onClose }) => {
  const { theme, toggleTheme } = useTheme()
  const [breakReminders, setBreakReminders] = useState(true)
  const [breakInterval, setBreakInterval] = useState(60)
  const [clockInReminder, setClockInReminder] = useState(true)
  const [countFocusDown, setCountFocusDown] = useState(false)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [notifications, setNotifications] = useState(true)

  const handleSignOut = () => {
    // Dispatch custom event for sign out
    window.dispatchEvent(new CustomEvent('signOut'))
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-surface rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border-light">
          <h2 className="text-xl font-medium text-text-primary">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-surface-hover rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Settings Content */}
        <div className="p-6 space-y-6">
          {/* Theme */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {theme === 'light' ? (
                <Sun className="w-5 h-5 text-text-secondary" />
              ) : (
                <Moon className="w-5 h-5 text-text-secondary" />
              )}
              <span className="text-text-primary">Dark mode</span>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                theme === 'dark' ? 'bg-accent' : 'bg-border'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Break Reminders */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-3">
                <Bell className="w-5 h-5 text-text-secondary" />
                <span className="text-text-primary">Break reminders</span>
              </div>
              <button
                onClick={() => setBreakReminders(!breakReminders)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  breakReminders ? 'bg-accent' : 'bg-border'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    breakReminders ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
            {breakReminders && (
              <div className="ml-8">
                <label className="text-sm text-text-secondary">
                  Get reminded every {breakInterval} min
                </label>
                <input
                  type="range"
                  min="15"
                  max="120"
                  step="15"
                  value={breakInterval}
                  onChange={(e) => setBreakInterval(Number(e.target.value))}
                  className="w-full mt-2 accent-accent"
                />
                <div className="flex justify-between text-xs text-text-tertiary mt-1">
                  <span>15m</span>
                  <span>120m</span>
                </div>
              </div>
            )}
          </div>

          {/* Count Focus Timer Down */}
          <div className="flex items-center justify-between">
            <span className="text-text-primary">Count focus timer down</span>
            <button
              onClick={() => setCountFocusDown(!countFocusDown)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                countFocusDown ? 'bg-accent' : 'bg-border'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  countFocusDown ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Clock-in Reminder */}
          <div className="flex items-center justify-between">
            <span className="text-text-primary">Clock-in reminder</span>
            <button
              onClick={() => setClockInReminder(!clockInReminder)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                clockInReminder ? 'bg-accent' : 'bg-border'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  clockInReminder ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Sound */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {soundEnabled ? (
                <Volume2 className="w-5 h-5 text-text-secondary" />
              ) : (
                <VolumeX className="w-5 h-5 text-text-secondary" />
              )}
              <span className="text-text-primary">Sound</span>
            </div>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                soundEnabled ? 'bg-accent' : 'bg-border'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  soundEnabled ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Notifications */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {notifications ? (
                <Bell className="w-5 h-5 text-text-secondary" />
              ) : (
                <BellOff className="w-5 h-5 text-text-secondary" />
              )}
              <span className="text-text-primary">Notifications</span>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                notifications ? 'bg-accent' : 'bg-border'
              }`}
            >
              <div
                className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                  notifications ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Divider */}
          <hr className="border-border-light" />

          {/* Sign Out */}
          <button
            onClick={handleSignOut}
            className="w-full flex items-center justify-center space-x-2 py-3 bg-error text-white rounded-lg hover:bg-error/90 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default BalanceSettings