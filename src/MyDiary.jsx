"use client"

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
  Send,
  Share2,
  Clock,
  Eye,
  EyeOff,
  BarChart3,
  Lightbulb,
} from "lucide-react"
import { useState } from "react"

// Navigation items
const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Insights", url: "/insights", icon: LineChart },
  { title: "My Diary", url: "/diary", icon: BookOpen, isActive: true },
  { title: "Care Tips", url: "/care-tips", icon: Lightbulb }, // Changed icon to Lightbulb
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: Settings },
]

function Sidebar({ isOpen, onClose }) {
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
          <img src="dotdaylogo.png" alt="DotDay Logo" />
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
                    ${item.isActive
                      ? "text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md"
                    }
                  `}
                  style={item.isActive ? { backgroundColor: "#FF4D8F" } : {}}
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
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-4 border border-pink-200">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Heart className="h-4 w-4 text-pink-500" />
              Partner Care
            </h3>
            <div className="space-y-2">
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                <Mail className="h-4 w-4 text-pink-500" />
                Send Update
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                <Gift className="h-4 w-4 text-purple-500" />
                Care Suggestions
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                <Bell className="h-4 w-4 text-blue-500" />
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
                onClick={() => document.getElementById("photo-upload-diary").click()}
              >
                SJ
              </div>
              <input
                id="photo-upload-diary"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const file = e.target.files[0]
                  if (file) {
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

function UnifiedDiaryInterface() {
  const [selectedEmojis, setSelectedEmojis] = useState([])
  const [journalText, setJournalText] = useState("")
  const [currentDate] = useState(new Date().toLocaleDateString())

  const emojiOptions = [
    { emoji: "😊", name: "Happy", message: "I'm feeling happy and content today! 💕" },
    { emoji: "😔", name: "Sad", message: "I'm feeling a bit down today and could use some extra love." },
    { emoji: "😤", name: "Frustrated", message: "I'm feeling frustrated and need some patience." },
    { emoji: "😴", name: "Tired", message: "I'm feeling really tired and need some rest." },
    { emoji: "🥰", name: "Loved", message: "I'm feeling so loved and appreciated! Thank you!" },
    { emoji: "😰", name: "Anxious", message: "I'm feeling anxious and could use some comfort." },
    { emoji: "🤕", name: "Pain", message: "I'm experiencing some discomfort today." },
    { emoji: "💪", name: "Strong", message: "I'm feeling strong and energetic today!" },
    { emoji: "🍫", name: "Craving", message: "I'm having some cravings today." },
    { emoji: "🛌", name: "Rest", message: "I need some rest and relaxation." },
    { emoji: "❤️", name: "Love", message: "I'm feeling loved and appreciated today! 💕" },
    { emoji: "😠", name: "Irritable", message: "I'm feeling a bit irritable today. Please be patient with me." },
  ]

  const handleEmojiToggle = (emoji) => {
    if (selectedEmojis.some((e) => e.emoji === emoji.emoji)) {
      setSelectedEmojis(selectedEmojis.filter((e) => e.emoji !== emoji.emoji))
    } else {
      setSelectedEmojis([...selectedEmojis, emoji])
    }
  }

  const handleSaveEntry = () => {
    console.log("Saving diary entry:", { date: currentDate, emojis: selectedEmojis, text: journalText })
    alert("Diary entry saved!")
  }

  const handleSendToPartner = (emoji) => {
    console.log("Sending emoji message to partner:", emoji.message)
    alert(`Message sent to partner: "${emoji.message}"`)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-pink-500" />
          Today's Diary Entry
        </h3>
        <span className="text-sm text-gray-500 font-medium">{currentDate}</span>
      </div>

      {/* Emoji Selection */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3">How are you feeling today?</h4>
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {emojiOptions.map((emoji) => (
            <div key={emoji.name} className="relative group">
              <button
                onClick={() => handleEmojiToggle(emoji)}
                className={`w-full p-3 rounded-xl border-2 transition-all hover:scale-110 ${selectedEmojis.some((e) => e.emoji === emoji.emoji)
                    ? "border-pink-500 bg-pink-50 shadow-lg"
                    : "border-gray-200 hover:border-pink-300 hover:bg-pink-50"
                  }`}
                title={emoji.name}
              >
                <div className="text-2xl mb-1">{emoji.emoji}</div>
                <div className="text-xs text-gray-600 font-medium">{emoji.name}</div>
              </button>

              {/* Send to Partner Button */}
              <button
                onClick={() => handleSendToPartner(emoji)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-600"
                title="Send to partner"
              >
                <Send className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Emojis Display */}
      {selectedEmojis.length > 0 && (
        <div className="mb-6 bg-pink-50 rounded-xl p-4 border border-pink-200">
          <h4 className="font-semibold text-gray-900 mb-3">Today's Mood</h4>
          <div className="flex flex-wrap gap-3">
            {selectedEmojis.map((emoji, index) => (
              <div key={index} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                <span className="text-xl">{emoji.emoji}</span>
                <span className="text-sm font-medium text-gray-700">{emoji.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Private Journal Text */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <h4 className="font-semibold text-gray-700">Private Notes</h4>
          <Eye className="h-4 w-4 text-gray-400" title="Only visible to you" />
        </div>
        <textarea
          value={journalText}
          onChange={(e) => setJournalText(e.target.value)}
          placeholder="Write about your day, thoughts, or feelings... This is private and only visible to you."
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 resize-none"
          rows={6}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleSaveEntry}
          className="flex-1 bg-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-pink-600 transition-colors flex items-center justify-center gap-2"
        >
          <BookOpen className="h-4 w-4" />
          Save Entry
        </button>
      </div>
    </div>
  )
}

function VisualMoodSummary() {
  const [viewMode, setViewMode] = useState("week") // "week" or "cycle"

  const weeklyMoods = [
    { day: "Mon", emoji: "😊", count: 1, color: "#10B981" },
    { day: "Tue", emoji: "😴", count: 1, color: "#6B7280" },
    { day: "Wed", emoji: "🥰", count: 1, color: "#EC4899" },
    { day: "Thu", emoji: "😤", count: 1, color: "#EF4444" },
    { day: "Fri", emoji: "💪", count: 1, color: "#8B5CF6" },
    { day: "Sat", emoji: "😔", count: 1, color: "#F59E0B" },
    { day: "Sun", emoji: "🤗", count: 1, color: "#06B6D4" },
  ]

  const cycleMoods = [
    { emoji: "😊", name: "Happy", count: 8, percentage: 30 },
    { emoji: "😴", name: "Tired", count: 6, percentage: 22 },
    { emoji: "🥰", name: "Loved", count: 5, percentage: 18 },
    { emoji: "😤", name: "Frustrated", count: 4, percentage: 15 },
    { emoji: "💪", name: "Strong", count: 3, percentage: 11 },
    { emoji: "😔", name: "Sad", count: 1, percentage: 4 },
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-purple-500" />
          Mood Summary
        </h3>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setViewMode("week")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${viewMode === "week" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
              }`}
          >
            This Week
          </button>
          <button
            onClick={() => setViewMode("cycle")}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${viewMode === "cycle" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
              }`}
          >
            This Cycle
          </button>
        </div>
      </div>

      {viewMode === "week" ? (
        <div>
          <h4 className="font-semibold text-gray-700 mb-4">Weekly Mood Calendar</h4>
          <div className="grid grid-cols-7 gap-3">
            {weeklyMoods.map((day, index) => (
              <div key={index} className="text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl mb-2 mx-auto shadow-lg"
                  style={{ backgroundColor: `${day.color}20`, border: `2px solid ${day.color}` }}
                >
                  {day.emoji}
                </div>
                <div className="text-xs font-medium text-gray-600">{day.day}</div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h4 className="font-semibold text-gray-700 mb-4">Most Frequent Moods This Cycle</h4>
          <div className="space-y-3">
            {cycleMoods.map((mood, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-2xl">{mood.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{mood.name}</span>
                    <span className="text-sm text-gray-500">
                      {mood.count} times ({mood.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${mood.percentage}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function DiaryHistory() {
  const [selectedEntry, setSelectedEntry] = useState(null)

  const recentEntries = [
    {
      id: 1,
      date: "Today",
      emojis: ["😊", "💪"],
      preview: "Feeling great today! Had a good workout and...",
      shared: false,
      fullText:
        "Feeling great today! Had a good workout and feeling really energetic. Looking forward to the weekend plans.",
    },
    {
      id: 2,
      date: "Yesterday",
      emojis: ["😴", "🤕"],
      preview: "Tired day with some cramps. Took it easy and...",
      shared: true,
      fullText: "Tired day with some cramps. Took it easy and watched movies. Partner brought me tea which was sweet.",
    },
    {
      id: 3,
      date: "2 days ago",
      emojis: ["🥰", "❤️"],
      preview: "Feeling so loved! Had a wonderful date night...",
      shared: true,
      fullText: "Feeling so loved! Had a wonderful date night and feeling really connected with my partner.",
    },
  ]

  const handleShareEntry = (entryId) => {
    console.log("Sharing entry with partner:", entryId)
    alert("Entry shared with partner!")
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Clock className="h-5 w-5 text-blue-500" />
        Recent Entries
      </h3>

      <div className="space-y-4">
        {recentEntries.map((entry) => (
          <div key={entry.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600">{entry.date}</span>
                <div className="flex gap-1">
                  {entry.emojis.map((emoji, index) => (
                    <span key={index} className="text-lg">
                      {emoji}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                {entry.shared && (
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Shared</span>
                )}
                <button
                  onClick={() => setSelectedEntry(selectedEntry === entry.id ? null : entry.id)}
                  className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {selectedEntry === entry.id ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <p className="text-gray-700 text-sm mb-3">{selectedEntry === entry.id ? entry.fullText : entry.preview}</p>

            {!entry.shared && (
              <button
                onClick={() => handleShareEntry(entry.id)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-pink-600 hover:bg-pink-50 rounded-lg transition-colors"
              >
                <Share2 className="h-4 w-4" />
                Share with Partner
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function MyDiary() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-pink-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-30">
          <div className="flex h-20 items-center gap-4 px-6">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-3 rounded-xl hover:bg-gray-100">
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">My Diary 📝</h1>
              <p className="text-gray-600">Your personal space for reflection and partner connection</p>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg"
                style={{ backgroundColor: "#FF4D8F" }}
              >
                Day 12 of Cycle
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Diary Interface - 2 columns */}
            <div className="lg:col-span-2">
              <UnifiedDiaryInterface />
            </div>

            {/* Mood Summary - 1 column */}
            <div>
              <VisualMoodSummary />
            </div>
          </div>

          {/* Diary History */}
          <div className="mt-8">
            <DiaryHistory />
          </div>
        </main>
      </div>
    </div>
  )
}
