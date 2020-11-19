import React from "react"
import HightLight from "typescript-react-hightlight-words"
function App() {
  return (
    <div className="app">
      <h1>
        <a href="https://github.com/unliar/react-hightlight-words">
          typescript-react-hightlight-words
        </a>{" "}
      </h1>
      <p>
        <a href="https://github.com/unliar/react-hightlight-words/blob/main/examples/src/app.tsx">
          source code
        </a>
      </p>
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
          words: ["function", "for"],
          hightlightStyle: { color: "blue" },
        })}
      </div>
    </div>
  )
}

export default App
