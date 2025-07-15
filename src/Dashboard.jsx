"use client"

import {
  Calendar,
  Home,
  LineChart,
  Music,
  Settings,
  User,
  BookOpen,
  TrendingUp,
  Droplets,
  Moon,
  Sun,
  Menu,
  X,
  Mail,
  Heart,
  Send,
  Bell,
  Share2,
  MessageCircle,
  Gift,
} from "lucide-react"
import { useState } from "react"
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Area,
  AreaChart,
  Legend,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts"

// Sample data for period tracking
const cycleData = [
  { day: "Day 1", flow: 4, mood: 3, symptoms: 2, energy: 2 },
  { day: "Day 5", flow: 3, mood: 4, symptoms: 1, energy: 3 },
  { day: "Day 10", flow: 1, mood: 5, symptoms: 0, energy: 5 },
  { day: "Day 15", flow: 0, mood: 4, symptoms: 1, energy: 4 },
  { day: "Day 20", flow: 0, mood: 3, symptoms: 2, energy: 3 },
  { day: "Day 25", flow: 1, mood: 2, symptoms: 3, energy: 2 },
  { day: "Day 28", flow: 2, mood: 3, symptoms: 2, energy: 3 },
]

const moodData = [
  { week: "Week 1", mood: 3.2, energy: 2.8, sleep: 7.2 },
  { week: "Week 2", mood: 4.1, energy: 4.5, sleep: 8.1 },
  { week: "Week 3", mood: 4.8, energy: 4.2, sleep: 7.8 },
  { week: "Week 4", mood: 2.9, energy: 2.5, sleep: 6.5 },
]

const symptomsData = [
  { name: "Cramps", value: 35, color: "#FF157A" },
  { name: "Headache", value: 25, color: "#FF6B9D" },
  { name: "Bloating", value: 20, color: "#FFB3D1" },
  { name: "Mood Swings", value: 15, color: "#FFC0CB" },
  { name: "Fatigue", value: 5, color: "#FFE4E1" },
]

// Navigation items
const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home, isActive: true },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Insights", url: "/insights", icon: LineChart },
  { title: "My Diary", url: "/diary", icon: BookOpen },
  { title: "Music", url: "/music", icon: Music },
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
                onClick={() => document.getElementById("photo-upload").click()}
              >
                SJ
              </div>
              {/* Photo upload options */}
              <div className="absolute bottom-full left-0 mb-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-2 min-w-[120px]">
                  <button
                    onClick={() => document.getElementById("photo-upload").click()}
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
                id="photo-upload"
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

function StatCard({ title, value, subtitle, icon: Icon, trend, color = "#FF4D8F" }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{title}</h3>
          <div className="text-3xl font-bold text-gray-900 mt-2">{value}</div>
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        </div>
        <div
          className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="h-8 w-8" style={{ color }} />
        </div>
      </div>
      {trend && (
        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
          <TrendingUp className="h-4 w-4 text-green-500" />
          <span className="text-sm text-green-600 font-medium">{trend}</span>
        </div>
      )}
    </div>
  )
}

function ChartCard({ title, subtitle, children, height = "h-[350px]" }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <div className={`p-6 ${height}`}>{children}</div>
    </div>
  )
}

function Button({ children, variant = "primary", className = "", icon: Icon, ...props }) {
  const baseClasses =
    "h-14 px-8 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-offset-2 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:scale-105"

  const variants = {
    primary: "text-white hover:opacity-90",
    outline: "border-2 bg-white hover:bg-gray-50",
    gradient: "text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
  }

  const style =
    variant === "primary"
      ? { backgroundColor: "#FF4D8F", focusRingColor: "#FF4D8F" }
      : variant === "outline"
        ? { borderColor: "#FF4D8F", color: "#FF4D8F" }
        : {}

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} style={style} {...props}>
      {Icon && <Icon className="h-5 w-5" />}
      {children}
    </button>
  )
}

