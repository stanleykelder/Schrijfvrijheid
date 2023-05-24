import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import BlogCardHome from '../components/blog-card-home'
import Footer from '../components/footer'
import './vader.css'

const Vader = (props) => {
  return (
    <div className="vader-container">
      <Helmet>
        <title>Vader - Schrijf je vrij</title>
        <meta property="og:title" content="Vader - Schrijf je vrij" />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name10"></NavbarInteractive>
      <div className="vader-container1">
        <div className="vader-container2">
          <img
            alt="image"
            src="./playground_assets/albert%20gerrits%204-1500w.jpg"
            className="vader-foto"
          />
          <div className="vader-container3">
            <span className="vader-titel">
              <span className="vader-text">Albert Gerrits</span>
              <br className="vader-text01"></br>
              <span className="Schuingedrukt_tekst">
                7 april 1921 - 23 februari 2013
              </span>
              <br className="vader-text03"></br>
            </span>
            <p className="vader-datum">
              <span>23-02-2023</span>
              <br></br>
            </p>
            <p className="vader-text06">
              <span>
                Mijn vader in zijn jonge jaren. Deze foto is ook opgenomen op de
                grote fotowand in Kamp Amersfoort waar honderden foto’s van
                voormalige gevangenen zijn geplaatst. Hij staat er lachend op,
                duidelijk dat de foto niet is genomen tijdens zijn
                gevangenschap, daar heb ik geen foto van. Dit was alweer enkele
                jaren na de oorlog. Toen hij de oorlogsjaren verdrongen had,
                toen het leven weer goed was.
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
            </p>
          </div>
        </div>
        <p className="vader-text10">
          <span>
            Precies tien jaar geleden overleed mijn vader in de leeftijd van 91
            jaar. Dat is een mooie leeftijd als je bedenkt dat hij bijna tachtig
            jaar eerder op het nippertje de Tweede Wereldoorlog heeft overleefd.
            Hij is nu niet meer in ons midden, toch leer ik hem nog elke dag een
            beetje beter kennen. Nee, ik heb geen paranormale gaven. Ik schrijf
            een boek over zijn oorlogsjaren en daarvoor kruip ik in zijn huid.
          </span>
          <br></br>
          <span>
            Ik ben zo blij dat ik tien jaar voor zijn overlijden, op zijn
            tachtigste, met hem naar de concentratiekampen ben geweest waar hij
            vast heeft gezeten. Heel bijzonder dat hij vanaf dat moment steeds
            meer kon vertellen over wat er toen gebeurd is. Sommige dingen
            vergeet een mens nou eenmaal nooit meer. Zoals bijvoorbeeld zijn
            arrestatie.
          </span>
          <br></br>
          <br></br>
          <span className="Schuingedrukt_tekst">
            Ze komen voor mij! Ab grist zijn jasje van de rugleuning en rent
            door de keuken naar de achterdeur. Vlug, vlug. Door de achtertuinen
            naar de Schaerweijdelaan, net als Gerard. Hij rukt de deur open en
            als hij de loop van een geweer op zich gericht ziet, blijft hij
            stokstijf staan. Hij voelt het bloed uit zijn gezicht wegtrekken.
            Zou hij mij echt neerschieten? Hij waagt het er maar niet op. De
            agent stuurt hem terug de kamer in. Daar ziet hij zijn moeder aan de
            arm van een andere agent trekken.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="Schuingedrukt_tekst"></br>
          <span className="Schuingedrukt_tekst">
            {' '}
            ‘Mijn zoon is zwak, hij heeft bronchitis, hij kan niet in Duitsland
            werken.’
          </span>
          <br className="Schuingedrukt_tekst"></br>
          <span className="Schuingedrukt_tekst">
            {' '}
            Ab hoort iemand de trap aflopen. Een NSB’er komt binnen en doet
            verslag aan de Gestapo-agent.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="Schuingedrukt_tekst"></br>
          <span className="Schuingedrukt_tekst">
            Heeft hij mijn kamer doorzocht? Hoe wist hij wat mijn kamer was?
            Heeft iemand mij verraden?
          </span>
          <br className="Schuingedrukt_tekst"></br>
          <span className="Schuingedrukt_tekst">
            Een derde agent staat bij de tafel waar hij een vel papier op heeft
            gelegd. Ab gaat er naast staan en werpt er zo onopvallend mogelijk
            een blik op. Het is een lijst met namen. Wat? Zijn naam staat
            bovenaan! Zijn ogen snellen verder. Ook Evert en Herman, die hij
            zondags altijd bij de kerk ontmoet, staan op de lijst.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="Schuingedrukt_tekst"></br>
          <span className="Schuingedrukt_tekst">
            {' '}
            ‘Au.’ De klap tegen zijn wang komt hard aan. De agent kijkt hem
            woedend aan. ‘Dat is niet voor jouw ogen bestemd’.
          </span>
          <br></br>
          <br></br>
          <span>
            Ik hoop dat ook de komende generaties beseffen hoe erg oorlog is,
            dat er nooit, echt nooit, winnaars zijn. Daarom schrijf ik de
            verhalen van mijn vader op, én de verhalen van mijn schoonvader die
            aan de andere kant stond. Zelf kunnen ze het niet meer vertellen.
          </span>
          <br></br>
          <br></br>
          <span>
            Geweldige vaders met een ellendig verleden. Zij hebben het
            overleefd, veerkracht getoond. Zij hebben mij en mijn partner op de
            wereld gezet. Alleen al daarvoor ben ik hun dankbaar.
          </span>
          <br></br>
        </p>
      </div>
      <div className="vader-andere-blogs">
        <h2 className="vader-lees-ook">
          <span>Lees ook:</span>
          <br></br>
        </h2>
        <div className="vader-laatste-3-blogposts">
          <Link to="/onderzoek-rad" className="vader-navlink">
            <BlogCardHome
              datum="17-12-2022"
              title="Op onderzoek in Duitsland"
              image_src="./playground_assets/onderzoek%20in%20duitsland-1500w.webp"
              description="Wat heeft de kerstmarkt in Bremen met mijn onderzoek te maken?  Nou, helemaal niets dus. We waren voor een familiefeestje in Bremen en hebben daarna de kerstmarkt bezocht. Want de kerstmarkt in  ..."
              rootClassName="rootClassName59"
              className="vader-component1"
            ></BlogCardHome>
          </Link>
          <Link to="/heilige-wandelingen" className="vader-navlink1">
            <BlogCardHome
              datum="30-09-2022"
              title="Heilige Wandelingen"
              image_src="./playground_assets/boom-1500w.webp"
              description="Nieuwe rugzak, oude wandelschoenen, autolampen bestickerd. Met de ferry gaan we naar Engeland. Links houden, links houden, luidt de nieuwe mantra in mijn hoofd. Een knusse cottage in Salisbury omarmt ons ..."
              rootClassName="rootClassName60"
              className="vader-component2"
            ></BlogCardHome>
          </Link>
          <Link to="/moeder" className="vader-navlink2">
            <BlogCardHome
              datum="30-10-2022"
              title="Moeder"
              image_src="./playground_assets/moeder%20copy-1500w.jpg"
              description="Ze denken dat ik gek ben, maar dat is niet zo. Elke avond komen ze. Ik zie ze toch. Vanuit mijn bed kan ik net door de halfopen slaapkamerdeur naar de woonkamer kijken. Precies daar staat de grote leunstoel. "
              rootClassName="rootClassName61"
              className="vader-component3"
            ></BlogCardHome>
          </Link>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name11"></Footer>
    </div>
  )
}

export default Vader
