import { useState } from "react"
import { useOutletContext } from "react-router-dom"
import {
  Calendar,
  X,
  Heart,
  Mail,
  Gift,
  Bell,
  TrendingUp,
  Droplets,
  Moon,
  Sun,
  Send,
  Share2,
  MessageCircle,
} from "lucide-react"
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
import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"

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

function StatCard({ title, value, subtitle, icon: Icon, trend, color = "#FF4D8F" }) {
  return (
    <Card className="border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
      <CardContent className="p-6">
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
      </CardContent>
    </Card>
  )
}

function ChartCard({ title, subtitle, children, height = "h-[350px]" }) {
  return (
    <Card className="border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300">
      <CardHeader className="p-6 border-b border-gray-100">
        <CardTitle className="text-xl font-bold text-gray-900 mb-2">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600">{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className={`p-6 ${height}`}>{children}</CardContent>
    </Card>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/70">
      <Card className="rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-pink-50 to-purple-100 border-pink-200">
        <CardHeader className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-900">Send Partner Update</CardTitle>
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
          </div>
          <CardDescription className="text-gray-600 mt-2">Choose a template to send to your partner</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
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
            <Button icon={Send} className="flex-1" onClick={onClose}>
              Send Email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function Dashboard() {
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const { mode, theme } = useOutletContext()

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
    <>
      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
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
          subtitle="Your mood and energy patterns over the past month"
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
            </AreaChart>
          </ResponsiveContainer>
        </ChartCard>
      </div>
      {/* Partner Care Features */}
      <div className="grid gap-8 lg:grid-cols-1">
        <Card className="bg-gradient-to-br from-pink-50 to-purple-50 border border-pink-200 shadow-sm">
          <CardHeader className="p-6 border-b border-pink-200">
            <CardTitle className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
              <Heart className="h-5 w-5 text-pink-500" />
              Partner Care Hub
            </CardTitle>
            <CardDescription className="text-gray-600">
              Keep your partner informed and get the support you need
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <Button
                variant="ghost"
                onClick={() => setEmailModalOpen(true)}
                className="w-full justify-start p-4 bg-white rounded-xl hover:shadow-md transition-all text-left"
              >
                <div className="h-12 w-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-pink-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-900">Send Cycle Update</h4>
                  <p className="text-sm text-gray-600">Share your current status and mood</p>
                </div>
                <Send className="h-5 w-5 text-gray-400" />
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start p-4 bg-white rounded-xl hover:shadow-md transition-all text-left"
              >
                <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Gift className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-900">Care Suggestions</h4>
                  <p className="text-sm text-gray-600">Get personalized care tips for your partner</p>
                </div>
                <MessageCircle className="h-5 w-5 text-gray-400" />
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start p-4 bg-white rounded-xl hover:shadow-md transition-all text-left"
              >
                <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Bell className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1 text-left">
                  <h4 className="font-semibold text-gray-900">Smart Reminders</h4>
                  <p className="text-sm text-gray-600">Set up automatic partner notifications</p>
                </div>
                <Share2 className="h-5 w-5 text-gray-400" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* Email Modal */}
      <PartnerEmailModal isOpen={emailModalOpen} onClose={() => setEmailModalOpen(false)} />
    </>
  )
}