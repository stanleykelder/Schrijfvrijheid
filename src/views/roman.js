import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import ButtonOutline from '../components/button-outline'
import Separator from '../components/separator'
import Footer from '../components/footer'
import './roman.css'

const Roman = (props) => {
  return (
    <div className="roman-container">
      <Helmet>
        <title>Roman - Schrijf je vrij</title>
        <meta property="og:title" content="Roman - Schrijf je vrij" />
      </Helmet>
      <div className="roman-top">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name2"></NavbarInteractive>
        <div className="roman-container1">
          <h1>Papa en Vati</h1>
          <span>Werktitel</span>
        </div>
      </div>
      <div className="roman-container2">
        <span>
          <span>
            Zoveel boeken zijn er niet die de Tweede Wereldoorlog van twee
            kanten beschrijven. Ik vind dat best jammer en daarom heb ik
            besloten de gebeurtenissen van mijn vader én van mijn schoonvader op
            papier te zetten. Van mjn
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="Schuingedrukt_tekst">
            Nederlandse
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            vader en
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="Schuingedrukt_tekst">Duitse</span>
          <span>
            {' '}
            schoonvader welteverstaan. Wat hebben zij veel meegemaakt. Mijn
            vader is opgepakt en naar verschillende kampen gebracht. Mijn
            schoonvader groeide op in het nationaalsocialistische tijdperk, van
            Hitlerjugend tot Wehrmachtsoldaat. Twee indrukwekkende, persoonlijke
            en waargebeurde verhalen. Ben je geïnteresseerd in verhalen over de
            Tweede Wereldoorlog? Dan is dit boek zeker iets voor jou. Wil je op
            de hoogte gesteld worden als het boek uitkomt? Meld je dan aan via
            onderstaande knop. 
          </span>
        </span>
        <div className="roman-container3">
          <a
            href="mailto:marjangerrits@gmail.com?subject=Ik blijf graag op de hoogte"
            className="roman-link"
          >
            <ButtonOutline
              text="Meld je aan"
              rootClassName="button-outline-root-class-name3"
              className="roman-component1"
            ></ButtonOutline>
          </a>
        </div>
      </div>
      <Separator rootClassName="separator-root-class-name"></Separator>
      <h1 className="roman-text08">Deel 1 - Papa</h1>
      <div className="roman-container4">
        <div className="roman-container5">
          <img
            alt="image"
            src="./playground_assets/bw%20met%20foto%202-200w.jpg"
            className="roman-image"
          />
          <span className="roman-text09">Albert Gerrits</span>
        </div>
        <span className="roman-text10">
          Mijn vader, Albert Gerrits, moest zich in 1943 aanmelden voor de
          zogenaamde Arbeitseinsatz, oftewel hij moest gaan werken in Duitsland.
          Hij wilde niet voor &apos;de moffen&apos; werken en dook een poosje
          onder bij familie in de Achterhoek. Toen ook daar de razzia&apos;s
          toenamen besloot hij terug naar zijn ouderlijk huis in Zeist te gaan.
          Het ging een tijd goed, echter in maart 1944 is hij verraden en
          opgepakt. Via het Polizeiliches Durchgangslager Amersfoort, beter
          bekend als Kamp Amersfoort, is hij met de trein naar het
          concentratiekamp Buchenwald bij Weimar getransporteerd. Na een
          halfjaar Buchenwald werd hij zogenaamd vrijgelaten, hij was geen
          &apos;politieke&apos; gevangene meer. Met nog vijfenzeventig
          Nederlanders werd hij op de trein gezet om elders in Duitsland
          tewerkgesteld te worden. Het bleek een leugen. De meesten kwamen in
          een buitenkamp van Buchenwald terecht, Langenstein-Zwieberge. Mijn
          vader heeft het overleefd, anders zou ik dit niet kunnen schrijven.
          Benieuwd hoe? Nog even geduld, ik ben het tweede deel van het boek aan
          het schrijven, zie hieronder.
        </span>
      </div>
      <Separator rootClassName="separator-root-class-name1"></Separator>
      <h1 className="roman-text11">Deel 2 -Vati</h1>
      <div className="roman-container6">
        <span className="roman-text12">
          Mijn schoonvader, Albert Woltjes, woonde in Bremen in een bakkerij.
          Als jongetje van tien werd hij lid van het Jungvolk, de Hitlerjugend
          voor jongeren van tien tot veertien jaar. Al zijn vrienden en
          klasgenootjes gingen erbij. Het leven werd toen pas echt leuk. Geleid
          worden door de jeugd, veel sport en spel, op kamp gaan. Op zijn
          veertiende ging hij, net als iedereen, over naar de Hitlerjugend. Toen
          hij klaar was met school besloot hij dat hij ook bakker wilde worden
          en werd bakkersleerling. De oorlog brak uit, hij leerde omgaan met een
          gasmasker en helpen bij het blussen van branden. Zijn broer ging bij
          de marine, zijn zusje werd naar het platteland gestuurd. Toen hij
          zeventien was moest hij naar de zogenaamde Reichsarbeitsdienst. Goed
          doen voor volk en vaderland. De oorlog duurde langer dan de Duitsers
          verwacht hadden en ook Albert werd naar het front gestuurd. Als
          Wehrmacht-soldaat diende hij in Frankrijk. Zoals we weten hebben de
          Duitsers het onderspit gedolven. Wat er met Albert gebeurde? Ik ben
          druk aan het schrijven ....
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <div className="roman-container7">
          <img
            alt="image"
            src="./playground_assets/vati-200w.webp"
            className="roman-image1"
          />
          <span className="roman-text13">Albert Woltjes</span>
        </div>
      </div>
      <Separator rootClassName="separator-root-class-name2"></Separator>
      <div className="roman-container8">
        <span className="roman-text14">
          <span className="roman-text15">
            roman in wording - verhalende non-fictie - twee kanten van een
            oorlog - ieder het zijne - waargebeurd - what&apos;s in a name
          </span>
          <br></br>
        </span>
        <Separator rootClassName="separator-root-class-name3"></Separator>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>
    </div>
  )
}

export default Roman
