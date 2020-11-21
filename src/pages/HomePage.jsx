import styles from "./HomePage.module.scss";

import { Hero, NavBar, ShortenURLForm } from "../components";
import { Container } from "../ui-kits";

export const HomePage = () => {
  return (
    <Container>
      <NavBar />
      <Hero />
      <ShortenURLForm />
    </Container>
  );
};
