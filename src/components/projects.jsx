import { useState } from 'react';

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const projects = [
        {
            id: 0,
            title: "DSA Visualizer - Algorithm Learning Platform",
            description: "Interactive learning platform for Data Structures and Algorithms with real-time visualizations. Features bubble sort visualization, complexity analysis, and educational content for multiple algorithms and data structures.",
            longDescription: "A comprehensive educational platform designed to help students and developers understand Data Structures and Algorithms through interactive visualizations. The platform includes bubble sort visualization with step-by-step animation, complexity analysis for time and space, multiple algorithm categories (sorting, searching, trees, graphs), and OOP concept demonstrations. Built with modern web technologies to provide a smooth and engaging learning experience.",
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
            technologies: ["React", "JavaScript", "Tailwind CSS", "Vercel", "Algorithm Visualization"],
            category: "Frontend",
            githubUrl: "https://github.com/Patevansh/CodingSoul",
            liveUrl: "https://coding-soul-black.vercel.app/",
            featured: true,
            status: "Completed"
        }
    ];

    const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile', 'AI/ML'];

    const filteredProjects = selectedCategory === 'All' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const featuredProjects = projects.filter(project => project.featured);

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="w-full min-h-screen text-gray-600 px-6 py-12 pb-40 bg-transparent">
            {/* Main Content */}
            <div className="relative z-10 w-full">
                {/* Header - centered */}
                <div className="mb-16 w-full text-center">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        My Projects
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                        Here's a collection of projects I've worked on, showcasing my skills in various technologies and domains.
                    </p>
                </div>
                {/* Featured Projects Section - centered title, spread grid */}
                <div className="mb-16 w-full">
                    <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Projects</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {featuredProjects.map((project) => (
                            <div
                                key={project.id}
                                className="glass-strong rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group w-full"
                                onClick={() => openModal(project)}
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                            project.status === 'Completed' 
                                                ? 'bg-green-100 text-green-800' 
                                                : 'bg-blue-100 text-blue-800'
                                        }`}>
                                            {project.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h4>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                                +{project.technologies.length - 3} more
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                                selectedCategory === category
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                                    : 'glass-strong text-gray-700 hover:scale-105'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* All Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="glass-strong rounded-3xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
                            onClick={() => openModal(project)}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-white/90 text-gray-800 rounded-full text-sm font-semibold">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                        project.status === 'Completed' 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-blue-100 text-blue-800'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h4>
                                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                                            +{project.technologies.length - 3} more
                                        </span>
                                    )}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        <span className="mr-2">🐙</span>
                                        Code
                                    </a>
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors duration-200"
                                        >
                                            <span className="mr-2">�</span>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project Modal */}
                {selectedProject && (
                    <div className="fixed inset-0 bg-black/70 backdrop-blur-md z-[9999] flex items-center justify-center p-4">
                        <div className="modal-card bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative z-[10000]">
                            <div className="relative">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-64 object-cover"
                                />
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                                <div className="p-8">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-3xl font-bold text-current">{selectedProject.title}</h3>
                                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                        selectedProject.status === 'Completed' 
                                            ? 'badge-neon' 
                                            : 'badge-neon'
                                    }`}>
                                        {selectedProject.status}
                                    </span>
                                </div>
                                <p className="text-current/80 mb-6 leading-relaxed">{selectedProject.longDescription}</p>

                                <div className="mb-6">
                                    <h4 className="text-xl font-semibold mb-3 text-current">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 badge-neon rounded-xl font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={selectedProject.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-6 py-3 btn-neon rounded-xl transition-colors duration-200 font-semibold"
                                    >
                                        <span className="mr-2">🐙</span>
                                        View Code
                                    </a>
                                    {selectedProject.liveUrl && (
                                        <a
                                            href={selectedProject.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center px-6 py-3 btn-neon rounded-xl transition-colors duration-200 font-semibold"
                                        >
                                            <span className="mr-2">🚀</span>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}