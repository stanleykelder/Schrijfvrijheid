import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-menu">
        <Link to="/" className="footer-navlink">
          <h1 className="footer-logo">{props.Logo}</h1>
        </Link>
        <div className="footer-links-container">
          <div className="footer-container">
            <Link to="/" className="footer-navlink1">
              {props.Home}
            </Link>
            <Link to="/over-mij" className="footer-navlink2">
              {props.Over}
            </Link>
            <Link to="/roman" className="footer-navlink3">
              {props.Roman}
            </Link>
            <Link to="/blog" className="footer-link">
              {props.Blog}
            </Link>
          </div>
          <div className="footer-container1">
            <a
              href="mailto:marjangerrits@gmail.com?subject=Schrijfvrijheid"
              className="footer-link1"
            >
              {props.Contact}
            </a>
          </div>
        </div>
        <div className="footer-follow-container">
          <span className="footer-text">{props.Socials}</span>
          <div className="footer-icons-container">
            <a
              href="https://instagram.com/gerritsmarjan/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="footer-icon">
                <path
                  d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"
                  className=""
                ></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/marjan.gerrits"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link3"
            >
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="footer-icon2"
              >
                <path
                  d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                  className=""
                ></path>
              </svg>
            </a>
            <a
              href="mailto:marjangerrits@gmail.com?subject=Schrijfvrijheid"
              className="footer-link4"
            >
              <svg viewBox="0 0 1024 1024" className="footer-icon4">
                <path
                  d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"
                  className=""
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  link_text: 'https://example.com',
  Socials: 'Volg mij',
  Contact: 'Contact',
  link_text3: 'https://example.com',
  Roman: 'Roman',
  link_Link: 'https://example.com',
  link_text1: 'https://example.com',
  link_text2: 'https://example.com',
  Logo: 'Marjan Gerrits',
  Blog: 'Blog',
  Home: 'Home',
  Over: 'Over mij',
  rootClassName: '',
}

Footer.propTypes = {
  link_text: PropTypes.string,
  Socials: PropTypes.string,
  Contact: PropTypes.string,
  link_text3: PropTypes.string,
  Roman: PropTypes.string,
  link_Link: PropTypes.string,
  link_text1: PropTypes.string,
  link_text2: PropTypes.string,
  Logo: PropTypes.string,
  Blog: PropTypes.string,
  Home: PropTypes.string,
  Over: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer
