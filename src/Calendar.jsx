"use client"

import {
  CalendarIcon,
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
  Mail,
  Heart,
  Bell,
  Gift,
  Droplets,
  Sun,
  Moon,
  Zap,
  Activity,
  CheckCircle,
  Clock,
  Target,
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
  const primaryColor = theme === "normal" ? "#FF4D8F" : "#3B82F6"

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out shadow-lg
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Header - Logo as full div */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 ">
            <img src="dotdaylogo.png" alt="DotDay" />
          <button onClick={onClose} className="lg:hidden p-2 ml-4 rounded-md hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation Bar */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className={`
                    flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group
                    ${
                      item.isActive
                        ? "text-white shadow-lg transform scale-105"
                        : "text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md"
                    }
                  `}
                  style={item.isActive ? { backgroundColor: primaryColor } : {}}
                >
                  <item.icon
                    className={`h-5 w-5 ${item.isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"}`}
                  />
                  <span className="font-semibold">{item.title}</span>
                  {item.isActive && <div className="ml-auto w-2 h-2 bg-white rounded-full" />}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Partner Features */}
        <div className="px-6 mb-6">
          <div
            className={`rounded-xl p-4 border ${
              theme === "normal"
                ? "bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200"
                : "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"
            }`}
          >
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Heart className={`h-4 w-4 ${theme === "normal" ? "text-pink-500" : "text-blue-500"}`} />
              Partner Care
            </h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                <Mail className={`h-4 w-4 ${theme === "normal" ? "text-pink-500" : "text-blue-500"}`} />
                Send Update
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                <Gift className={`h-4 w-4 ${theme === "normal" ? "text-purple-500" : "text-indigo-500"}`} />
                Care Suggestions
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                <Bell className={`h-4 w-4 ${theme === "normal" ? "text-blue-500" : "text-cyan-500"}`} />
                Reminders
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#FF4D8F" }}
                onClick={() => document.getElementById("photo-upload-calendar").click()}
              >
                SJ
              </div>
              {/* Photo upload options */}
              <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-[120px]">
                  <button
                    onClick={() => document.getElementById("photo-upload-calendar").click()}
                    className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors flex items-center gap-2"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Upload Photo
                  </button>
                  <button
                    onClick={() => {
                      /* Handle delete photo */
                    }}
                    className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors flex items-center gap-2"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete Photo
                  </button>
                </div>
              </div>
              <input
                id="photo-upload-calendar"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0]
                  if (file) {
                    // Handle photo upload
                    console.log("Photo selected:", file)
                  }
                }}
              />
            </div>
            <div className="flex-1">
              <p className="text-sm font-bold text-gray-900">Sarah Johnson</p>
              <p className="text-xs text-gray-500">Premium Member</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function ModeToggle({ mode, onModeChange, theme }) {
  const normalColor = "#FF4D8F"
  const tricyclingColor = "#3B82F6"

  return (
    <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
      <div className="flex items-center gap-2">
        <button
          onClick={() => onModeChange("normal")}
          className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
            mode === "normal"
              ? "text-white shadow-lg transform scale-105"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`}
          style={mode === "normal" ? { backgroundColor: normalColor } : {}}
        >
          <Droplets className="h-4 w-4" />
          Normal Mode
          {mode === "normal" && <div className="w-2 h-2 bg-white rounded-full" />}
        </button>
        <button
          onClick={() => onModeChange("tricycling")}
          className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
            mode === "tricycling"
              ? "text-white shadow-lg transform scale-105"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
          }`}
          style={mode === "tricycling" ? { backgroundColor: tricyclingColor } : {}}
        >
          <Target className="h-4 w-4" />
          Tricycling Mode
          {mode === "tricycling" && <div className="w-2 h-2 bg-white rounded-full" />}
        </button>
      </div>
    </div>
  )
}

