import React from 'react'

import PropTypes from 'prop-types'

import ButtonOutline from './button-outline'
import './blog-card-blogs.css'

const BlogCardBlogs = (props) => {
  return (
    <div className={`blog-card-blogs-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-card-blogs-image"
      />
      <div className="blog-card-blogs-container">
        <div className="blog-card-blogs-container1">
          <span className="blog-card-blogs-text">{props.when}</span>
        </div>
        <h1 className="blog-card-blogs-text1">{props.title}</h1>
        <span className="blog-card-blogs-text2">{props.description}</span>
        <div className="blog-card-blogs-container2">
          <ButtonOutline
            text="Lees meer"
            image_alt="Lees meer"
            rootClassName="button-outline-root-class-name6"
            className=""
          ></ButtonOutline>
        </div>
      </div>
    </div>
  )
}

BlogCardBlogs.defaultProps = {
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  image_alt: 'image',
  title: 'Lorem ipsum dolor sit amet',
  when: '3 days ago',
  rootClassName: '',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
}

BlogCardBlogs.propTypes = {
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  when: PropTypes.string,
  rootClassName: PropTypes.string,
  description: PropTypes.string,
}

export default BlogCardBlogs
