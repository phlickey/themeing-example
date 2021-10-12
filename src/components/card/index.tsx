import { FC } from "react";

import styles from "./index.module.scss";

export const Card: FC = ({ children }) => (
  <div className={styles.card}>{children}</div>
);
