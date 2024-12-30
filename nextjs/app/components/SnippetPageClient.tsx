"use client";

import { useState } from "react";
import { MainSection } from "./contents/MainSection";
import { SideBar } from "./sidebar/SideBar";
import styles from "./SnippetPageClient.module.css";
import { KV } from "./types/types";

type Props = {
  defaults: KV;
};

export function SnippetPageClient(props: Props) {
  const [pageState] = useState(props.defaults);

  props.defaults["a"] = "v";

  return (
    <div className={styles.component}>
      <SideBar state={pageState} />
      <MainSection {...pageState} />
    </div>
  );
}
