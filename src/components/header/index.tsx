"use client";

import { useTheme } from "next-themes";
import classNames from "classnames";
import { ThemeSwitcher } from "../themeSwitcher";
import { Container } from "../container";

import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

export const Header = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className={classNames(styles.header, {
        [styles[String(theme)]]: mounted,
      })}
    >
      <Container className={styles.container}>
        <h3 className={styles.title}>Where in the world</h3>
        <ThemeSwitcher />
      </Container>
    </header>
  );
};
