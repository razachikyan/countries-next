"use client";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { useTheme } from "next-themes";
import { formatNumber } from "@/utils/formatNumber";
import { ICardProps } from "./types";

import styles from "./styles.module.scss";

export const Card = ({
  flag,
  name,
  region,
  capital,
  population,
}: ICardProps): JSX.Element => {
  const { theme } = useTheme();

  return (
    <Link
      href={`/${name.toLowerCase()}`}
      className={classNames(styles.card, styles[String(theme)])}
    >
      <div className={styles.image}>
        <Image
          fill
          src={flag}
          alt="country"
          sizes="width: 100%; height: 100%;"
        />
      </div>
      <div className={styles.text}>
        <span className={styles.name}>{name}</span>
        <span className={styles.info}>
          <span className={styles.bold}>Population: </span>
          {formatNumber(population)}
        </span>
        <span className={styles.info}>
          <span className={styles.bold}>Region: </span>
          {region}
        </span>
        <span className={styles.info}>
          <span className={styles.bold}>Capital: </span>
          {capital}
        </span>
      </div>
    </Link>
  );
};
