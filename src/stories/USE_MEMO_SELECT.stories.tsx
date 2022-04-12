import React, {useState} from 'react';

import {Select} from "../components/Select/Select";

export default {
    title: 'Select with UseMemo',
    component: Select,
}

export const SelectWithUseMemo = () => {
    console.log('Select')
    const [value, setValue] = useState('1')
const [items,setItems]=useState([
    {value: '1', title: 'Minsk',country:'Belarus'},
    {value: '2', title: 'Moscow',country:'Russia'},
    {value: '3', title: 'Kiev',country:'Ukraine'}
])

// const desiredСountry=надо скопировать items,
//         а потом через фильтры отображать разные селекты
    return <>
        <Select value={value}
                onChange={setValue}
                items={items}/>

    </>
}
