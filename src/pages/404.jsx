import React, { Component } from "react";
import Helmet from "react-helmet";
import  { Link } from "gatsby";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class PageNotFound extends Component {
  render() {
    return (
      <Layout>
        <div className="search-container">
          <Helmet title={`Page Not Found | ${config.siteTitle}`} />
          <h2>Sorry, that page couldn't be found!</h2>
          <h3>
            Maybe try a 
            <Link to="/search" style={{"text-decoration": "underline"}}> search </Link>
             to find what you were looking for?
          </h3>
        </div>
      </Layout>
    );
  }
}



export default PageNotFound;
