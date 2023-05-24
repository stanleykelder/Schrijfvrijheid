import React from 'react'

import PropTypes from 'prop-types'

import './woordkunst-component.css'

const WoordkunstComponent = (props) => {
  return (
    <div className="woordkunst-component-container">
      <div className="woordkunst-component-container1">
        <div className="woordkunst-component-container2">
          <h1 className="woordkunst-component-text">{props.Title}</h1>
          <span className="woordkunst-component-text1">{props.Text}</span>
        </div>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="woordkunst-component-image"
        />
      </div>
    </div>
  )
}

WoordkunstComponent.defaultProps = {
  image_alt: 'image',
  Text: 'Gedicht of haiku',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  Title: 'Titel',
}

WoordkunstComponent.propTypes = {
  image_alt: PropTypes.string,
  Text: PropTypes.string,
  image_src: PropTypes.string,
  Title: PropTypes.string,
}

export default WoordkunstComponent
