import { Bell, Shield, HelpCircle, Info, Mail, Users, Link, User, Lock, Download, Unlink, Target, Droplet, CircleDot, Calendar, Heart } from "lucide-react"
import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${checked ? "bg-pink-500" : "bg-gray-200"}`}
        role="switch"
        aria-checked={checked}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${checked ? "translate-x-6" : "translate-x-1"}`}
        />
      </button>
    </div>
  )
}

export default function Settings() {
  // --- Profile (Personal Settings) State ---
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
  // --- Settings State ---
  const [periodReminders, setPeriodReminders] = useState(true)
  const [ovulationReminders, setOvulationReminders] = useState(true)
  const [logReminders, setLogReminders] = useState(false)
  const [partnerSymptomAlerts, setPartnerSymptomAlerts] = useState(true)
  const [partnerCravingAlerts, setPartnerCravingAlerts] = useState(false)
  const [partnerCyclePhaseAlerts, setPartnerCyclePhaseAlerts] = useState(true)
  const [dataSharing, setDataSharing] = useState(false)
  const [twoFactorAuth, setTwoFactorAuth] = useState(false)
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
    <div className="flex flex-col gap-12">
      {/* --- Personal Settings Section --- */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Settings</h2>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
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
                <Button variant="outline" size="sm" className="bg-transparent">
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
                    size="sm"
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
                <User className="h-5 w-5 text-purple-500" /> Basic Health Information
              </CardTitle>
              <CardDescription className="text-gray-600">Your health and cycle details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <User className="h-4 w-4 text-gray-500" /> Birth Year
                </h4>
                <p className="text-gray-700">{userData.birthYear}</p>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Target className="h-4 w-4 text-gray-500" /> Primary Goal
                </h4>
                <p className="text-gray-700">{userData.primaryGoal}</p>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Droplet className="h-4 w-4 text-gray-500" /> Last Period Start
                </h4>
                <p className="text-gray-700">{userData.lastPeriodStart}</p>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <CircleDot className="h-4 w-4 text-gray-500" /> Typical Period Length
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
              <div className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Heart className="h-4 w-4 text-gray-500" /> Common Symptoms
                </h4>
                <p className="text-gray-700">{userData.commonSymptoms.join(", ")}</p>
              </div>
            </CardContent>
          </Card>
          {/* Partner Connection */}
          <Card className="border-gray-200 bg-white shadow-sm lg:col-span-2">
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
                    size="sm"
                    className="bg-transparent text-red-600 border-red-200 hover:bg-red-50"
                  >
                    Disconnect Partner
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          {/* Data Export */}
          <Card className="border-gray-200 bg-white shadow-sm lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-gray-900 font-bold flex items-center gap-2">
                <Download className="h-5 w-5 text-orange-500" /> Data Export
              </CardTitle>
              <CardDescription className="text-gray-600">Download your personal data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Export all your logged cycle history, symptoms, and diary entries in a user-friendly format (e.g., JSON).
              </p>
              <Button variant="primary" icon={Download} size="sm" className="w-full" onClick={handleExportData}>
                Export My Data
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* --- Other Settings Section --- */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Settings</h2>
        <div className="grid gap-8 lg:grid-cols-2 items-start">
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
                <p className="text-sm text-gray-600 mb-3">Set personalized reminders for medication, water intake, etc.</p>
                <Button variant="outline" size="sm" className="bg-transparent">
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
                  <Button variant="outline" size="sm" className="bg-transparent">
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
                  <Users className="h-4 w-4 text-gray-500" /> Delete Account
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Permanently delete your account and all associated data. This action cannot be undone.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full text-red-600 border-red-200 hover:bg-red-50 bg-transparent"
                  onClick={handleDeleteAccount}
                >
                  Delete My Account
                </Button>
              </div>
            </CardContent>
          </Card>
          {/* Help & Support */}
          <Card className="border-gray-200 bg-white shadow-sm lg:col-span-2">
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
                <Info className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-gray-900">Frequently Asked Questions (FAQ)</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <Mail className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-gray-900">Contact Support</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <Info className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-gray-900">About Us</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <Link className="h-4 w-4 text-gray-500" />
                <span className="font-semibold text-gray-900">Terms of Service & Privacy Policy</span>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}