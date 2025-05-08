
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import DashboardHeader from "../components/dashboard/dashboard-header"
import DashboardContent from "../components/dashboard/dashboard-content";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user")) || null
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [])

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    )
  }

  return (
      <div className="flex bg-gray-900 min-h-screen flex-col">
        <DashboardHeader user={user} />
        <main className="container mx-auto flex-1 px-4 py-8">
          <DashboardContent />
        </main>
      </div>
  )
}
