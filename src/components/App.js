import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import { Header } from "./parts/Header/Header";
import { FullLoader } from './parts/FullLoader';
import { Footer } from './parts/Footer';

import { PageHome } from "./page/Home"
import { PagePolicy } from "./page/Policy";
import { PagePortfolio } from "./page/Portfolio";
import { PageCase } from "./page/Case";


const setTitle = function(title) {
  document.title = "B2-LAB - "+title;
}

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <FullLoader hide={true}/>
        <Header/>
        <main id="site" className="slideout-panel slideout-panel-left">	
          <Switch>
            <Route path={"/"} exact component={() => <PageHome setTitle={setTitle} />} />
            <Route path={"/policy"} component={() => <PagePolicy setTitle={setTitle} />} />
            <Route path={"/portfolio"} component={() => <PagePortfolio setTitle={setTitle} />} />
            <Route path={"/case/:id"} component={() => <PageCase setTitle={setTitle} />} />
            
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
    )
  }
};