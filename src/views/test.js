import React from 'react'

import { Helmet } from 'react-helmet'

import './test.css'

const Test = (props) => {
  return (
    <div className="test-container">
      <Helmet>
        <title>Test - Schrijf je vrij</title>
        <meta property="og:title" content="Test - Schrijf je vrij" />
      </Helmet>
      <div className="test-testimonial">
        <div className="test-container1">
          <div className="test-container2">
            <div className="test-container3"></div>
          </div>
          <div className="test-container4"></div>
        </div>
      </div>
      <span>
        <span>
          &quot;Er was eens een komische
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="test-text1">kip</span>
        <span>
          {' '}
          die altijd
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span className="test-text3">bekend</span>
        <span>
          {' '}
          stond om haar gevatte grapjes. Op een dag besloot ze om een picknick
          te organiseren voor al haar vrienden in de dierentuin. Terwijl ze aan
          het smikkelen waren van hun boterhammen, vroeg de kip aan de pinguïn:
          &quot;Waarom ben jij altijd zo somber, beste vriend?&quot; De pinguïn
          antwoordde: &quot;Omdat ik altijd op mijn billen val, zelfs als ik
          probeer om op mijn voeten te lopen.&quot; Waarop de kip lachte en zei:
          &quot;Nou, volgens mij moet je gewoon op je humor vallen in plaats van
          op je billen!&quot; En zo begonnen ze allemaal te lachen en te
          genieten van de rest van hun picknick met een gevoel van vrolijkheid
          en vriendschap.&quot;
        </span>
      </span>
    </div>
  )
}

export default Test
