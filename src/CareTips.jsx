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
// Removed sidebar-related imports and navigationItems

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

function CareTipCard({ title, icon: Icon, color, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        {Icon && <Icon className="h-6 w-6" style={{ color }} />}
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default function CareTips() {
  // No sidebar state or rendering here; handled by MainAppLayout
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-pink-50">
      <div className="flex-1 lg:ml-0">
        <main>
          <div className="grid gap-2 lg:grid-cols-3 justify-start">
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