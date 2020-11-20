import styles from "./HomePage.module.scss";

import { Hero, NavBar } from "../components";
import { Container } from "../ui-kits";

export const HomePage = () => {
  return (
    <Container>
      <NavBar />
      <Hero />
    </Container>
  );
};
