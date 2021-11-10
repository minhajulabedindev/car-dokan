import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Booking from "../Booking/Booking";
import "./Dashboard.css";

const routes = [
  {
    path: "/Booking",
    sidebar: () => <div>Booking!</div>,
    main: () => (
      <div>
        <Booking></Booking>
      </div>
    ),
  },
  {
    path: "/shoelaces",
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>,
  },
];

const Dashboard = () => {
  return (
    <div>
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "15%",
              background: "#f0f0f0",
              height: "100vh",
            }}
          >
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                textDecoration: "none",
              }}
            >
              <li>
                <Link to="/Booking">Booking</Link>
              </li>
              <li>
                <Link to="/shoelaces">Shoelaces</Link>
              </li>
            </ul>

            <Switch>
              {routes.map((route, index) => (
                // You can render a <Route> in as many places
                // as you want in your app. It will render along
                // with any other <Route>s that also match the URL.
                // So, a sidebar or breadcrumbs or anything else
                // that requires you to render multiple things
                // in multiple places at the same URL is nothing
                // more than multiple <Route>s.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.sidebar />}
                />
              ))}
            </Switch>
          </div>

          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
