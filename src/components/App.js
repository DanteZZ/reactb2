import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { PageHome } from "./page/Home/Home"
import { Header } from "./parts/Header/Header";
import { FullLoader } from './parts/FullLoader';
import { Footer } from './parts/Footer';


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
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
    )
  }
};