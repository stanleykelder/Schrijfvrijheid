import React from 'react'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import ButtonOutline from '../components/button-outline'
import Footer from '../components/footer'
import './over-mij.css'

const OverMij = (props) => {
  return (
    <div className="over-mij-container">
      <Helmet>
        <title>Over-mij - Schrijf je vrij</title>
        <meta property="og:title" content="Over-mij - Schrijf je vrij" />
      </Helmet>
      <div className="over-mij-top">
        <NavbarInteractive rootClassName="navbar-interactive-root-class-name1"></NavbarInteractive>
        <div className="over-mij-container1">
          <h1>Over mij</h1>
          <span>Schrijversacademie en daarna</span>
        </div>
      </div>
      <div className="over-mij-container2">
        <img
          alt="image"
          src="./playground_assets/mask%20group-300w.png"
          className="over-mij-image"
        />
        <div className="over-mij-container3">
          <h2 className="over-mij-text02">
            <span>Welkom op de site!</span>
            <br></br>
          </h2>
          <span>
            Ik ben Marjan Gerrits, in 1963 geboren in Zeist en via vele
            omzwervingen in het mooie Bakkum terecht gekomen.  In mijn tuin heb
            ik een schuurtje uit 1910 omgetoverd tot een inspirerend
            schrijfhuisje. Hier werk ik aan mijn roman en aan andere vormen van
            woordkunst.
          </span>
        </div>
      </div>
      <div className="over-mij-container4">
        <h3>Schrijversacademie en daarna</h3>
        <span className="over-mij-text07">
          <span>
            Na de basisopleiding van de Schrijversacademie heb ik met veel
            plezier de specialisatie Familieverhalen en biografieën gevolgd. Op
            7 september 2019 heb ik mijn getuigschrift ontvangen inclusief zeer
            positieve feedback op mijn eindopdracht.  Daar was ik natuurlijk
            heel blij mee maar het echte werk begon toen pas. En wat een proces
            is dat.
          </span>
          <br></br>
          <br></br>
          <span>
            Het schrijven van een boek gebaseerd op de gebeurtenissen van mijn
            vader en schoonvader in de Tweede Wereldoorlog heeft mijn leven
            behoorlijk veranderd. Archiefonderzoek, het bezoeken van alle
            plekken die in het boek voorkomen, deskundigen interviewen, vertalen
            van honderden brieven vanuit het Sütterlin naar het Duits van nu.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
        </span>
      </div>
      <div className="over-mij-container5">
        <img
          alt="image"
          src="./playground_assets/img-20200803-wa0007%20%5B4%5D-800w.jpg"
          className="over-mij-image1"
        />
        <span className="over-mij-text13">
          <span>
            Het schuurtje uit 1910, omgetoverd tot inspirerend schrijfhuisje.
          </span>
          <br></br>
        </span>
      </div>
      <div className="over-mij-container6">
        <h4>
          {' '}
          Spitten, graven om net dat kleine beetje extra informatie boven tafel
          te krijgen.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h4>
        <span className="over-mij-text17">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            {' '}
            En het dan ook nog eens prettig leesbaar opschrijven. Het is een
            hele toer maar ik zou het niet willen missen. De vreugde als je weer
            een stukje van de puzzel gevonden hebt, het plezier als je het
            juiste woord op de juiste plek hebt gezet of nieuwe informatie met
            mijn partner kan delen over haar vader.
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            Natuurlijk zijn er ook tegenslagen. Soms lukt het niet de juiste
            informatie te vinden, ondanks uren onderzoek. Of de tekst loopt niet
            lekker en je kunt er de vinger niet op  leggen. En niet in de
            laatste plaats de onzekerheid die je hebt als beginnend schrijver.
            Ik in ieder geval. Kan ik dit wel? Wie zit er op dit boek te
            wachten?
          </span>
          <br></br>
        </span>
        <h4>
          {' '}
          Dan raap ik mijzelf bij elkaar en bedenk waarom ik dit boek zo graag
          wil schrijven.
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </h4>
        <span className="over-mij-text26">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span>
            Er zijn veel oorlogsboeken geschreven, maar hoeveel gaan over de
            gewone jongemannen die in die tijd opgroeiden? De jongemannen die
            probeerden zo goed mogelijk door de oorlog te komen, geen bijzondere
            helden. En toch worden ze in de oorlog meegesleurd. 
          </span>
          <span>
            En hoeveel boeken beschrijven zowel het leven van een Nederlander
            als een Duitser in oorlogstijd? Naar mijn mening veel te weinig.
          </span>
          <br></br>
          <br></br>
          <span className="over-mij-text32">
            En dan weet ik weer waarom ik dit doe. 
          </span>
          <br></br>
          <br></br>
          <span>
            Het is soms zware kost en als tegenhanger maak ik graag
            &apos;woordkunst&apos;, soms om woorden aan mijn emoties te geven,
            meestal luchtige vrolijke teksten in de vorm van gedichten en
            haiku&apos;s. Spelen met tekst geeft mijn hoofd vrijheid. In een een
            later stadium komen deze ook op de site. 
          </span>
          <br></br>
          <br></br>
          <span className="Dikgedrukt_tekst">
            Wil je reageren of heb je een vraag? Feedback wordt altijd op prijs
            gesteld!
          </span>
          <br></br>
        </span>
        <a
          href="mailto:marjangerrits@gmail.com?subject="
          className="over-mij-link"
        >
          <ButtonOutline
            text="Stuur een mailtje"
            image_alt="Neem contact op"
            rootClassName="button-outline-root-class-name5"
            className="over-mij-component1"
          ></ButtonOutline>
        </a>
      </div>
      <Footer rootClassName="footer-root-class-name9"></Footer>
    </div>
  )
}

export default OverMij
