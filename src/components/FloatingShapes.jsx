import React from 'react';

export default function FloatingShapes() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {/* Circle shapes */}
            <div className="bg-shape animate-float-1 w-32 h-32 bg-blue-500 rounded-full top-10 left-10"></div>
            <div className="bg-shape animate-float-2 w-24 h-24 bg-indigo-500 rounded-full top-1/4 right-20"></div>
            <div className="bg-shape animate-float-3 w-40 h-40 bg-blue-400 rounded-full bottom-20 left-1/4"></div>
            <div className="bg-shape animate-float-4 w-20 h-20 bg-indigo-600 rounded-full top-1/2 right-1/3"></div>
            <div className="bg-shape animate-float-5 w-36 h-36 bg-blue-300 rounded-full bottom-1/4 right-10"></div>
            
            {/* Square shapes */}
            <div className="bg-shape animate-float-2 w-16 h-16 bg-amber-500 top-20 right-1/4" style={{animationDelay: '2s'}}></div>
            <div className="bg-shape animate-float-4 w-28 h-28 bg-orange-400 bottom-32 left-1/3" style={{animationDelay: '4s'}}></div>
            <div className="bg-shape animate-float-1 w-12 h-12 bg-amber-600 top-1/3 left-1/2" style={{animationDelay: '6s'}}></div>
            
            {/* Triangle shapes */}
            <div className="bg-shape animate-float-3 top-1/2 left-20" style={{animationDelay: '3s'}}>
                <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-slate-500"></div>
            </div>
            <div className="bg-shape animate-float-5 bottom-40 right-1/2" style={{animationDelay: '5s'}}>
                <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-slate-400"></div>
            </div>
            
            {/* Diamond shapes */}
            <div className="bg-shape animate-float-1 w-8 h-8 bg-slate-500 rotate-45 top-3/4 left-10" style={{animationDelay: '1s'}}></div>
            <div className="bg-shape animate-float-3 w-12 h-12 bg-slate-400 rotate-45 top-10 right-1/2" style={{animationDelay: '7s'}}></div>
            
            {/* Hexagon shapes */}
            <div className="bg-shape animate-float-2 top-1/3 right-10" style={{animationDelay: '8s'}}>
                <div className="w-6 h-6 bg-gray-500 relative">
                    <div className="absolute inset-0 bg-gray-500 rotate-60"></div>
                    <div className="absolute inset-0 bg-gray-500 -rotate-60"></div>
                </div>
            </div>
            
            {/* More subtle background elements */}
            <div className="bg-shape animate-float-4 w-2 h-2 bg-blue-600 rounded-full top-16 left-1/2" style={{animationDelay: '9s'}}></div>
            <div className="bg-shape animate-float-5 w-3 h-3 bg-indigo-500 rounded-full bottom-16 left-1/2" style={{animationDelay: '10s'}}></div>
            <div className="bg-shape animate-float-1 w-4 h-4 bg-amber-500 rounded-full top-40 right-40" style={{animationDelay: '11s'}}></div>
            <div className="bg-shape animate-float-3 w-2 h-2 bg-slate-600 rounded-full bottom-1/3 left-20" style={{animationDelay: '12s'}}></div>
        </div>
    );
}
