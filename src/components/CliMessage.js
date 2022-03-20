import React from "react";
import './style/CliMessage.css'

function CliMessage(props) {
    return <div>
        {
            props.message.map(
                v => {
                    return (
                        <p style={{color: v.color}}>{v.text}</p>
                    )
                }
            )
        }
    </div>
}

export default CliMessage