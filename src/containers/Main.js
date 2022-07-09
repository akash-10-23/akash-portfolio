import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";
import Top from "./toTop/Top";

export default function Main(propss) {

    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <>
                  {window.scrollTo(0, 0)}
                  <Splash
                    {...props}
                    theme={propss.theme}
                    setTheme={propss.setTheme}
                  />
                  <Top />
                </>
              )}
            />
            <Route
              path="/home"
              render={(props) => (
                <Home
                  {...props}
                  theme={propss.theme}
                  setTheme={propss.setTheme}
                />
              )}
            />
            
          </Switch>
        </Router>
      </div>
    );
}
