import React, { Component } from 'react'
import './style1.css'

export default class STATE extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count : 0
    }
  }

  handleIncrement = () =>  {
      this.setState ({
          count : this.state.count + 1
      })
  }

  handleDecrment = () =>  {
    this.setState ({
        count : this.state.count - 1
        })
     }
  
    render() {

        const {count} = this.state
            return (
            
            <div>
                <h1> Count : {count}</h1>
                <button onClick={this.handleIncrement}>+</button>
                <button onClick={this.handleDecrment} disabled={count===0 ?  true : false}>-</button>
           
            </div>
            )
  }
}
