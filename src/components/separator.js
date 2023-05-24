import React from 'react'

import PropTypes from 'prop-types'

import './separator.css'

const Separator = (props) => {
  return <div className={`separator-separator ${props.rootClassName} `}></div>
}

Separator.defaultProps = {
  rootClassName: '',
}

Separator.propTypes = {
  rootClassName: PropTypes.string,
}

export default Separator
