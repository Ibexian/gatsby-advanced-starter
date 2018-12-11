import React, { Component } from "react";
import Img from 'gatsby-image';
import "./About.css";

export default class About extends Component {
  render() {
    return (
      <div className="about">

        <Img fluid={this.props.image} />
        <h1>
        Christina Ng
        </h1>
        <p>Christina Ng is a culinary - trained food writer, recipe developer and YouTube host. She grew up watching Julia Child cooking shows every Saturday morning–time she should have spent preparing
        for her piano lessons. Having grown up in a massive Chinese family that celebrated every small and major event with a Chinese banquet, Christina got sick of Chinese food early on.</p>
        <p>
        It wasn’t until after university when she went abroad to Asia to study and work that she developed a true appreciation
        for Asian food and culture. She specializes in the local and authentic recipes that she grew up with and those, which she learned through her travel. East Meets Kitchen is her attempt at reviving those recipes, which may be anonymous to the world, but are served on kitchen tables daily.</p>
      </div>
    );
  }
};