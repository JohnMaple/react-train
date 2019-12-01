import React from "react";

const styles = {
  center: {
    textAlign: "center",
    margin: "20px"
  }
};

class Loading extends React.Component {
  render() {
    return (
      <div style={styles.center}>
        <i className="fa fa-spinner fa-spin" />
        <span> 正在加载...</span>
      </div>
    );
  }
}

export default Loading;
