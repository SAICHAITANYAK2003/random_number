// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }
  onRandomGenerateNumber = () => {
    const newRandomNumber = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: newRandomNumber})
  }
  render() {
    const {randomNumber} = this.state
    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="heading"> Random Number</h1>
          <p className="text">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.onRandomGenerateNumber}
          >
            Generate
          </button>
          <p className="number-text">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
