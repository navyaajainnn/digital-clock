/* eslint-disable no-unused-vars */
import { useState,useEffect } from "react"

function DigitalClock(){
    const[time, setTime]= useState(new Date());

    useEffect(()=>{
        const intervalId= setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return ()=>{
            clearInterval(intervalId);
        }
    }, []);


    function formatTime(){
        let h= time.getHours();
        let m=time.getMinutes();
        let s=time.getSeconds();

        const meridien=h>=12?"PM":"AM";
        h=h%12 || 12;
        return `${padZero(h)}:${padZero(m)}:${padZero(s)} ${meridien}`
    }

    function padZero(number){
        return (number<10?"0":"") +number
    }

    return(
        <>
        <div className="clock-container">
            <div className="clock">
                <span>{formatTime()}</span>
            </div>
        </div>
        </>
    );
}

export default DigitalClock