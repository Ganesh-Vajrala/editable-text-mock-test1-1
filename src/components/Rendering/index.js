import {Component} from 'react'
import './index.css'

export default class Rendering extends Component {
  state = {
    save: false,
    inputValue: '',
  }

  changeInputVal = event => {
    this.setState({inputValue: event.target.value})
  }

  changeRender = () => {
    this.setState(prev => ({
      save: !prev.save,
    }))
  }

  render() {
    const {save, inputValue} = this.state
    return (
      <div className="main-container">
        <div className="inner-container">
          <h1>Editable Text Input</h1>
          <div className="input-container">
            {save ? (
              <p>{inputValue}</p>
            ) : (
              <input
                type="text"
                className="input"
                value={inputValue}
                onChange={this.changeInputVal}
              />
            )}
            <button
              type="button"
              className="button"
              onClick={this.changeRender}
            >
              {save ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
