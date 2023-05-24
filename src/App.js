import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import './style.css'
import OverMij from './views/over-mij'
import BlogLeegVerticaleFoto from './views/blog-leeg-verticale-foto'
import BlogLeegHorizontaleFoto from './views/blog-leeg-horizontale-foto'
import HeiligeWandelingen from './views/heilige-wandelingen'
import Home from './views/home'
import Vader from './views/vader'
import Vati from './views/vati'
import Woordkunst from './views/woordkunst'
import OnderzoekRAD from './views/onderzoek-rad'
import Moeder from './views/moeder'
import Test from './views/test'
import Roman from './views/roman'
import Proeverij from './views/proeverij'
import Blog from './views/blog'

import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/*" element={<OverMij />} />
        <Route element={<OverMij />} path="/over-mij" />
        <Route
          element={<BlogLeegVerticaleFoto />}
        
          path="/blog-leeg-verticale-foto"
        />
        <Route
          element={<BlogLeegHorizontaleFoto />}
        
          path="/blog-leeg-horizontale-foto"
        />
        <Route
          element={<HeiligeWandelingen />}
        
          path="/heilige-wandelingen"
        />
        <Route element={<Home />} path="/" />
        <Route element={<Vader />} path="/vader" />
        <Route element={<Woordkunst />} path="/woordkunst" />
        <Route element={<OnderzoekRAD />} path="/onderzoek-rad" />
        <Route element={<Moeder />} path="/moeder" />
        <Route element={<Test />} path="/test" />
        <Route element={<Roman />} path="/roman" />
        <Route element={<Proeverij />} path="/proeverij" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<Vati />} path="/vati" />
      </Routes>
    </BrowserRouter>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
  // return (
  //   <Router>
  //     <div>
  //       <Routes>
  //         <Route component={OverMij} exact path="/over-mij" />
  //         <Route
  //           component={BlogLeegVerticaleFoto}
  //           exact
  //           path="/blog-leeg-verticale-foto"
  //         />
  //         <Route
  //           component={BlogLeegHorizontaleFoto}
  //           exact
  //           path="/blog-leeg-horizontale-foto"
  //         />
  //         <Route
  //           component={HeiligeWandelingen}
  //           exact
  //           path="/heilige-wandelingen"
  //         />
  //         <Route component={Home} exact path="/" />
  //         <Route component={Vader} exact path="/vader" />
  //         <Route component={Woordkunst} exact path="/woordkunst" />
  //         <Route component={OnderzoekRAD} exact path="/onderzoek-rad" />
  //         <Route component={Moeder} exact path="/moeder" />
  //         <Route component={Test} exact path="/test" />
  //         <Route component={Roman} exact path="/roman" />
  //         <Route component={Proeverij} exact path="/proeverij" />
  //         <Route component={Blog} exact path="/blog" />
  //       </Routes>
  //     </div>
  //   </Router>
  // )
// }

export default App;
