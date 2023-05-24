import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavbarInteractive from '../components/navbar-interactive'
import BlogCardHome from '../components/blog-card-home'
import Footer from '../components/footer'
import './heilige-wandelingen.css'

const HeiligeWandelingen = (props) => {
  return (
    <div className="heilige-wandelingen-container">
      <Helmet>
        <title>Heilige-wandelingen - Schrijf je vrij</title>
        <meta
          property="og:title"
          content="Heilige-wandelingen - Schrijf je vrij"
        />
      </Helmet>
      <NavbarInteractive rootClassName="navbar-interactive-root-class-name6"></NavbarInteractive>
      <div className="heilige-wandelingen-blogtitel-en-datum">
        <div className="heilige-wandelingen-container1">
          <h1 className="heilige-wandelingen-titel BlogTitel">
            Heilige wandelingen
          </h1>
        </div>
      </div>
      <div className="heilige-wandelingen-container2">
        <p className="heilige-wandelingen-datum">
          <span>30-09-2022</span>
          <br></br>
        </p>
        <img
          alt="image"
          src="./playground_assets/boom-1500w.webp"
          className="heilige-wandelingen-foto"
        />
        <span className="heilige-wandelingen-tekst">
          <span>
            Nieuwe rugzak, oude wandelschoenen, autolampen bestickerd. Met de
            ferry gaan we naar Engeland. Links houden, links houden, luidt de
            nieuwe mantra in mijn hoofd. Een knusse cottage in Salisbury omarmt
            ons onmiddellijk als we binnen komen. Het beddengoed ruikt naar de
            kunstmatige unstoppables die ik thuis boycot. Hier mag het, alles
            beter dan de zweetgeur van de vorige vakantieganger.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <br></br>
          <span>
            Vanuit het postzegeltuintje zien we de punt van een wereldberoemde
            kathedraal. De eerste ochtend ben ik als eerste op en ga naar
            buiten. Langs een drukke weg loop ik naar een poortje. Zodra ik daar
            onderdoor ben, valt een serene rust over mij. Alsof de wereld hier
            anders is, goed is. Ik loop door wat ze ‘The Close’ noemen en als ik
            op een kruising aankom, staat mijn hart stil. De kathedraal staat in
            al haar pracht voor mij. Ik heb veel kerken gezien maar nog nooit is
            mij zo de adem benomen. Ik ga op een bankje zitten. Links staat een
            gedeelte in de steigers, niets is volmaakt. De kathedraal straalt
            een en al liefde uit.
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
            De volgende dag gaan we naar Woodhenge om vanaf daar naar Stonehenge
            te lopen. We volgen een smal pad en hopen dat het het juiste is. Na
            een halfuur komen we bij een hek dat het boerenland op gaat. Heel in
            de verte zien we Stonehenge liggen. We twijfelen, moeten we echt
            dwars hier doorheen lopen? Geen boze boer of snuivende stier die ons
            de weg belemmert? Aangezien het de kortste weg naar Stonehenge
            lijkt, trekken we de stoute schoenen aan. Het gebied is licht
            heuvelig waardoor Stonehenge korte tijd uit het zicht verdwijnt.
            Maar dan, terwijl we weer omhoog lopen, rijzen de oeroude kanjers
            van stenen langzaam op in het landschap. Majestueus, adembenemend,
            alweer.
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
            Na een kleine aanvaring omdat ik me niet gehoord voelde rijden we
            naar de stenencirkel in Avebury. We gaan zitten en verorberen onze
            meegebrachte lunch op het gras, dicht bij een rij stenen. Rust daalt
            over me neer. We wandelen langs de enorme stenencirkel die het dorp
            omringt. Dan komen we bij een heuvel met vier enorme beuken met
            wortels die als verstrengelde vingers de heuvel vasthouden.
            Levensbomen, schiet door mij heen. De takken zijn versierd met
            linten, wensen, veren. In de verte hoor ik iemand fluit spelen.
            Muziektonen die net zo heilig klinken als ik me voel. Ik zoek in de
            omgeving veertjes en takjes bij elkaar en maak er een mooi pakketje
            van. Op blote voeten klauter ik terug over de wortels en zoek een
            plekje voor mijn kleine offer. Enorme liefde vult mijn hart. En
            plotseling weet ik het: de oude pijn van het niet gehoord worden mag
            ik hier loslaten.
          </span>
        </span>
      </div>
      <div className="heilige-wandelingen-andere-blogs">
        <h2 className="heilige-wandelingen-lees-ook">
          <span>Lees ook:</span>
          <br></br>
        </h2>
        <div className="heilige-wandelingen-laatste-3-blogposts">
          <div className="heilige-wandelingen-container3">
            <Link to="/vader" className="heilige-wandelingen-navlink">
              <BlogCardHome
                datum="23-02-2023"
                title="Albert Gerrits 7 april 1921 - 23 februari 2013"
                image_src="./playground_assets/albert%20gerrits%204-1500w.jpg"
                description="Precies tien jaar geleden overleed mijn vader in de leeftijd van 91 jaar. Dat is een mooie leeftijd als je bedenkt dat hij bijna tachtig jaar eerder op het nippertje de Tweede Wereldoorlog heeft overleefd. "
                rootClassName="rootClassName35"
                className="heilige-wandelingen-component1"
              ></BlogCardHome>
            </Link>
          </div>
          <div className="heilige-wandelingen-container4">
            <Link to="/onderzoek-rad" className="heilige-wandelingen-navlink1">
              <BlogCardHome
                datum="17-12-2022"
                title="Op onderzoek in Duitsland"
                image_src="./playground_assets/onderzoek%20in%20duitsland-1500w.webp"
                description="Wat heeft de kerstmarkt in Bremen met mijn onderzoek te maken?  Nou, helemaal niets dus. We waren voor een familiefeestje in Bremen en hebben daarna de kerstmarkt bezocht. Want de kerstmarkt in  ..."
                rootClassName="rootClassName36"
                className="heilige-wandelingen-component2"
              ></BlogCardHome>
            </Link>
          </div>
          <div className="heilige-wandelingen-container5">
            <Link to="/proeverij" className="heilige-wandelingen-navlink2">
              <BlogCardHome
                datum="2-12-2022"
                title="Een bijzondere proeverij"
                image_src="./playground_assets/smeerstations-1500w.jpg"
                description="Kamp Amersfoort organiseert een proeverij. Terwijl we erheen rijden denk ik aan mijn vader die er een week of zes gevangen heeft gezeten in de Tweede Wereldoorlog. Wat kreeg hij toen te eten?"
                rootClassName="rootClassName37"
                className="heilige-wandelingen-component3"
              ></BlogCardHome>
            </Link>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name6"></Footer>
    </div>
  )
}

export default HeiligeWandelingen
