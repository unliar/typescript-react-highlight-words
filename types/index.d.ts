import { CSSProperties } from "react";

export type Tags = keyof HTMLElementTagNameMap;

export interface HighlightWordsIProps {
  text: string;
  words: string[]; // if empty array input , will render text with wrapperTag
  wrapperTag?: Tags; // outer tag default = span
  hightlightTag?: Tags; // default = mark
  hightlightStyle?: CSSProperties;
}
