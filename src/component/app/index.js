import './_app.scss'
import React from 'react'
import {connect} from 'react-redux'
import {BrwoserRouter, Route, Link} from 'react-router-dom'

// import stuff from other componenet.
import DashboardContainer from '../dashboard-container'

class App extends React.Component{
  componentDidMount(){

  }

  render() {
    return(
      <div className='app'>
        <BrowserRouter>
          <div>
            <Route exact path='/' component-{DashboardContainer} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}
