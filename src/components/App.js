import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { Home } from '../pages/Home';
import { Header } from "../components/parts/Header";
import { FullLoader } from './parts/FullLoader';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <FullLoader hide={true}/>
        <Header></Header>
        <main id="site" className="slideout-panel slideout-panel-left">	
          <Switch>
            <Route path={"/"} exact component={Home} />
          </Switch>
        </main>

    </BrowserRouter>
    )
  }
};