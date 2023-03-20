import React from "react"
import HighLight from "typescript-react-highlight-words"
function App() {
  return (
    <div className="app">
      <h1>
        <a href="https://github.com/unliar/react-highlight-words">
          typescript-react-highlight-words
        </a>{" "}
      </h1>
      <p>
        <a href="https://github.com/unliar/react-highlight-words/blob/main/examples/src/app.tsx">
          source code
        </a>
      </p>
      <h2> as components</h2>
      <HighLight
        text="this is a demo for you as components"
        words={["demo"]}
        highlightTag="span"
        wrapperTag="div"
        highlightStyle={{ color: "red" }}
      ></HighLight>
      <h2>as function</h2>
      <div>
        {HighLight({
          text: "this is a demo for you as function",
          words: ["function", "for"],
          highlightStyle: { color: "blue" },
        })}
      </div>
    </div>
  )
}

export default App
