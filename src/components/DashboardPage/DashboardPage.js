import React, { Component } from 'react'
import Cards from './Dashboard/Cards'
import InfoContainer from './Dashboard/InfoContainer'

export default class Dashboard extends Component {
    render() {
        return (      
          <div className="container-fluid">
            {/* Page Heading */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>
            <Cards/>
            <InfoContainer/>
        </div>
        )
    }
}
