// /src/pages.js
import React from 'react';
// import { Switch, Route } from 'react-router-dom';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { Link } from 'react-router-dom';
import routes from './routes';
import {Breadcrumb} from  './components'

/**
 * These are root pages
 */
const Home = ({location}) => {
  return (
      <div>
        <h1 className="py-3">Home</h1>
        <Breadcrumb locationPath={location.pathname} />
      </div>
  )
};

const Books = ({location}) => {

    const onMatchedRoutes = (matchedRoutes) => {
        return [
        {
            route: {
            path: '/',
            breadcrumbName: 'Home'
            }
        },
        ...matchedRoutes
        ];
    };
  return (
    <div>
        <h1 className="py-3">Books</h1>
        <Breadcrumb
            locationPath={location.pathname}
            onMatchedRoutes={onMatchedRoutes}
        />  
    </div>
  )
};

const Electronics = ({route, location}) => {

  // let matchedRoutes = matchRoutes(routes, location.pathname);

  // Customize breadcrumb through modifying matchRoutes array
    //   matchedRoutes = [
    //     {
    //       route: {
    //         path: '/',
    //         breadcrumbName: 'Home'
    //       }
    //     },
    //     ...matchedRoutes
    //   ];

  // Provide a function as props into <Breadcrumb /> to modify breadcrumb
  const onMatchedRoutes = (matchedRoutes) => {
    return [
      {
        route: {
          path: '/',
          breadcrumbName: 'Home'
        }
      },
      ...matchedRoutes
    ];
  };

  return (
    <div>
        <h1 className="py-3">Electronics</h1>
        {/*<Switch>*/}
            {/* The component will show here if the current URL matches the path */}
            {/*
            <Route path="/electronics/mobile" component={Mobile} />
            <Route path="/electronics/desktop" component={Desktop} />
            <Route path="/electronics/laptop" component={Laptop} />
            */}

            {/* Refactor for using routes config */}
            {
                /** Method2
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
        {/*</Switch>*/}
        {/* Breadcrumb */}
        {/*<nav>
            <ol className="breadcrumb">
                {matchedRoutes.map((matchRoute, i) => {
                const { path, breadcrumbName } = matchRoute.route;
                
                // check whether the the path is the Page path user currently at
                const isActive = path === location.pathname;
                // if the Page path is where the user currently at, then do not show <Link />
                return isActive ? (
                    <li key={i} className="breadcrumb-item active">
                      {breadcrumbName}
                    </li>
                  ) :(
                    <li key={i} className="breadcrumb-item">
                        <Link to={path}>{breadcrumbName} </Link>
                    </li>
                );
                })}
            </ol>
        </nav>*/}

        <Breadcrumb 
            locationPath={location.pathname}
            onMatchedRoutes={onMatchedRoutes}
        />
        {renderRoutes(route.routes)}
    </div>
  )
};

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

export { Home, Books, Electronics, Mobile, Desktop, Laptop };