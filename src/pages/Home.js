import React from 'react'
import Header from '../home/Header'
import Charts from '../home/Charts'
import Navbar from '../home/Navbar'
import ReportSection from '../home/ReportSection'
import Summary from '../home/Summary'
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
