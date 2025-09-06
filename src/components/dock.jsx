import { FaHome, FaUser } from "react-icons/fa"
import { MdSchool } from "react-icons/md"
import { SiReact, SiGithub } from "react-icons/si"
import { RiContactsBook2Fill } from "react-icons/ri";

export default function Dock({activePage,setActivePage}) {
  const items = [
    { id: "home", icon: <FaHome className="text-blue-500" />, label: "Home", link: "#home" },
    { id: "about", icon: <FaUser className="text-blue-600" />, label: "About", link: "#about" },
    { id: "skills", icon: <SiReact className="text-cyan-400" />, label: "Skills", link: "#skills" },
    { id: "projects", icon: <SiGithub className="text-gray-500" />, label: "Projects", link: "#projects" },
    { id: "education", icon: <MdSchool className="text-green-500" />, label: "Education", link: "#education" },
    { id: "contact", icon: <RiContactsBook2Fill className="text-pink-500" />, label: "Contact", link: "#contact" },
  ]
  
  return (
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center bg-gray-100/90 backdrop-blur-2xl px-6 py-3 rounded-3xl shadow-2xl shadow-gray-400/50 border border-gray-300/70 z-50 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-r before:from-white/40 before:to-transparent before:pointer-events-none">
      {items.map((item, i) => {
          const isActive = activePage === item.id
          return(
          <a
          key={i}
          onClick={(e) => {
            e.preventDefault()
            setActivePage(item.id)
          }}
          
          href={item.link}
          className={`group relative mx-3 text-3xl rounded-xl p-3
                transition-all duration-300 ease-out 
            hover:scale-110 hover:-translate-y-1
            ${isActive 
                ? "text-blue-600 bg-white/80 backdrop-blur-md shadow-lg shadow-blue-200/50 border border-blue-200/60 scale-105" 
                : "text-gray-700 hover:text-blue-600 hover:bg-white/60 hover:backdrop-blur-md"
            }`}

            >
          {item.icon}

          <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-700 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg border border-gray-200/60">
            {item.label}
          </span>
        </a>
          )
        })}
    </div>
  )
}
