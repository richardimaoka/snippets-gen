import styles from "./SideBar.module.css";
import { Action, KV } from "../types/types";

type Props = {
  state: KV;
  dispatch: (action: Action) => void;
};

export function SideBar(props: Props) {
  const key = "itemName";

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
