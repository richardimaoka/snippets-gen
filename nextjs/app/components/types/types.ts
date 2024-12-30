export type V = string | string[];

export type KV = Record<string, V>;

export type Action = {
  key: string;
  newValue: V;
};
