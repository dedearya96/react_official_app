import { useEffect, useState } from "react";
import Team12 from "../img/testimonials/team12.jpg";
import Hero from "./Hero";
import About from "./About";
import Products from "./Products";
import Features from "./Features";
import Counts from "./Counts";
import Team from "./Team";
import Pricing from "./Pricing";
import Footer from "./Footer";
import Maps from "./Maps";
import Contact from "./Contact";
import { Link } from "react-scroll";
import Header from "./Header";

export default function LandingPage() {

    return (
        <div className="">
            <Header />
            <Hero />
            <main id="main">
                <About />
                <Products />
                <Features />
                <Counts />
                <Team />
                <Pricing />
                <Contact />
                <Maps />
            </main>
            <Footer />
            <a href="#" className="back-to-top"><i className="icofont-simple-up bg-info"></i></a>
        </div>
    )
}