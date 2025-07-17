import { useLocation, Outlet } from "react-router-dom"
import { useState } from "react"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"
import MainContentLayout from "./components/main-layout-content"

// This component will handle the main layout for pages that need the sidebar
function MainAppLayout() {
  const location = useLocation()
  const [mode, setMode] = useState("normal") // "normal" or "tricycling"
  const [collapsed, setCollapsed] = useState(false) // sidebar collapsed state
  const theme = mode === "normal" ? "normal" : "tricycling"

  // Example of dynamic header info based on current path
  const getHeaderInfo = (path) => {
    switch (path) {
      case "/dashboard":
      case "/":
        return {
          title: "Good Morning, Sarah! 🌸",
          subtitle: "Here's your wellness overview for today",
        }
      case "/calendar":
        return mode === "normal"
          ? {
              title: "Calendar - Normal Mode 🌸",
              subtitle: "Track your natural 28-day cycle with ovulation and fertile windows",
              dayOfCycle: 12,
            }
          : {
              title: "Calendar - Tricycling Mode 💊",
              subtitle: "Monitor your extended 84-day cycle with continuous hormone therapy",
              dayOfCycle: 45,
            }
      case "/insights":
        return {
          title: "Insights & Patterns",
          subtitle: "Discover trends and personalized tips from your cycle data",
        }
      case "/diary":
        return {
          title: "My Diary",
          subtitle: "Reflect on your day, track moods, and view your journal history",
        }
      case "/care-tips":
        return {
          title: "Care Tips",
          subtitle: "Explore wellness advice, symptom management, and sustainable period options",
        }
      case "/settings":
        return {
          title: "Settings",
          subtitle: "Manage your personal info, privacy, and app preferences",
        }
      default:
        return { title: "Welcome", subtitle: "Explore your journey." }
    }
  }
  const headerInfo = getHeaderInfo(location.pathname)

  return (
    <SidebarProvider>
      {/* Pass activePath to AppSidebar to highlight the current page */}
      <AppSidebar theme={theme} collapsed={collapsed} setCollapsed={setCollapsed} />
      <SidebarInset>
        <div className={`transition-all duration-300 ${collapsed ? "ml-[60px]" : "ml-[250px]"}`}>
          <MainContentLayout theme={theme} headerInfo={headerInfo}>
            {/* Outlet will render the nested routes (e.g., Dashboard, Calendar) */}
            <Outlet context={{ mode, setMode, theme }} />
          </MainContentLayout>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default MainAppLayout
