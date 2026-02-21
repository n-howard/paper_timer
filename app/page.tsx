import Image from "next/image";

export default function Home() {
  return (
        <main>
          <div className="bg-[url(/paperBackground.jpg)] min-h-screen">
          <div className="pt-[100px] box-border min-h-none">
            <div className="flex gap-[30px] font-[Patrick_Hand] text-8xl">
              <div className="pl-[10px] flex gap-[10px] text-center">
                {/* Segment 1 */}
                <div className="block w-[100px] font-black">
                  <div className="relative h-full">
                    {/* Regular */}
                    <div className="leading-[1.5] bg-stone-900 text-white w-full h-1/2 relative overflow-hidden text-center">2</div>
                    <div className="leading-[0] bg-stone-800 text-white w-full h-1/2 relative overflow-hidden text-center">2</div>
                  
                  
                  <div className="absolute h-full w-[100px] top-[0px] perspective-[400px]">
                    {/* Overlay */}
                    <div className="absolute overflow-hidden text-center w-full h-1/2 top-[0] leading-[1.5] bg-stone-900 text-white overlay-bottom">2</div>
                    <div className="border-t-2 border-black absolute bottom-[0] leading-[0] overflow-hidden text-center w-full h-1/2 bg-stone-800 text-white overlay-top">2</div>
                  </div>
                  </div>
                  </div>

                {/* Segment 2 */}
                <div className="block w-[100px] font-black">
                  <div className="relative h-full">
                    {/* Regular */}
                    <div className="leading-[1.5] bg-stone-900 text-white w-full h-1/2 relative overflow-hidden text-center">2</div>
                    <div className="leading-[0] bg-stone-800 text-white w-full h-1/2 relative overflow-hidden text-center">2</div>
                  
                  <div className="absolute h-full w-[100px] top-[0px] perspective-[400px]">
                    {/* Overlay */}
                    <div className="absolute overflow-hidden text-center w-full h-1/2 top-[0] leading-[1.5] bg-stone-900 text-white animate-flip-top overlay-bottom">2</div>
                    <div className="border-t-2 border-black absolute bottom-[0] leading-[0] overflow-hidden text-center w-full h-1/2 bg-stone-800 text-white animation-flip-bottom overlay-top">2</div>
                  </div>
                </div>
                </div>
              </div>
              </div>
  
            </div>
            
          </div>
        
          </main>
  );
}

