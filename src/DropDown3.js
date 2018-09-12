import React from 'react'
import './DropDown.css'

const OPTIONS = [
  { key: 1, text: 'Option 1'},
  { key: 2, text: 'Option 2'},
  { key: 3, text: 'Option 3'},
]

export default class DropDrow3 extends React.Component {
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
    console.log('head click')

    this.setState({dropDownExpanded: true})
    setTimeout(()=>{
      // must run in the next tick
      window.addEventListener('click', this.handleGlobalClick)
    }, 0)
  }

  handleOptionClick = (event, option) => {
    console.log('option click')
    console.log(option)
    console.log(event.target.checked)
  }

  handleBodyClick = (event) => {
    console.log('body click')
    // doesn't work at all before
    // wierd, it already work in react 16.5.0 ...
    event.stopPropagation()
  }

  handleGlobalClick = (event) => {
    console.log('global click')

    this.setState({dropDownExpanded: false})
    window.removeEventListener('click', this.handleGlobalClick)
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
          <div className="dropdown-body"
               onClick={this.handleBodyClick}>
            <ul>
              {
                OPTIONS.map(option =>
                  <li key={option.key}
                      className="dropdown-item">
                    <input type='checkbox'
                           onChange={(e)=>this.handleOptionClick(e, option)}></input>
                    {option.text}
                  </li>
                )
              }
            </ul>
          </div>
        }
      </div>
    )
  }
}
