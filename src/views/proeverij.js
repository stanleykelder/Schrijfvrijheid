import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import BlogCardHome from '../components/blog-card-home'
import Footer from '../components/footer'
import './proeverij.css'

const Proeverij = (props) => {
  return (
    <div className="proeverij-container">
      <Helmet>
        <title>Proeverij - Schrijf je vrij</title>
        <meta property="og:title" content="Proeverij - Schrijf je vrij" />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name7"></NavbarInteractive>
      <div className="proeverij-blogtitel-en-datum">
        <div className="proeverij-container1">
          <h1 className="proeverij-titel BlogTitel">
            Een bijzondere proeverij
          </h1>
        </div>
      </div>
      <div className="proeverij-container2">
        <p className="proeverij-datum">
          <span>02-12-2022</span>
          <br></br>
        </p>
        <img
          alt="image"
          src="./playground_assets/smeerstations-1500h.jpg"
          className="proeverij-foto"
        />
        <span className="proeverij-tekst">
          <span>
            Kamp Amersfoort organiseert een proeverij. Terwijl we erheen rijden
            denk ik aan mijn vader die er een week of zes gevangen heeft gezeten
            in de Tweede Wereldoorlog. Wat kreeg hij toen te eten? Had hij daar
            ook al honger? Ik weet dat zijn brood gestolen werd toen hij voor
            het eten zijn ogen sloot voor het gebed. En dat mijn moeder een keer
            soep is komen brengen op het veld waar hij aardappels moest rooien.
            En nu hebben wij vanavond een proeverij, zou hij meekijken vanaf
            boven?
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Wij weten niet zo goed wat we kunnen verwachten en genieten thuis
            nog van een heerlijk maal. Veel zal het vast niet zijn. Als we
            aankomen worden we ontvangen met koffie en thee. Gewone koffie en
            thee. Verderop zie ik onder een stolp gebakjes staan. Die horen vast
            niet bij de proeverij.
          </span>
          <br></br>
          <br></br>
          <span>
            De proeverij wordt voorafgegaan door twee lezingen. De eerste wordt
            gehouden door kookdocente Willemien Schipper. Zij vertelt over het
            leven vlak voor en in het begin van de oorlog. Interessant te horen
            over de overheidsactie ‘Scheurt Grasland’. Het land moest
            zelfvoorzienend worden, dat hadden ze wel geleerd van de Eerste
            Wereldoorlog. Veeteelt diende plaats te maken voor akkerbouw en de
            bevolking moest leren minder vlees te eten en meer groente. De
            huisvrouw van toen werd uitgedaagd nieuwe recepten te bedenken. Ik
            denk weer aan mijn vader die in ons gezin altijd het grootste stuk
            vlees kreeg. In 1939 was hij achttien. Wat zou hij hiervan gevonden
            hebben? Of hield hij er zich überhaupt niet mee bezig? Moeder de
            vrouw was immers degene die voor het eten op tafel zorgde.Na de
            boeiende lezing krijgen we een voorproefje, een stuk crisiscake
            gemaakt met thee in plaats van meel. Het smaakt goed. Die
            kookdocente kan er wel wat van.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            De tweede lezing wordt verzorgd door een medewerker van de
            onderzoeksafdeling van Kamp Amersfoort, Hans geloof ik, zijn
            achternaam ben ik vergeten. Hij vertelt over het eten dat de
            gevangenen in het kamp kregen. Vooral de eerste periode, toen mijn
            vader nog niet in het kamp zat, hadden de gevangenen erg weinig te
            eten. Veel meer dan wat koolsoep en een stukje brood van zeven
            centimeter was het niet. Ander voedsel werd wel bezorgd, maar de
            Duitsers verorberden het zelf of zonden het naar huis. Na de
            uitbreiding van het kamp in mei 1943, de tweede periode, werden de
            omstandigheden beter. Dankzij inspanningen van o.a. de dames Van
            Overeem en Van Reede, lukte het de voedselvoorziening te verbeteren.
            Er ontstonden smeerstations waar vrijwilligers stapels boterhammen
            voor de gevangenen klaarmaakten. Wat zullen ze daar blij mee zijn
            geweest. Wat zal mijn vader daar blij mee zijn geweest.
          </span>
          <br></br>
          <br></br>
          <span>
            Na deze interessante tweede lezing is het zover. We mogen van
            allerlei ‘oorlogsvoedsel’ proeven. De bloembollensoep smaakt zoetig.
            Wat je al niet met bloembollen kan doen, weer eens anders dan in de
            grond stoppen. Het waren wel speciale bio-bollen geschikt om te
            eten. Die hadden ze vroeger natuurlijk niet. Ook de andere producten
            zijn interessant. Op een crackertje smeren we diverse soorten
            broodbeleg, zoals een pasta van tamme kastanjes, eentje gemaakt met
            het loof van radijsjes en een pasta van… ja, alweer bloembollen. We
            eten ook krachtrondjes gemaakt van havermout. Dat alles vergezeld
            van koffie van cichorei of thee van bramenblad of lindebloesem. Het
            klinkt misschien raar, maar we hebben lekker gegeten. Bewust
            gegeten. Nagedacht over die tijd. Nagedacht over hoe goed we het nu
            hebben. En mijn vader herdacht.
          </span>
          <br></br>
          <br></br>
          <span>
            Al met al een interessante, inspirerende en smaakvolle avond. Dank
            je wel Kamp Amersfoort.
          </span>
        </span>
      </div>
      <div className="proeverij-andere-blogs">
        <h2 className="proeverij-lees-ook">
          <span>Lees ook:</span>
          <br></br>
        </h2>
        <div className="proeverij-laatste-3-blogposts">
          <Link to="/vader" className="proeverij-navlink">
            <BlogCardHome
              datum="23-02-2023"
              title="Albert Gerrits 7 april 1921 - 23 februari 2013"
              image_src="./playground_assets/albert%20gerrits%204-1500w.jpg"
              description="Precies tien jaar geleden overleed mijn vader in de leeftijd van 91 jaar. Dat is een mooie leeftijd als je bedenkt dat hij bijna tachtig jaar eerder op het nippertje de Tweede Wereldoorlog heeft overleefd. "
              rootClassName="rootClassName53"
              className="proeverij-component1"
            ></BlogCardHome>
          </Link>
          <Link to="/onderzoek-rad" className="proeverij-navlink1">
            <BlogCardHome
              datum="17-12-2022"
              title="Op onderzoek in Duitsland"
              image_src="./playground_assets/onderzoek%20in%20duitsland-1500w.webp"
              description="Wat heeft de kerstmarkt in Bremen met mijn onderzoek te maken?  Nou, helemaal niets dus. We waren voor een familiefeestje in Bremen en hebben daarna de kerstmarkt bezocht. Want de kerstmarkt in  ..."
              rootClassName="rootClassName54"
              className="proeverij-component2"
            ></BlogCardHome>
          </Link>
          <Link to="/moeder" className="proeverij-navlink2">
            <BlogCardHome
              datum="30-10-2022"
              title="Moeder"
              image_src="./playground_assets/moeder%20copy-1500w.jpg"
              description="Ze denken dat ik gek ben, maar dat is niet zo. Elke avond komen ze. Ik zie ze toch. Vanuit mijn bed kan ik net door de halfopen slaapkamerdeur naar de woonkamer kijken. Precies daar staat de grote leunstoel. "
              rootClassName="rootClassName62"
              className="proeverij-component3"
            ></BlogCardHome>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name4"></Footer>
    </div>
  )
}

export default Proeverij
