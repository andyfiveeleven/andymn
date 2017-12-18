import './style/main.scss'
import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import DashboardContainer from './component/dashboard-container'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      budget: 400,
      expenses: []
    }
    this.getApp = this.getApp.bind(this)
  }

  getApp(){
    return{
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state)
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/dashboard' component={() =>
              <DashboardContainer app={this.getApp()} /> } />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))