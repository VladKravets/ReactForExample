import React, {useReducer} from 'react';
import {reducer} from "./Reducer";


type ItemType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    tittleValue: string
    collapsed: boolean
    onChange: (collapsed: boolean) => void
    items: [ItemType]
    onClick: (value: any) => void
}
type AccordionTittlePropsType = {
    tittle: string
    onClick: () => void
}


const UnControlAccordion: React.FC<AccordionPropsType> = (props) => {
    // let [collapsed, setCollapsed] = useState(true)
    let [collapsed, dispatch] = useReducer(reducer, false)

    return <div>
        <AccordionTittle tittle={props.tittleValue} onClick={() => {
            dispatch({type: "TOGGLE-COLLAPSED"})
        }}/>
        {!collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
    </div>

}

const AccordionTittle: React.FC<AccordionTittlePropsType> = ({tittle, onClick}) => {
    return <h3 onClick={() => {
        onClick()
    }}>--{tittle}--</h3>
};

export type AccordionBodyPropsType = {
    items: [ItemType]
    onClick: (value: any) => void
}

const AccordionBody: React.FC<AccordionBodyPropsType> = (props) => {
    return (
        <ul>
            {props.items.map((i, index) => <li onClick={() => {
                    props.onClick(i.value)
                }} key={index}>{i.title}</li>
            )}
        </ul>)
};


export default UnControlAccordion;
