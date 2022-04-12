import React, {useState} from 'react';


type PropsType = {
    on: boolean
    onChange:(on:boolean)=>void
}


export const OnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "15px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        padding: "15px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }


    return (
        <div>
            <div style={onStyle} onClick={() => !on && setOn(true)}>on</div>
            <div style={offStyle} onClick={() => on && setOn(false)}>off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

