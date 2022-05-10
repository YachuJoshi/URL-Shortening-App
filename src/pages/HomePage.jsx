import Head from "next/head";
import styles from "./HomePage.module.scss";

import {
  Hero,
  NavBar,
  ShortenURLForm,
  ShortURLOutput,
  Statistics,
  Features,
  BoostLink,
  Footer,
} from "../components";
import { Container, Section } from "../ui-kits";

export const HomePage = () => {
  return (
    <>
      <Head>
        <title>Shortly - Shorten Your URL In Just One Click!</title>
      </Head>
      <Container>
        <NavBar />
        <Hero />
        <ShortenURLForm />
      </Container>
      <Section sectionClassName={styles.GrayBackgroundContainer}>
        <ShortURLOutput />
        <Statistics />
        <Features />
      </Section>
      <Section sectionClassName={styles.VioletBackgroundContainer}>
        <BoostLink />
      </Section>
      <Section sectionClassName={styles.FooterContainer}>
        <Footer />
      </Section>
    </>
  );
};
