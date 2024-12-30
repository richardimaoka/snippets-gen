"use client";

import { useState } from "react";
import { MainSection, MainSectionProps } from "./contents/MainSection";
import { SideBar } from "./sidebar/SideBar";
import styles from "./SnippetPageClient.module.css";

type Props = {
  default: MainSectionProps;
};

export function SnippetPageClient(props: Props) {
  const [pageState] = useState(props.default);

  return (
    <div className={styles.component}>
      <SideBar />
      <MainSection {...pageState} />
    </div>
  );
}
