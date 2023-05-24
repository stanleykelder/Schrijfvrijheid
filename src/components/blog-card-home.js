import React from 'react'

import PropTypes from 'prop-types'

import './blog-card-home.css'

const BlogCardHome = (props) => {
  return (
    <div className={`blog-card-home-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="blog-card-home-image"
      />
      <div className="blog-card-home-container">
        <span className="blog-card-home-text">{props.datum}</span>
        <div className="blog-card-home-container1">
          <span className="blog-card-home-text1">{props.title}</span>
        </div>
        <span className="blog-card-home-text2">{props.description}</span>
      </div>
    </div>
  )
}

BlogCardHome.defaultProps = {
  title: 'Blog titel',
  description:
    'Lorem ipsum dolor sit amet, consectetur, adipiscing elit. Sed non volutpat turpis.  ​ Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem  ​​ ipsum dolor sit amet, consectetur adipiscing elit.',
  rootClassName: '',
  datum: '00-00-0000',
  image_src:
    'https://images.unsplash.com/photo-1547841243-eacb14453cd9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxjaXR5fGVufDB8fHx8MTYyNjE4NjYxMg&ixlib=rb-1.2.1&w=1500',
  image_alt: 'image',
}

BlogCardHome.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  rootClassName: PropTypes.string,
  datum: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogCardHome
