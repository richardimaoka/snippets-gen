"use client";

import { useState } from "react";
import styles from "./Config.module.css";

//https://stackoverflow.com/questions/30003353/can-es6-template-literals-be-substituted-at-runtime-or-reused
function interpolate(template: string, obj: { [key: string]: string }) {
  function replaceCaptured(
    /*matched string*/ _: string,
    capturedVarName: string
  ) {
    const ret = obj[capturedVarName];
    if (!ret) {
      throw new Error(
        `template has a variable=\${${capturedVarName}}, but obj is missing it.`
      );
    }

    return ret;
  }

  //  \${.*?}  : matches with anything within ${}
  // \${(.*?)} : is a capture matching with anything within {}
  return template.replace(/\${(.*?)}/g, replaceCaptured);
}

export function Config() {
  const [baseName, setBaseName] = useState("Component");

  const sourceCodeTemplate =
    "export function ${baseName}() {" + "  return <div></div> " + "}";

  const sourceCode = interpolate(sourceCodeTemplate, { baseName: baseName });

  return (
    <div className={styles.component}>
      <input
        onChange={(x) => {
          setBaseName(x.target.value);
        }}
        value={baseName}
      />
      <div>{baseName}.module.css</div>
      <div>{baseName}.tsx</div>
      <pre>{sourceCode}</pre>
    </div>
  );
}
