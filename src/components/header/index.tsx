"use client";

import { useTheme } from "next-themes";
import classNames from "classnames";
import { ThemeSwitcher } from "../themeSwitcher";
import { Container } from "../container";

import styles from "./styles.module.scss";

export const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={classNames(styles.header, styles[String(theme)])}>
      <Container className={styles.container}>
        <h3 className={styles.title}>Where in the world</h3>
        <ThemeSwitcher />
      </Container>
    </header>
  );
};
