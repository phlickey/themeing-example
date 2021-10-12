import { FC } from "react";

import styles from "./index.module.scss";

export const Background: FC = ({ children }) => (
  <div className={styles.background}>{children}</div>
);
