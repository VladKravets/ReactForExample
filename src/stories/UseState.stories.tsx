import {useState} from "react";

export default {
    title: 'useState .demo',

}

const infinityInteger = () => {
    console.log(infinityInteger)
    return 101
}

export const Example1 = () => {
    console.log('Example1')
    const [counter, setCounter] = useState(infinityInteger)


    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}
