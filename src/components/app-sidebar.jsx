import React from "react"
import {
  CalendarIcon,
  Home,
  LineChart,
  Settings,
  User,
  BookOpen,
  Mail,
  Heart,
  Bell,
  Gift,
  Lightbulb,
  Menu,
} from "lucide-react"
import { NavLink } from "react-router-dom"

const navigationItems = [
  { title: "Dashboard", url: "/dashboard", icon: Home },
  { title: "Calendar", url: "/calendar", icon: CalendarIcon },
  { title: "Insights", url: "/insights", icon: LineChart },
  { title: "My Diary", url: "/diary", icon: BookOpen },
  { title: "Care Tips", url: "/care-tips", icon: Lightbulb },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar({ theme = "normal", collapsed, setCollapsed }) {
  const primaryColor = theme === "normal" ? "#FF4D8F" : "#3B82F6"

  return (
    <aside
      className={`fixed left-0 top-0 h-screen z-30 flex flex-col transition-all duration-300 bg-white border-r border-gray-200 shadow-lg
        ${collapsed ? "w-[60px]" : "w-[250px]"}`}
    >
      {/* Hamburger/Menu Button */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <button
          className={`p-2 rounded-lg hover:bg-gray-100 transition ${collapsed ? "mx-auto" : ""}`}
          onClick={() => setCollapsed((c) => !c)}
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
        {!collapsed && (
          <img src="/dotdaylogo.png" alt="DotDay Logo" className="h-14 max-w-full object-contain ml-auto" />
        )}
      </div>
      {/* Sidebar content (no scrolling) */}
      <div className="flex-1 flex flex-col">
        <nav className="mt-2">
          <ul className="space-y-1">
            {navigationItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group
                    ${isActive ? "text-white shadow-lg scale-105" : "text-gray-700 hover:text-gray-900 hover:bg-white hover:shadow-md"}
                    ${collapsed ? "justify-center px-2" : ""}`
                  }
                  style={({ isActive }) =>
                    isActive ? { backgroundColor: primaryColor } : {}
                  }
                  end
                >
                  {({ isActive }) => (
                    <>
                      <item.icon className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-500 group-hover:text-gray-700"}`} />
                      {!collapsed && <span className="font-semibold">{item.title}</span>}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* Partner Care (only when expanded) */}
        {!collapsed && (
          <div className="px-4 mb-6 mt-4">
            <div className={`rounded-xl p-4 border ${theme === "normal" ? "bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200" : "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200"}`}>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Heart className={`h-4 w-4 ${theme === "normal" ? "text-pink-500" : "text-blue-500"}`} />
                Partner Care
              </h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                  <Mail className={`h-4 w-4 ${theme === "normal" ? "text-pink-500" : "text-blue-500"}`} />
                  Send Update
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                  <Gift className={`h-4 w-4 ${theme === "normal" ? "text-purple-500" : "text-indigo-500"}`} />
                  Care Suggestions
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 hover:bg-white hover:shadow-sm rounded-lg transition-all">
                  <Bell className={`h-4 w-4 ${theme === "normal" ? "text-blue-500" : "text-cyan-500"}`} />
                  Reminders
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Profile section at the bottom, fixed */}
      <div className={`flex-none w-full border-t border-gray-200 bg-gray-50 p-4 flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>
        <div className="h-10 w-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-lg">SJ</div>
        {!collapsed && (
          <div>
            <p className="text-sm font-bold text-gray-900">Sarah Johnson</p>
            <p className="text-xs text-gray-500">Premium Member</p>
          </div>
        )}
      </div>
    </aside>
  )
}
