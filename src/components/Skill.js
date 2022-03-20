import CliMessage from "./CliMessage"
import CliEmptyLine from "./CliEmptyLine"

function Skill() {
    const skill = [
        {
            text: "Java",
            color: "#99CE9B"
        },
        {
            text: "SpringBoot",
            color: "#FFFFFF"
        },
        {
            text: "// 현재는 Java에서 Kotlin으로 갈아타기 위해서 공부하고 있습니다.",
            color: "#69CDFB"
        }
    ]

    return <div>
        <CliMessage message = {skill}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
    </div>
}

export default Skill