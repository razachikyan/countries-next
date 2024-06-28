"use client";
import Image from "next/image";
import SearchLight from "@public/icons/searchLight.svg";
import SearchDark from "@public/icons/searchDark.svg";
import styles from "./styles.module.scss";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const Search = () => {
  let timeoutId: NodeJS.Timeout;
  const [query, setQuery] = useState<string>("");
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const searParams = useSearchParams();

  useEffect(() => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      const params = new URLSearchParams();
      params.set("query", query);
      const url = `${pathname}?${params.toString()}`;
      searParams.size !== 0 && router.push(url);
    }, 500);
  }, [query]);

  return (
    <div className={styles.box}>
      <Image
        width={25}
        height={25}
        alt="search"
        className={styles.icon}
        src={theme === "light" ? SearchLight : SearchDark}
      />
      <input
        value={query}
        onChange={(ev) => setQuery(ev.target.value)}
        className={styles.search}
        placeholder="Search for a country..."
      />
    </div>
  );
};
