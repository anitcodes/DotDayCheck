"use client"

import {
  CalendarIcon,
  Heart,
  Home,
  LineChart,
  Music,
  Settings,
  User,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Smile,
  Frown,
  Meh,
} from "lucide-react"
import { useState } from "react"

// Navigation items
const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Calendar", url: "/calendar", icon: CalendarIcon, isActive: true },
  { title: "Insights", url: "/insights", icon: LineChart },
  { title: "My Diary", url: "/diary", icon: BookOpen },
  { title: "Music", url: "/music", icon: Music },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
]

function Sidebar({ isOpen, onClose, theme }) {
  const primaryColor = theme === "normal" ? "#FF157A" : "#3B82F6"

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-xl"
            >
              <img src="/logo.png" alt="DotDay" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">DotDay</h2>
              <p className="text-sm text-gray-500">Your wellness companion</p>
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden p-1 rounded-md hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <p className="text-sm font-medium text-gray-600 mb-3">Navigation</p>
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.title}
                href={item.url}
                className={`
                  flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors
                  ${item.isActive ? "text-white" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"}
                `}
                style={item.isActive ? { backgroundColor: primaryColor } : {}}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.title}</span>
              </a>
            ))}
          </nav>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: primaryColor }}
            >
              SJ
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">Sarah Johnson</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function ModeToggle({ mode, onModeChange, theme }) {
  const normalColor = "#FF157A"
  const tricyclingColor = "#3B82F6"

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => onModeChange("normal")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          mode === "normal" ? "text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
        }`}
        style={mode === "normal" ? { backgroundColor: normalColor } : {}}
      >
        Normal Mode
      </button>
      <button
        onClick={() => onModeChange("tricycling")}
        className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
          mode === "tricycling" ? "text-white shadow-sm" : "text-gray-600 hover:text-gray-900"
        }`}
        style={mode === "tricycling" ? { backgroundColor: tricyclingColor } : {}}
      >
        Tricycling Mode
      </button>
    </div>
  )
}

function CalendarGrid({ mode, theme }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const primaryColor = theme === "normal" ? "#FF157A" : "#3B82F6"
  const lightColor = theme === "normal" ? "#FF157A20" : "#3B82F620"

  // Sample data for demonstration
  const periodDays = [5, 6, 7, 8, 9] // Days with period
  const ovulationDay = 14 // Ovulation day
  const fertileDays = [12, 13, 14, 15, 16] // Fertile window
  const predictedPeriod = [33, 34, 35, 36] // Next predicted period
  const symptoms = {
    3: ["cramps", "mood"],
    7: ["headache"],
    14: ["mood"],
    21: ["bloating"],
  }
  const moods = {
    5: "sad",
    8: "neutral",
    14: "happy",
    20: "neutral",
    25: "sad",
  }

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const daysInMonth = lastDay.getDate()
  const startingDayOfWeek = firstDay.getDay()

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate)
    newDate.setMonth(month + direction)
    setCurrentDate(newDate)
  }

  const getDayStatus = (day) => {
    const statuses = []

    if (periodDays.includes(day)) {
      statuses.push("period")
    }
    if (ovulationDay === day) {
      statuses.push("ovulation")
    }
    if (fertileDays.includes(day)) {
      statuses.push("fertile")
    }
    if (predictedPeriod.includes(day)) {
      statuses.push("predicted")
    }
    if (symptoms[day]) {
      statuses.push("symptoms")
    }
    if (moods[day]) {
      statuses.push("mood")
    }

    return statuses
  }

  const getDayStyle = (day) => {
    const statuses = getDayStatus(day)

    if (statuses.includes("period")) {
      return { backgroundColor: primaryColor, color: "white" }
    }
    if (statuses.includes("ovulation")) {
      return { backgroundColor: "#10B981", color: "white" }
    }
    if (statuses.includes("fertile")) {
      return { backgroundColor: lightColor, color: primaryColor }
    }
    if (statuses.includes("predicted")) {
      return { backgroundColor: "#F3F4F6", color: primaryColor, border: `2px dashed ${primaryColor}` }
    }

    return {}
  }

  const getMoodIcon = (day) => {
    const mood = moods[day]
    if (!mood) return null

    switch (mood) {
      case "happy":
        return <Smile className="h-3 w-3 text-green-500" />
      case "sad":
        return <Frown className="h-3 w-3 text-red-500" />
      case "neutral":
        return <Meh className="h-3 w-3 text-yellow-500" />
      default:
        return null
    }
  }

  const renderCalendarDays = () => {
    const days = []

    // Empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(<div key={`empty-${i}`} className="h-16 md:h-20"></div>)
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const statuses = getDayStatus(day)
      const dayStyle = getDayStyle(day)
      const isToday =
        new Date().getDate() === day && new Date().getMonth() === month && new Date().getFullYear() === year

      days.push(
        <div
          key={day}
          className={`h-16 md:h-20 border border-gray-200 p-1 md:p-2 relative cursor-pointer hover:bg-gray-50 transition-colors ${
            isToday ? "ring-2 ring-blue-500" : ""
          }`}
          style={dayStyle}
        >
          <div className="flex flex-col h-full">
            <span className="text-sm md:text-base font-medium">{day}</span>

            <div className="flex-1 flex flex-col justify-between">
              {/* Symptoms indicators */}
              {symptoms[day] && (
                <div className="flex flex-wrap gap-1 mt-1">
                  {symptoms[day].map((symptom, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor:
                          symptom === "cramps" ? "#EF4444" : symptom === "headache" ? "#F59E0B" : "#8B5CF6",
                      }}
                      title={symptom}
                    />
                  ))}
                </div>
              )}

              {/* Mood indicator */}
              <div className="flex justify-end">{getMoodIcon(day)}</div>
            </div>
          </div>
        </div>,
      )
    }

    return days
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Calendar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button onClick={() => navigateMonth(-1)} className="p-2 rounded-md hover:bg-gray-100 transition-colors">
          <ChevronLeft className="h-5 w-5" />
        </button>

        <h2 className="text-xl font-bold text-gray-900">
          {monthNames[month]} {year}
        </h2>

        <button onClick={() => navigateMonth(1)} className="p-2 rounded-md hover:bg-gray-100 transition-colors">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Days of week header */}
      <div className="grid grid-cols-7 border-b border-gray-200">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="p-2 md:p-4 text-center text-sm font-medium text-gray-500 border-r border-gray-200 last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7">{renderCalendarDays()}</div>
    </div>
  )
}

