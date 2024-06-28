"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ICardsListProps } from "./types";
import { Country } from "@/types";
import { Card } from "../card";
import defaultData from "@public/data.json";
import { filterDefaultData, filterServerData } from "./utils";

import styles from "./styles.module.scss";

export const CardsList = ({ data }: ICardsListProps) => {
  const [cards, setCards] = useState<Country[]>(data || defaultData);
  const searchParams = useSearchParams();

  useEffect(() => {
    const reg = searchParams.get("region") ?? "";
    const query = searchParams.get("query") ?? "";

    const load = async () => {
      try {
        const cards = await filterServerData(query, reg);
        if (!cards || cards.length === 0) throw Error("empty data");
        setCards(cards);
      } catch (err) {
        console.log(err);
        setCards(filterDefaultData(query, reg) as unknown as Country[]);
      }
    };

    load();
  }, [searchParams, data]);

  return (
    <div className={styles.cards}>
      {cards.map((card, i) => (
        <Card
          key={i}
          flag={card.flags.png}
          name={card.name.official ?? card.name}
          region={card.region}
          population={card.population}
          capital={card.capital?.[0]}
        />
      ))}
    </div>
  );
};
