import dynamic from "next/dynamic";
import Benefits from "./elements/benefits.component";
import Hero from "./elements/hero.component";

import "./home.styles.css";

const IndexNumbers = dynamic(
  () => import("./elements/index-numbers.component"),
);
const HowItWorks = dynamic(() => import("./elements/how-it-works.component"));
const WhatYouReceive = dynamic(
  () => import("./elements/what-you-receive.component"),
);

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
