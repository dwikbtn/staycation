import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  //membuat reference. salah ssatu fungsi ref adalah auto scroll
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        {/* ambil semua props di header menggunakan spread operator ... */}
        <Header {...this.props}></Header>
        {/* jangan lupa pass refMostPicked untuk auto scroll */}

        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <div id="browse-by">
          <Categories data={landingPage.categories} />
        </div>
        <div id="#stories">
          <Testimony data={landingPage.testimonial} />
        </div>
        <Footer />
      </>
    );
  }
}
