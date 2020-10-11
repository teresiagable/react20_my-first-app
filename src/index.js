import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Table from "./Table";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App">
          <h1>Hello, React!</h1>
          <Table />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
