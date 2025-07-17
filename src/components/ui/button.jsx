import * as React from "react"
import { cn } from "../../lib/utils" // Assuming utils.js is in src/lib

const Button = React.forwardRef(({ className, variant, size, asChild = false, icon: Icon, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"
  const baseClasses =
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    // Custom variants for your app
    primary: "text-white hover:opacity-90 shadow-lg hover:shadow-xl transform hover:scale-105",
    gradient:
      "text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
    // Custom sizes for your app
    custom: "h-14 px-8 rounded-xl",
    small: "h-10 px-4 py-2 text-sm", // For smaller buttons
    xsmall: "h-8 px-3 py-1 text-xs", // For extra small buttons
  }

  const style =
    variant === "primary"
      ? { backgroundColor: "#FF4D8F", focusRingColor: "#FF4D8F" }
      : variant === "outline"
        ? { borderColor: "#FF4D8F", color: "#FF4D8F" }
        : {}

  return (
    <Comp
      className={cn(
        baseClasses,
        variants[variant] || variants.default,
        sizes[size] || sizes.custom, // Use custom size as default if not specified
        className,
      )}
      ref={ref}
      style={style}
      {...props}
    >
      {Icon && <Icon className="h-5 w-5 mr-2" />} {/* Icon with margin */}
      {props.children}
    </Comp>
  )
})
Button.displayName = "Button"

export { Button }
