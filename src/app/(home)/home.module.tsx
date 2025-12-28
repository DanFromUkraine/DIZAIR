import Benefits from "./elements/benefits.component";
import Hero from "./elements/hero.component";
import IndexNumbers from "./elements/index-numbers.component";
import "./home.styles.css";

export default function HomeModule() {
  return (
    <main>
      <Hero />
      <Benefits />
      <IndexNumbers />
    </main>
  );
}
