import React from 'react'
import './DropDown.css'

const OPTIONS = [
  { key: 1, text: 'Option 1'},
  { key: 2, text: 'Option 2'},
  { key: 3, text: 'Option 3'},
]

export default class DropDrow2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDownExpanded: false
    }
  }

  componentWillUnmount() {
    // important! we need remove global click handler when unmout
    document.removeEventListener('click', this.handleGlobalClick)
  }

  handleHeadClick = () => {
    console.log('head click')

    this.setState({dropDownExpanded: true})
    setTimeout(()=>{
      // must run in the next tick
      document.addEventListener('click', this.handleGlobalClick)
    }, 0)
  }

  handleGlobalClick = (event) => {
    console.log('global click')

    // use DOMNode.contains() method to judge click target is in or out of the dropdown body
    if (this._dropdown_body && this._dropdown_body.contains(event.target)) return

    this.setState({dropDownExpanded: false})
    document.removeEventListener('click', this.handleGlobalClick)
  }

  handleOptionClick = (event, option) => {
    console.log('option click')
    console.log(option)
    console.log(event.target.checked)
  }

  render() {
    const { dropDownExpanded } = this.state
    return (
      <div className="dropdown-container">
        <div className="dropdown-head">
          {
            dropDownExpanded ?
            <button>Collapse dropdown menu - 2</button> :
            <button onClick={this.handleHeadClick}>Open dropdown menu - 2</button>
          }
        </div>
        {
          dropDownExpanded &&
          <div className="dropdown-body" ref={ref=>this._dropdown_body=ref}>
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
