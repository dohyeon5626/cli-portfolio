import CliMessage from "./CliMessage"
import CliEmptyLine from "./CliEmptyLine"

function ToyProject() {
    const greetTitle = [
        {
            text: "Greet",
            color: "#99CE9B"
        }
    ]
    const greetIntro = [
        {
            text: "README를 보는 사람을 위한 랜덤한 문장 SVG 프로젝트입니다.",
            color: "#FFFFFF"
        }
    ]
    const greetFeel = [
        {
            text: "README를 새롭게 꾸미기 위해서 날짜에 맞게 문구를 README에 띄우면 어떨까해서 시작하게 되었는데, 별로 어렵지 않았고, 무엇보다 재미있었습니다. 그리고 이를 통해서 깃허브에서의 Camo의 정체와 캐시 정책이 어떤지 알게되었습니다.",
            color: "#69CDFB"
        }
    ]

    return <div>
        <CliMessage message = {greetTitle}></CliMessage>
        <CliMessage message = {greetIntro}></CliMessage>
        <CliMessage message = {greetFeel}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
    </div>
}

export default ToyProject