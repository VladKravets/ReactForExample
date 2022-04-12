import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMeMo and useCallback'
}
export const DifficultCounting = () => {

    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i

        }
        return tempResultA

    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return <>
        <input value={a} onChange={e => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={e => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for A:{resultA}
        </div>
        <div>
            Result for B:{resultB}
        </div>
    </>


}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('Helps')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Vlad', 'Natasha', 'Yuliana', 'Misha'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users]);
    const addUser = () => {
        const newUsers = [...users, 'Valentina ' + new Date().getTime()]
        setUsers(newUsers)
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}
export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const addBook = () => {
        console.log(books)
        const newBooks = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newBooks)
    }

    const memorizeAddBook = useMemo(() => addBook, [books])
    const memorizeAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular ' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memorizeAddBook}/>
    </>
}
const BooksSecret = (props: { addBook: () => void }) => {
    console.log('BOOKS SECRET')
    return <div>
        <button onClick={() => props.addBook()}>Add book</button>
    </div>
}
const Books = React.memo(BooksSecret)