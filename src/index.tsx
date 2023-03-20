import React from "react"
import { CSSProperties } from "react"

export type Tags = keyof HTMLElementTagNameMap

export interface HighlightWordsIProps {
  text: string
  words: string[] // if empty array input , will render text with wrapperTag
  wrapperTag?: Tags // wrapper text tag, defaultValue = React.Fragment
  highlightTag?: Tags // wrapper hit words tag, defaultValue = mark
  highlightStyle?: CSSProperties // your highlight style, no defaultValue
  splitString?: string
}
export const SafeRegExpString = (str: string) => {
  return str.replace(/[.*+?^${}()[\]\\]/g, "")
}
const HighlightWords = (props: HighlightWordsIProps) => {
  const {
    words,
    text,
    highlightStyle,
    highlightTag = "mark",
    wrapperTag = React.Fragment,
    splitString = "#",
  } = props
  const keys = words?.filter((i) => !!i)
  // if empty words input, return render text
  if (!keys.length) {
    return React.createElement(wrapperTag, null, text)
  }

  // add mark
  const reg = new RegExp(SafeRegExpString(keys.join("|")), "g")
  const arr = text
    .replace(reg, (i) => `${splitString}@${i}${splitString}`)
    .split(splitString)
    .map((i) =>
      i[0] === "@"
        ? React.createElement(
            highlightTag,
            {
              style: highlightStyle,
            },
            i.slice(1)
          )
        : i
    )
  return React.createElement(wrapperTag, null, ...arr)
}

export default HighlightWords
