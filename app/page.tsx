import Image from "next/image";

export default function Home() {
  return (
        <main>
          <div className="bg-[url(/paperBackground.jpg)] flex min-h-screen items-center justify-center">
            <div className="text-8xl text-stone-700 border-8 border-stone-500/10 grid grid-cols-3 gap-x-px rounded shadow-2xl font-[Patrick_Hand]">
              <div className="relative bg-[url(/border.png)] p-8">
                <div className="absolute inset-0 grid grid-rows-2">
                  <div className="bg-linear-to-br from-stone-700/10 to-stone-900/10"></div>
                  <div className="bg-linear-to-br from-stone-700/10 to-stone-900/10"></div>
                </div>
                <span className="relative">01</span>
                <div className="absolute inset-0 flex items-center">
                  <div className="h-px w-full bg-black/10"></div>
                </div>
                </div>
              
              <div className="relative bg-[url(/border.png)] p-8">
                <div className="absolute inset-0 grid grid-rows-2">
                  <div className="bg-linear-to-br from-stone-700/10 to-stone-900/10"></div>
                  <div className="bg-linear-to-br from-stone-700/10 to-stone-900/10"></div>
                </div>
                <span className="relative">10</span>
                <div className="absolute inset-0 flex items-center">
                  <div className="h-px w-full bg-black/10"></div>
                </div>
                </div>
      
              <div className="relative bg-[url(/border.png)] p-8">
              <div className="absolute inset-0 grid grid-rows-2">
                  <div className="bg-linear-to-br from-stone-700/10 to-stone-900/10"></div>
                  <div className="bg-linear-to-br from-stone-700/10 to-stone-900/10"></div>
                </div>
                <span className="relative">20</span>
                <div className="absolute inset-0 flex items-center">
                  <div className="h-px w-full bg-black/10"></div>
                </div>
                </div>
            </div>
            
          </div>
        
          </main>
  );
}
