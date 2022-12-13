import React,{useState,useEffect} from 'react'
import '../styles/App.css';

// const Result = (props) => {

//     const {num1, num2} = props;//destructuring
//     return(
//         // <p id='result'>{Number(props.num1) + Number(props.num2)}</p>
//         <p id='result'>{num1 + num2}</p>//destructuring
//     )
// }


//
const Result = ({num1,num2}) => {//simply I destructure here

    return(
        // <p id='result'>{Number(props.num1) + Number(props.num2)}</p>
        <p id='result'>{num1 + num2}</p>//destructuring
    )
}


export default Result;
