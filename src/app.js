import React from "react";
import "./css/app.scss";
import Input from "./components/input.js";

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Input marginTop value="Hello world" />
      </>
    );
  }
}

export default App;
