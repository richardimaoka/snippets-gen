import { KV } from "../types/types";
import styles from "./MainSection.module.css";

type Props = KV;

export function MainSection(props: Props) {
  return <div className={styles.component}>{props.name}</div>;
}
