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
  Volume2,
  VolumeX,
  Bell,
  Shield,
  Palette,
  Text,
  CalendarDays,
  HelpCircle,
  Info,
  Mail,
  Users,
  Link,
  Smartphone,
} from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card" // Corrected import path
import { Button } from "./components/ui/button" // Corrected import path

// Navigation items (consistent with other pages)
const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Calendar", url: "/calendar", icon: Calendar },
  { title: "Insights", url: "/insights", icon: LineChart },
  { title: "My Diary", url: "/diary", icon: BookOpen },
  { title: "Care Tips", url: "/care-tips", icon: Lightbulb },
  { title: "Profile", url: "/profile", icon: User },
  { title: "Settings", url: "/settings", icon: SettingsIcon, isActive: true }, // This page is active
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
                onClick={() => document.getElementById("photo-upload-settings").click()}
              >
                SJ
              </div>
              <input
                id="photo-upload-settings"
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

// Custom Toggle Switch Component (since shadcn Switch is not directly provided)
const ToggleSwitch = ({ label, description, checked, onChange }) => {
  return (
    <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
      <div>
        <h4 className="font-semibold text-gray-900">{label}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <button
        onClick={onChange}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${checked ? "bg-pink-500" : "bg-gray-200"
          }`}
        role="switch"
        aria-checked={checked}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? "translate-x-6" : "translate-x-1"
            }`}
        />
      </button>
    </div>
  )
}

