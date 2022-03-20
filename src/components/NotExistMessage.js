import CliMessage from "./CliMessage"
import CliEmptyLine from "./CliEmptyLine"

function NotExistsMessage(props) {
    const message = [
        {
            text: `'${props.text}'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는 배치 파일이 아닙니다.`,
            color: "#FFFFFF"
        }
    ]

    return <div>
        <CliMessage message = {message}></CliMessage>
        <CliEmptyLine></CliEmptyLine>
    </div>
}

export default NotExistsMessage