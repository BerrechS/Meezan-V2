import React, { useState } from 'react'
import { ArrowLeft, Settings, Play, Pause } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const QuranReader: React.FC = () => {
  const navigate = useNavigate()
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-quran-bg">
      {/* Header */}
      <header className="bg-surface border-b border-border-light px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-surface-hover rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-text-secondary" />
            </button>
            <h1 className="text-lg font-medium text-text-primary">Qur'an Reader</h1>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 hover:bg-surface-hover rounded-lg transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-text-secondary" />
              ) : (
                <Play className="w-5 h-5 text-text-secondary" />
              )}
            </button>
            <button className="p-2 hover:bg-surface-hover rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-text-secondary" />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-medium text-text-primary mb-2">
              Al-Fatiha
            </h2>
            <p className="text-text-secondary">The Opening • 7 verses</p>
          </div>

          <div className="space-y-8">
            {/* Verse 1 */}
            <div className="text-center">
              <div className="text-3xl font-arabic text-text-primary mb-4 leading-relaxed">
                بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
              </div>
              <div className="text-text-secondary">
                In the name of Allah, the Entirely Merciful, the Especially Merciful.
              </div>
            </div>

            {/* Verse 2 */}
            <div className="text-center">
              <div className="text-3xl font-arabic text-text-primary mb-4 leading-relaxed">
                الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
              </div>
              <div className="text-text-secondary">
                [All] praise is [due] to Allah, Lord of the worlds.
              </div>
            </div>

            {/* Verse 3 */}
            <div className="text-center">
              <div className="text-3xl font-arabic text-text-primary mb-4 leading-relaxed">
                الرَّحْمَٰنِ الرَّحِيمِ
              </div>
              <div className="text-text-secondary">
                The Entirely Merciful, the Especially Merciful.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default QuranReader