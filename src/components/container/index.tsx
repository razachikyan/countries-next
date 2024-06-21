import classNames from "classnames";
import { IContainerProps } from "./types";

import styles from "./styles.module.scss";

export const Container = ({
  children,
  className,
}: IContainerProps): JSX.Element => {
  return (
    <div className={classNames(styles.container, className)}>{children}</div>
  );
};
