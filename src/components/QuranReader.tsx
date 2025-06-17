import React, { useState, useEffect } from 'react'
import { ArrowLeft, Settings, Play, Pause, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface Surah {
  number: number
  name: string
  englishName: string
  verses: number
}

interface Verse {
  number: number
  arabic: string
  translation: string
  transliteration: string
}

const QuranReader: React.FC = () => {
  const navigate = useNavigate()
  const [selectedSurah, setSelectedSurah] = useState(1)
  const [showSettings, setShowSettings] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isPlaying, setIsPlaying] = useState(false)
  const [sessionTime, setSessionTime] = useState(0)
  const [isSessionActive, setIsSessionActive] = useState(false)

  // Sample surahs data
  const surahs: Surah[] = [
    { number: 1, name: 'الفاتحة', englishName: 'Al-Fatiha', verses: 7 },
    { number: 2, name: 'البقرة', englishName: 'Al-Baqarah', verses: 286 },
    { number: 3, name: 'آل عمران', englishName: 'Ali \'Imran', verses: 200 },
    // Add more surahs as needed
  ]

  // Sample verses for Al-Fatiha
  const verses: Verse[] = [
    {
      number: 1,
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      transliteration: 'Bismillahi r-rahmani r-raheem'
    },
    {
      number: 2,
      arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      translation: '[All] praise is [due] to Allah, Lord of the worlds.',
      transliteration: 'Alhamdu lillahi rabbi l-alameen'
    },
    {
      number: 3,
      arabic: 'الرَّحْمَٰنِ الرَّحِيمِ',
      translation: 'The Entirely Merciful, the Especially Merciful.',
      transliteration: 'Ar-rahmani r-raheem'
    },
    {
      number: 4,
      arabic: 'مَالِكِ يَوْمِ الدِّينِ',
      translation: 'Sovereign of the Day of Recompense.',
      transliteration: 'Maliki yawmi d-deen'
    },
    {
      number: 5,
      arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
      translation: 'It is You we worship and You we ask for help.',
      transliteration: 'Iyyaka na\'budu wa iyyaka nasta\'een'
    },
    {
      number: 6,
      arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
      translation: 'Guide us to the straight path.',
      transliteration: 'Ihdina s-sirata l-mustaqeem'
    },
    {
      number: 7,
      arabic: 'صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
      translation: 'The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.',
      transliteration: 'Sirata l-ladhina an\'amta \'alayhim ghayri l-maghdubi \'alayhim wa la d-dalleen'
    }
  ]

  const filteredSurahs = surahs.filter(surah =>
    surah.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    surah.name.includes(searchTerm) ||
    surah.number.toString().includes(searchTerm)
  )

  const currentSurah = surahs.find(s => s.number === selectedSurah)

  // Session timer
  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isSessionActive) {
      interval = setInterval(() => {
        setSessionTime(prev => prev + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isSessionActive])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const toggleSession = () => {
    setIsSessionActive(!isSessionActive)
  }

  return (
    <div className="min-h-screen bg-bg-primary flex">
      {/* Sidebar */}
      <div className="w-80 bg-surface border-r border-border-light flex flex-col">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border-light">
          <div className="flex items-center space-x-3 mb-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="p-2 hover:bg-surface-hover rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-text-secondary" />
            </button>
            <h1 className="text-lg font-medium text-text-primary">Qur'an Reader</h1>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <input
              type="text"
              placeholder="Search surahs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-bg-primary focus:ring-2 focus:ring-accent focus:border-accent transition-colors text-sm"
            />
          </div>
        </div>

        {/* Surah List */}
        <div className="flex-1 overflow-y-auto">
          {filteredSurahs.map((surah) => (
            <button
              key={surah.number}
              onClick={() => setSelectedSurah(surah.number)}
              className={`w-full p-4 text-left hover:bg-surface-hover transition-colors border-b border-border-light/50 ${
                selectedSurah === surah.number ? 'bg-accent-light border-l-4 border-l-accent' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-sm font-medium text-accent">
                      {surah.number}
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">{surah.englishName}</div>
                      <div className="text-sm text-text-secondary">{surah.name}</div>
                    </div>
                  </div>
                </div>
                <div className="text-xs text-text-tertiary">
                  {surah.verses} verses
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-surface border-b border-border-light px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div>
                <h2 className="text-xl font-medium text-text-primary">
                  {currentSurah?.englishName}
                </h2>
                <p className="text-text-secondary text-sm">
                  {currentSurah?.name} • {currentSurah?.verses} verses
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Session Timer */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleSession}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    isSessionActive
                      ? 'bg-secondary-accent text-white hover:bg-secondary-accent/90'
                      : 'bg-accent text-white hover:bg-accent-hover'
                  }`}
                >
                  {isSessionActive ? 'Stop' : 'Start'} Session
                </button>
                <span className="text-text-secondary text-sm">
                  {formatTime(sessionTime)}
                </span>
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
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 hover:bg-surface-hover rounded-lg transition-colors"
                >
                  <Settings className="w-5 h-5 text-text-secondary" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Settings Panel */}
        {showSettings && (
          <div className="bg-surface border-b border-border-light px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">Arabic Size:</span>
                <button className="px-2 py-1 border border-border rounded text-sm">28px</button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">Translation:</span>
                <select className="px-2 py-1 border border-border rounded text-sm bg-bg-primary">
                  <option>Dr. Mustafa Khattab</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">Show Translation:</span>
                <button className="w-8 h-4 bg-accent rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">Transliteration:</span>
                <button className="w-8 h-4 bg-border rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-text-secondary">Night Mode:</span>
                <button className="w-8 h-4 bg-border rounded-full relative">
                  <div className="w-3 h-3 bg-white rounded-full absolute left-0.5 top-0.5"></div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <main className="flex-1 overflow-y-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {verses.map((verse) => (
                <div key={verse.number} className="text-center">
                  {/* Verse Number */}
                  <div className="flex justify-center mb-4">
                    <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center text-sm font-medium text-accent">
                      {verse.number}
                    </div>
                  </div>
                  
                  {/* Arabic Text */}
                  <div className="text-3xl font-arabic text-text-primary mb-4 leading-relaxed">
                    {verse.arabic}
                  </div>
                  
                  {/* Translation */}
                  <div className="text-text-secondary mb-2 leading-relaxed">
                    {verse.translation}
                  </div>
                  
                  {/* Transliteration */}
                  <div className="text-text-tertiary text-sm italic">
                    {verse.transliteration}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-border-light">
              <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-surface-hover transition-colors">
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Surah</span>
              </button>
              
              <span className="text-text-secondary text-sm">
                Surah {currentSurah?.number} of 114
              </span>
              
              <button className="flex items-center space-x-2 px-4 py-2 border border-border rounded-lg hover:bg-surface-hover transition-colors">
                <span>Next Surah</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default QuranReader