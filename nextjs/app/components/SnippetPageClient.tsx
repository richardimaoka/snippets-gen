"use client";

import styles from "./SnippetPageClient.module.css";

type Props = {
  name: string;
};

export function SnippetPageClient(props: Props) {
  console.log(props);

  return (
    <div className={styles.component}>
      <div>config bar</div>
      <div>snippet results</div>
    </div>
  );
}
