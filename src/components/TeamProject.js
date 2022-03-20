import CliMessage from "./CliMessage"
import CliEmptyLine from "./CliEmptyLine"

function TeamProject() {
    const todayTitle = [
        {
            text: "Today 오늘",
            color: "#99CE9B"
        }
    ]
    const todayIntro = [
        {
            text: "투두리스트 관련 기능을 제공하는 프로젝트입니다.",
            color: "#FFFFFF"
        }
    ]
    const todayFeel = [
        {
            text: "최대한 많은 것을 해볼려고 했고, 요청 수 제한 및 단위테스트 및 통합테스트, 에러 Response 다양화 등 많은 것을 했습니다. 많은 것을 얻을 수 있는 프로젝트였습니다.",
            color: "#69CDFB"
        }
    ]

    return <div>
        <CliMessage message = {todayTitle}></CliMessage>
        <CliMessage message = {todayIntro}></CliMessage>
        <CliMessage message = {todayFeel}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
    </div>
}

export default TeamProject