import React from "react";
import { Redirect } from "react-router-dom";
import { parse } from "qs";
import { renderRoutes } from "react-router-config";

class BattleContainer extends React.Component {
  render() {
    const { match, location, route } = this.props;
    const { url } = match;
    const { player1, player2 } = parse(location.search.substring(1));
    console.log("params", match, location);

    if (url !== location.pathname && !(player1 && player2)) {
      return <Redirect to={{ pathname: `${url}` }} />;
    }
    return <div>{renderRoutes(route.routes)}</div>;
  }
}

export default BattleContainer;
