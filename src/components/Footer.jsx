// export default function Footer(){
//   return (
//     <footer className="footer">
//       <div className="container">© 2025 Jagan — Built with ❤️ React</div>
//     </footer>
//   )
// }

// export default function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">

//         <div className="footer-col">
//           <h3>Jagan.</h3>
//           <p>
//             Full-stack developer crafting beautiful UI, scalable apps, 
//             and intelligent ML-powered systems.
//           </p>
//           <p className="thanks">Thanks for visiting!</p>
//         </div>

//         <div className="footer-col">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About</a></li>
//             <li><a href="#projects">Projects</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </div>

//         <div className="footer-col">
//           <h4>Get in Touch</h4>
//           <p>📧 jagannath@example.com</p>
//           <p>📍 Bangalore, India</p>
//         </div>

//         <div className="footer-col">
//           <h4>Connect</h4>
//           <div className="footer-socials">
//             <a href="#"><i className="fab fa-github"></i></a>
//             <a href="https://www.linkedin.com/in/jagannath-g-h-2ab96a253"><i className="fab fa-linkedin"></i></a>
//             <a href="#"><i className="fab fa-twitter"></i></a>
//           </div>
//         </div>

//       </div>

//       <hr />

//       <div className="footer-bottom">
//         © 2025 Jagan | Portfolio. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// src/components/Footer.jsx
const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", icon: <i className="fab fa-github"></i>, href: "https://github.com/your-handle" },
  { label: "LinkedIn", icon: <i className="fab fa-linkedin"></i>, href: "https://linkedin.com/in/your-handle" },
  { label: "Twitter", icon: <i className="fab fa-twitter"></i>, href: "https://twitter.com/your-handle" },
  {label: "Instagram",icon: <i className="fab fa-instagram"></i>,href: "https://instagram.com/your-handle",}
];


// export default function Footer() {
//   return (
//     <footer className="neo-footer-wrapper">
//       <div className="neo-footer">
//         <div className="neo-footer-logo">J</div>
//         <h3 className="neo-footer-title">Jagan</h3>

//         <nav className="neo-footer-nav">
//           {links.map((link) => (
//             <a key={link.label} href={link.href}>
//               {link.label}
//             </a>
//           ))}
//         </nav>

//         <div className="neo-footer-socials">
//           {socials.map((s) => (
//             <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
//               {s.icon}
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="neo-footer-bottom">
//         <span>© {new Date().getFullYear()} Jagan Portfolio</span>
//         <span>Designed & built by Jagan</span>
//       </div>
//     </footer>
//   );
// }
// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="minimal-footer">
      <span>© {new Date().getFullYear()} Jagan. All rights reserved.</span>
    </footer>
  );
}