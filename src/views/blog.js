import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import BlogCardBlogs from '../components/blog-card-blogs'
import Footer from '../components/footer'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Schrijf je vrij</title>
        <meta property="og:title" content="Blog - Schrijf je vrij" />
      </Helmet>
      <div className="blog-top">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name3"></NavbarInteractive>
        <div className="blog-container1">
          <h1>Blog</h1>
          <span>Uit het leven gegrepen</span>
        </div>
      </div>
      <div className="blog-blog">
        <Link to="/vati" className="blog-navlink">
          <BlogCardBlogs
            when="25-05-2023"
            title="Albert Woltjes 24 juni 1925 - 25 mei 1988"
            image_src="./playground_assets/albert%20woltjes%20hj-1500w.jpg"
            description="Vandaag is het vijfendertig jaar geleden dat mijn Duitse schoonvader, die net als mijn vader Albert heette, overleden is. Ik had hem graag leren kennen. Niet alleen omdat hij de vader van"
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName5"
            className="blog-albert-woltjes"
          ></BlogCardBlogs>
        </Link>
        <Link to="/vader" className="blog-navlink1">
          <BlogCardBlogs
            when="23-02-2023"
            title="Albert Gerrits 7 april 1921 - 23 februari 2013"
            image_src="./playground_assets/albert%20gerrits%204-1500w.jpg"
            description="Precies tien jaar geleden overleed mijn vader in de leeftijd van 91 jaar. Dat is een mooie leeftijd als je bedenkt dat hij bijna tachtig jaar eerder op het nippertje de Tweede Wereldoorlog heeft overleefd. "
            profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName3"
            className="blog-albert-gerrits"
          ></BlogCardBlogs>
        </Link>
        <Link to="/onderzoek-rad" className="blog-navlink2">
          <BlogCardBlogs
            when="17-12-2022"
            title="Op onderzoek in Duitsland"
            image_src="./playground_assets/onderzoek%20in%20duitsland-1500w.webp"
            description="Wat heeft de kerstmarkt in Bremen met mijn onderzoek te maken?  Nou, helemaal niets dus. We waren voor een familiefeestje in Bremen en hebben daarna de kerstmarkt bezocht. Want de kerstmarkt in  ..."
            profile_src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName2"
            className="blog-onderzoek-rad"
          ></BlogCardBlogs>
        </Link>
        <Link to="/proeverij" className="blog-navlink3">
          <BlogCardBlogs
            when="2-12-2022"
            title="Een bijzondere proeverij"
            image_src="./playground_assets/smeerstations-1500w.jpg"
            description="Kamp Amersfoort organiseert een proeverij. Terwijl we erheen rijden denk ik aan mijn vader die er een week of zes gevangen heeft gezeten in de Tweede Wereldoorlog. Wat kreeg hij toen te eten?"
            profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName"
            className="blog-een-bijzondere-proeverij"
          ></BlogCardBlogs>
        </Link>
        <Link to="/moeder" className="blog-navlink4">
          <BlogCardBlogs
            when="30-10-2022"
            title="Moeder"
            image_src="./playground_assets/moeder%20copy-1500w.jpg"
            description="Ze denken dat ik gek ben, maar dat is niet zo. Elke avond komen ze. Ik zie ze toch. Vanuit mijn bed kan ik net door de halfopen slaapkamerdeur naar de woonkamer kijken. Precies daar staat ..."
            profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName4"
            className="blog-moeder"
          ></BlogCardBlogs>
        </Link>
        <Link to="/heilige-wandelingen" className="blog-navlink5">
          <BlogCardBlogs
            when="30-09-2022"
            title="Heilige wandelingen"
            image_src="./playground_assets/boom-1500w.webp"
            description="Nieuwe rugzak, oude wandelschoenen, autolampen bestickerd. Met de ferry gaan we naar Engeland. Links houden, links houden, luidt de nieuwe mantra in mijn hoofd. Een knusse cottage in Salisbury ..."
            profile_src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
            rootClassName="rootClassName1"
            className="blog-heilige-wandelingen"
          ></BlogCardBlogs>
        </Link>
      </div>
      <Footer rootClassName="footer-root-class-name7"></Footer>
    </div>
  )
}

export default Blog
