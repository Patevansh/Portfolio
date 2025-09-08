import { FaHome, FaUser } from "react-icons/fa"
import { MdSchool } from "react-icons/md"
import { SiReact, SiGithub } from "react-icons/si"
import { RiContactsBook2Fill } from "react-icons/ri";

export default function Dock({activePage,setActivePage}) {
  const items = [
  { id: "home", icon: <FaHome />, label: "Home", link: "#home", color: 'cyan' },
  { id: "about", icon: <FaUser />, label: "About", link: "#about", color: 'magenta' },
  { id: "skills", icon: <SiReact />, label: "Skills", link: "#skills", color: 'violet' },
  { id: "projects", icon: <SiGithub />, label: "Projects", link: "#projects", color: 'green' },
  { id: "education", icon: <MdSchool />, label: "Education", link: "#education", color: 'amber' },
  { id: "contact", icon: <RiContactsBook2Fill />, label: "Contact", link: "#contact", color: 'pink' },
  ]
  
  return (
  <div className="dock fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center glass-strong px-6 py-3 rounded-3xl shadow-2xl z-50">
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
          className={`group relative mx-3 text-3xl rounded-xl p-3 transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 ${isActive ? 'text-current bg-white/10 backdrop-blur-md shadow-lg scale-105' : 'text-current/80 hover:text-current bg-white/5 hover:backdrop-blur-md'}`}

            >
          <span className={`icon-wrap icon-${item.color} ${isActive ? 'neon-glow-' + item.color : ''}`}>{item.icon}</span>

          <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-medium text-current bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg border border-white/5">
            {item.label}
          </span>
        </a>
          )
        })}
    </div>
  )
}
