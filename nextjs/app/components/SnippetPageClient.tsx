"use client";

import { MainSection } from "./contents/MainSection";
import { SideBar } from "./sidebar/SideBar";
import styles from "./SnippetPageClient.module.css";

type Props = {
  name: string;
};

export function SnippetPageClient(props: Props) {
  console.log(props);

  return (
    <div className={styles.component}>
      <SideBar />
      <MainSection />
    </div>
  );
}
