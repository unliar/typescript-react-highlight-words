import React from "react"
import { CSSProperties } from "react"

export type Tags = keyof HTMLElementTagNameMap

export interface HighlightWordsIProps {
  text: string
  words: string[] // if empty array input , will render text with wrapperTag
  wrapperTag?: Tags // wrapper text tag, defaultValue = React.Fragment
  hightlightTag?: Tags // wrapper hit words tag, defaultValue = mark
  hightlightStyle?: CSSProperties // your hightlight style, no defaultValue
}

const HighlightWords = (props: HighlightWordsIProps) => {
  const {
    words,
    text,
    hightlightStyle,
    hightlightTag = "mark",
    wrapperTag = React.Fragment,
  } = props
  // filter empty words and empty text
  const keys = words?.filter((i) => !!i)
  if (!keys?.length || !text?.length) {
    return React.createElement(wrapperTag, null, "")
  }
  // add mark
  const reg = new RegExp(keys.join("|"), "g")
  const arr = text
    .replace(reg, (i) => `#@${i}#`)
    .split("#")
    .map((i) =>
      i[0] === "@"
        ? React.createElement(
            hightlightTag,
            {
              style: hightlightStyle,
            },
            i.slice(1)
          )
        : i
    )
  return React.createElement(wrapperTag, null, ...arr)
}

export default HighlightWords
