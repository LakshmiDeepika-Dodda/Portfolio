import React, { useEffect, useState } from "react";

const navItems = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

const IntroComponent = () => {
  const [activeSection, setActiveSection] = useState(navItems[0].id);

  useEffect(() => {
    const handleScroll = () => {
      let current = navItems[0].id;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            current = item.id;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="lg:sticky lg:top-10 lg:p-10 lg:pl-28 pt-10 p-3">
        <div>
          <h1 className="lg:text-4xl text-3xl font-bold">Lakshmi Deepika Dodda</h1>
          <h3 className="mt-1 text-lg">Frontend Developer</h3>
          <p className="mt-3 text-lg text-gray-400">
            I develope user-friendly, responsive web applications.
          </p>
        </div>
        <nav className="mt-24 hidden lg:block">
          <ul className="flex flex-col text-sm gap-6 uppercase font-sans text-gray-400 font-semibold">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`group flex items-center w-fit transition-all duration-300
                     ${activeSection === item.id ? "text-white font-bold" : "text-gray-400"
                    }`}
                >
                  <span
                    className={`h-[2px] w-8 transition-all duration-300 mr-2
                      group-hover:w-14 group-hover:bg-white
                       ${activeSection === item.id ? "bg-white w-14" : "bg-gray-400"
                      }`}
                  ></span>
                  <span className="ml-2 group-hover:text-white transition-all">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default IntroComponent;
