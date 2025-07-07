import { useState } from "react";
import { Home, User, TrendingUp, FolderCode, Send } from "lucide-react";

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "experience", label: "Experience", icon: TrendingUp },
    { id: "projects", label: "Projects", icon: FolderCode },
    { id: "contact", label: "Contact", icon: Send },
  ];

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-full p-4 shadow-lg">
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-label={`Navigate to ${item.label}`}
                className={`group relative flex items-center justify-center size-8 p-2 rounded-full transition-all duration-300 hover:scale-120 ${
                  activeSection === item.id
                    ? "border border-gray-500 scale-125"
                    : " hover:bg-neutral-200"
                }`}
              >
                <span className="absolute right-12 px-3 py-1 bg-neutral-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>

                <item.icon />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
