import styles from "./SideBar.module.css";
import { ParameterUpdate, Parameters } from "../types/types";

type Props = {
  state: Parameters;
  dispatch: (action: ParameterUpdate) => void;
};

export function SideBar(props: Props) {
  const key = "menuNames";

  return (
    <div className={styles.component}>
      <textarea
        className={styles.textarea}
        autoComplete={"on"}
        onChange={(x) => props.dispatch({ key: key, newValue: x.target.value })}
        value={props.state[key]}
        wrap="off"
      />
    </div>
  );
}
