import React, {useState} from 'react'

export function HumanInfo() {
    const [name, setName] = useState('Alex')
    const [age, setAge] = useState<any>(18)
    const [friends, setFriends] = useState(["Brad", "Mehdi"])

    const setAgeHandler = () => {
        if (age >= 18) {
            setAge(age + 1)
        }
    }

    return <>
        <h1> My name is {name} and I'm {age} </h1>
        <button onClick={setAgeHandler}>С днем рождения!</button>
    </>
}