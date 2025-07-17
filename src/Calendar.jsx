import { useState } from "react"
import MainContentLayout from "./components/main-layout-content"
import {
  ChevronLeft,
  ChevronRight,
  Smile,
  Frown,
  Meh,
  Heart,
  Droplets,
  Sun,
  Moon,
  Zap,
  Activity,
  CheckCircle,
  Clock,
  Target,
} from "lucide-react"
import { useOutletContext } from "react-router-dom"

// Removed navigationItems as it's now in app-sidebar.jsx
// Removed Sidebar import and function as it's replaced by AppSidebar

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
        className="w-full mt-12 py-3 px-4 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        style={{ backgroundColor: primaryColor }}
      >
        Update Today's Data
      </button>
    </div>
  )
}

export default function Calendar() {
  const { mode, setMode, theme } = useOutletContext();

  return (
    <MainContentLayout theme={theme} headerInfo={{}}>
      {/* Mode toggle below header */}
      <div className="mb-6 flex justify-end">
        <ModeToggle mode={mode} onModeChange={setMode} theme={theme} />
      </div>
      {/* Main grid: calendar + legend */}
      <div className="grid gap-8 lg:grid-cols-4">
        {/* Calendar - takes up 3 columns */}
        <div className="lg:col-span-3">
          <CalendarGrid mode={mode} theme={theme} />
        </div>
        {/* Legend beside calendar */}
        <div>
          <Legend theme={theme} mode={mode} />
        </div>
      </div>
      {/* Info sections below calendar/legend */}
      <div className="grid gap-8 mt-8 lg:grid-cols-2">
        <CycleInfo mode={mode} theme={theme} />
        <TrackingInfo mode={mode} theme={theme} />
      </div>
    </MainContentLayout>
  )
}