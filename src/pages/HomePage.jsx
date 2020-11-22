import styles from "./HomePage.module.scss";

import { Hero, NavBar, ShortenURLForm, ShortURLOutput } from "../components";
import { Container, Section } from "../ui-kits";

export const HomePage = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Hero />
        <ShortenURLForm />
      </Container>
      <Section sectionClassName={styles.ShortURLOutput}>
        <ShortURLOutput />
      </Section>
    </>
  );
};
