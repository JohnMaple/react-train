import { hot } from "react-hot-loader/root";
import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Popular from "@/pages/Popular";
import BattleContainer from "@/pages/Battle/index";
import Battle from "@/pages/Battle/Battle";
import Result from "@/pages/Battle/Result";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: "0 32px",
    margin: 0,
    minHeight: "100vh"
  }
};

const routes = [
  {
    path: "/",
    exact: true,
    component: Popular
  },
  {
    path: "/battle",
    component: BattleContainer,
    routes: [
      {
        path: "/battle",
        exact: true,
        component: Battle
      },
      {
        path: "/battle/result",
        component: Result,
        exact: true
      }
    ]
  }
];

class App extends React.Component {
  render() {
    return (
      <Router>
        <div style={styles.container}>
          <Header onClick={this.onClick} changeRouter={this.changeRouter} />
          {renderRoutes(routes)}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default hot(App);
