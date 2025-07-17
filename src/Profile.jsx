"use client"

import {
  Calendar,
  Home,
  LineChart,
  SettingsIcon,
  User,
  BookOpen,
  Lightbulb,
  Menu,
  X,
  Edit,
  Mail,
  Lock,
  Cake,
  Target,
  Heart,
  Download,
  CircleDot,
  Droplet,
  Thermometer,
  Users,
  Link,
  Unlink,
} from "lucide-react"
import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card" // Corrected import path
import { Button } from "./components/ui/button" // Corrected import path

// Navigation items (consistent with other pages)
const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Insights", url: "/insights", icon: LineChart },
  { title: "My Diary", url: "/diary", icon: BookOpen },
  { title: "Care Tips", url: "/care-tips", icon: Lightbulb },
  { title: "Profile", url: "/profile", icon: User, isActive: true }, // This page is active
  { title: "Settings", url: "/settings", icon: SettingsIcon },
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
                    ${window.location.pathname === item.url
                      ? "text-white shadow-lg transform scale-105"
                      : "text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md"
                    }
                  `}
                  style={window.location.pathname === item.url ? { backgroundColor: "#FF4D8F" } : {}}
                >
                  <item.icon
                    className={`h-5 w-5 ${window.location.pathname === item.url ? "text-white" : "text-gray-500 group-hover:text-gray-700"}`}
                  />
                  <span className="font-semibold">{item.title}</span>
                  {window.location.pathname === item.url && <div className="ml-auto w-2 h-2 bg-white rounded-full" />}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-4">
            <div className="relative group">
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg cursor-pointer hover:shadow-xl transition-all duration-200 hover:scale-105"
                style={{ backgroundColor: "#FF4D8F" }}
                onClick={() => document.getElementById("photo-upload-profile").click()}
              >
                SJ
              </div>
              <input
                id="photo-upload-profile"
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

export default function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const fileInputRef = useRef(null)

  // Sample user data (replace with actual data fetching)
  const userData = {
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    profilePicture: "/placeholder.svg?height=100&width=100", // Placeholder image
    birthYear: "1995",
    primaryGoal: "Track fertility & manage symptoms",
    lastPeriodStart: "March 1, 2025",
    typicalPeriodLength: "5 days",
    typicalCycleLength: "28 days",
    calendarMode: "Normal",
    commonSymptoms: ["Cramps", "Bloating", "Fatigue"],
    partnerEmail: "john.d@example.com",
    partnerConnectionStatus: "Connected", // Can be "Connected", "Pending", "Disconnected"
  }

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      console.log("New profile picture selected:", file.name)
      // In a real app, you would upload this file and update the profilePicture state
    }
  }

  const handleExportData = () => {
    // Simulate data export
    const dataToExport = JSON.stringify(userData, null, 2)
    const blob = new Blob([dataToExport], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "flowtracker_data.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    alert("Your data has been exported!")
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
              <h1 className="text-2xl font-bold text-gray-900">My Profile 👤</h1>
              <p className="text-gray-600">View and manage your personal information</p>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" icon={Edit} size="small" className="bg-transparent">
                Edit Profile
              </Button>
            </div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Personal Information */}
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <User className="h-5 w-5 text-pink-500" /> Personal Information
                </CardTitle>
                <CardDescription className="text-gray-600">Details about your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" /> Name
                  </h4>
                  <p className="text-gray-700">{userData.name}</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" /> Email
                  </h4>
                  <p className="text-gray-700">{userData.email}</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Lock className="h-4 w-4 text-gray-500" /> Password
                  </h4>
                  <Button variant="outline" size="xsmall" className="bg-transparent">
                    Change Password
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" /> Profile Picture
                  </h4>
                  <div className="flex items-center gap-3">
                    <img
                      src={userData.profilePicture || "/placeholder.svg"}
                      alt="Profile"
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      ref={fileInputRef}
                      onChange={handleProfilePictureChange}
                      className="hidden"
                    />
                    <Button
                      variant="outline"
                      size="xsmall"
                      className="bg-transparent"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Upload
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Basic Health Information */}
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <Heart className="h-5 w-5 text-purple-500" /> Basic Health Information
                </CardTitle>
                <CardDescription className="text-gray-600">General health details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Cake className="h-4 w-4 text-gray-500" /> Birth Year
                  </h4>
                  <p className="text-gray-700">{userData.birthYear}</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Target className="h-4 w-4 text-gray-500" /> Primary Goal
                  </h4>
                  <p className="text-gray-700 text-right max-w-[60%]">{userData.primaryGoal}</p>
                </div>
              </CardContent>
            </Card>

            {/* Cycle & Health Preferences */}
            <Card className="border-gray-200 bg-white shadow-sm lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-500" /> Cycle & Health Preferences
                </CardTitle>
                <CardDescription className="text-gray-600">Your tracked cycle details and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <CircleDot className="h-4 w-4 text-gray-500" /> Last Period Start
                    </h4>
                    <p className="text-gray-700">{userData.lastPeriodStart}</p>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Droplet className="h-4 w-4 text-gray-500" /> Typical Period Length
                    </h4>
                    <p className="text-gray-700">{userData.typicalPeriodLength}</p>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" /> Typical Cycle Length
                    </h4>
                    <p className="text-gray-700">{userData.typicalCycleLength}</p>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" /> Calendar Mode
                    </h4>
                    <p className="text-gray-700">{userData.calendarMode}</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Thermometer className="h-4 w-4 text-gray-500" /> Common Symptoms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {userData.commonSymptoms.map((symptom, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Partner Connection Status */}
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-500" /> Partner Connection
                </CardTitle>
                <CardDescription className="text-gray-600">Manage your partner's access</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-500" /> Partner's Email
                  </h4>
                  <p className="text-gray-700">{userData.partnerEmail}</p>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Link className="h-4 w-4 text-gray-500" /> Connection Status
                  </h4>
                  <p
                    className={`font-semibold ${userData.partnerConnectionStatus === "Connected"
                        ? "text-green-600"
                        : userData.partnerConnectionStatus === "Pending"
                          ? "text-yellow-600"
                          : "text-red-600"
                      }`}
                  >
                    {userData.partnerConnectionStatus}
                  </p>
                </div>
                {userData.partnerConnectionStatus === "Connected" && (
                  <div className="flex justify-end">
                    <Button
                      variant="outline"
                      icon={Unlink}
                      size="xsmall"
                      className="bg-transparent text-red-600 border-red-200 hover:bg-red-50"
                    >
                      Disconnect Partner
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Data Export */}
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <Download className="h-5 w-5 text-orange-500" /> Data Export
                </CardTitle>
                <CardDescription className="text-gray-600">Download your personal data</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Export all your logged cycle history, symptoms, and diary entries in a user-friendly format (e.g.,
                  JSON).
                </p>
                <Button variant="primary" icon={Download} size="small" className="w-full" onClick={handleExportData}>
                  Export My Data
                </Button>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
