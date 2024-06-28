import axios from "axios";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import { Container } from "@/components/container";
import { CardsList } from "@/components/cardList";
import { Filters } from "@/components/filters";
import { Search } from "@/components/search";
import { Country } from "@/types";
import "dotenv/config";

import styles from "./page.module.scss";

export default async function Home() {
  const { data } = await axios.get<Country[]>(`${process.env.BASE_URL}/all`);

  const regions: string[] = await axios
    .get(`${process.env.BASE_URL}/all?fields=region`)
    .then((res) => res.data.map((item: { region: string }) => item.region))
    .then((res) => Array.from(new Set(res)));

  return (
    <Container>
      <div className={styles.top}>
        <Search />
        <Filters regions={regions} />
      </div>
      <Suspense
        fallback={Array.from({ length: 12 }).map((_, i) => (
          <Skeleton
            key={i}
            baseColor="var(--black-3)"
            width={300}
            height={300}
          />
        ))}
      >
        <CardsList data={data} />
      </Suspense>
    </Container>
  );
}
