import React,{useState, useEffect, useRef} from 'react'
 const INITIAL_COUNT=20
const twoDigits =(num)=> String(num).padStart(2,'0')


function SwitchToggle(){

const [secondRemaining, setSecondRemaining] = useState(INITIAL_COUNT)
const secondsToDisplay = secondRemaining % 60
const minuteRemaining =(secondRemaining-secondsToDisplay)/60
const minuteToDisplay =(minutesRemaining- minutesToDisplay)/60

const handleStart =async()=>{
    setStatus(STATUS.STARTED)
    setSecondRemaining(INITIAL_COUNT)
}

const STATUS={

    STOPPED:<b><a type='button' onClick={handleStart} className="text-danger" style={{marginLeft:"160px"}}></a></b>
}
const [status, setStatus] =useState(STATUS.STOPPED)
useInterval(
()=>{
    if (secondRemaining > 0)
    {
        setSecondRemaining(secondRemaining-1)
    }
    else{
        setStatus(STATUS.STOPPED)
    }
},
status === STATUS.STARTED ? 1000 : null,
)
function useInterval(callback, delay){
    const savedCallback = useRef()

    useEffect(()=>{
        savedCallback.current =callback
    },[callback])

    useEffect(()=>{
        function tick(){
            savedCallback.current()
        }
        if (delay !== null){
            let id = setInterval(tick, delay)
            return ()=> clearInterval(id)
        }
        },[delay])
    }
    return(
        {
         
          
        }
    )
}

export default Otp-practice