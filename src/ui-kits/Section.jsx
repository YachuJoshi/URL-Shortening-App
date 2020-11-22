import { Container } from "./Container";
import cx from "classnames";

export const Section = ({ sectionClassName, className, children }) => {
  return (
    <section className={cx(sectionClassName)}>
      <Container className={className}>{children}</Container>
    </section>
  );
};
