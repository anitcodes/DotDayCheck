import { Menu } from "lucide-react"
import { SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { useLocation } from "react-router-dom" // Assuming react-router-dom for routing

export default function LayoutWrapper({ children, theme, headerInfo }) {
  const primaryColor = theme === "normal" ? "#FF4D8F" : "#3B82F6"
  const location = useLocation() // Get current path for breadcrumbs or active state

  // You can customize breadcrumbs or header titles based on location.pathname
  const getBreadcrumbTitle = (path) => {
    switch (path) {
      case "/dashboard":
        return "Dashboard"
      case "/calendar":
        return "Calendar"
      case "/insights":
        return "Insights"
      case "/diary":
        return "My Diary"
      case "/care-tips":
        return "Care Tips"
      case "/profile":
        return "Profile"
      case "/settings":
        return "Settings"
      default:
        return "Home"
    }
  }

  return (
    <SidebarInset>
      <div
        className={`flex min-h-screen ${
          theme === "normal" ? "bg-gradient-to-br from-gray-50 to-pink-50" : "bg-gradient-to-br from-gray-50 to-blue-50"
        }`}
      >
        <div className="flex-1 lg:ml-0">
          {/* Header */}
          <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-30">
            <div className="flex h-20 items-center gap-4 px-6">
              <SidebarTrigger className="lg:hidden p-3 rounded-xl hover:bg-gray-100">
                <Menu className="h-6 w-6" />
              </SidebarTrigger>
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">
                  {headerInfo?.title || getBreadcrumbTitle(location.pathname)}
                </h1>
                <p className="text-gray-600">{headerInfo?.subtitle || "Welcome to your personalized space."}</p>
              </div>
              {/* Add any other header elements like ModeToggle or Day of Cycle here if they are common */}
              {/* Example: */}
              {/* <div
                className="px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg"
                style={{ backgroundColor: primaryColor }}
              >
                Day {headerInfo?.dayOfCycle || "N/A"} of Cycle
              </div> */}
            </div>
          </header>
          <main className="p-6">
            {children} {/* This is where your page content will be rendered */}
          </main>
        </div>
      </div>
    </SidebarInset>
  )
}
