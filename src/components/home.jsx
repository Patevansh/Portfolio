import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        const roles = ["Software Development Engineer", "Full Stack Developer", "Algorithm Enthusiast", "Problem Solver"];
        let index = 0;
        const roleElement = document.getElementById("role");
        const interval = setInterval(() => {
            index = (index + 1) % roles.length;
            if (roleElement) {
                roleElement.textContent = roles[index];
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full min-h-screen text-gray-600 px-6 py-12 bg-transparent flex flex-col">
            {/* Top Spacer - increased height */}
            <div className="h-24 md:h-36 lg:h-48" />
            {/* Main Content - Centered Hero */}
            <div className="relative z-10 flex flex-col w-full items-center justify-center text-center">
                {/* Large Name Display - centered */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-800 mb-8 tracking-tight">
                    VANSH PATEL
                </h1>
                {/* Dynamic Role - centered */}
                <div className="mb-6">
                    <span 
                        className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-slate-700 via-blue-600 to-indigo-700 bg-clip-text text-transparent transition-all duration-500" 
                        id="role"
                    >
                        Software Development Engineer
                    </span>
                </div>
                {/* Simple tagline - centered */}
                <p className="text-xl md:text-2xl text-gray-500 mb-10 leading-relaxed">
                    Crafting digital experiences with clean code and creative solutions
                </p>
                {/* Call to action - centered, stacked */}
                <div className="flex flex-col gap-6 w-full max-w-md mx-auto">
                    <button 
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        className="glass-strong px-8 py-4 text-gray-700 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 text-lg"
                    >
                        Explore My Work ✨
                    </button>
                    <button 
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-2xl font-semibold hover:scale-105 transition-all duration-300 text-lg"
                    >
                        Get In Touch 🚀
                    </button>
                </div>
            </div>
        </div>
    );
}
