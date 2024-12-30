import { Parameters } from "../types/types";
import styles from "./MainSection.module.css";

type Props = {
  input: Parameters;
};

export function MainSection(props: Props) {
  const input = props.input;
  return (
    <div className={styles.component}>
      <div>{input.s}.module.css</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
