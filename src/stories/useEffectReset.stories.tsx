import {useEffect, useState} from "react";

export default {
    title: 'useEffectReset'
}


export const ResetUseEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log('Component render' + counter)

    useEffect(() => {
        console.log('Effect occurred ' + counter)
        return () => {
            console.log('Effect reset ' + counter)
        };
    }, [counter])
    ;
    const onClickHandler = () => {
        setCounter(counter + 1)
    }
    return <>
        Hello,counter:{counter}
        <button onClick={onClickHandler}>+
        </button>
    </>

}
export const KeyPressExample = () => {
    const [text, setText] = useState('')
    console.log('Component render' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        };
    }, [])
    ;
    return <>
        text is being typed....:{text}
    </>

}