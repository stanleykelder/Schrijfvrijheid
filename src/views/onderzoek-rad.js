import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import BlogCardHome from '../components/blog-card-home'
import Footer from '../components/footer'
import './onderzoek-rad.css'

const OnderzoekRAD = (props) => {
  return (
    <div className="onderzoek-rad-container">
      <Helmet>
        <title>Onderzoek-RAD - Schrijf je vrij</title>
        <meta property="og:title" content="Onderzoek-RAD - Schrijf je vrij" />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name8"></NavbarInteractive>
      <div className="onderzoek-rad-blogtitel-en-datum">
        <div className="onderzoek-rad-container1">
          <h1 className="onderzoek-rad-titel BlogTitel">
            Op onderzoek in Duitsland
          </h1>
        </div>
      </div>
      <div className="onderzoek-rad-container2">
        <p className="onderzoek-rad-datum">
          <span>17-12-2022</span>
          <br></br>
        </p>
        <img
          alt="image"
          src="./playground_assets/onderzoek%20in%20duitsland-1500h.webp"
          className="onderzoek-rad-foto"
        />
        <span className="onderzoek-rad-tekst">
          <span>
            Wat heeft de kerstmarkt in Bremen met mijn onderzoek te maken? 
          </span>
          <br></br>
          <span>
            Nou, helemaal niets dus.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            We waren voor een familiefeestje in Bremen en hebben daarna de
            kerstmarkt bezocht. Want de kerstmarkt in Bremen, ja, dat is wel de
            leukste van heel Duitsland. En dat is hij al héél lang, althans
            volgens de brieven die mijn schoonvader naar huis schreef in de
            veertiger jaren van de vorige eeuw.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            En zo zijn we bij mijn schoonvader beland, en bij mijn onderzoek.
            Want vanaf Bremen ben je in anderhalf uur met de trein in Stade
            (ahum, als je de vertraging niet meerekent). En toen vati zeventien
            was, moest hij naar de zogenaamde Reichsarbeitsdienst (RAD) in Assel
            bij Stade. Met een schop over je schouder leren gehoorzamen, met
            schoffel en hark aan het werk, je lichaam trainen. Alle
            arbeidsmannen waren gelijk, geen onderscheid tussen arm en rijk,
            gestudeerd of niet. Allemaal hetzelfde onderkomen, dezelfde
            training, hetzelfde uniform. Leren dat trouw, gehoorzaamheid en
            kameraadschap het belangrijkste zijn in het leven.
          </span>
          <br></br>
          <br></br>
          <span>
            Ik ben benieuwd waar hij precies gelegerd was de eerste twee maanden
            van zijn RAD-tijd. Op internet heb ik twee foto’s gevonden, maar
            geen adres. Ik heb rondgevraagd bij verschillende mogelijke bronnen,
            zonder succes. Ik heb bij twee instanties de vraag uitstaan en wacht
            nog op antwoord. Het is nu een sport geworden. Ik wíl weten waar
            zijn onderkomen was. Ik wil zien hoe ver hij moest fietsen in weer
            en wind naar het station in Stade om wagons uit te laden. Dus nu zit
            ik zelf in Stade, waar de kerstmarkt, na die van Bremen, in het niet
            valt. Het is rustig in mijn appartement. Het uitzicht is
            schitterend, ik zie de zon opkomen en ondergaan door mijn vijf meter
            lange raam. Tussendoor heeft het gesneeuwd waardoor er nu een wit
            laagje over het weggetje ligt. Ik krijg steeds meer een beeld van
            hoe het geweest zal zijn, ook al hoef ik niet uren op appèl te staan
            met de schop over mijn schouder, of in de harde grond te spitten, of
            tegen de wind in te fietsen en te zwoegen op het perron. Het
            schrijft toch lekkerder als je in de omgeving zit waar het verhaal
            zich afspeelt. Maar waar zat hij nu precies?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
      <div className="onderzoek-rad-andere-blogs">
        <h2 className="onderzoek-rad-lees-ook">
          <span>Lees ook:</span>
          <br></br>
        </h2>
        <div className="onderzoek-rad-laatste-3-blogposts">
          <Link to="/vader" className="onderzoek-rad-navlink">
            <BlogCardHome
              datum="23-02-2023"
              title="Albert Gerrits 7 april 1921 - 23 februari 2013"
              image_src="./playground_assets/albert%20gerrits%204-1500w.jpg"
              description="Precies tien jaar geleden overleed mijn vader in de leeftijd van 91 jaar. Dat is een mooie leeftijd als je bedenkt dat hij bijna tachtig jaar eerder op het nippertje de Tweede Wereldoorlog heeft overleefd. "
              rootClassName="rootClassName56"
              className="onderzoek-rad-component1"
            ></BlogCardHome>
          </Link>
          <Link to="/heilige-wandelingen" className="onderzoek-rad-navlink1">
            <BlogCardHome
              datum="30-09-2022"
              title="Heilige Wandelingen"
              image_src="./playground_assets/boom-1500w.webp"
              description="Nieuwe rugzak, oude wandelschoenen, autolampen bestickerd. Met de ferry gaan we naar Engeland. Links houden, links houden, luidt de nieuwe mantra in mijn hoofd. Een knusse cottage in Salisbury omarmt ons ..."
              rootClassName="rootClassName57"
              className="onderzoek-rad-component2"
            ></BlogCardHome>
          </Link>
          <Link to="/moeder" className="onderzoek-rad-navlink2">
            <BlogCardHome
              datum="30-10-2022"
              title="Moeder"
              image_src="./playground_assets/moeder%20copy-1500w.jpg"
              description="Ze denken dat ik gek ben, maar dat is niet zo. Elke avond komen ze. Ik zie ze toch. Vanuit mijn bed kan ik net door de halfopen slaapkamerdeur naar de woonkamer kijken. Precies daar staat de grote leunstoel. "
              rootClassName="rootClassName58"
              className="onderzoek-rad-component3"
            ></BlogCardHome>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default OnderzoekRAD
