"use client";

import { useReducer, useState } from "react";
import { MainSection } from "./contents/MainSection";
import { SideBar } from "./sidebar/SideBar";
import styles from "./SnippetPageClient.module.css";
import { Action, KV } from "./types/types";

type Props = {
  defaults: KV;
};

function reducer(state: KV, action: Action) {
  const newState = { ...state };
  newState[action.key] = action.newValue;

  return newState;
}

export function SnippetPageClient(props: Props) {
  const [state, dispatch] = useReducer(reducer, props.defaults);

  return (
    <div className={styles.component}>
      <SideBar state={state} dispatch={dispatch} />
      <MainSection {...state} />
    </div>
  );
}
