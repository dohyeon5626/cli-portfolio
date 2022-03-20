import React, { useState } from "react";
import CliMessage from "./CliMessage"
import './style/CliInput.css'
import Help from './Help'

function CliInput(props) {
    const [inputValue, setInputValue] = useState("")

    const handleUserInput = (e) => {
      setInputValue(e.target.value)
    }
  
    const resetInputField = () => {
      setInputValue("")
    }

    const addStack = (e, r) => {
        if (e.key === "Enter") {
            if (r === "help" || r === "HELP") {
                props.addStack(
                    <>
                        <CliMessage message = {[{text: "<Dohyeon5626:\\Portfolio> " + r, color: "#FFFFFF"}]}></CliMessage>
                        <Help></Help>
                    </>
                )
            }
            if (r === "cls" || r === "CLS") {
                props.clearStack()
            }
            resetInputField()
        }
    }
    
    const position = [
        {
            text: "<Dohyeon5626:\\Portfolio>",
            color: "#FFFFFF"
        }
    ]
    
    return (<div className="line">
            <CliMessage message={position}></CliMessage>
            <input className="command" value={inputValue} onChange={handleUserInput} onKeyPress = {(e) => addStack(e, e.target.value)}></input>
        </div>)
}

export default CliInput