function CalendarGrid({ mode, theme }) {
  const [currentDate, setCurrentDate] = useState(new Date())
  const primaryColor = theme === "normal" ? "#FF4D8F" : "#3B82F6"
  const lightColor = theme === "normal" ? "#FF4D8F20" : "#3B82F620"

  // Different data for normal vs tricycling mode
  const normalModeData = {
    periodDays: [5, 6, 7, 8, 9],
    ovulationDay: 14,
    fertileDays: [12, 13, 14, 15, 16],
    predictedPeriod: [33, 34, 35, 36],
    symptoms: {
      3: ["cramps", "mood"],
      7: ["headache"],
      14: ["mood"],
      21: ["bloating"],
    },
    moods: {
      5: "sad",
      8: "neutral",
      14: "happy",
      20: "neutral",
      25: "sad",
    },
  }

  const tricyclingModeData = {
    periodDays: [5, 6, 7], // Shorter periods
    ovulationDay: null, // Suppressed ovulation
    fertileDays: [], // No fertile window
    predictedPeriod: [89, 90, 91], // Next period in 3 months
    symptoms: {
      10: ["mood"],
      25: ["headache"],
      40: ["bloating"],
    },
    moods: {
      8: "happy",
      20: "happy",
      35: "neutral",
      50: "happy",
    },
  }

  const data = mode === "normal" ? normalModeData : tricyclingModeData

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

    if (data.periodDays.includes(day)) {
      statuses.push("period")
    }
    if (data.ovulationDay === day) {
      statuses.push("ovulation")
    }
    if (data.fertileDays.includes(day)) {
      statuses.push("fertile")
    }
    if (data.predictedPeriod.includes(day)) {
      statuses.push("predicted")
    }
    if (data.symptoms[day]) {
      statuses.push("symptoms")
    }
    if (data.moods[day]) {
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
    const mood = data.moods[day]
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
      days.push(<div key={`empty-${i}`} className="h-20 md:h-24"></div>)
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
          className={`h-20 md:h-24 border border-gray-200 p-2 md:p-3 relative cursor-pointer hover:bg-gray-50 transition-all duration-200 hover:shadow-md rounded-lg ${
            isToday ? "ring-2 ring-offset-2" : ""
          }`}
          style={{
            ...dayStyle,
            ...(isToday ? { ringColor: primaryColor } : {}),
          }}
        >
          <div className="flex flex-col h-full">
            <span className={`text-sm md:text-base font-bold ${dayStyle.color === "white" ? "text-white" : ""}`}>
              {day}
            </span>

            <div className="flex-1 flex flex-col justify-between mt-1">
              {/* Symptoms indicators */}
              {data.symptoms[day] && (
                <div className="flex flex-wrap gap-1">
                  {data.symptoms[day].map((symptom, index) => (
                    <div
                      key={index}
                      className="w-2 h-2 rounded-full shadow-sm"
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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Calendar Header */}
      <div
        className="flex items-center justify-between p-6 text-white"
        style={{ background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}CC 100%)` }}
      >
        <button
          onClick={() => navigateMonth(-1)}
          className="p-3 rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="text-center">
          <h2 className="text-2xl font-bold">
            {monthNames[month]} {year}
          </h2>
          <p className="text-sm opacity-90 mt-1">
            {mode === "normal" ? "28-day cycle tracking" : "84-day extended cycle"}
          </p>
        </div>

        <button
          onClick={() => navigateMonth(1)}
          className="p-3 rounded-xl hover:bg-white/20 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Days of week header */}
      <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-200">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div
            key={day}
            className="p-4 text-center text-sm font-bold text-gray-600 border-r border-gray-200 last:border-r-0"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1 p-2 bg-gray-50">{renderCalendarDays()}</div>
    </div>
  )
}

function Legend({ theme, mode }) {
  const primaryColor = theme === "normal" ? "#FF4D8F" : "#3B82F6"
  const lightColor = theme === "normal" ? "#FF4D8F20" : "#3B82F620"

  const normalLegendItems = [
    { label: "Period Days", color: primaryColor, textColor: "white" },
    { label: "Ovulation", color: "#10B981", textColor: "white" },
    { label: "Fertile Window", color: lightColor, textColor: primaryColor },
    { label: "Predicted Period", color: "#F3F4F6", textColor: primaryColor, border: `2px dashed ${primaryColor}` },
  ]

  const tricyclingLegendItems = [
    { label: "Period Days", color: primaryColor, textColor: "white" },
    { label: "Active Pills", color: lightColor, textColor: primaryColor },
    { label: "Predicted Period", color: "#F3F4F6", textColor: primaryColor, border: `2px dashed ${primaryColor}` },
  ]

  const legendItems = mode === "normal" ? normalLegendItems : tricyclingLegendItems

  const commonItems = [
    {
      label: "Symptoms",
      indicator: (
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
          <div className="w-3 h-3 rounded-full bg-purple-500 shadow-sm"></div>
        </div>
      ),
    },
    {
      label: "Mood",
      indicator: (
        <div className="flex gap-1">
          <Smile className="h-4 w-4 text-green-500" />
          <Meh className="h-4 w-4 text-yellow-500" />
          <Frown className="h-4 w-4 text-red-500" />
        </div>
      ),
    },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Activity className={`h-5 w-5 ${theme === "normal" ? "text-pink-500" : "text-blue-500"}`} />
        Legend
      </h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          {[...legendItems, ...commonItems].map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              {item.indicator ? (
                item.indicator
              ) : (
                <div
                  className="w-5 h-5 rounded-lg flex items-center justify-center text-xs font-bold shadow-sm"
                  style={{
                    backgroundColor: item.color,
                    color: item.textColor,
                    border: item.border,
                  }}
                />
              )}
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CycleInfo({ mode, theme }) {
  const primaryColor = theme === "normal" ? "#FF4D8F" : "#3B82F6"

  const normalModeInfo = {
    currentPhase: "Follicular Phase",
    dayOfCycle: 12,
    cycleLength: 28,
    nextPeriod: "16 days",
    lastPeriod: "12 days ago",
    description: "Regular menstrual cycle with natural hormone fluctuations",
    features: ["Natural ovulation", "Fertile windows", "28-day cycles", "Hormone variations"],
  }

  const tricyclingInfo = {
    currentPhase: "Active Pills - Month 2",
    dayOfCycle: 45,
    cycleLength: 84,
    nextPeriod: "39 days",
    lastPeriod: "45 days ago",
    description: "Extended cycle with continuous hormone therapy",
    features: ["Suppressed ovulation", "Fewer periods", "84-day cycles", "Stable hormones"],
  }

  const info = mode === "normal" ? normalModeInfo : tricyclingInfo

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Clock className={`h-5 w-5 ${theme === "normal" ? "text-pink-500" : "text-blue-500"}`} />
        Cycle Information
      </h3>

      <div className="space-y-6">
        {/* Mode Description */}
        <div
          className={`p-4 rounded-xl ${
            theme === "normal" ? "bg-pink-50 border border-pink-200" : "bg-blue-50 border border-blue-200"
          }`}
        >
          <h4 className="font-semibold text-gray-900 mb-2">{mode === "normal" ? "Normal Mode" : "Tricycling Mode"}</h4>
          <p className="text-sm text-gray-600">{info.description}</p>
        </div>

        {/* Current Stats */}
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-600 font-medium">Current Phase:</span>
            <span className="font-bold" style={{ color: primaryColor }}>
              {info.currentPhase}
            </span>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-600 font-medium">Day of Cycle:</span>
            <span className="font-bold text-gray-900">{info.dayOfCycle}</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-600 font-medium">Cycle Length:</span>
            <span className="font-bold text-gray-900">{info.cycleLength} days</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-600 font-medium">Next Period:</span>
            <span className="font-bold text-gray-900">{info.nextPeriod}</span>
          </div>

          <div className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
            <span className="text-gray-600 font-medium">Last Period:</span>
            <span className="font-bold text-gray-900">{info.lastPeriod}</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <div className="flex justify-between text-sm font-medium text-gray-600 mb-3">
            <span>Cycle Progress</span>
            <span>{Math.round((info.dayOfCycle / info.cycleLength) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <div
              className="h-3 rounded-full transition-all duration-500 shadow-sm"
              style={{
                backgroundColor: primaryColor,
                width: `${(info.dayOfCycle / info.cycleLength) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Mode Features */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
          <div className="space-y-2">
            {info.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className={`h-4 w-4 ${theme === "normal" ? "text-pink-500" : "text-blue-500"}`} />
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TrackingInfo({ mode, theme }) {
  const primaryColor = theme === "normal" ? "#FF4D8F" : "#3B82F6"

  const trackingItems = [
    { icon: Droplets, label: "Flow Intensity", value: "Medium", color: "#FF4D8F" },
    { icon: Sun, label: "Mood Score", value: "4.2/5", color: "#F59E0B" },
    { icon: Zap, label: "Energy Level", value: "High", color: "#10B981" },
    { icon: Moon, label: "Sleep Quality", value: "7.5h", color: "#3B82F6" },
    { icon: Activity, label: "Symptoms", value: "2 tracked", color: "#8B5CF6" },
    { icon: Heart, label: "Overall Wellness", value: "Good", color: "#EF4444" },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Target className={`h-5 w-5 ${theme === "normal" ? "text-pink-500" : "text-blue-500"}`} />
        Today's Tracking
      </h3>

      <div className="space-y-4">
        {trackingItems.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
            <div
              className="h-10 w-10 rounded-xl flex items-center justify-center shadow-sm"
              style={{ backgroundColor: `${item.color}20` }}
            >
              <item.icon className="h-5 w-5" style={{ color: item.color }} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-700">{item.label}</p>
              <p className="text-lg font-bold text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        className="w-full mt-6 py-3 px-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        style={{ backgroundColor: primaryColor }}
      >
        Update Today's Data
      </button>
    </div>
  )
}

export default function Calendar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mode, setMode] = useState("normal") // "normal" or "tricycling"
  const theme = mode === "normal" ? "normal" : "tricycling"
  const primaryColor = theme === "normal" ? "#FF4D8F" : "#3B82F6"

  // Get current navigation info
  const currentNav = navigationItems.find((item) => item.isActive)
  const getHeaderInfo = () => {
    if (mode === "normal") {
      return {
        title: "Calendar - Normal Mode 🌸",
        subtitle: "Track your natural 28-day cycle with ovulation and fertile windows",
      }
    } else {
      return {
        title: "Calendar - Tricycling Mode 💊",
        subtitle: "Monitor your extended 84-day cycle with continuous hormone therapy",
      }
    }
  }

  const headerInfo = getHeaderInfo()

  return (
    <div
      className={`flex min-h-screen ${theme === "normal" ? "bg-gradient-to-br from-gray-50 to-pink-50" : "bg-gradient-to-br from-gray-50 to-blue-50"}`}
    >
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} theme={theme} />

      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex h-20 items-center gap-4 px-6">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-3 rounded-xl hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">{headerInfo.title}</h1>
              <p className="text-gray-600">{headerInfo.subtitle}</p>
            </div>

            <div className="flex items-center gap-4">
              <ModeToggle mode={mode} onModeChange={setMode} theme={theme} />
              <div
                className="px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Day {mode === "normal" ? "12" : "45"} of Cycle
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Calendar - takes up 3 columns */}
            <div className="lg:col-span-3">
              <CalendarGrid mode={mode} theme={theme} />
            </div>

            {/* Sidebar info - takes up 1 column */}
            <div className="space-y-6">
              <CycleInfo mode={mode} theme={theme} />
              <TrackingInfo mode={mode} theme={theme} />
              <Legend theme={theme} mode={mode} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
