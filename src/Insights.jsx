import {
  Home,
  LineChart,
  Settings,
  User,
  BookOpen,
  Menu,
  X,
  Mail,
  Heart,
  Bell,
  Gift,
  Calendar,
  TrendingUp,
  Lightbulb,
  AlertCircle,
  Target,
  Clock,
} from "lucide-react"
import { useState } from "react"
import { XAxis, YAxis, ResponsiveContainer, BarChart, Bar, Tooltip, Legend } from "recharts"

// Removed Sidebar({ isOpen, onClose }) and navigationItems definition

function SymptomPatternAnalysis() {
  const symptomTrends = [
    { cycle: "Cycle 1", headaches: 2, cramps: 4, mood: 3, bloating: 1 },
    { cycle: "Cycle 2", headaches: 3, cramps: 3, mood: 4, bloating: 2 },
    { cycle: "Cycle 3", headaches: 1, cramps: 4, mood: 2, bloating: 3 },
    { cycle: "Cycle 4", headaches: 2, cramps: 5, mood: 3, bloating: 2 },
    { cycle: "Cycle 5", headaches: 3, cramps: 3, mood: 4, bloating: 1 },
  ]

  const insights = [
    {
      pattern: "Headaches often occur 2 days before your period",
      frequency: "85% of cycles",
      suggestion: "Consider tracking caffeine intake during this time",
      icon: "🤕",
      color: "#EF4444",
    },
    {
      pattern: "Cramps are most severe on Day 1-2 of your period",
      frequency: "90% of cycles",
      suggestion: "Heat therapy works best during these days",
      icon: "😣",
      color: "#F59E0B",
    },
    {
      pattern: "Mood changes peak 3-5 days before period",
      frequency: "78% of cycles",
      suggestion: "Plan relaxing activities during this window",
      icon: "😔",
      color: "#8B5CF6",
    },
    {
      pattern: "Bloating increases during luteal phase",
      frequency: "70% of cycles",
      suggestion: "Reduce sodium intake in the second half of your cycle",
      icon: "🤰",
      color: "#06B6D4",
    },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-pink-500" />
        Symptom Pattern Analysis
      </h3>

      {/* Chart */}
      <div className="mb-8">
        <h4 className="font-semibold text-gray-700 mb-4">Symptom Trends Over Last 5 Cycles</h4>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={symptomTrends}>
              <XAxis dataKey="cycle" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} domain={[0, 5]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="headaches" fill="#EF4444" name="Headaches" />
              <Bar dataKey="cramps" fill="#F59E0B" name="Cramps" />
              <Bar dataKey="mood" fill="#8B5CF6" name="Mood Changes" />
              <Bar dataKey="bloating" fill="#06B6D4" name="Bloating" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights */}
      <div className="space-y-4">
        <h4 className="font-semibold text-gray-700 mb-4">Your Personal Patterns</h4>
        {insights.map((insight, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="text-2xl">{insight.icon}</div>
              <div className="flex-1">
                <h5 className="font-semibold text-gray-900 mb-1">{insight.pattern}</h5>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-gray-600">{insight.frequency}</span>
                  <span
                    className="px-2 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: insight.color }}
                  >
                    Pattern Detected
                  </span>
                </div>
                <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                  💡 <strong>Suggestion:</strong> {insight.suggestion}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CycleSyncedWellnessTips() {
  const [currentPhase] = useState("follicular") // This would be dynamic based on user's cycle

  const wellnessTips = {
    menstrual: {
      phase: "Menstrual Phase",
      days: "Day 1-5",
      color: "#FF4D8F",
      icon: "🩸",
      nutrition: [
        "Iron-rich foods like spinach and lean meats",
        "Warm herbal teas for comfort",
        "Dark chocolate for magnesium",
        "Plenty of water to stay hydrated",
      ],
      activities: [
        "Gentle yoga or stretching",
        "Light walks in nature",
        "Meditation and breathing exercises",
        "Warm baths for relaxation",
      ],
      general: [
        "Get extra sleep (8-9 hours)",
        "Use heat therapy for cramps",
        "Practice self-compassion",
        "Avoid intense workouts",
      ],
    },
    follicular: {
      phase: "Follicular Phase",
      days: "Day 6-14",
      color: "#10B981",
      icon: "🌱",
      nutrition: [
        "Fresh fruits and vegetables",
        "Lean proteins for energy",
        "Complex carbohydrates",
        "Green smoothies and juices",
      ],
      activities: [
        "Cardio workouts and running",
        "Try new fitness classes",
        "Social activities with friends",
        "Creative projects and hobbies",
      ],
      general: [
        "Take advantage of high energy",
        "Plan important meetings",
        "Start new projects",
        "Maintain regular sleep schedule",
      ],
    },
    ovulation: {
      phase: "Ovulation Phase",
      days: "Day 14-16",
      color: "#F59E0B",
      icon: "✨",
      nutrition: [
        "Antioxidant-rich berries",
        "Healthy fats like avocado",
        "Fiber-rich whole grains",
        "Plenty of water",
      ],
      activities: [
        "High-intensity workouts",
        "Social gatherings and dates",
        "Public speaking or presentations",
        "Dancing and active fun",
      ],
      general: [
        "Embrace your confidence",
        "Schedule important conversations",
        "Take on leadership roles",
        "Enjoy social connections",
      ],
    },
    luteal: {
      phase: "Luteal Phase",
      days: "Day 17-28",
      color: "#8B5CF6",
      icon: "🌙",
      nutrition: [
        "Complex carbs for serotonin",
        "Magnesium-rich foods",
        "Limit caffeine and alcohol",
        "Healthy snacks to manage cravings",
      ],
      activities: [
        "Moderate exercise like pilates",
        "Organizing and planning",
        "Quiet hobbies like reading",
        "Gentle self-care routines",
      ],
      general: [
        "Practice stress management",
        "Prepare for next cycle",
        "Focus on completing tasks",
        "Be patient with mood changes",
      ],
    },
  }

  const currentTips = wellnessTips[currentPhase]

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Lightbulb className="h-5 w-5 text-green-500" />
        Cycle-Synced Wellness Tips
      </h3>

      {/* Current Phase Header */}
      <div className="rounded-xl p-4 mb-6 text-white" style={{ backgroundColor: currentTips.color }}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{currentTips.icon}</span>
          <div>
            <h4 className="text-xl font-bold">{currentTips.phase}</h4>
            <p className="text-white/90">{currentTips.days}</p>
          </div>
        </div>
        <p className="text-white/90">
          You're currently in your {currentPhase} phase. Here are personalized tips to support your wellness.
        </p>
      </div>

      {/* Tips Categories */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* Nutrition */}
        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
          <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">🥗 Nutrition</h5>
          <ul className="space-y-2">
            {currentTips.nutrition.map((tip, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-green-500 mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
          <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">🏃‍♀️ Activities</h5>
          <ul className="space-y-2">
            {currentTips.activities.map((tip, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* General Wellness */}
        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
          <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">💜 General Wellness</h5>
          <ul className="space-y-2">
            {currentTips.general.map((tip, index) => (
              <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
                <span className="text-purple-500 mt-1">•</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Phase Navigation */}
      <div className="mt-6 bg-gray-50 rounded-xl p-4">
        <h5 className="font-semibold text-gray-900 mb-3">All Cycle Phases</h5>
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(wellnessTips).map(([phase, data]) => (
            <button
              key={phase}
              className={`p-3 rounded-lg text-center transition-all ${phase === currentPhase ? "text-white shadow-lg" : "text-gray-600 hover:bg-white hover:shadow-md"
                }`}
              style={phase === currentPhase ? { backgroundColor: data.color } : {}}
            >
              <div className="text-lg mb-1">{data.icon}</div>
              <div className="text-xs font-medium">{data.phase.split(" ")[0]}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function PartnerAwareness() {
  const [partnerEmail, setPartnerEmail] = useState("partner@example.com")
  const [symptomAlerts, setSymptomAlerts] = useState({
    severeCramps: true,
    significantMood: true,
    heavyFlow: false,
    severeHeadache: true,
  })
  const [phaseAlerts, setPhaseAlerts] = useState({
    fertileWindow: true,
    premenstrual: true,
    menstrual: false,
  })

  const recentAlerts = [
    {
      type: "symptom",
      title: "Severe Cramps Alert",
      message: "Your partner is experiencing cramps. A warm drink might help.",
      timestamp: "2 hours ago",
      status: "sent",
    },
    {
      type: "phase",
      title: "Pre-menstrual Phase",
      message: "Your partner has entered the pre-menstrual phase. Extra patience and support would be appreciated.",
      timestamp: "Yesterday",
      status: "sent",
    },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Heart className="h-5 w-5 text-pink-500" />
        Partner Awareness
      </h3>

      {/* Partner Email Setup */}
      <div className="bg-pink-50 rounded-xl p-4 mb-6 border border-pink-200">
        <h4 className="font-semibold text-gray-900 mb-3">Partner Email Setup</h4>
        <div className="flex gap-3">
          <input
            type="email"
            value={partnerEmail}
            onChange={(e) => setPartnerEmail(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
            placeholder="partner@example.com"
          />
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition-colors">
            Save
          </button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Symptom Decoder Alerts */}
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            Symptom Decoder Alerts
          </h4>
          <p className="text-sm text-gray-600 mb-4">Automated emails sent when specific symptoms are logged</p>
          <div className="space-y-3">
            {Object.entries(symptomAlerts).map(([key, enabled]) => (
              <label key={key} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={(e) => setSymptomAlerts({ ...symptomAlerts, [key]: e.target.checked })}
                  className="w-4 h-4 text-red-500 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">
                  {key === "severeCramps" && "Severe Cramps"}
                  {key === "significantMood" && "Significant Mood Changes"}
                  {key === "heavyFlow" && "Heavy Flow"}
                  {key === "severeHeadache" && "Severe Headache"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Cycle Phase Heads-Up */}
        <div className="border border-gray-200 rounded-xl p-4">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Target className="h-4 w-4 text-blue-500" />
            Cycle Phase Heads-Up
          </h4>
          <p className="text-sm text-gray-600 mb-4">Simple notifications when entering significant cycle phases</p>
          <div className="space-y-3">
            {Object.entries(phaseAlerts).map(([key, enabled]) => (
              <label key={key} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={enabled}
                  onChange={(e) => setPhaseAlerts({ ...phaseAlerts, [key]: e.target.checked })}
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  {key === "fertileWindow" && "Fertile Window"}
                  {key === "premenstrual" && "Pre-menstrual Phase"}
                  {key === "menstrual" && "Menstrual Phase"}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="mt-6">
        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="h-4 w-4 text-gray-500" />
          Recent Alerts Sent
        </h4>
        <div className="space-y-3">
          {recentAlerts.map((alert, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h5 className="font-medium text-gray-900 mb-1">{alert.title}</h5>
                  <p className="text-sm text-gray-600 mb-2">"{alert.message}"</p>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500">{alert.timestamp}</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {alert.status}
                    </span>
                  </div>
                </div>
                <Mail className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Insights() {
  // No sidebar state or rendering here; handled by MainAppLayout
  return (
    <div className="space-y-8">
      <SymptomPatternAnalysis />
      <CycleSyncedWellnessTips />
      <PartnerAwareness />
    </div>
  )
}
