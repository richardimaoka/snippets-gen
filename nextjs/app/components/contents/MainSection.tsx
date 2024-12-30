import styles from "./MainSection.module.css";

type Props = {
  name: string;
};

export type MainSectionProps = Props;

export function MainSection(props: Props) {
  return <div className={styles.component}>{props.name}</div>;
}
