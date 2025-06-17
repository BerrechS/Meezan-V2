# 🕌 Meezan — Balance Your Dīn & Dunyā

*A minimalist Islamic productivity app that helps Muslims align their daily workflow with their spiritual duties.*

![Version](https://img.shields.io/badge/version-1.0.0--mvp-sand)
![Status](https://img.shields.io/badge/status-in--development-olive)
![License](https://img.shields.io/badge/license-MIT-burnt--ocher)

---

## 🎯 Vision Statement

**Meezan** (Arabic: ميزان, meaning "balance") is designed with the principle that time is a sacred trust. It's not just about checking boxes—it's about designing one's day around the 5 daily prayers and intentional living, creating harmony between spiritual duties (Dīn) and worldly productivity (Dunyā).

> *"And the heaven He raised and imposed the balance (Meezan)"* — Quran 55:7

---

## 🌅 Core Philosophy

### Balance-Centered Design
Inspired by the serene UI aesthetics of apps like "Balance" by Alexander Sandberg, Meezan embraces:
- **Desert-inspired color palette** with warm, muted tones
- **Prayer-centric workflow** where Salāt times anchor the day
- **Intentional minimalism** — every feature serves a purpose
- **Timed and logged experiences** — everything feels measured and meaningful

### The Five Pillars of Productivity
1. **🕐 Prayer Times** — Real-time, location-based scheduling
2. **📖 Qur'an Reading** — Daily spiritual nourishment  
3. **🎯 Focus Sessions** — Deep work with Pomodoro-style logging
4. **📋 Task Management** — Intentional, prayer-aligned planning
5. **📊 Reflection** — Weekly insights and spiritual compliance

---

## 🎨 Design System

### Color Palette
```css
/* Meezan Desert Theme */
--sand-beige: #DDD3C3        /* Primary background */
--muted-olive: #767B52       /* Accent color */
--burnt-ocher: #C67138       /* Secondary accent */
--deep-midnight: #0B1C27     /* Primary text */
--warm-off-white: #F2EEE8    /* Card backgrounds */
```

### Typography
- **Primary**: Inter (modern sans-serif)
- **Arabic**: Amiri (elegant Arabic script)
- **Display**: Playfair Display (serene headers)

### Layout Principles
- **Generous whitespace** for clarity and calm
- **Visual hierarchy** through font-weight variation
- **Smooth animations** only when they serve intention
- **Mobile-first** responsive design

---

## ✅ Current Implementation Status

### 🟢 Completed Features (MVP v1.0)

#### I. Dīn – Connection to Allah
- ✅ **Prayer Tracker**: Manual prayer completion tracking
- ✅ **Prayer Times**: Geolocation-based calculation with visual countdown
- ✅ **Prayer-Centric Layout**: Next prayer prominently displayed
- ⚠️ **Prayer Compliance**: Weekly tracking (fixed from fake data)

#### II. Dunyā – Mastery of Time  
- ✅ **Focus Timer**: Pomodoro-style with session logging
- ✅ **Task Management**: Minimal, intention-focused task list (max 5/day)
- ✅ **Dashboard**: Redesigned around prayer times
- ✅ **Session Tracking**: All focus sessions stored and viewable

#### III. UX + Design System
- ✅ **Landing Page**: Immersive, beautiful onboarding
- ✅ **Desert Color System**: Complete implementation
- ✅ **Authentication**: Secure user management via Supabase
- ✅ **Responsive Design**: Works beautifully on all devices
- ✅ **Theme Support**: Light/dark modes with desert aesthetics

### 🟡 In Progress

#### Next Prayer Integration
- ⏳ **Prayer Time Notifications**: Browser/system notifications
- ⏳ **Time-Aware Scheduling**: Auto-schedule tasks between prayers
- ⏳ **Break Logic**: Suggest breaks after 50-60 min focus sessions

#### Spiritual Modules
- ⏳ **Qur'an Reader**: Arabic text with translation and TTS
- ⏳ **Dua Library**: Searchable collection with audio
- ⏳ **Dhikr Counter**: Digital misbaha with adhkar

### 🔴 Planned Features (v1.1+)

#### Enhanced Productivity
- 📅 **Daily Planner**: "3 tasks/day" Notion-style layout
- 📊 **Weekly Reviews**: Spiritual and productivity insights
- 🎯 **Goal Tracking**: Long-term Islamic and personal goals
- 📱 **Mobile App**: Native iOS/Android versions

#### Community Features
- 🤝 **Prayer Reminders**: Group accountability
- 📚 **Study Circles**: Collaborative Qur'an study
- 🏆 **Spiritual Challenges**: Community-driven growth

---

## 🛠️ Technical Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling with custom design system
- **Vite** for fast development and builds
- **Date-fns** for time/date manipulation
- **Lucide React** for consistent iconography

### Backend & Services
- **Supabase** for authentication and database
- **Real-time Prayer Times API** for accurate Salāh times
- **Local Storage** for offline-first prayer tracking
- **Browser Geolocation** for location-based features

### Development
- **ESLint + TypeScript** for code quality
- **PostCSS + Autoprefixer** for CSS processing
- **GitHub Actions** for CI/CD (planned)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Supabase account (for backend services)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/meezan.git
cd meezan

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Add your Supabase credentials

# Start development server
npm run dev
```

### Environment Variables
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🔧 Recent Fixes & Improvements

### ✅ Resolved Issues
- **Prayer Tracker**: Fixed fake "28/35 prayers completed" data
- **Color System**: Updated to exact desert palette specification
- **Dashboard Layout**: Restructured to be prayer-centric
- **Task Management**: Confirmed working state for task adding
- **Weekly Compliance**: Now calculates from actual stored data

### 🎯 UX Improvements Implemented
- **Next Prayer Center Stage**: Prominently displayed at dashboard top
- **Prayer-Aligned Grid**: Left column for tasks/focus, right for spiritual
- **Intentional Task Limiting**: Maximum 5 tasks for focused productivity
- **Time-Aware Interface**: Everything feels timed and logged
- **Smooth Animations**: Only when they serve user intention

---

## 🎮 User Experience Flow

### Daily Workflow
1. **Land on Dashboard** → See next prayer time immediately
2. **Review Today's Tasks** → Plan 3-5 intentional actions
3. **Clock In for Focus** → Start deep work session
4. **Prayer Break** → Mark prayer completion when time arrives
5. **Continue Focus** → Resume work between prayers
6. **Evening Reflection** → Review day's spiritual and productivity metrics

### Prayer-Centric Scheduling
```
Fajr → [Deep Work Session] → Dhuhr → [Break/Lunch] → 
Asr → [Final Push] → Maghrib → [Family Time] → 
Isha → [Evening Review]
```

---

## 🤲 Contributing

We welcome contributions that align with Meezan's vision of balanced, intentional productivity:

### Contribution Guidelines
1. **Follow the desert design system** — maintain visual consistency
2. **Prayer-first approach** — all features should respect Salāh times
3. **Minimalist philosophy** — add only what serves the core purpose
4. **Test thoroughly** — ensure all features work offline-first

### Development Workflow
```bash
# Create feature branch
git checkout -b feature/dhikr-counter

# Make changes following design system
# Test in both light and dark modes
# Ensure mobile responsiveness

# Submit PR with clear description
git push origin feature/dhikr-counter
```

---

## 📞 Support & Community

- **Issues**: [GitHub Issues](https://github.com/your-username/meezan/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/meezan/discussions)
- **Email**: support@meezan.app
- **Twitter**: [@MeezanApp](https://twitter.com/MeezanApp)

---

## 📜 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🌙 Acknowledgments

- **Islamic Calendar Calculations**: Thanks to the Islamic Society of North America
- **Design Inspiration**: Alexander Sandberg's "Balance" app aesthetic
- **Color Theory**: Inspired by traditional Islamic geometric patterns
- **Typography**: Amiri font by Khaled Hosny for beautiful Arabic text

---

*"And indeed, in the remembrance of Allah do hearts find rest."* — Quran 13:28

**Made with 🤍 for the Ummah**
