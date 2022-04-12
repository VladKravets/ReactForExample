import React, {ChangeEvent, useState} from 'react';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Input'
}


export const СontrolledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <input
            value={parentValue}
            onChange={onChangeHandler}/>
    );
};
export const СontrolledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
};
export const СontrolledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('0')
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
};

