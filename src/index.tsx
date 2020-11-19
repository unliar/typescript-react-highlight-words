import React, { CSSProperties } from "react";
interface HighlightWordsIProps {
  text: string;
  words: string[];
  wrapperTag?: string; // outer tag default = span
  hightlightTag?: string; // default = mark
  style?: CSSProperties;
}

const HighlightWords = (props: HighlightWordsIProps) => {
  const {
    words,
    text,
    style,
    hightlightTag = "mark",
    wrapperTag = "span",
  } = props;
  const reg = new RegExp(words.join("|"), "g");
  const token = text.replace(reg, "#@$&#");
  const elements = token.split("#").map((x) =>
    x[0] === "@"
      ? React.createElement(
          hightlightTag,
          {
            style,
          },
          x.slice(1)
        )
      : x
  );
  return React.createElement(wrapperTag, null, ...elements);
};

export default HighlightWords;
