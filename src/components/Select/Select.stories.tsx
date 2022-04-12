import React, {useState} from 'react';

import {Select} from "./Select";

export default {
    title: 'Select stories',
    component: Select,
}

export const SelectWithValue = () => {
    const [value, setValue] = useState('1')
    return <>
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk',country:'Belarus'},
                    {value: '2', title: 'Moscow',country:'Russia'},
                    {value: '3', title: 'Kiev',country:'Ukraine'}
                ]}/>

    </>
}
export const SelectWithoutValue = () => {
    const [value, setValue] = useState(null)

    return <>
        <Select value={null}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk',country:'Belarus'},
                    {value: '2', title: 'Moscow',country:'Russia'},
                    {value: '3', title: 'Kiev',country:'Ukraine'}
                ]}/>
    </>
}