import CliMessage from "./CliMessage"
import CliEmptyLine from "./CliEmptyLine"

function Life() {
    const year2014 = [
        {
            text: "2014",
            color: "#99CE9B"
        },
    ]
    const sentence2014 = [
        {
            text: "처음으로 C언어를 통해 프로그래밍을 접했습니다.",
            color: "#FFFFFF"
        },
        {
            text: "// 재밌었습니다....",
            color: "#69CDFB"
        }
    ]

    const year2015_2016 = [
        {
            text: "2015, 2016",
            color: "#99CE9B"
        },
    ]
    const sentence2015_2016 = [
        {
            text: "정보올림피아드 전국 본선에 나갔습니다.",
            color: "#FFFFFF"
        },
        {
            text: "// 새로운 경험이였습니다.",
            color: "#69CDFB"
        }
    ]

    const year2018 = [
        {
            text: "2018",
            color: "#99CE9B"
        },
    ]
    const sentence2018 = [
        {
            text: "국제정보올림피아드 여름학교에 참가하였습니다.",
            color: "#FFFFFF"
        },
        {
            text: "// 이때 프로그래밍이 제 길이 아닌 줄 알았습니다...ㅠ",
            color: "#69CDFB"
        }
    ]

    const year2020 = [
        {
            text: "2020",
            color: "#99CE9B"
        },
    ]
    const sentence2020 = [
        {
            text: "대덕소프트웨어마이스터고등학교를 진학하였습니다.",
            color: "#FFFFFF"
        },
        {
            text: "// 알고리즘에 집착하는 문제만을 푸는 것이 아닌 만드는 것에 집중하게 되어서 즐겁습니다.",
            color: "#69CDFB"
        }
    ]

    const year2021 = [
        {
            text: "2021",
            color: "#99CE9B"
        },
    ]
    const sentence2021 = [
        {
            text: "BACKEND 공부를 시작하였습니다.",
            color: "#FFFFFF"
        },
        {
            text: "// 프론트엔드보다 백엔드에 좀 더 관심이 생겨서 본격적으로 분야를 정하고 공부하게 되었습니다.",
            color: "#69CDFB"
        }
    ]

    return <div>
        <CliMessage message = {year2014}></CliMessage>
        <CliMessage message = {sentence2014}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
        <CliMessage message = {year2015_2016}></CliMessage>
        <CliMessage message = {sentence2015_2016}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
        <CliMessage message = {year2018}></CliMessage>
        <CliMessage message = {sentence2018}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
        <CliMessage message = {year2020}></CliMessage>
        <CliMessage message = {sentence2020}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
        <CliMessage message = {year2021}></CliMessage>
        <CliMessage message = {sentence2021}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
    </div>
}

export default Life