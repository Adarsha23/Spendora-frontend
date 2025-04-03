import React from 'react'
import Header from '../components/Header'
import Charts from '../components/Charts'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ReportSection from '../components/ReportSection'
import Summary from '../components/Summary'
import "./Home.css";
export default function Home() {
  return (
    <>
            <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Header />
        <div className="content-layout">
          <Summary />
          <Charts />  {/* Render the Charts component here */}
        </div>
        <ReportSection />
      </div>
    </div>


    </>
  )
}