function PartnerEmailModal({ isOpen, onClose }) {
  const [selectedTemplate, setSelectedTemplate] = useState("cycle-update")

  const templates = [
    {
      id: "cycle-update",
      title: "Cycle Update",
      description: "Share your current cycle status and mood",
      preview: "Hey! Just wanted to update you - I'm on day 12 of my cycle and feeling good today! 💕",
    },
    {
      id: "support-needed",
      title: "Need Support",
      description: "Let your partner know you need extra care",
      preview: "Hi love, I'm having a tough day with cramps. Could use some extra cuddles and maybe some chocolate? 🤗",
    },
    {
      id: "feeling-great",
      title: "Feeling Great",
      description: "Share when you're feeling amazing",
      preview:
        "Good morning! I'm feeling absolutely amazing today - high energy and great mood! Let's plan something fun! ✨",
    },
    {
      id: "period-coming",
      title: "Period Coming Soon",
      description: "Give your partner a heads up",
      preview: "Just a heads up - my period is expected in about 3 days. Stocking up on comfort food! 🍫",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Send Partner Update</h2>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
          </div>
          <p className="text-gray-600 mt-2">Choose a template to send to your partner</p>
        </div>

        <div className="p-6">
          <div className="grid gap-4 mb-6">
            {templates.map((template) => (
              <div
                key={template.id}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                  selectedTemplate === template.id
                    ? "border-pink-500 bg-pink-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-4 h-4 rounded-full mt-1 ${
                      selectedTemplate === template.id ? "bg-pink-500" : "bg-gray-300"
                    }`}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{template.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                    <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-700 italic">"{template.preview}"</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancel
            </Button>
            <Button icon={Send} className="flex-1">
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [emailModalOpen, setEmailModalOpen] = useState(false)

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

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
              <h1 className="text-2xl font-bold text-gray-900">Good Morning, Sarah! 🌸</h1>
              <p className="text-gray-600">Here's your wellness overview for today</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setEmailModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Partner Update</span>
              </button>
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
          {/* Quick Stats */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <StatCard
              title="Next Period"
              value="16 days"
              subtitle="Expected on March 15"
              icon={Droplets}
              trend="+2 days from average"
              color="#FF4D8F"
            />
            <StatCard
              title="Cycle Length"
              value="28 days"
              subtitle="Average this year"
              icon={TrendingUp}
              trend="Consistent pattern"
              color="#8B5CF6"
            />
            <StatCard
              title="Mood Today"
              value="Great"
              subtitle="4.2/5 average"
              icon={Sun}
              trend="Above average"
              color="#F59E0B"
            />
            <StatCard
              title="Sleep Quality"
              value="7.5h"
              subtitle="Last night"
              icon={Moon}
              trend="Good quality"
              color="#3B82F6"
            />
          </div>

          {/* Charts Section */}
          <div className="grid gap-8 lg:grid-cols-3 mb-8">
            {/* Cycle Overview - 2 columns */}
            <div className="lg:col-span-2">
              <ChartCard
                title="Cycle Overview"
                subtitle="Track your flow intensity, mood, symptoms, and energy throughout your cycle"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={cycleData}>
                    <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} domain={[0, 5]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ paddingTop: "20px" }} iconType="circle" />
                    <Line
                      type="monotone"
                      dataKey="flow"
                      stroke="#FF4D8F"
                      strokeWidth={3}
                      dot={{ fill: "#FF4D8F", strokeWidth: 2, r: 5 }}
                      name="Flow Intensity"
                    />
                    <Line
                      type="monotone"
                      dataKey="mood"
                      stroke="#8B5CF6"
                      strokeWidth={3}
                      dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 5 }}
                      name="Mood Score"
                    />
                    <Line
                      type="monotone"
                      dataKey="symptoms"
                      stroke="#F59E0B"
                      strokeWidth={3}
                      dot={{ fill: "#F59E0B", strokeWidth: 2, r: 5 }}
                      name="Symptoms"
                    />
                    <Line
                      type="monotone"
                      dataKey="energy"
                      stroke="#10B981"
                      strokeWidth={3}
                      dot={{ fill: "#10B981", strokeWidth: 2, r: 5 }}
                      name="Energy Level"
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>

            {/* Symptoms Breakdown - 1 column */}
            <div>
              <ChartCard title="Symptoms Breakdown" subtitle="Most common symptoms this cycle">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={symptomsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {symptomsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} labelStyle={{ color: "#374151" }} />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      iconType="circle"
                      wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </ChartCard>
            </div>
          </div>

          {/* Mood & Energy Trends */}
          <div className="mb-8">
            <ChartCard
              title="Wellness Trends"
              subtitle="Your mood, energy, and sleep patterns over the past month"
              height="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={moodData}>
                  <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} domain={[0, 10]} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="mood"
                    stackId="1"
                    stroke="#FF4D8F"
                    fill="#FF4D8F"
                    fillOpacity={0.6}
                    name="Mood Score"
                  />
                  <Area
                    type="monotone"
                    dataKey="energy"
                    stackId="2"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.6}
                    name="Energy Level"
                  />
                  <Area
                    type="monotone"
                    dataKey="sleep"
                    stackId="3"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.6}
                    name="Sleep Hours"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </div>

          {/* Quick Actions & Partner Features */}
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Quick Actions */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quick Actions</h3>
                <p className="text-gray-600">Log your daily information and track your wellness</p>
              </div>
              <div className="p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Button icon={Droplets}>Log Period</Button>
                  <Button variant="outline" icon={Sun}>
                    Track Mood
                  </Button>
                  <Button variant="outline" icon={TrendingUp}>
                    Add Symptoms
                  </Button>
                  <Button variant="gradient" icon={Calendar}>
                    View Calendar
                  </Button>
                </div>
              </div>
            </div>

            {/* Partner Care Features */}
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 rounded-2xl shadow-sm">
              <div className="p-6 border-b border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-pink-500" />
                  Partner Care Hub
                </h3>
                <p className="text-gray-600">Keep your partner informed and get the support you need</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <button
                    onClick={() => setEmailModalOpen(true)}
                    className="w-full flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all text-left"
                  >
                    <div className="h-12 w-12 bg-pink-100 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-pink-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Send Cycle Update</h4>
                      <p className="text-sm text-gray-600">Share your current status and mood</p>
                    </div>
                    <Send className="h-5 w-5 text-gray-400" />
                  </button>

                  <button className="w-full flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all text-left">
                    <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <Gift className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Care Suggestions</h4>
                      <p className="text-sm text-gray-600">Get personalized care tips for your partner</p>
                    </div>
                    <MessageCircle className="h-5 w-5 text-gray-400" />
                  </button>

                  <button className="w-full flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all text-left">
                    <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <Bell className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">Smart Reminders</h4>
                      <p className="text-sm text-gray-600">Set up automatic partner notifications</p>
                    </div>
                    <Share2 className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <PartnerEmailModal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
    </div>
  )
}
