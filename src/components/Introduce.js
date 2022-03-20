import CliMessage from "./CliMessage"
import CliEmptyLine from "./CliEmptyLine"

function Introduce() {
    const introduce = [
        {
            text: "안녕하세요...!",
            color: "#99CE9B"
        },
        {
            text: "즐겁게 개발하고픈 개발자 고도현입니다.",
            color: "#FFFFFF"
        },
        {
            text: "현재는 서버를 공부하고 있습니다. 재밌습니다..!",
            color: "#69CDFB"
        }
    ]

    return <div>
        <CliMessage message = {introduce}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
    </div>
}

export default Introduce