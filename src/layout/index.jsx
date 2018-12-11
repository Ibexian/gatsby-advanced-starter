import React from "react";
import Helmet from "react-helmet";
import Footer from "../components/Footer/Footer"
import config from "../../data/SiteConfig";
import Header from "../components/Header/Header";
import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <Header config={config} />
        <div id="main">
          {children}
        </div>
        <Footer config={config} />
      </div>
    );
  }
}
