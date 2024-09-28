import React from "react";
import Achivment from "./Achivment";
import Slider from "./Slider";
import AboutUs from "./AboutUs";
import Services from "./Services";
import AboutUsSecond from "./AboutUsSecond";
import Works from "./Works";
import Form from "./Form";

function Main() {
  return <main className="main">
    <Achivment />
    <Slider />
    <AboutUs />
    <Services />
    <AboutUsSecond />
    <Works />
    <Form />
  </main>;
}
export default Main;
