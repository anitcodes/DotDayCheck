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

// Removed sidebar-related imports and navigationItems

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
          <div className="flex flex-col gap-4">
            {weeklyMoods.map((day, index) => (
              <div key={index} className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl shadow-lg"
                  style={{ backgroundColor: `${day.color}20`, border: `2px solid ${day.color}` }}
                >
                  {day.emoji}
                </div>
                <div className="text-base font-semibold text-gray-700">{day.day}</div>
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
  // No sidebar state or rendering here; handled by MainAppLayout
  return (
    <>
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
    </>
  )
}