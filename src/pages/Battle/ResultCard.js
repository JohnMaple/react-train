import React from "react";

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    borderRadius: "4px",
    padding: "32px 32px",
    backgroundColor: "#ddd",
    margin: "16px 128px"
  },
  avatar: {
    width: "200px",
    height: "200px"
  }
};

class ResultCard extends React.Component {
  render() {
    const { type, player } = this.props;
    if (!player) return null;
    return (
      <div style={styles.card}>
        <h2 className="text-center">{type}</h2>
        <div>
          <img src={player.avatar_url} alt="" style={styles.avatar} />
        </div>
        <div className="text-center">
          <h3>Scores: {player.public_repos}</h3>
          <h2 className="text-primary">{player.name}</h2>
        </div>
        <div>
          <i className="fa fa-location-arrow" /> {player.location}
        </div>
        <div>
          <i className="fa fa-group" /> {player.followers}
        </div>
        <div>
          <i className="fa fa-user-plus" /> {player.following}
        </div>
        <div>
          <i className="fa fa-code" /> {player.public_repos}
        </div>
      </div>
    );
  }
}

export default ResultCard;
