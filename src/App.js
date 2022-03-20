import React, { useState } from "react";
import './App.css'
import CliInput from "./components/CliInput";
import CliMessage from "./components/CliMessage";
import Help from './components/Help'

function App() {
  const [value, setValue] = useState([<CliMessage message = {[{text: "<Dohyeon5626:\\Portfolio> help", color: "#FFFFFF"}]}></CliMessage>, <Help></Help>]); // eslint-disable-line no-unused-vars
  return <>
    <div>{value}</div>
    <CliInput addStack = {(c) => setValue([...value, c])} clearStack = {() => setValue([])}></CliInput>
  </>
}

export default App