import React from "react";
import { HighlightWordsIProps } from "../types";

const HighlightWords = (props: HighlightWordsIProps) => {
  const {
    words,
    text,
    hightlightStyle,
    hightlightTag = "mark",
    wrapperTag = "span",
  } = props;
  if (props.words.length == 0) {
    return React.createElement(wrapperTag, null, text);
  }
  const reg = new RegExp(words.join("|"), "g");
  const token = text.replace(reg, "#@$&#");
  const elements = token.split("#").map((x) =>
    x[0] === "@"
      ? React.createElement(
          hightlightTag,
          {
            style: hightlightStyle,
          },
          x.slice(1)
        )
      : x
  );
  return React.createElement(wrapperTag, null, ...elements);
};

export default HighlightWords;
