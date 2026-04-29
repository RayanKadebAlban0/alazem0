import React from 'react'
import AppTemplate from '../../components/app-tamplate'

const Dashboard = () => {
  return (
     <AppTemplate isHaveNavbar={true} isHaveFooter={true} isSidebar={true} pageTitle="Dashboard" >
    
      <h2>Dashboard</h2>

      <div className="cards">
        <div className="card">Tasks</div>
        <div className="card">Expenses</div>
        <div className="card">Stats</div>
      </div>
  </AppTemplate>
  )
}

export default Dashboard
