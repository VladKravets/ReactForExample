import React, {useState, KeyboardEvent} from 'react';
import s from './Select.module.css'

type ItemType = {
    title: string
    value: any
    country:string
}
type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemType[]
}
export const Select: React.FC<SelectPropsType> = (props) => {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElementValue] = useState(props.value)
    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElement)
    const changeItems = () => setActive(!active)
    const onClickInput = (value: any) => {
        props.onChange(value);
        changeItems()
    }
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i] === hoveredElement) {
                if (props.items[i + 1]) {
                    setHoveredElementValue(props.items[i + 1].value)
                    break
                }
            }
        }
    }
    return (
        <>
            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={s.main} onClick={changeItems}>
                    {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {
                                setHoveredElementValue(i.value)
                            }}
                            className={s.item + '' + (hoveredItem === i ? s.selected : '')}
                            key={i.value}
                            onClick={() => {
                                onClickInput(i.value)
                            }}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
};