function Legend({ theme }) {
  const primaryColor = theme === "normal" ? "#FF157A" : "#3B82F6"
  const lightColor = theme === "normal" ? "#FF157A20" : "#3B82F620"

  const legendItems = [
    { label: "Period Days", color: primaryColor, textColor: "white" },
    { label: "Ovulation", color: "#10B981", textColor: "white" },
    { label: "Fertile Window", color: lightColor, textColor: primaryColor },
    { label: "Predicted Period", color: "#F3F4F6", textColor: primaryColor, border: `2px dashed ${primaryColor}` },
    {
      label: "Symptoms",
      indicator: (
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
          <div className="w-2 h-2 rounded-full bg-purple-500"></div>
        </div>
      ),
    },
    {
      label: "Mood",
      indicator: (
        <div className="flex gap-1">
          <Smile className="h-3 w-3 text-green-500" />
          <Meh className="h-3 w-3 text-yellow-500" />
          <Frown className="h-3 w-3 text-red-500" />
        </div>
      ),
    },
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Legend</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {legendItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {item.indicator ? (
              item.indicator
            ) : (
              <div
                className="w-4 h-4 rounded flex items-center justify-center text-xs"
                style={{
                  backgroundColor: item.color,
                  color: item.textColor,
                  border: item.border,
                }}
              />
            )}
            <span className="text-sm text-gray-700">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function CycleInfo({ mode, theme }) {
  const primaryColor = theme === "normal" ? "#FF157A" : "#3B82F6"
  const lightColor = theme === "normal" ? "#FF157A20" : "#3B82F620"

  const normalModeInfo = {
    currentPhase: "Follicular Phase",
    dayOfCycle: 12,
    cycleLength: 28,
    nextPeriod: "16 days",
    lastPeriod: "12 days ago",
  }

  const tricyclingInfo = {
    currentPhase: "Active Pills - Month 2",
    dayOfCycle: 45,
    cycleLength: 84,
    nextPeriod: "39 days",
    lastPeriod: "45 days ago",
  }

  const info = mode === "normal" ? normalModeInfo : tricyclingInfo

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Cycle Information</h3>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Current Phase:</span>
          <span className="font-medium" style={{ color: primaryColor }}>
            {info.currentPhase}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Day of Cycle:</span>
          <span className="font-medium text-gray-900">{info.dayOfCycle}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Cycle Length:</span>
          <span className="font-medium text-gray-900">{info.cycleLength} days</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Next Period:</span>
          <span className="font-medium text-gray-900">{info.nextPeriod}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">Last Period:</span>
          <span className="font-medium text-gray-900">{info.lastPeriod}</span>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Cycle Progress</span>
            <span>{Math.round((info.dayOfCycle / info.cycleLength) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                backgroundColor: primaryColor,
                width: `${(info.dayOfCycle / info.cycleLength) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Calendar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mode, setMode] = useState("normal") // "normal" or "tricycling"
  const theme = mode === "normal" ? "normal" : "tricycling"
  const primaryColor = theme === "normal" ? "#FF157A" : "#3B82F6"

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} theme={theme} />

      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex h-16 items-center gap-4 px-6">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>

            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">Calendar</h1>
              <p className="text-sm text-gray-600">Track your cycle and symptoms</p>
            </div>

            <ModeToggle mode={mode} onModeChange={setMode} theme={theme} />
          </div>
        </header>

        <main className="p-6">
          <div className="grid gap-6 lg:grid-cols-4">
            {/* Calendar - takes up 3 columns */}
            <div className="lg:col-span-3">
              <CalendarGrid mode={mode} theme={theme} />
            </div>

            {/* Sidebar info - takes up 1 column */}
            <div className="space-y-6">
              <CycleInfo mode={mode} theme={theme} />
              <Legend theme={theme} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
