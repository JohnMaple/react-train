import React from "react";

const styles = {
  nav: {
    display: "flex",
    listStyleType: "none",
    flexDirection: "row",
    margin: 0,
    padding: 0
  },
  navItem: {
    display: "inline-flex",
    padding: "8px 16px",
    fontSize: "18px"
  }
};
// 这里是所有普通的Components组件
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { current: props.current };
  }

  onClick(query) {
    const { onClick } = this.props;
    this.setState({ current: query });
    onClick(query);
  }

  render() {
    const { links } = this.props;
    const { current } = this.state;
    // 现在样式变内联了，如何实现:hover, :active的功能？
    const children = links.map((item, key) => (
      <li style={styles.navItem} key={key}>
        <a
          href="#"
          onClick={() => this.onClick(item.query)}
          className={current === item.query ? "active" : ""}
        >
          {item.title}
        </a>
      </li>
    ));
    return <ul style={styles.nav}>{children}</ul>;
  }
}
export default Menu;
