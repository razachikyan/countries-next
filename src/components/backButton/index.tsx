"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import ArrowLight from "@public/icons/arrowLight.svg";
import ArrowDark from "@public/icons/arrowDark.svg";

import styles from "./styles.module.scss";

export const BackButton = () => {
  const { theme } = useTheme();

  return (
    <Link className={styles.button} href="/">
      <Image
        alt="arrow"
        width={22}
        height={13}
        src={theme === "light" ? ArrowLight : ArrowDark}
      />
      Back
    </Link>
  );
};
