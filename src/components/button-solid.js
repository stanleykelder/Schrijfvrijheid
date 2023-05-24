import React from 'react'

import PropTypes from 'prop-types'

import './button-solid.css'

const ButtonSolid = (props) => {
  return (
    <div className={`button-solid-container ${props.rootClassName} `}>
      <button className="button-solid-button button Button">
        {props.button}
      </button>
    </div>
  )
}

ButtonSolid.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

ButtonSolid.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ButtonSolid
