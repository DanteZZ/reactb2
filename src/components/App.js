import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import { PageHome } from "./page/Home/Home"
import { Header } from "./parts/Header/Header";
import { FullLoader } from './parts/FullLoader';
import FullLoaderStore from "../redux/FullLoader/Store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={FullLoaderStore}>
        <BrowserRouter>
          <FullLoader hide={true}/>
          <Header></Header>
          <main id="site" className="slideout-panel slideout-panel-left">	
            <Switch>
              <Route path={"/"} exact component={PageHome} />
            </Switch>
          </main>
        </BrowserRouter>
      </Provider>
    )
  }
};