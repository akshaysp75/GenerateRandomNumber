import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: '0'}

  onGenerate = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number between the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="generated-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
