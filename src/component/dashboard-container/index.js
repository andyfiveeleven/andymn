import './_dashboard-container.scss'
import React from 'react'
import {connect} from 'react-redux'

class DashboardContainer extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('component mounted!')
  }

  render(){
    return(
      <div className='dashboard-container'>
        
      </div>
    )
  }
}
