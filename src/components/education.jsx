export default function Education() {
    const educationData = [
        {
            degree: "Bachelor of Technology (Computer Science Engineering)",
            institution: "Parul University",
            location: "Vadodara, Gujarat",
            period: "2022 - current",
            cgpa: "7.92 CGPA",
            description: "Specialized in Computer Science and Engineering with focus on software development, algorithms, and data structures.",
            highlights: [
                "Strong foundation in Programming Languages",
                "Data Structures & Algorithms",
                "Software Engineering Principles",
                "Database Management Systems",
                "Web Development Technologies"
            ]
        },
        {
            degree: "Higher Secondary Education (12th)",
            institution: "Advaita Gurukul",
            location: "Silvassa, Dadra and Nagar Haveli",
            period: "2021 - 2022",
            percentage: "73.8%",
            stream: "Science (PCM)",
            description: "Completed senior secondary education with Physics, Chemistry, and Mathematics.",
            highlights: [
                "Mathematics - Strong analytical skills",
                "Physics - Problem-solving approach",
                "Chemistry - Logical thinking",
                "Computer Science basics"
            ]
        },
        {
            degree: "Secondary Education (10th)",
            institution: "Advaita Gurukul",
            location: "Silvassa, Dadra and Nagar Haveli",
            period: "2019 - 2020",
            percentage: "72.6%",
            description: "Strong academic foundation with excellent performance in core subjects.",
            highlights: [
                "Mathematics & Science Excellence",
                "Strong Foundation in English",
                "Basic Computer Knowledge",
                "Consistent Academic Performance"
            ]
        }
    ];

    return (
        <div className="w-full min-h-screen text-gray-600 px-6 py-12 pb-40 relative bg-transparent">
            {/* Main Content */}
            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        My Education
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        My educational journey that shaped my technical foundation and problem-solving skills.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto rounded-full"></div>
                </div>

                {/* Education Timeline */}
                <div className="space-y-8">
                    {educationData.map((edu, index) => (
                        <div key={index} className="relative">
                            {/* Timeline line */}
                            {index !== educationData.length - 1 && (
                                <div className="absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-400 to-indigo-600 hidden md:block"></div>
                            )}
                            
                            {/* Education Card */}
                            <div className="glass-strong rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 relative">
                                {/* Timeline dot */}
                                <div className="absolute -left-2 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                                
                                <div className="md:ml-8">
                                    {/* Header */}
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-lg font-semibold text-blue-600 mb-1">
                                                {edu.institution}
                                            </p>
                                            <p className="text-gray-600 mb-2">
                                                📍 {edu.location}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold mb-2">
                                                {edu.period}
                                            </span>
                                            <div className="text-lg font-bold text-gray-800">
                                                {edu.cgpa || edu.percentage}
                                            </div>
                                            {edu.stream && (
                                                <div className="text-sm text-gray-600">
                                                    {edu.stream}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {edu.description}
                                    </p>

                                    {/* Highlights */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {edu.highlights.map((highlight, idx) => (
                                                <div key={idx} className="flex items-center">
                                                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                                    <span className="text-gray-600">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Academic Achievements */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Academic Excellence</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="glass-strong p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                            <div className="text-4xl mb-4">🎯</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Consistent Performance</h4>
                            <p className="text-gray-600">Maintained high academic standards throughout educational journey</p>
                        </div>
                        <div className="glass-strong p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                            <div className="text-4xl mb-4">💻</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Technical Focus</h4>
                            <p className="text-gray-600">Specialized in Computer Science with hands-on programming experience</p>
                        </div>
                        <div className="glass-strong p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300">
                            <div className="text-4xl mb-4">🚀</div>
                            <h4 className="text-xl font-bold text-gray-800 mb-2">Future Ready</h4>
                            <p className="text-gray-600">Strong foundation for professional software development career</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}