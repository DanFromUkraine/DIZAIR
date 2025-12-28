import Benefits from "./elements/benefits.component";
import Hero from "./elements/hero.component";
import "./home.styles.css";

export default function HomeModule() {
  return (
    <main>
      <Hero />
      <Benefits />
    </main>
  );
}
