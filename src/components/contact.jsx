import React from 'react';

export default function Contact() {
    const contactInfo = [
        {
            icon: '📧',
            label: 'Email',
            value: 'Vanshp9824@gmail.com',
            link: 'mailto:Vanshp9824@gmail.com'
        },
        {
            icon: '📱',
            label: 'Phone',
            value: '+91 9054255770',
            link: 'tel:+919054255770'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: '/in/vanshpatel005',
            link: 'https://www.linkedin.com/in/vanshpatel005/'
        }
    ];

    const socialLinks = [
        {
            name: 'GitHub',
            icon: '🐙',
            url: 'https://github.com/Patevansh',
            color: 'from-gray-600 to-gray-800'
        },
        {
            name: 'LinkedIn',
            icon: '💼',
            url: 'https://www.linkedin.com/in/vanshpatel005/',
            color: 'from-blue-600 to-blue-800'
        },
        {
            name: 'LeetCode',
            icon: 'LC',
            url: 'https://leetcode.com/u/vanshp234/',
            color: 'from-orange-500 to-yellow-600'
        }
    ];

    return (
        <div className="w-full min-h-screen text-gray-600 px-6 py-12 pb-40 relative bg-transparent">
            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Let's create something amazing together. I'm always open to discussing new opportunities and interesting projects.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Quick Contact */}
                        <div className="glass-strong p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Information</h3>
                            <div className="space-y-4">
                                {contactInfo.map((info, index) => (
                                    <a
                                        key={index}
                                        href={info.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center p-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 group"
                                    >
                                        <span className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                                            {info.icon}
                                        </span>
                                        <div>
                                            <p className="font-semibold text-gray-800">{info.label}</p>
                                            <p className="text-gray-600">{info.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-strong p-8 rounded-3xl">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Connect With Me</h3>
                            <div className="flex flex-wrap justify-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center px-6 py-3 rounded-2xl bg-gradient-to-r ${social.color} text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                                    >
                                        <span className="text-lg mr-2 font-bold">
                                            {social.icon}
                                        </span>
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}