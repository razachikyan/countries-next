"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import classNames from "classnames";
import { useState } from "react";
import { IFilterProps } from "./types";

import styles from "./styles.module.scss";

export const Filters = ({ regions }: IFilterProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleRegionClick = (region: string) => {
    const query = { region: region.toLowerCase() };
    const url = `${pathname}?${new URLSearchParams(query).toString()}`;
    router.push(url);
    setOpen(false);
  };

  return (
    <div className={classNames(styles.box, styles[String(theme)])}>
      <div className={styles.button} onClick={() => setOpen((prev) => !prev)}>
        Filter by reagion
        <div className={styles.icon}>
          <span className={styles.arrow} />
          <span className={styles.arrow} />
        </div>
      </div>
      {open && (
        <div className={styles.options}>
          {regions.map((item, i) => (
            <div
              onClick={() => handleRegionClick(item)}
              key={i}
              className={styles.option}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