export default function SettingsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [periodReminders, setPeriodReminders] = useState(true)
  const [ovulationReminders, setOvulationReminders] = useState(true)
  const [logReminders, setLogReminders] = useState(false)
  const [partnerSymptomAlerts, setPartnerSymptomAlerts] = useState(true)
  const [partnerCravingAlerts, setPartnerCravingAlerts] = useState(false)
  const [partnerCyclePhaseAlerts, setPartnerCyclePhaseAlerts] = useState(true)
  const [dataSharing, setDataSharing] = useState(false)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
  const [darkMode, setDarkMode] = useState(false) // Placeholder for dark mode
  const audioRef = useRef(null)

  useEffect(() => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.play().catch((e) => console.error("Error playing music:", e))
      } else {
        audioRef.current.pause()
      }
    }
  }, [isMusicPlaying])

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to permanently delete your account and all associated data? This action cannot be undone.",
      )
    ) {
      alert("Account deletion initiated. Please follow the instructions sent to your email.")
      // In a real app, trigger backend deletion process
    }
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
              <h1 className="text-2xl font-bold text-gray-900">Settings ⚙️</h1>
              <p className="text-gray-600">Manage your app preferences and account settings</p>
            </div>

            <div className="flex items-center gap-3">{/* Any header actions for settings can go here */}</div>
          </div>
        </header>

        <main className="p-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Notifications */}
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <Bell className="h-5 w-5 text-pink-500" /> Notifications
                </CardTitle>
                <CardDescription className="text-gray-600">Customize your reminder preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ToggleSwitch
                  label="Period Prediction Reminders"
                  description="Get alerts before your next period starts"
                  checked={periodReminders}
                  onChange={() => setPeriodReminders(!periodReminders)}
                />
                <ToggleSwitch
                  label="Ovulation Prediction Reminders"
                  description="Receive alerts for your fertile window"
                  checked={ovulationReminders}
                  onChange={() => setOvulationReminders(!ovulationReminders)}
                />
                <ToggleSwitch
                  label="Daily Log Reminder"
                  description="Get a daily reminder to log your symptoms"
                  checked={logReminders}
                  onChange={() => setLogReminders(!logReminders)}
                />
                <div className="p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Bell className="h-4 w-4 text-gray-500" /> Custom Reminders
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Set personalized reminders for medication, water intake, etc.
                  </p>
                  <Button variant="outline" size="small" className="bg-transparent">
                    Manage Custom Reminders
                  </Button>
                </div>

                <div className="p-3 rounded-lg border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-500" /> Partner Notification Preferences
                  </h3>
                  <ToggleSwitch
                    label="Symptom Decoder Alerts"
                    description="Notify partner about your logged symptoms"
                    checked={partnerSymptomAlerts}
                    onChange={() => setPartnerSymptomAlerts(!partnerSymptomAlerts)}
                  />
                  <ToggleSwitch
                    label="Craving Alerts"
                    description="Notify partner about your cravings"
                    checked={partnerCravingAlerts}
                    onChange={() => setPartnerCravingAlerts(!partnerCravingAlerts)}
                  />
                  <ToggleSwitch
                    label="Cycle Phase Heads-Up"
                    description="Notify partner about your current cycle phase"
                    checked={partnerCyclePhaseAlerts}
                    onChange={() => setPartnerCyclePhaseAlerts(!partnerCyclePhaseAlerts)}
                  />
                  <div className="flex items-center justify-between mt-3">
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-500" /> Partner's Email
                    </h4>
                    <Button variant="outline" size="xsmall" className="bg-transparent">
                      Manage Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-500" /> Privacy & Security
                </CardTitle>
                <CardDescription className="text-gray-600">Manage your data and account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ToggleSwitch
                  label="Data Sharing Preferences"
                  description="Share anonymous data for research and product improvement"
                  checked={dataSharing}
                  onChange={() => setDataSharing(!dataSharing)}
                />
                <ToggleSwitch
                  label="Two-Factor Authentication (2FA)"
                  description="Add an extra layer of security to your account"
                  checked={twoFactorAuth}
                  onChange={() => setTwoFactorAuth(!twoFactorAuth)}
                />
                <div className="p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-500" /> Delete Account
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Permanently delete your account and all associated data. This action cannot be undone.
                  </p>
                  <Button
                    variant="outline"
                    size="small"
                    className="w-full text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                    onClick={handleDeleteAccount}
                  >
                    Delete My Account
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* App Appearance & Display */}
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <Palette className="h-5 w-5 text-blue-500" /> App Appearance & Display
                </CardTitle>
                <CardDescription className="text-gray-600">Customize how the app looks and feels</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <div>
                    <h4 className="font-semibold text-gray-900">Background Music</h4>
                    <p className="text-sm text-gray-600">Toggle soothing background music</p>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setIsMusicPlaying(!isMusicPlaying)}
                    icon={isMusicPlaying ? Volume2 : VolumeX}
                    size="small"
                    className="bg-transparent"
                    style={{
                      borderColor: isMusicPlaying ? "#10B981" : "#EF4444",
                      color: isMusicPlaying ? "#10B981" : "#EF4444",
                    }}
                  >
                    {isMusicPlaying ? "On" : "Off"}
                  </Button>
                  <audio ref={audioRef} src="/audio/background-music.mp3" loop crossOrigin="anonymous" />
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Text className="h-4 w-4 text-gray-500" /> Font Size
                  </h4>
                  <p className="text-gray-700">Medium (Default)</p>
                  {/* In a real app, this would be a slider or dropdown */}
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gray-500" /> Date Format
                  </h4>
                  <p className="text-gray-700">MM/DD/YYYY</p>
                  {/* In a real app, this would be a dropdown */}
                </div>
                <ToggleSwitch
                  label="Dark Mode"
                  description="Switch between light and dark themes"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-orange-500" /> Help & Support
                </CardTitle>
                <CardDescription className="text-gray-600">Find answers and get assistance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <Info className="h-5 w-5 text-gray-500" />
                  <span className="font-semibold text-gray-900">Frequently Asked Questions (FAQ)</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <Mail className="h-5 w-5 text-gray-500" />
                  <span className="font-semibold text-gray-900">Contact Support</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <Info className="h-5 w-5 text-gray-500" />
                  <span className="font-semibold text-gray-900">About Us</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
                >
                  <Link className="h-5 w-5 text-gray-500" />
                  <span className="font-semibold text-gray-900">Terms of Service & Privacy Policy</span>
                </a>
              </CardContent>
            </Card>

            {/* Integrations (Future Consideration) */}
            <Card className="border-gray-200 bg-white shadow-sm lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-green-500" /> Integrations
                </CardTitle>
                <CardDescription className="text-gray-600">Connect with other health platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <img src="/placeholder.svg?height=24&width=24" alt="Apple Health" className="h-6 w-6" /> Apple
                    Health
                  </h4>
                  <Button variant="outline" size="small" className="bg-transparent">
                    Connect
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <img src="/placeholder.svg?height=24&width=24" alt="Google Fit" className="h-6 w-6" /> Google Fit
                  </h4>
                  <Button variant="outline" size="small" className="bg-transparent">
                    Connect
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
