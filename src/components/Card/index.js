import React from "react";

const styles = {
  card: {
    boxSizing: "border-box",
    width: "23%",
    padding: "24px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    backgroundColor: "rgba(0, 0, 0, 0.08)"
  },
  avatar: {
    width: "50%"
  },
  cardTitle: {
    display: "flex",
    flexDirection: "row",
    height: "36px",
    justifyContent: "center"
  },
  icon: {
    display: "inline-flex",
    width: "16px",
    justifyContent: "center",
    margin: "5px"
  }
};

class Card extends React.Component {
  render() {
    const { index, source } = this.props;

    if (!source) return <div>没有卡片</div>;
    return (
      <div style={styles.card}>
        <h2 className="text-center">#{index}</h2>
        <div className="text-center">
          <img
            src={source.owner.avatar_url}
            alt={source.name}
            style={styles.avatar}
          />
        </div>
        <h4 style={styles.cardTitle}>
          <a href={source.html_url} target="_blank" rel="noopener noreferrer">
            {source.full_name}
          </a>
        </h4>
        <div>
          <i
            className="fa fa-user"
            style={{ ...styles.icon, color: "rgb(255, 191, 116)" }}
          />
          <a
            href={source.owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {source.name}
          </a>
        </div>
        <div>
          <i
            className="fa fa-star"
            style={{ ...styles.icon, color: "rgb(255, 215, 0)" }}
          />
          {source.stargazers_count} stars
        </div>
        <div>
          <i
            className="fa fa-code-fork"
            style={{ ...styles.icon, color: "rgb(129, 195, 245)" }}
          />
          {source.forks} forks
        </div>
        <div>
          <i
            className="fa fa-warning"
            style={{ ...styles.icon, color: "rgb(241, 138, 147)" }}
          />
          {source.open_issues} Open issues
        </div>
      </div>
    );
  }
}

export default Card;
