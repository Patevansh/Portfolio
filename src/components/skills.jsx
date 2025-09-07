export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: "🐍", color: "from-yellow-400 to-blue-500" },
        { name: "C++", icon: "⚡", color: "from-slate-600 to-blue-700" },
        { name: "JavaScript", icon: "🚀", color: "from-yellow-400 to-orange-500" },
        { name: "Java", icon: "☕", color: "from-red-500 to-orange-600" },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React.js", icon: "⚛️", color: "from-cyan-400 to-blue-600" },
        { name: "Express.js", icon: "🌐", color: "from-green-400 to-teal-600" },
        { name: "TailwindCSS", icon: "🎨", color: "from-cyan-400 to-blue-500" },
      ]
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: "🍃", color: "from-green-500 to-emerald-600" },
        { name: "MySQL", icon: "🗄️", color: "from-blue-500 to-indigo-600" },
        { name: "DSA", icon: "🧩", color: "from-amber-600 to-orange-600" },
      ]
    }
  ];

  return (
    <div className="w-full min-h-screen text-gray-600 px-6 py-8 pb-32 bg-transparent">
      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col w-full">
        {/* Header - centered */}
        <div className="mb-12 w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4">Skills & Technologies</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-700 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I've mastered throughout my development journey
          </p>
        </div>
        {/* Skills Grid - spread horizontally */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass-strong rounded-2xl p-8 hover:scale-105 transition-all duration-300 w-full"
            >
              <h3 className="text-2xl font-bold text-gray-700 mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span className="font-semibold text-lg">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Experience Summary - centered */}
        <div className="mt-16 w-full">
          <div className="glass rounded-2xl p-8 text-center w-full">
            <h3 className="text-3xl font-bold text-gray-700 mb-6">Portfolio Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
              <div className="text-center">
                <div className="text-4xl mb-2">93</div>
                <div className="text-2xl font-bold text-gray-700">7.92</div>
                <div className="text-gray-600 text-sm">Current CGPA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <div className="text-2xl font-bold text-gray-700">10+</div>
                <div className="text-gray-600 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-2xl font-bold text-gray-700">5+</div>
                <div className="text-gray-600 text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <div className="text-2xl font-bold text-gray-700">100%</div>
                <div className="text-gray-600 text-sm">Dedication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
