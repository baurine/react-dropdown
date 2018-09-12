import React from 'react'
import './DropDown.css'

const OPTIONS = [
  { key: 1, text: 'Option 1'},
  { key: 2, text: 'Option 2'},
  { key: 3, text: 'Option 3'},
]

export default class DropDrow1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDownExpanded: false
    }
  }

  componentWillUnmount() {
    // important! we need remove global click handler when unmout
    window.removeEventListener('click', this.handleGlobalClick)
  }

  handleHeadClick = () => {
    this.setState({dropDownExpanded: true})
    setTimeout(()=>{
      // must run in the next tick
      window.addEventListener('click', this.handleGlobalClick)
    }, 0)
  }

  handleGlobalClick = () => {
    this.setState({dropDownExpanded: false})
    window.removeEventListener('click', this.handleGlobalClick)
  }

  handleOptionClick = (event, option) => {
    console.log(option)
  }

  render() {
    const { dropDownExpanded } = this.state
    return (
      <div className="dropdown-container">
        <div className="dropdown-head">
          {
            dropDownExpanded ?
            <button>Collapse dropdown menu</button> :
            <button onClick={this.handleHeadClick}>Open dropdown menu</button>
          }
        </div>
        {
          dropDownExpanded &&
          <div className="dropdown-body">
            <ul>
              {
                OPTIONS.map(option =>
                  <li key={option.key}
                      className="dropdown-item"
                      onClick={(e)=>this.handleOptionClick(e, option)}>{option.text}</li>
                )
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}
