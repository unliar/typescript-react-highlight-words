import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import HighlightWords from "../src/index"
import React from "react"

test("normal render", () => {
  const text = "text for test"
  const dom = render(
    <HighlightWords text={text} words={["is", "text", "test"]}></HighlightWords>
  )
  // 命中两个
  expect(
    dom.container.querySelectorAll("mark")[0].innerHTML == "text" &&
      dom.container.querySelectorAll("mark")[1].innerHTML == "test"
  ).toBeTruthy()
})

test("customer tag render", () => {
  const text = "测试自定义tag"
  const dom = render(
    <HighlightWords
      text={text}
      highlightTag="span"
      wrapperTag="h6"
      words={["tag"]}
    ></HighlightWords>
  )
  expect(dom.container.querySelector("span")).toBeTruthy()
  expect(dom.container.querySelector("h6")).toBeTruthy()
})

test("customer highlightStyle render", () => {
  const text = "test highlightStyle"
  const dom = render(
    <HighlightWords
      text={text}
      words={["highlightStyle"]}
      highlightStyle={{ color: "red" }}
    ></HighlightWords>
  )
  // 命中两个
  expect(
    dom.container.querySelector("mark")?.hasAttribute("style")
  ).toBeTruthy()
})

test("no words hit", () => {
  const text = "hello world"
  const dom = render(
    <HighlightWords text={text} words={["dididi"]}></HighlightWords>
  )
  // 命中两个
  expect(dom.container.querySelectorAll("mark").length == 0).toBeTruthy()
})

test("empty render", () => {
  const text = ""
  const dom = render(<HighlightWords text={text} words={[""]}></HighlightWords>)
  expect(dom.container.innerHTML == "").toBeTruthy()
})

test("empty words hit", () => {
  const text = "hello world"
  const dom = render(<HighlightWords text={text} words={[""]}></HighlightWords>)
  // 内容返回原始内容
  expect(dom.container.innerHTML == text).toBeTruthy()
  // 无任何标记节点
  expect(dom.container.querySelectorAll("mark").length == 0).toBeTruthy()
})
