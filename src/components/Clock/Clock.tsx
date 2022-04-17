import React, {useEffect, useState} from 'react';

const get2digitsString = (num: number) => num < 10 ? '0' + num : num

export const Clock = React.memo(() => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, []);
    return (


        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    );
});
