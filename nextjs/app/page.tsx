import { Config } from "./components/Config";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Config />
    </div>
  );
}
