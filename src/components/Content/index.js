import React from "react";

class Content extends React.Component {
  render() {
    const { router } = this.props;
    return <div>{router}</div>;
  }
}

export default Content;
