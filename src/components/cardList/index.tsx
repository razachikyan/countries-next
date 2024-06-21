"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ICardsListProps } from "./types";
import { Country } from "@/types";
import { Card } from "../card";
import defaultData from "@public/data.json";
import styles from "./styles.module.scss";
import { filterDefaultData, filterServerData } from "./utils";

export const CardsList = ({ data }: ICardsListProps) => {
  const [cards, setCards] = useState<Country[]>(data || defaultData);
  const searchParams = useSearchParams();

  useEffect(() => {
    const reg = searchParams.get("region") ?? "";
    const query = searchParams.get("query") ?? "";
    filterServerData(query, reg)
      .then((res) => {
        if (!res ?? res.length === 0) throw Error("empty data");
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
        setCards(filterDefaultData(query, reg) as unknown as Country[]);
      });
    setCards(
      reg
        ? data.filter(
            (card) => card.region.toLowerCase() === searchParams.get("region")
          )
        : data
    );
  }, [searchParams]);

  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <Card
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
