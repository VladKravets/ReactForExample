import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import {Rating} from "./components/Rating/Rating";


function App(props: any) {
    // что-то полезное
    return (
        <div>
            <PageTittle tittle={"This is APP component"}/>
            <PageTittle tittle={"Users"}/>
            Article 1
            <Rating value={1}/>


            <Accordion tittleValue={"Menu"} onClick={x=>x} collapsed={true}/>
            <Accordion tittleValue={"Users"} onClick={x=>x} collapsed={false}/>


            Article 2
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>

        </div>
    );
}

type PageTittlePropsType={
    tittle:string
}
function PageTittle(props: PageTittlePropsType) {
    return <h1>'{props.tittle}'</h1>
}


export default App;
