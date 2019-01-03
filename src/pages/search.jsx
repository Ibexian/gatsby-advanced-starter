import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import Search from "../components/Search/Search";
import config from "../../data/SiteConfig";

class SearchPage extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
        query SearchIndexQuery {
            siteSearchIndex {
                index
            }
            allImageSharp(filter: {
                fixed: {
                  originalName: {
                    regex: "/.*-\\d*(\\w)?\\./"
                  }
                }
              }) {
              edges {
                node {
                  fluid {
                    originalName
                    src
                  }
                }
              }
            }
        }
        `}

        render={data => (
          <Layout>
            <div className="search-container">
              <Helmet title={`Search | ${config.siteTitle}`} />
              <Search 
                searchIndex={data.siteSearchIndex.index} 
                imageIndex={
                  data.allImageSharp.edges.reduce((obj, item) => {
                    // eslint-disable-next-line
                    obj[item.node.fluid.originalName] = {src: item.node.fluid.src}
                    return obj
                  }, {})
                }
              />
            </div>
          </Layout>
        )}
      />
    );
  }
}



export default SearchPage;
