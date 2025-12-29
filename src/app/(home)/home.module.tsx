import Benefits from "./elements/benefits.component";
import Hero from "./elements/hero.component";
import HowItWorks from "./elements/how-it-works.component";
import IndexNumbers from "./elements/index-numbers.component";
import WhatYouReceive from "./elements/what-you-receive.component";
import "./home.styles.css";

export default function HomeModule() {
  return (
    <main>
      <Hero />
      <Benefits />
      <IndexNumbers />
      <HowItWorks />
      <WhatYouReceive />
    </main>
  );
}
