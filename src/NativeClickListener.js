import React from 'react'
import PropTypes from 'prop-types'

export default class NativeClickListener extends React.Component {
  static propTypes = {
    onClick: PropTypes.func
  }

  clickHandler = (event) => {
    console.log('NativeClickListener click')
    const { onClick } = this.props
    onClick && onClick(event)
  }

  componentDidMount() {
    window.addEventListener('click', this.clickHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.clickHandler)
  }

  render() {
    return this.props.children
  }
}
