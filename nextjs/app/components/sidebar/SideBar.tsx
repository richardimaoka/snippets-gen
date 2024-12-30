import styles from "./SideBar.module.css";
import { ParameterUpdate, Parameters } from "../types/types";

type Props = {
  input: Parameters;
  dispatch: (action: ParameterUpdate) => void;
};

export function SideBar(props: Props) {
  const key = "menuNames";

  function split(v: string): string[] {
    return v.split("\n");
  }

  function join(v: string | string[]): string {
    if (typeof v === "string") {
      return v;
    } else {
      return v.join("\n");
    }
  }

  return (
    <div className={styles.component}>
      <textarea
        className={styles.textarea}
        autoComplete={"on"}
        onChange={(x) =>
          props.dispatch({ key: key, newValue: split(x.target.value) })
        }
        value={join(props.input[key])}
        wrap="off"
      />
      <input />
    </div>
  );
}
