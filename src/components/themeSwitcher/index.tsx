"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Moon from "@public/icons/moon.svg";
import Sun from "@public/icons/sun.svg";

import styles from "./styles.module.scss";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.box}>
      <Image
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={theme === "dark" ? Sun : Moon}
        alt="switcher"
        className={styles.button}
      />
      {theme && <span className={styles.text}>{theme === "dark" ? "Light" : "Dark"} Mode</span>}
    </div>
  );
};
