import React from 'react';
// import { Route } from 'react-router-dom';
// import { Home, Books, Electronics } from './Pages';
import { renderRoutes } from 'react-router-config';
import { Navbar } from './components';
import routes from './routes';


function App() {
  return (
    <div className="container">
      <Navbar />
      
      {/* The corresponding component will show here if the current URL matches the path */}
      {/*
        Method1 hard-codeed way
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/electronics" component={Electronics} />
      */}

      {/* Refactor for using routes config */}
      {
        /* Method2 
        {routes.map((route, i) => {
          const { path, exact, routes } = route;
          return (
            <Route
              key={i}
              path={path}
              exact={exact}
              render={(routeProps) => (
                <route.component routes={routes} {...routeProps} />
              )}
            />
          );
          }
        )}
        */
      }

      {/* use renderRoutes method here*/}
      {renderRoutes(routes)}

    </div> 
  )
}

export default App;
