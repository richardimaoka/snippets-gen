import styles from "./SideBar.module.css";
import { KV } from "../types/types";

type Props = {
  state: KV;
};

export function SideBar(props: Props) {
  const key = "itemName";
  const value = props.state[key];

  return (
    <div className={styles.component}>
      <textarea
        className={styles.textarea}
        autoComplete={"on"}
        // onChange={(x) => setItemNames(x.target.value)}
        value={value}
        wrap="off"
      />
    </div>
  );
}
