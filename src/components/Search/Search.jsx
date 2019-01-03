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

    search (evt) {
        const query = evt.target.value;
        this.index = this.index ? this.index : Index.load(this.props.searchIndex);
        this.setState({
            query,
            results: this.index
                .search(query, {})
                .map(({ ref }) => this.index.documentStore.getDoc(ref))
                .map((result) => {
                  if (!result.src) {
                    try {
                      // eslint-disable-next-line
                      result.src = this.props.imageIndex[result.cover.replace("./images/", "")].src;
                    } catch (e)  {
                      result.src = result.cover;
                    }
                  }
                  return result
                })
        });
    }

    render() {
        return (
          <div>
            <input
              type="text"
              value={this.state.query}
              onChange={this.search}
            />
            <PostListing postEdges={this.state.results} />
          </div>
        );
    }
}