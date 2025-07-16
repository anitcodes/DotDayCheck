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
  Lightbulb,
  Droplets,
  Leaf,
  Pill,
  Thermometer,
  Shield,
  Info,
} from "lucide-react"
import { useState } from "react"

// Navigation items (consistent with other pages)
const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Insights", url: "/insights", icon: LineChart },
  { title: "My Diary", url: "/diary", icon: BookOpen },
  { title: "Care Tips", url: "/care-tips", icon: Lightbulb, isActive: true }, // This page is active
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
                onClick={() => document.getElementById("photo-upload-care-tips").click()}
              >
                SJ
              </div>
              <input
                id="photo-upload-care-tips"
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

function CareTipCard({ title, icon: Icon, children, color = "#FF4D8F" }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <Icon className="h-6 w-6" style={{ color }} />
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

function TipItem({ title, description, icon: Icon, iconColor = "#6B7280" }) {
  return (
    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
      <div
        className="h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${iconColor}20` }}
      >
        <Icon className="h-5 w-5" style={{ color: iconColor }} />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 text-base">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  )
}

export default function CareTips() {
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
              <h1 className="text-2xl font-bold text-gray-900">Care Tips & Education 💡</h1>
              <p className="text-gray-600">Empowering you with knowledge for a comfortable cycle</p>
            </div>

            <div className="flex items-center gap-3">
              <div
                className="px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg"
                style={{ backgroundColor: "#FF4D8F" }}
              >
                Daily Insights
              </div>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {/* Period Product Selection */}
            <CareTipCard title="Choosing Your Period Products" icon={Droplets} color="#FF4D8F">
              <TipItem
                title="Pads & Liners"
                description="Easy to use, great for all flow types. Change every 4-8 hours."
                icon={Droplets}
                iconColor="#FF4D8F"
              />
              <TipItem
                title="Tampons"
                description="Discreet and ideal for swimming. Change every 4-8 hours to prevent TSS."
                icon={Shield}
                iconColor="#8B5CF6"
              />
              <TipItem
                title="Menstrual Cups"
                description="Reusable, eco-friendly, and can be worn for up to 12 hours. Requires practice."
                icon={Leaf}
                iconColor="#10B981"
              />
              <TipItem
                title="Period Underwear"
                description="Comfortable, reusable, and absorbent. Great for light days or backup."
                icon={Info}
                iconColor="#F59E0B"
              />
            </CareTipCard>

            {/* Symptom Management */}
            <CareTipCard title="Managing Common Symptoms" icon={Pill} color="#8B5CF6">
              <TipItem
                title="Cramps"
                description="Apply a heat pad, take OTC pain relievers, or try gentle stretching."
                icon={Thermometer}
                iconColor="#EF4444"
              />
              <TipItem
                title="Bloating"
                description="Reduce sodium, drink plenty of water, and consider peppermint tea."
                icon={Droplets}
                iconColor="#06B6D4"
              />
              <TipItem
                title="Mood Swings"
                description="Practice mindfulness, engage in light exercise, and ensure adequate sleep."
                icon={Heart}
                iconColor="#8B5CF6"
              />
              <TipItem
                title="Fatigue"
                description="Prioritize rest, eat iron-rich foods, and stay hydrated."
                icon={Lightbulb}
                iconColor="#F59E0B"
              />
            </CareTipCard>

            {/* Sustainable Options */}
            <CareTipCard title="Embracing Sustainable Periods" icon={Leaf} color="#10B981">
              <TipItem
                title="Why Go Sustainable?"
                description="Reduces waste, saves money long-term, and is better for the planet."
                icon={Info}
                iconColor="#10B981"
              />
              <TipItem
                title="Reusable Pads"
                description="Washable cloth pads are a comfortable and eco-friendly alternative to disposables."
                icon={Droplets}
                iconColor="#FF4D8F"
              />
              <TipItem
                title="Menstrual Discs"
                description="Similar to cups but sit higher, can be worn during intercourse, and are reusable."
                icon={Shield}
                iconColor="#8B5CF6"
              />
              <TipItem
                title="Organic & Biodegradable"
                description="If disposables are a must, opt for organic cotton and biodegradable options."
                icon={Leaf}
                iconColor="#F59E0B"
              />
            </CareTipCard>

            {/* General Wellness Tips */}
            <CareTipCard title="General Wellness During Your Cycle" icon={Heart} color="#F59E0B">
              <TipItem
                title="Stay Hydrated"
                description="Drinking enough water helps with bloating and overall well-being."
                icon={Droplets}
                iconColor="#3B82F6"
              />
              <TipItem
                title="Balanced Diet"
                description="Focus on whole foods, fruits, vegetables, and lean proteins."
                icon={Pill}
                iconColor="#10B981"
              />
              <TipItem
                title="Gentle Exercise"
                description="Listen to your body; light activities like walking or yoga can be beneficial."
                icon={Lightbulb}
                iconColor="#8B5CF6"
              />
              <TipItem
                title="Prioritize Sleep"
                description="Aim for 7-9 hours of quality sleep, especially during your period."
                icon={Info}
                iconColor="#FF4D8F"
              />
            </CareTipCard>
          </div>
        </main>
      </div>
    </div>
  )
}
