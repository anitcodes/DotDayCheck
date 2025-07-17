import React from "react"

export function Skeleton({ className = "", style = {}, ...props }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ minHeight: 16, ...style }}
      {...props}
    />
  )
}

export default Skeleton; 