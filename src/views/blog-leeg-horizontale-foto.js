import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import BlogCardHome from '../components/blog-card-home'
import Footer from '../components/footer'
import './blog-leeg-horizontale-foto.css'

const BlogLeegHorizontaleFoto = (props) => {
  return (
    <div className="blog-leeg-horizontale-foto-container">
      <Helmet>
        <title>Blog-leeg-horizontale-foto - Schrijf je vrij</title>
        <meta
          property="og:title"
          content="Blog-leeg-horizontale-foto - Schrijf je vrij"
        />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name4"></NavbarInteractive>
      <div className="blog-leeg-horizontale-foto-blogtitel-en-datum">
        <div className="blog-leeg-horizontale-foto-container1">
          <h1 className="blog-leeg-horizontale-foto-titel BlogTitel">
            De kip in de dierentuin
          </h1>
        </div>
      </div>
      <div className="blog-leeg-horizontale-foto-container2">
        <p className="blog-leeg-horizontale-foto-datum">
          <span>01-01-1011</span>
          <br></br>
        </p>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1556316918-880f9e893822?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQxfHxjaGlja2VuJTIwcGVuZ3VpbnxlbnwwfHx8fDE2NzcyNTg2NTM&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="blog-leeg-horizontale-foto-foto"
        />
        <span className="blog-leeg-horizontale-foto-tekst">
          <span>
            &quot;Er was eens een komische kip die altijd bekend stond om haar
            gevatte grapjes. Op een dag besloot ze om een picknick te
            organiseren voor al haar vrienden in de dierentuin. Terwijl ze aan
            het smikkelen waren van hun boterhammen, vroeg de kip aan de
            pinguïn: &quot;Waarom ben jij altijd zo somber, beste vriend?&quot;
            De pinguïn antwoordde: &quot;Omdat ik altijd op mijn billen val,
            zelfs als ik probeer om op mijn voeten te lopen.&quot; Waarop de kip
            lachte en zei: &quot;Nou, volgens mij moet je gewoon op je humor
            vallen in plaats van op je billen!&quot; En zo begonnen ze allemaal
            te lachen en te genieten van de rest van hun picknick met een gevoel
            van vrolijkheid en vriendschap.&quot;
          </span>
          <br></br>
          <br></br>
          <span>
            &quot;Er was eens een komische kip die altijd bekend stond om haar
            gevatte grapjes. Op een dag besloot ze om een picknick te
            organiseren voor al haar vrienden in de dierentuin. Terwijl ze aan
            het smikkelen waren van hun boterhammen, vroeg de kip aan de
            pinguïn: &quot;Waarom ben jij altijd zo somber, beste vriend?&quot;
            De pinguïn antwoordde: &quot;Omdat ik altijd op mijn billen val,
            zelfs als ik probeer om op mijn voeten te lopen.&quot; Waarop de kip
            lachte en zei: &quot;Nou, volgens mij moet je gewoon op je humor
            vallen in plaats van op je billen!&quot; En zo begonnen ze allemaal
            te lachen en te genieten van de rest van hun picknick met een gevoel
            van vrolijkheid en vriendschap.&quot;
          </span>
          <br></br>
          <br></br>
          <span>
            &quot;Er was eens een komische kip die altijd bekend stond om haar
            gevatte grapjes. Op een dag besloot ze om een picknick te
            organiseren voor al haar vrienden in de dierentuin. Terwijl ze aan
            het smikkelen waren van hun boterhammen, vroeg de kip aan de
            pinguïn: &quot;Waarom ben jij altijd zo somber, beste vriend?&quot;
            De pinguïn antwoordde: &quot;Omdat ik altijd op mijn billen val,
            zelfs als ik probeer om op mijn voeten te lopen.&quot; Waarop de kip
            lachte en zei: &quot;Nou, volgens mij moet je gewoon op je humor
            vallen in plaats van op je billen!&quot; En zo begonnen ze allemaal
            te lachen en te genieten van de rest van hun picknick met een gevoel
            van vrolijkheid en vriendschap.&quot;
          </span>
          <br></br>
        </span>
      </div>
      <div className="blog-leeg-horizontale-foto-andere-blogs">
        <h2 className="blog-leeg-horizontale-foto-lees-ook">
          <span>Lees ook:</span>
          <br></br>
        </h2>
        <div className="blog-leeg-horizontale-foto-laatste-3-blogposts">
          <Link to="/vader" className="blog-leeg-horizontale-foto-navlink">
            <BlogCardHome
              datum="23-02-2023"
              title="Albert Gerrits 7 april 1921 - 23 februari 2013"
              image_src="./playground_assets/albert%20gerrits%204-1500w.jpg"
              description="Precies tien jaar geleden overleed mijn vader in de leeftijd van 91 jaar. Dat is een mooie leeftijd als je bedenkt dat hij bijna tachtig jaar eerder op het nippertje de Tweede Wereldoorlog heeft overleefd. "
              rootClassName="rootClassName44"
              className="blog-leeg-horizontale-foto-component1"
            ></BlogCardHome>
          </Link>
          <Link
            to="/onderzoek-rad"
            className="blog-leeg-horizontale-foto-navlink1"
          >
            <BlogCardHome
              datum="17-12-2022"
              title="Op onderzoek in Duitsland"
              image_src="./playground_assets/onderzoek%20in%20duitsland-1500w.webp"
              description="Wat heeft de kerstmarkt in Bremen met mijn onderzoek te maken?  Nou, helemaal niets dus. We waren voor een familiefeestje in Bremen en hebben daarna de kerstmarkt bezocht. Want de kerstmarkt in  ..."
              rootClassName="rootClassName45"
              className="blog-leeg-horizontale-foto-component2"
            ></BlogCardHome>
          </Link>
          <Link to="/proeverij" className="blog-leeg-horizontale-foto-navlink2">
            <BlogCardHome
              datum="2-12-2022"
              title="Een bijzondere proeverij"
              image_src="./playground_assets/smeerstations-1500w.jpg"
              description="Kamp Amersfoort organiseert een proeverij. Terwijl we erheen rijden denk ik aan mijn vader die er een week of zes gevangen heeft gezeten in de Tweede Wereldoorlog. Wat kreeg hij toen te eten?"
              rootClassName="rootClassName46"
              className="blog-leeg-horizontale-foto-component3"
            ></BlogCardHome>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name1"></Footer>
    </div>
  )
}

export default BlogLeegHorizontaleFoto
