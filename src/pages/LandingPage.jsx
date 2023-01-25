import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import './LandingPage.css'

export default function LandingPage() {
  const navigate = useNavigate()

  const handleStart = async () => {
    navigate("/Search")
  }
  return (
    <>
   <h1 className="welcome">LandingPage</h1>
   <div>Welcome + Explanation </div>
   <button onClick={handleStart}>Get Started</button>
    </>
  )
}
