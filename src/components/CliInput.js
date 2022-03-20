import CliMessage from "./CliMessage"
import './style/CliInput.css'

function CliInput() {
    const position = [
        {
            text: "<Dohyeon5626:\\Portfolio>",
            color: "#FFFFFF"
        }
    ]
    return (<div className="line">
            <CliMessage message={position}></CliMessage>
            <input className="command"></input>
        </div>)
}

export default CliInput