import React from "react"
import { CSSProperties } from "react"

export type Tags = keyof HTMLElementTagNameMap

export interface HighlightWordsIProps {
  text: string
  words: string[] // if empty array input , will render text with wrapperTag
  wrapperTag?: Tags // outer tag default = span
  hightlightTag?: Tags // default = mark
  hightlightStyle?: CSSProperties
}

const HighlightWords = (props: HighlightWordsIProps) => {
  const {
    words,
    text,
    hightlightStyle,
    hightlightTag = "mark",
    wrapperTag = "span",
  } = props
  if (props.words.length == 0) {
    return React.createElement(wrapperTag, null, text)
  }
  const reg = new RegExp(words.join("|"), "g")
  const eles = text
    .replace(reg, "#@$&#")
    .split("#")
    .map((t) =>
      t[0] === "@"
        ? React.createElement(
            hightlightTag,
            {
              style: hightlightStyle,
            },
            t.slice(1)
          )
        : t
    )
  return React.createElement(wrapperTag, null, ...eles)
}

export default HighlightWords
