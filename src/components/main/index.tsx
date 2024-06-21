"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import classNames from "classnames";

import styles from "./styles.module.scss";

export const Main = ({ children }: PropsWithChildren) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = (theme === "system" ? systemTheme : theme) ?? "";

  return (
    <main className={classNames(styles.main, styles[currentTheme])}>
      {children}
    </main>
  );
};
