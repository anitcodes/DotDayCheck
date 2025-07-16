"use client"

import {
  Calendar,
  Heart,
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
} from "lucide-react"
import { useState } from "react"
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts"

// Sample data for period tracking
const cycleData = [
  { day: "Day 1", flow: 4, mood: 3, symptoms: 2 },
  { day: "Day 5", flow: 3, mood: 4, symptoms: 1 },
  { day: "Day 10", flow: 1, mood: 5, symptoms: 0 },
  { day: "Day 15", flow: 0, mood: 4, symptoms: 1 },
  { day: "Day 20", flow: 0, mood: 3, symptoms: 2 },
  { day: "Day 25", flow: 1, mood: 2, symptoms: 3 },
  { day: "Day 28", flow: 2, mood: 3, symptoms: 2 },
]

const moodData = [
  { week: "Week 1", mood: 3.2 },
  { week: "Week 2", mood: 4.1 },
  { week: "Week 3", mood: 4.8 },
  { week: "Week 4", mood: 2.9 },
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
              <img src="/logo.png" alt="FlowTracker" className="h-8 w-8 object-contain" />
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
                style={item.isActive ? { backgroundColor: "#FF157A" } : {}}
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
              style={{ backgroundColor: "#FF157A" }}
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

function StatCard({ title, value, subtitle, icon: Icon }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        <div className="h-8 w-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FF157A20" }}>
          <Icon className="h-4 w-4" style={{ color: "#FF157A" }} />
        </div>
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  )
}

function ChartCard({ title, subtitle, children }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
      <div className="p-6">{children}</div>
    </div>
  )
}

function Button({ children, variant = "primary", className = "", ...props }) {
  const baseClasses =
    "h-12 px-6 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"

  const variants = {
    primary: "text-white hover:opacity-90",
    outline: "border-2 bg-transparent hover:bg-gray-50",
  }

  const style =
    variant === "primary"
      ? { backgroundColor: "#FF157A", focusRingColor: "#FF157A" }
      : { borderColor: "#FF157A", color: "#FF157A" }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} style={style} {...props}>
      {children}
    </button>
  )
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex h-16 items-center gap-4 px-6">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
              <Menu className="h-5 w-5" />
            </button>

            <div className="flex-1">
              <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back! Here's your cycle overview</p>
            </div>

            <div
              className="px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: "#FF157A" }}
            >
              Day 12 of Cycle
            </div>
          </div>
        </header>

        <main className="p-6">
          {/* Quick Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <StatCard title="Next Period" value="16 days" subtitle="Expected on March 15" icon={Droplets} />
            <StatCard title="Cycle Length" value="28 days" subtitle="Average this year" icon={TrendingUp} />
            <StatCard title="Mood Today" value="Good" subtitle="4.2/5 average" icon={Sun} />
            <StatCard title="Sleep Quality" value="7.5h" subtitle="Last night" icon={Moon} />
          </div>

          {/* Charts Section */}
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <ChartCard
              title="Cycle Overview"
              subtitle="Track your flow intensity, mood, and symptoms throughout your cycle"
            >
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart data={cycleData}>
                    <XAxis dataKey="day" tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} domain={[0, 5]} />
                    <Line
                      type="monotone"
                      dataKey="flow"
                      stroke="#FF157A"
                      strokeWidth={3}
                      dot={{ fill: "#FF157A", strokeWidth: 2, r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="mood"
                      stroke="#FF6B9D"
                      strokeWidth={3}
                      dot={{ fill: "#FF6B9D", strokeWidth: 2, r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="symptoms"
                      stroke="#FFB3D1"
                      strokeWidth={3}
                      dot={{ fill: "#FFB3D1", strokeWidth: 2, r: 4 }}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>

            <ChartCard title="Mood Trends" subtitle="Your mood patterns over the past month">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={moodData}>
                    <XAxis dataKey="week" tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: "#6B7280" }} axisLine={false} tickLine={false} domain={[0, 5]} />
                    <Area
                      type="monotone"
                      dataKey="mood"
                      stroke="#FF157A"
                      fill="#FF157A"
                      fillOpacity={0.2}
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </ChartCard>
          </div>

          {/* Quick Actions */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-1">Quick Actions</h3>
              <p className="text-sm text-gray-600">Log your daily information or explore app features</p>
            </div>
            <div className="p-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <Button>Log Period</Button>
                <Button variant="outline">Track Mood</Button>
                <Button variant="outline">Add Symptoms</Button>
                <Button variant="outline">View Calendar</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
