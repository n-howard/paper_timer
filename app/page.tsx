import Image from "next/image";
import { useState, useRef, useEffect } from 'react';


export default function Home() {
  let itsTime = false;
  const conditionTop = itsTime ? 'animate-flip-top' : '';
  const conditionBottom = itsTime ? 'animate-flip-bottom' : '';
  return (
        <main>
          <div className="bg-[url(/paperBackground.jpg)] min-h-screen flex flex-col place-content-center">
            <img src="/tablet.png" className="absolute h-[100%] rotate-89 mx-auto w-fit left-0 right-0"></img>
            <div className="box-border min-h-none font-[Karla]">
              
              <div className="flex gap-[30px] text-8xl justify-center">
                {/* Seconds */}
                <div className="flex gap-[10px] text-center">
                  {/* Segment 1 */}
                  <div className="block w-[100px] font-black">
                    <div className="relative h-full">
                      {/* Regular */}
                      <div className="leading-[1.5] bg-stone-900 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                      <div className="leading-[0] bg-stone-800 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                    
                    
                    <div className="absolute h-full w-[100px] top-[0px] perspective-[400px]">
                      {/* Overlay */}
                      <div className="absolute overflow-hidden text-center w-full h-1/2 top-[0] leading-[1.5] bg-stone-900 text-white overlay-bottom">0</div>
                      <div className="border-t-2 border-black absolute bottom-[0] leading-[0] overflow-hidden text-center w-full h-1/2 bg-stone-800 text-white overlay-top">0</div>
                    </div>
                    </div>
                    </div>

                  {/* Segment 2 */}
                  <div className="block w-[100px] font-black">
                    <div className="relative h-full">
                      {/* Regular */}
                      <div className="leading-[1.5] bg-stone-900 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                      <div className="leading-[0] bg-stone-800 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                    
                    <div className="absolute h-full w-[100px] top-[0px] perspective-[400px]">
                      {/* Overlay */}
                      <div className="absolute overflow-hidden text-center w-full h-1/2 top-[0] leading-[1.5] bg-stone-900 text-white overlay-bottom">0</div>
                      <div className="border-t-2 border-black absolute bottom-[0] leading-[0] overflow-hidden text-center w-full h-1/2 bg-stone-800 text-white overlay-top">0</div>
                    </div>
                  </div>
                  </div>
                </div>
                {/* Minutes */}
                <div className="flex gap-[10px] text-center">
                  {/* Segment 1 */}
                  <div className="block w-[100px] font-black">
                    <div className="relative h-full">
                      {/* Regular */}
                      <div className="leading-[1.5] bg-stone-900 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                      <div className="leading-[0] bg-stone-800 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                    
                    
                    <div className="absolute h-full w-[100px] top-[0px] perspective-[400px]">
                      {/* Overlay */}
                      <div className="absolute overflow-hidden text-center w-full h-1/2 top-[0] leading-[1.5] bg-stone-900 text-white overlay-bottom">0</div>
                      <div className="border-t-2 border-black absolute bottom-[0] leading-[0] overflow-hidden text-center w-full h-1/2 bg-stone-800 text-white overlay-top">0</div>
                    </div>
                    </div>
                    </div>

                  {/* Segment 2 */}
                  <div className="block w-[100px] font-black">
                    <div className="relative h-full">
                      {/* Regular */}
                      <div className="leading-[1.5] bg-stone-900 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                      <div className="leading-[0] bg-stone-800 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                    
                    <div className="absolute h-full w-[100px] top-[0px] perspective-[400px]">
                      {/* Overlay */}
                      <div className="absolute overflow-hidden text-center w-full h-1/2 top-[0] leading-[1.5] bg-stone-900 text-white overlay-bottom">0</div>
                      <div className="border-t-2 border-black absolute bottom-[0] leading-[0] overflow-hidden text-center w-full h-1/2 bg-stone-800 text-white overlay-top">0</div>
                    </div>
                  </div>
                  </div>
                </div>
                {/* Seconds */}
                <div className="flex gap-[10px] text-center">
                  {/* Segment 1 */}
                  <div className="block w-[100px] font-black">
                    <div className="relative h-full">
                      {/* Regular */}
                      <div className="leading-[1.5] bg-stone-900 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                      <div className="leading-[0] bg-stone-800 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                    
                    
                    <div className="absolute h-full w-[100px] top-[0px] perspective-[400px]">
                      {/* Overlay */}
                      <div className="absolute overflow-hidden text-center w-full h-1/2 top-[0] leading-[1.5] bg-stone-900 text-white overlay-bottom">0</div>
                      <div className="border-t-2 border-black absolute bottom-[0] leading-[0] overflow-hidden text-center w-full h-1/2 bg-stone-800 text-white overlay-top">0</div>
                    </div>
                    </div>
                    </div>

                  {/* Segment 2 */}
                  <div className="block w-[100px] font-black">
                    <div className="relative h-full">
                      {/* Regular */}
                      <div className="leading-[1.5] bg-stone-900 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                      <div className="leading-[0] bg-stone-800 text-white w-full h-1/2 relative overflow-hidden text-center">0</div>
                    
                    <div className="absolute h-full w-[100px] top-[0px] perspective-[400px]">
                      {/* Overlay */}
                      <div className="absolute overflow-hidden text-center w-full h-1/2 top-[0] leading-[1.5] bg-stone-900 text-white overlay-bottom">0</div>
                      <div className="border-t-2 border-black absolute bottom-[0] leading-[0] overflow-hidden text-center w-full h-1/2 bg-stone-800 text-white overlay-top">0</div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

              <div className="text-4xl pt-[20px] flex row gap-[50px] justify-center text-center relative">
                <button className="box-border rounded-lg bg-gradient-to-r from-zinc-700 to-stone-900 hover:bg-gradient-to-br focus:bg-stone-900 focus:bg-none shadow-sm text-white p-2">Focus</button>
                <button className="box-border rounded-lg bg-gradient-to-r from-zinc-700 to-stone-900 hover:bg-gradient-to-br focus:bg-stone-900 focus:bg-none shadow-sm text-white p-2">Pause</button>
                <button className="box-border rounded-lg bg-gradient-to-r from-zinc-700 to-stone-900 hover:bg-gradient-to-br focus:bg-stone-900 focus:bg-none shadow-sm text-white p-2">Break</button>
                <button className="box-border rounded-lg bg-gradient-to-r from-zinc-700 to-stone-900 hover:bg-gradient-to-br focus:bg-stone-900 focus:bg-none shadow-sm text-white p-2">Done</button>
                </div>
            </div>
            
          </div>
        
          </main>
  );
}


