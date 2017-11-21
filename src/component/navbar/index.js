import './_navbar.scss'
import React from 'react'
import {connect} from 'react-redux'

class NavBar extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('navbar mounted');
  }

  render(){
    console.log('path', this.props.match)
    return(
      <div className='navbar'>
        <nav>
          <ul>
            <li>HI</li>
          </ul>
        </nav>
      </div>
    )
  }
}
