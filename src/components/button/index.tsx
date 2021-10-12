import { FC } from "react";

import styles from "./index.module.scss";

export const Button: FC = ({ children }) => (
  <button className={styles.button}>{children}</button>
);
