import { useState } from "react";
import styles from "./SideBar.module.css";

export function SideBar() {
  const [itemNames, setItemNames] = useState(`a
b
c`);

  return (
    <div className={styles.component}>
      <textarea
        className={styles.textarea}
        autoComplete={"on"}
        onChange={(x) => setItemNames(x.target.value)}
        value={itemNames}
        wrap="off"
      />
    </div>
  );
}
