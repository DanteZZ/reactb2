import React, { Fragment, useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from "./parts/Header/Header";
import { FullLoader } from './parts/FullLoader/FullLoader';
import { Footer } from './parts/Footer';

import { PageHome } from "./page/Home"
import { PagePolicy } from "./page/Policy";
import { PagePortfolio } from "./page/Portfolio";
import { PageCase } from "./page/Case";
import { PageServiceCats } from "./page/ServiceCats";
import { PageServiceCat } from "./page/ServiceCat";
import { PageService } from "./page/Service";
import { PageProducts } from './page/Products';
import { PageProduct } from './page/Product';
import { PageContacts } from './page/Contacts';
import { PageCalculate } from './page/Calculate';

export const App = () => {
  const setTitle = (title) => { document.title = "B2-LAB - "+title;}
  const [showLoader,setShowLoader] = useState(true);
  setTimeout(()=>{setShowLoader(false);},2000);
  return (
    <Fragment>
      <FullLoader hide={showLoader}/>
      <Header/>
      <main id="site" className="slideout-panel slideout-panel-left">	
        <Switch>
          <Route path={"/"} exact         component={() => <PageHome setTitle={setTitle} />} />
          <Route path={"/policy"}         component={() => <PagePolicy setTitle={setTitle} />} />
          <Route path={"/portfolio"}      component={() => <PagePortfolio setTitle={setTitle} />} />
          <Route path={"/case/:id"}       component={() => <PageCase setTitle={setTitle} />} />
          <Route path={"/servicecats"}    component={() => <PageServiceCats setTitle={setTitle} />} />
          <Route path={"/servicecat/:id"} component={() => <PageServiceCat setTitle={setTitle} />} />
          <Route path={"/service/:id"}    component={() => <PageService setTitle={setTitle} />} />
          <Route path={"/products"}       component={() => <PageProducts setTitle={setTitle} />} />
          <Route path={"/product/:id"}    component={() => <PageProduct setTitle={setTitle} />} />
          <Route path={"/contacts"}       component={() => <PageContacts setTitle={setTitle} />} />
          <Route path={"/calculate"}      component={() => <PageCalculate setTitle={setTitle} />} />
        </Switch>
      </main>
      <Footer/>
    </Fragment>
  )
}