import { Parameters } from "../types/types";
import styles from "./MainSection.module.css";

type Props = Parameters;

export function MainSection(props: Props) {
  return <div className={styles.component}>{props.name}</div>;
}
