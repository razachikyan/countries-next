import { ICountryInfProps } from "./types";

import styles from "./styles.module.scss";

export const CountryInfo = ({ label, value }: ICountryInfProps): JSX.Element => {
  return (
    <span className={styles.text}>
      <span className={styles.bold}>{label}: </span>
      {value}
    </span>
  );
};
