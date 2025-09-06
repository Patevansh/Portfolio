export default function About() {
    return (
        <div className="w-full min-h-screen text-gray-600 px-6 py-8 pb-32 relative bg-transparent">
            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">About Me</h1>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
                </div>

                {/* Main About Card */}
                <div className="max-w-4xl mx-auto mb-8">
                    <div className="p-8 rounded-3xl glass-strong transition-all duration-500 hover:scale-105">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* Profile Image/Avatar */}
                            <div className="flex-shrink-0">
                                <div className="relative group">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                                        VP
                                    </div>
                                </div>
                            </div>
                            
                            {/* Bio Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">Vansh Patel</h2>
                                <p className="text-blue-600 font-semibold mb-4">Software Development Engineer</p>
                                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                                    Hello! I'm a passionate Software Development Engineer with a love for creating innovative digital solutions. Currently pursuing my B.Tech in Computer Science Engineering, I enjoy turning complex problems into elegant, user-friendly applications.
                                </p>
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    I believe in the power of clean code, thoughtful design, and continuous learning. When I'm not coding, you'll find me exploring new technologies, working on personal projects, or contributing to the developer community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {/* Current Status Card */}
                    <div className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 hover:scale-105 text-center">
                        <div className="text-3xl mb-3">🎓</div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Current Status</h3>
                        <p className="text-gray-600 text-sm">Final Year Student</p>
                        <p className="text-gray-500 text-xs">B.Tech CSE</p>
                    </div>

                    {/* Passion Card */}
                    <div className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 hover:scale-105 text-center">
                        <div className="text-3xl mb-3">�</div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Passion</h3>
                        <p className="text-gray-600 text-sm">Building Web Applications</p>
                        <p className="text-gray-500 text-xs">Problem Solving</p>
                    </div>

                    {/* Goal Card */}
                    <div className="p-6 rounded-2xl glass hover:glass-strong transition-all duration-300 hover:scale-105 text-center">
                        <div className="text-3xl mb-3">🚀</div>
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">Goal</h3>
                        <p className="text-gray-600 text-sm">Innovative Solutions</p>
                        <p className="text-gray-500 text-xs">Continuous Learning</p>
                    </div>
                </div>

                {/* Personal Values & Interests */}
                <div className="max-w-4xl mx-auto mt-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Values */}
                        <div className="glass-strong p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">💡 What Drives Me</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="text-blue-500 mr-3 mt-1">•</span>
                                    <p className="text-gray-600">Creating solutions that make a real difference</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-500 mr-3 mt-1">•</span>
                                    <p className="text-gray-600">Writing clean, maintainable code</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-500 mr-3 mt-1">•</span>
                                    <p className="text-gray-600">Learning new technologies and best practices</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-500 mr-3 mt-1">•</span>
                                    <p className="text-gray-600">Collaborating with fellow developers</p>
                                </div>
                            </div>
                        </div>

                        {/* Interests */}
                        <div className="glass-strong p-6 rounded-2xl">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">🎯 Interests & Hobbies</h3>
                            <div className="space-y-3">
                                <div className="flex items-start">
                                    <span className="text-blue-500 mr-3 mt-1">•</span>
                                    <p className="text-gray-600">Algorithm design and optimization</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-500 mr-3 mt-1">•</span>
                                    <p className="text-gray-600">Building interactive web applications</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-500 mr-3 mt-1">•</span>
                                    <p className="text-gray-600">Exploring new frameworks and tools</p>
                                </div>
                                <div className="flex items-start">
                                    <span className="text-blue-500 mr-3 mt-1">•</span>
                                    <p className="text-gray-600">Contributing to open-source projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Philosophy Quote */}
                <div className="max-w-3xl mx-auto mt-8">
                    <div className="p-6 rounded-2xl glass-strong text-center">
                        <blockquote className="text-lg text-gray-600 italic leading-relaxed mb-4">
                            "Passionate about creating innovative solutions through clean code and thoughtful design. I believe in continuous learning and turning complex problems into elegant solutions."
                        </blockquote>
                        <p className="text-blue-600 font-semibold">- Ready to collaborate and build something amazing together!</p>
                        <div className="flex justify-center space-x-2 mt-4">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}