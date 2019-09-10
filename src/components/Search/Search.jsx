import React, { Component } from "react";
import { Index } from "elasticlunr";
import PostListing from "../PostListing/PostListing";
import "./Search.css";

// Search component
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.state = {
            query: ``,
            results: []
        };
    }

    componentDidMount () {
      const searchTerm = window.location.search;
      if (searchTerm && searchTerm.includes("?q=")) {
        this.search({target: {value: searchTerm.replace("?q=","")}});
      }
    }

    search (evt) {
        this.query = evt.target.value;
        this.index = this.index ? this.index : Index.load(this.props.searchIndex);
        const searchResults = this.query.length > 2 ? this.index
          .search(this.query, { expand: true })
          .map(({
            ref
          }) => this.index.documentStore.getDoc(ref))
          .map((result) => {
            if (!result.src) {
              try {
                // eslint-disable-next-line
                result.src = this.props.imageIndex[result.cover.replace("./images/", "")].src;
              } catch (e) {
                result.src = result.cover;
              }
            }
            return result
          }) : [];
        if (searchResults && searchResults.length) {
          this.updateSearchUrl(this.query);
        }
        this.setState({
            query: this.query,
            results: searchResults
        });
    }

    updateSearchUrl () {
      const searchTerm = window.location.search;
      if (this.query && (!searchTerm || (searchTerm && searchTerm.replace("?q=", "") !== this.query))) {
        // eslint-disable-next-line
        history.replaceState({}, document.title, `${window.location.pathname}?q=${this.query}`);
      }
    }

    render() {
        return (
          <div>
            <input
              type="text"
              value={this.state.query}
              onChange={this.search}
              placeholder="Search"
            />
            <PostListing postEdges={this.state.results} />
          </div>
        );
    }
}