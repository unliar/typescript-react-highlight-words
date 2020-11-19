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
  // 过滤空值,存在空值正则会出错
  const keys = words.filter((i) => !!i)
  if (keys.length == 0) {
    return React.createElement(wrapperTag, null, text)
  }
  const reg = new RegExp(keys.join("|"), "g")
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
