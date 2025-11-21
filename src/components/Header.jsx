

// import { useEffect, useState } from "react";

// export default function Header() {
//   const [theme, setTheme] = useState("dark");

//   useEffect(() => {
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.setAttribute("data-theme", savedTheme);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     document.documentElement.setAttribute("data-theme", newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   const navItems = ["home", "about", "experience", "projects", "skills", "contact"];
//   const [active, setActive] = useState("home");

//   return (
//     <header className="navbar">
//       {/* SIMPLE TEXT LOGO */}
//       <div className="nav-logo"></div>

//       <nav className="nav-menu">
//         {navItems.map((item) => (
//           <a
//             key={item}
//             href={`#${item}`}
//             className={active === item ? "active" : ""}
//             onClick={() => setActive(item)}
//           >
//             {item.charAt(0).toUpperCase() + item.slice(1)}
//           </a>
//         ))}
//       </nav>

//       <div className="theme-toggle" onClick={toggleTheme}>
//         {theme === "dark" ? "🌙" : "☀️"}
//       </div>
//     </header>
//   );
// }


import { useState, useEffect } from "react";

export default function Header() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["home", "about", "experience", "projects", "skills", "contact"];

  // load saved theme once
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <header className="navbar">
      <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
       <span />
      <span />
      <span />
    </button>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>

      <div className="theme-toggle" onClick={toggleTheme} role="button" tabIndex={0}>
        {theme === "dark" ? "🌙" : "☀️"}
      </div>
    </header>
  );
}