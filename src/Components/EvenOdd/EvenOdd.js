import { Component } from "react";
import './EvenOdd.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: Math.ceil(Math.random() * 100) + prevState.count,
    }))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="content-container">
            <h1 className="heading-1">Count <span className="count-style">{count}</span></h1>
            <p className="paragraph-1">Count is {displayText}</p>
            <div className="btn-container">
              <button className="btn-style" onClick={this.onIncrement}>
                Increment
              </button>
            </div>
            <p className="paragraph-2">
              *Increase By Random Number Between 0 to 100
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default EvenOddApp