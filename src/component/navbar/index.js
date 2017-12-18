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
          <h1><a href='/'>Andy Martin</a></h1>
          <ul>
            <li><a href='/'>about me</a></li>
            <li><a href='/'>resume</a></li>
            <li><a href='/'>projects</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar
