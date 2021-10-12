import { FC } from "react";

import styles from "./index.module.scss";

export const Theme3: FC = ({ children }) => (
  <div className={styles.parent}>{children}</div>
);
