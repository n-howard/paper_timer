'use client'
import Image from "next/image";
import { useState, useRef, useEffect } from 'react';


function TimeType({ value, started }) {
  const digits = getDigit(value);
  return (
  

    <div className="flex gap-[10px] text-center">
      <Digit
      val={digits.first}
      started={started}/>
      <Digit
      val={digits.second}
      started={started}/>
    </div>
  )
}




function Digit({ val, started }) {
  const [displayNumTop, updateDisplayNumTop] = useState(0);
  const [displayNumBottom, updateDisplayNumBottom] = useState(0)
  const [overlayNumTop, updateOverlayNumTop] = useState(0)
  const [overlayNumBottom, updateOverlayNumBottom] = useState(0)
  const [itsTime, setItsTime] = useState(false)

  
  if (displayNumTop != val && (started==true)) {
    setItsTime(true)
    updateDisplayNumTop(val)
    updateOverlayNumBottom(val)
  }

  function endAni() {
    setItsTime(false)
    updateDisplayNumBottom(val)
    updateOverlayNumTop(val)
    

  }

 
 
  let overlayTop = "absolute overflow-hidden text-center w-full h-1/2 top-[0] leading-[1.5] bg-stone-900 text-white origin-bottom"
  let overlayBottom = "border-t-2 border-black absolute bottom-[0] leading-[0] overflow-hidden text-center w-full h-1/2 bg-stone-800 text-white origin-top"

  return (
  <div className="block w-[100px] font-black">
    <div className="relative h-full">
      {/* Regular */}
      <div className="leading-[1.5] bg-stone-900 text-white w-full h-1/2 relative overflow-hidden text-center">{displayNumTop}</div>
      <div className="leading-[0] bg-stone-800 text-white w-full h-1/2 relative overflow-hidden text-center">{displayNumBottom}</div>
    
    
    <div className="absolute h-full w-[100px] top-[0px] perspective-[300px]">
      {/* Overlay */}
      <div className={`${overlayTop} ${itsTime ? 'animate-flip-top' : ''}`} onAnimationEnd={endAni}>{overlayNumTop}</div>
      <div className={`${overlayBottom} ${itsTime ? 'animate-flip-bottom' : ''}`}>{overlayNumBottom}</div>
    </div>
    </div>
    </div>
)
}

 function getDigit(time: number) {
     const first = Math.floor(time/10)
     const second = time % 10
     return {
      first,
      second
     }
  }


export default function Home() {
  const [values, setValues] = useState({
    h1td: 0,
    h1bd: 0,
    h1to: 0,
    // finish this
  })
  const [seconds, updateSeconds] = useState(0)
  const [hours, updateHours] = useState(0);
  const [minutes, updateMinutes] = useState(0);
  const [secs, updateSecs] = useState(0)
  const [isStarted, start] = useState(false)
  const [isPaused, pause] = useState(true)
  const [isDone, done] = useState(false)
  useEffect (()=>{
    let interval;
    if (isDone) {
      clearInterval(interval)
      updateSeconds(0);
      updateHours(0)
      updateMinutes(0)
      updateSecs(0)
    }
    else if (isStarted && isPaused === false) {
      interval = setInterval(()=>{
          updateSeconds(seconds+1)
          updateHours(Math.floor(seconds/60/60))
          updateMinutes(Math.floor(seconds/60) - hours * 60)
          updateSecs(seconds%60)


      },1000);
    } else {
      clearInterval(interval);
    }
    }, [isStarted, isPaused, isDone, seconds, hours, minutes, secs]
  )
  

    
  
  

  
  
  return (
        <main>
          <div className="bg-[url(/paperBackground.jpg)] min-h-screen flex flex-col place-content-center">
            <img src="/tablet.png" className="absolute h-[100%] rotate-89 mx-auto w-fit left-0 right-0"></img>
            <div className="box-border min-h-none font-[Karla]">
              <div className="flex gap-[30px] text-8xl justify-center">
                <TimeType
                value={hours} 
                started={isStarted}/>
                <TimeType
                value={minutes} 
                started={isStarted}/>
                <TimeType
                value={seconds} 
                started={isStarted}/>
              
              
              </div>

              <div className="text-4xl pt-[20px] flex row gap-[50px] justify-center text-center relative">
                <button onClick={()=>{
                  start(true); 
                  pause(false);
                  done(false)}} className="box-border rounded-lg bg-gradient-to-r from-zinc-700 to-stone-900 hover:bg-gradient-to-br focus:bg-stone-900 focus:bg-none shadow-sm text-white p-2">Focus</button>
                <button onClick={()=>{
                  pause(true);
                  start(false)}} className="box-border rounded-lg bg-gradient-to-r from-zinc-700 to-stone-900 hover:bg-gradient-to-br focus:bg-stone-900 focus:bg-none shadow-sm text-white p-2">Pause</button>
                <button className="box-border rounded-lg bg-gradient-to-r from-zinc-700 to-stone-900 hover:bg-gradient-to-br focus:bg-stone-900 focus:bg-none shadow-sm text-white p-2">Break</button>
                <button onClick={()=>{
                  done(true)
                  pause(false)
                  start(false)}} className="box-border rounded-lg bg-gradient-to-r from-zinc-700 to-stone-900 hover:bg-gradient-to-br focus:bg-stone-900 focus:bg-none shadow-sm text-white p-2">Done</button>
                </div>
            </div>
            
          </div>
          
        
          </main>
  );
}


