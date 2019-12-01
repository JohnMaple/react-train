import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Card from "@/components/Card";
import Loading from "@/components/Loading";
import Menu from "@/components/Menu";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 0,
    margin: 0,
    minHeight: "100vh"
  },
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: "48px"
  }
};

// 下面是Header, Popular, Footer这三个Layout组件

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      end: false,
      page: 1,
      items: [],
      query: "stars:>1"
    };
  }

  componentDidMount() {
    this.search();
  }

  search = async (clear = false) => {
    const { query } = this.state;
    const page = clear ? 1 : this.state.page;
    const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories&page=${page}`;
    console.log("url", url);
    this.setState({ loading: true });
    if (clear) {
      this.setState({ items: [] });
    }
    try {
      const res = await axios.get(url);
      console.log("res", res.data);
      this.setState(state => ({
        items: clear ? res.data.items : [...state.items, ...res.data.items],
        page: clear ? 1 : state.page + 1
      }));
    } catch (e) {
      console.log("error", e);
      this.setState({
        end: true
      });
    }
    this.setState({ loading: false });
  };

  onClick = async query => {
    console.log("query", query);
    await this.setState({
      query
    });
    this.search(true);
  };

  render() {
    const { items, loading, end, query } = this.state;
    const cards = items.map((item, key) => (
      <Card key={key} source={item} index={key + 1} />
    ));
    const links = [
      {
        title: "All",
        query: "stars:>1"
      },
      {
        title: "JavaScript",
        query: "stars:>1+language:javascript"
      },
      {
        title: "Ruby",
        query: "stars:>1+language:ruby"
      },
      {
        title: "Java",
        query: "stars:>1+language:java"
      },
      {
        title: "CSS",
        query: "stars:>1+language:css"
      }
    ];
    return (
      <div>
        <div style={styles.menu}>
          <Menu onClick={this.onClick} current={query} links={links} />
        </div>
        <InfiniteScroll
          initialLoad={false}
          loadMore={() => this.search(false)}
          hasMore={!loading || end}
          loader={null}
        >
          <div style={styles.content}>{cards}</div>
          {loading && <Loading />}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Popular;
