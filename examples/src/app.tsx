import React from "react"
import HightLight from "typescript-react-hightlight-words"
function App() {
  return (
    <div className="app">
      <h1>typescript-react-hightlight-words</h1>
      <h2> as components</h2>
      <HightLight
        text="this is a demo for you as components"
        words={["demo"]}
        hightlightTag="span"
        wrapperTag="div"
        hightlightStyle={{ color: "red" }}
      ></HightLight>
      <h2>as function</h2>
      <div>
        {HightLight({
          text: "this is a demo for you as function",
          words: ["demo"],
          hightlightStyle: { color: "red" },
        })}
      </div>
    </div>
  )
}

export default App
