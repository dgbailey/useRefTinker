import React, {useState,useRef,useEffect} from 'react';
import styled from 'styled-components';



export const Counter = () => {



    const [count,setCount] = useState(0)
    //create an interval updating state every second
    
    function callBack(){
        setCount(count + 1);
    }

    let myRef = useRef();


    useEffect(() => {
        //this will run on every new function call
        myRef.current = callBack;
    })


    useEffect(() => {
        //this will run on mount only
        function c(){
            myRef.current();
            //this ref is key to mutating the function call on each rerender so we use the most up to date
            //state
        }

        let interval = setInterval(c,1000);

        return () => clearInterval(interval)
    },[])

    return(


        <StyledCounter>
            {count}
        </StyledCounter>
    )
}













const StyledCounter = styled.div `

width:300px;
height:100px;
display:flex;
align-content:center;
justify-content:center;
font-size:20px;
margin:100px auto;

`