export type ParameterValue = string | string[];

export type ParameterKey = string;

export type Parameters = Record<ParameterKey, ParameterValue>;

export type ParameterUpdate = {
  key: string;
  newValue: ParameterValue;
};
