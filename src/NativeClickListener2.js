import React from 'react'
import PropTypes from 'prop-types'

export default class NativeClickListener extends React.Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  clickHandler = (event) => {
    console.log('NativeClickListener click')
    if(this._container.contains(event.target)) return

    const { onClick } = this.props
    onClick && onClick(event)
  }

  componentDidMount() {
    document.addEventListener('click', this.clickHandler)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickHandler)
  }

  render() {
    return (
      <div ref={ref=>this._container=ref}>
        {this.props.children}
      </div>
    )
  }
}
