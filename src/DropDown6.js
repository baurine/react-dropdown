import React from 'react'
import './DropDown.css'
import NativeClickListener2 from './NativeClickListener2';

const OPTIONS = [
  { key: 1, text: 'Option 1', checked: false },
  { key: 2, text: 'Option 2', checked: false },
  { key: 3, text: 'Option 3', checked: false },
]

export default class DropDown6 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dropDownExpanded: false,
      options: OPTIONS
    }
  }

  handleHeadClick = (event) => {
    console.log('head click')
    this.setState(prevState => ({dropDownExpanded: !prevState.dropDownExpanded}))
  }

  handleBodyClick = (event) => {
    console.log('body click')
    // just can stop event propagate from document to window
  }

  handleOptionClick = (event, option) => {
    console.log('option click')
    console.log(option)

    const checked = event.target.checked
    console.log(checked)
    const options = this.state.options.map(item =>
      item.key === option.key ? {...item, checked} : item)
    this.setState({options})
  }

  render() {
    const { dropDownExpanded } = this.state
    return (
      <div className="dropdown-container">
        <div className="dropdown-head">
          <button onClick={this.handleHeadClick}>
            {dropDownExpanded ? 'Collapse' : 'Open'} dropdown menu - 6
          </button>
        </div>
        {
          dropDownExpanded &&
          <NativeClickListener2 onClick={()=>this.setState({dropDownExpanded: false})}>
            <div className="dropdown-body"
                onClick={this.handleBodyClick}>
              <ul>
                {
                  this.state.options.map(option =>
                    <li key={option.key}
                        className="dropdown-item">
                      <input type='checkbox'
                            checked={option.checked}
                            onChange={(e)=>this.handleOptionClick(e, option)}></input>
                      {option.text}
                    </li>
                  )
                }
              </ul>
            </div>
          </NativeClickListener2>
        }
      </div>
    )
  }
}
