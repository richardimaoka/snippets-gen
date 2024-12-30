"use client";

import { useReducer } from "react";
import { MainSection } from "./contents/MainSection";
import { SideBar } from "./sidebar/SideBar";
import styles from "./SnippetPageClient.module.css";
import { ParameterUpdate, Parameters } from "./types/types";

type Props = {
  defaults: Parameters;
};

function reducer(state: Parameters, action: ParameterUpdate) {
  const newState = { ...state };
  newState[action.key] = action.newValue;

  return newState;
}

export function SnippetPageClient(props: Props) {
  const [input, dispatch] = useReducer(reducer, props.defaults);
  console.log("SnippetPageClient", input);

  return (
    <div className={styles.component}>
      <SideBar input={input} dispatch={dispatch} />
      <MainSection input={input} />
    </div>
  );
}
