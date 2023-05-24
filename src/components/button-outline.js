import React from 'react'

import PropTypes from 'prop-types'

import './button-outline.css'

const ButtonOutline = (props) => {
  return (
    <div className={`button-outline-container ${props.rootClassName} `}>
      <button className="button-outline-button button Button">
        <span className="button-outline-text">{props.text}</span>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="button-outline-image"
        />
      </button>
    </div>
  )
}

ButtonOutline.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  text: 'Button',
  image_src: './playground_assets/arrow-right-solid%201.svg',
}

ButtonOutline.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default ButtonOutline
