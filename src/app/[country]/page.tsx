import Image from "next/image";
import { CountryInfo } from "@/components/countryInfo";
import { BackButton } from "@/components/backButton";
import { formatNumber } from "@/utils/formatNumber";
import { Container } from "@/components/container";
import type { Country } from "@/types";
import "dotenv/config";

import styles from "./styles.module.scss";

export default async function Country({
  params,
}: {
  params: { country: string };
}) {
  const [country]: Country[] = await fetch(
    `${process.env.BASE_URL}/name/${params.country}`
  ).then((res) => res.json());

  return (
    <Container className={styles.container}>
      <BackButton />
      <div className={styles.box}>
        <div className={styles.image}>
          <Image alt={country.name.official} fill src={country.flags.png} />
        </div>
        <div className={styles.block}>
          <span className={styles.name}>{country.name.official}</span>
          <div className={styles.info}>
            <div className={styles.col}>
              <CountryInfo
                label="Native Name"
                value={Object.values(country.name.nativeName)[0].official}
              />
              <CountryInfo
                label="Population"
                value={formatNumber(country.population)}
              />
              <CountryInfo label="Region" value={country.region} />
              <CountryInfo label="Sub Region" value={country.subregion} />
              <CountryInfo label="Capital" value={country.capital[0]} />
            </div>
            <div className={styles.col}>
              <CountryInfo label="Top Level Domain" value={country.tld[0]} />
              <CountryInfo
                label="Currencies"
                value={Object.values(country.currencies)[0].name}
              />
              <CountryInfo
                label="Languages"
                value={Object.values(country.languages).join(", ")}
              />
            </div>
          </div>
          <div className={styles.additional}>
            <span className={styles.borderLabel}>Border Countries: </span>
            {country.borders &&
              country.borders.map((border, i) => (
                <span key={i} className={styles.border}>{border}</span>
              ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
