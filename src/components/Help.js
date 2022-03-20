import CliMessage from "./CliMessage"
import CliEmptyLine from "./CliEmptyLine"

function Help() {
    const introduce = [
        {
            text: "INTRODUCE",
            color: "#99CE9B"
        },
        {
            text: "저의 간단한 소개를 보여줍니다.",
            color: "#FFFFFF"
        }
    ]

    const life = [
        {
            text: "LIFE",
            color: "#99CE9B"
        },
        {
            text: "저의 삶을 연도별로 보여줍니다.",
            color: "#FFFFFF"
        }
    ]

    const skill = [
        {
            text: "SKILL",
            color: "#99CE9B"
        },
        {
            text: "저의 스킬을 보여줍니다.",
            color: "#FFFFFF"
        }
    ]

    const teamProject = [
        {
            text: "TEAM_PROJECT",
            color: "#99CE9B"
        },
        {
            text: "저의 팀프로젝트를 보여줍니다.",
            color: "#FFFFFF"
        }
    ]

    const toyProject = [
        {
            text: "TOY_PROJECT",
            color: "#99CE9B"
        },
        {
            text: "저의 토이프로젝트를 보여줍니다.",
            color: "#FFFFFF"
        }
    ]

    const cls = [
        {
            text: "CLS",
            color: "#99CE9B"
        },
        {
            text: "화면을 지웁니다.",
            color: "#FFFFFF"
        }
    ]

    const help = [
        {
            text: "HELP",
            color: "#99CE9B"
        },
        {
            text: "Portfolio 명령에 대한 도움말 정보를 제공합니다.",
            color: "#FFFFFF"
        }
    ]

    return <div>
        <CliMessage message = {introduce}></CliMessage>
        <CliMessage message = {life}></CliMessage>
        <CliMessage message = {skill}></CliMessage>
        <CliMessage message = {teamProject}></CliMessage>
        <CliMessage message = {toyProject}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
        <CliMessage message = {cls}></CliMessage>
        <CliMessage message = {help}></CliMessage>
    </div>
}

export default Help