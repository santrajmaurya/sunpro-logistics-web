import React from "react";
import { Route, Switch } from "react-router-dom";
import { Observer } from 'mobx-react-lite';
import './App.scss';


import { RootStore } from './store/RootStore';
import AppHeader from './components/AppHeader';
import SignIn from './components/SignIn';
import AppFooter from './components/AppFooter';

const rootStore = new RootStore();

export const RootStoreContext = React.createContext(rootStore);

const App = () => {
  return (
    <Observer>
      {() => (
        <RootStoreContext.Provider value={rootStore}>
            <AppHeader />
            <div style={{height: 'calc(100vh - 136px)'}}>
            <Switch>
                <Route exact path="/login" component={SignIn} />
              </Switch>
            </div>
              
            <AppFooter/>
        </RootStoreContext.Provider>
      )}
      </Observer>
  )
}

export default App;
