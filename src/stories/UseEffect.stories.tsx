import {useEffect, useState} from "react";

export default {
    title: 'useEffect .demo',

}


export const SimpleExample1 = () => {
    console.log('SimpleExample')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect рендерится всегда')
        document.title = counter.toString()
    })
    useEffect(() => {
        console.log('useEffect ТОЛЬКО со старта рендерюсь(compDidMount)')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect со всеме рендерюсь со старта,а потом только по изменению COUNTER')
        document.title = counter.toString()
    }, [counter])
    return <>
        Hello,{counter} {fake}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setFake(fake + 1)}>+</button>
    </>
}
export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        // setTimeout(() => {
        //     console.log('setTimeout')
        //     document.title = counter.toString()
        // }, 3000)
        setInterval(() => {
            console.log('tick' + counter)
            setCounter(state => state + 1)
        }, 1000)

    }, [])

    return <>
        Hello,counter:{counter}-- fake:{fake}
        {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>+</button>*/}
    </>
}
