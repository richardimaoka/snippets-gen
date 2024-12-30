import styles from "./SideBar.module.css";
import { ParameterUpdate, Parameters } from "../types/types";

type Props = {
  input: Parameters;
  dispatch: (action: ParameterUpdate) => void;
};

export function SideBar(props: Props) {
  const key = "number";
  const v = props.input[key];
  const selections = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={styles.component}>
      <div className={styles.buttons}>
        {selections.map((n) => (
          <button
            key={n}
            className={styles.button + (v === n ? " " + styles.select : "")}
            onClick={() => props.dispatch({ key: key, newValue: n })}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
