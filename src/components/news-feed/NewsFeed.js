import React, { Component } from "react";

class NewsFeed extends Component {
  constructor() {
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    const URL = `https://newsapi.org/v2/everything?sources=hacker-news&apiKey=${
      process.env.REACT_APP_NEWSAPI_API_KEY
    }`;
  }

  render() {
    return this.state.articles.map((article, i) => {
      // TODO: start coding!
      return <li key={i} />;
    });
  }
}

export default NewsFeed;
