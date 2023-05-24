import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import ButtonOutline from '../components/button-outline'
import BlogCardHome from '../components/blog-card-home'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Schrijf je vrij</title>
        <meta property="og:title" content="Schrijf je vrij" />
      </Helmet>
      <div className="home-top-container">
        <div className="home-foto-schrijfvrijheid">
          <img
            alt="image"
            src="./playground_assets/schrijfvrijheid.svg"
            className="home-image"
          />
        </div>
        <div className="home-foto-schrijfvrijheid1">
          <NavbarInteractive rootClassName="navbar-interactive-root-class-name"></NavbarInteractive>
          <div className="home-container1">
            <img
              alt="image"
              src="./playground_assets/schrijfvrijheid.svg"
              className="home-image1"
            />
          </div>
        </div>
        <div className="home-hero">
          <img
            alt="image"
            src="./playground_assets/schrijfvrijheid.svg"
            className="home-image2"
          />
        </div>
      </div>
      <div id="main-section" className="home-main">
        <div className="home-container2">
          <img
            alt="image"
            src="./playground_assets/20210531_115647%201-300w.png"
            className="home-image3"
          />
          <div className="home-container3">
            <div className="home-container4">
              <h1 className="home-text">Waarom schrijfvrijheid?</h1>
              <span className="home-text01">
                <span>
                  Ten eerste omdat ik me vrij voel om te schrijven sinds ik in
                  april 2021 mijn baan heb opgezegd. Doen wat ik het liefste
                  doe, creatief bezig zijn. 
                </span>
                <br></br>
                <br></br>
                <span>
                  Vervolgens omdat ik een boek schrijf dat zich in de Tweede
                  Wereldoorlog afspeelt en juist daardoor besef ik hoe bijzonder
                  het is dat ik in vrijheid kan leven.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
              <div className="home-container5">
                <Link to="/over-mij" className="home-navlink">
                  <ButtonOutline
                    text="Meer over mij"
                    rootClassName="button-outline-root-class-name2"
                    className="home-component1"
                  ></ButtonOutline>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="home-cards-container"></div>
      </div>
      <div className="home-banner">
        <h2 className="home-text07">
          <br></br>
          <span>
            Zoveel boeken zijn er niet die de Tweede Wereldoorlog van twee
            kanten beschrijven. Daarom heb ik besloten de gebeurtenissen van
            mijn Nederlandse vader én van mijn Duitse schoonvader op papier te
            zetten. Twee kanten van een oorlog.
          </span>
        </h2>
        <Link to="/roman" className="home-navlink1">
          <ButtonOutline
            text="Naar de roman"
            button1="Over de roman"
            rootClassName="button-outline-root-class-name1"
            className="home-component2"
          ></ButtonOutline>
        </Link>
      </div>
      <div className="home-blog">
        <h1 className="home-text10">
          <span>Blogs</span>
          <br></br>
        </h1>
        <div className="home-laatste-3-blogposts">
          <Link to="/vader" className="home-navlink2">
            <BlogCardHome
              datum="23-02-2023"
              title="Albert Gerrits 7 april 1921 - 23 februari 2013"
              image_src="./playground_assets/albert%20gerrits%204-1500w.jpg"
              description="Precies tien jaar geleden overleed mijn vader in de leeftijd van 91 jaar. Dat is een mooie leeftijd als je bedenkt dat hij bijna tachtig jaar eerder op het nippertje de Tweede Wereldoorlog heeft overleefd. "
              rootClassName="rootClassName41"
              className="home-component3"
            ></BlogCardHome>
          </Link>
          <Link to="/onderzoek-rad" className="home-navlink3">
            <BlogCardHome
              datum="17-12-2022"
              title="Op onderzoek in Duitsland"
              image_src="./playground_assets/onderzoek%20in%20duitsland-1500w.webp"
              description="Wat heeft de kerstmarkt in Bremen met mijn onderzoek te maken?  Nou, helemaal niets dus. We waren voor een familiefeestje in Bremen en hebben daarna de kerstmarkt bezocht. Want de kerstmarkt in  ..."
              rootClassName="rootClassName42"
              className="home-component4"
            ></BlogCardHome>
          </Link>
          <Link to="/proeverij" className="home-navlink4">
            <BlogCardHome
              datum="2-12-2022"
              title="Een bijzondere proeverij"
              image_src="./playground_assets/smeerstations-1500w.jpg"
              description="Kamp Amersfoort organiseert een proeverij. Terwijl we erheen rijden denk ik aan mijn vader die er een week of zes gevangen heeft gezeten in de Tweede Wereldoorlog. Wat kreeg hij toen te eten?"
              rootClassName="rootClassName43"
              className="home-component5"
            ></BlogCardHome>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
