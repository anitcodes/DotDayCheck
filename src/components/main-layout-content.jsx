import { Menu } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
// import { useLocation } from "react-router-dom" // Remove unused import

export default function MainContentLayout({ children, theme, headerInfo }) {
  // Removed unused variables and functions
  // const primaryColor = theme === "normal" ? "#FF4D8F" : "#3B82F6"
  // const location = useLocation()
  // const getBreadcrumbTitle = (path) => { ... }

  return (
    // Removed SidebarInset wrapper here
    <div
      className={`flex min-h-screen ${
        theme === "normal" ? "bg-gradient-to-br from-gray-50 to-pink-50" : "bg-gradient-to-br from-gray-50 to-blue-50"
      }`}
    >
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        {headerInfo?.title && (
          <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-30">
            <div className="flex h-20 items-center gap-4 px-6">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900">
                  {headerInfo?.title}
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
        )}
        <main className="p-4 sm:p-6">
          {children} {/* This is where your page content will be rendered */}
        </main>
      </div>
    </div>
  )
}
