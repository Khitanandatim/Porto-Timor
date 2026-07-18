// ---------------------------------------------------------------------------
// All editable portfolio content lives here. Update text/links/images in one
// place instead of hunting through components.
// ---------------------------------------------------------------------------
// KEDAIREKA Greenhouse
import kedaireka1 from "../assets/projects/kedaireka/kedaireka1.jpeg";
import kedaireka2 from "../assets/projects/kedaireka/kedaireka2.jpeg";
import kedaireka3 from "../assets/projects/kedaireka/kedaireka3.jpeg";
import kedaireka4 from "../assets/projects/kedaireka/kedaireka4.jpeg";
import kedaireka5 from "../assets/projects/kedaireka/kedaireka5.jpeg";
import kedaireka6 from "../assets/projects/kedaireka/kedaireka6.jpeg";
import kedaireka7 from "../assets/projects/kedaireka/kedaireka7.jpeg";

// Pakan Lele
import lele1 from "../assets/projects/lele/lele1.jpeg";
import lele2 from "../assets/projects/lele/lele2.jpeg";
import lele3 from "../assets/projects/lele/lele3.jpeg";
import lele4 from "../assets/projects/lele/lele4.jpeg";

// Cerdas Cermat MPR
import mpr1 from "../assets/projects/mpr/mpr1.jpeg";
import mpr2 from "../assets/projects/mpr/mpr2.jpeg";
import mpr3 from "../assets/projects/mpr/mpr3.jpeg";
import mpr4 from "../assets/projects/mpr/mpr4.jpeg";
import mpr5 from "../assets/projects/mpr/mpr5.jpeg";

// Assetman JKM
import jkm1 from "../assets/projects/jkm/jkm1.png";
import jkm2 from "../assets/projects/jkm/jkm2.png";
import jkm3 from "../assets/projects/jkm/jkm3.png";
import jkm4 from "../assets/projects/jkm/jkm4.png";
import jkm5 from "../assets/projects/jkm/jkm5.png";

// Asisten Laboratorium
import lab1 from "../assets/lab/lab1.jpeg";
import lab2 from "../assets/lab/lab2.jpeg";
import lab3 from "../assets/lab/lab3.jpeg";
import lab4 from "../assets/lab/lab4.jpeg";
import lab5 from "../assets/lab/lab5.jpeg";
import lab6 from "../assets/lab/lab6.jpeg";
import lab7 from "../assets/lab/lab7.jpeg";

export const profile = {
  name: "Khitananda Timor",
  firstName: "Khitananda",
  roles: [
    "Embedded System Developer",
    "IoT Engineer",
    "Web Developer",
  ],
  tagline:
    "I am passionate about developing embedded systems, IoT solutions, and modern web applications. I enjoy creating innovative technology that bridges hardware and software to solve real-world problems.",
  email: "anannanda27@gmail.com",
  phone: "+62 822-3697-8622",
  origin: "Indonesia",
  education: "Bachelor of Electrical Engineering",
  socials: {
    github: "https://github.com/Khitanandatim",
    linkedin: "https://linkedin.com/",
    email: "mailto:your@email.com",
    twitter: "https://twitter.com/",
  },
};

export const about = {
  paragraphs: [
    "I am an enthusiastic technology developer with experience in embedded systems, Internet of Things (IoT), automation, and modern web development. Throughout various academic and personal projects, I have designed hardware-software integrations using ESP32, Arduino, Raspberry Pi, and modern web technologies such as React and Firebase.",
    "My passion lies in transforming ideas into functional products while maintaining clean architecture, intuitive user interfaces, and reliable system performance.",
    "I thrive in collaborative environments where problem-solving and continuous learning drive better outcomes. Whether debugging a stubborn UART timing issue or refining a real-time dashboard, I bring the same curiosity and attention to detail — always looking for the next thing to build, break, and improve.",
  ],
  specializations: ["Embedded Systems", "IoT", "Automation", "Web Development"],
};
 
export const infoCards = [
  { icon: "User", label: "Full Name", value: profile.name, color: "yellow" },
  { icon: "MapPin", label: "Origin", value: profile.origin, color: "blue" },
  { icon: "Phone", label: "Phone", value: profile.phone, color: "green" },
  { icon: "Mail", label: "Email", value: profile.email, color: "orange" },
  { icon: "GraduationCap", label: "Education", value: profile.education, color: "pink" },
  {
    icon: "Cpu",
    label: "Specialization",
    value: about.specializations.join(" · "),
    color: "purple",
    wide: true,
  },
];
 
export const skills = [
  { name: "C++", level: 90, icon: "Terminal", color: "yellow" },
  { name: "Arduino", level: 92, icon: "CircuitBoard", color: "blue" },
  { name: "ESP32", level: 90, icon: "Cpu", color: "green" },
  { name: "IoT", level: 88, icon: "Wifi", color: "orange" },
  { name: "React", level: 85, icon: "Atom", color: "pink" },
  { name: "JavaScript", level: 85, icon: "Braces", color: "purple" },
  { name: "HTML", level: 95, icon: "Code2", color: "yellow" },
  { name: "CSS", level: 90, icon: "Palette", color: "blue" },
  { name: "Firebase", level: 82, icon: "Flame", color: "green" },
  { name: "PLC", level: 75, icon: "Zap", color: "orange" },
  { name: "Proteus", level: 78, icon: "CircuitBoard", color: "pink" },
  { name: "MATLAB", level: 74, icon: "SquareFunction", color: "purple" },
  { name: "Git", level: 88, icon: "GitBranch", color: "yellow" },
  { name: "Python", level: 80, icon: "Terminal", color: "blue" },
  { name: "UI/UX Design", level: 76, icon: "PenTool", color: "green" },
];
 
export const timeline = [
  {
    year: "Juli 2026",
    title: "Project Assetman — Jagakarya Mandiri",
    description:
      "Membangun web aplikasi manajemen aset untuk PT. Jaga Karya Mandiri, mencakup modernisasi UI dan visualisasi data.",
    icon: "LayoutDashboard",
    color: "orange",
  },
  {
    year: "Oktober 2025",
    title: "Sistem Kendali & Monitoring Pakan Lele",
    description:
      "Mengembangkan sistem otomasi dan monitoring real-time untuk budidaya ikan lele berbasis mikrokontroler.",
    icon: "CircuitBoard",
    color: "blue",
  },
  {
    year: "27 Juli — 27 Agustus 2025",
    title: "Internship — UI/UX & Web Designer, Telkom University",
    description:
      "Magang pada Project KEDAIREKA Greenhouse Monitoring, berperan sebagai UI/UX dan Web Designer untuk dashboard monitoring greenhouse.",
    icon: "LayoutDashboard",
    color: "purple",
  },
  {
    year: "Maret 2025",
    title: "Sistem Lomba Cerdas Cermat 30 Button (MPR RI)",
    description:
      "Menerima dan menyelesaikan proyek pertama sebagai vendor: sistem buzzer digital 30 tombol untuk acara resmi MPR RI.",
    icon: "Rocket",
    color: "green",
  },
  {
    year: "Agustus 2024 — September 2026",
    title: "Asisten Laboratorium Teknik Elektro",
    description:
      "Mengajar dan mendampingi beberapa praktikum, di antaranya Rangkaian Listrik Instalasi Residensial, Dasar Mikroprosesor, Dasar Teknik Kendali, Programmable Logic Control dan Otomasi Industri, Dasar Teknik Digital, Elektronika Analog, dan Programmable Logic Design.",
    icon: "GraduationCap",
    color: "yellow",
  },
];
 
export const projects = [
  {
    title: "KEDAIREKA Greenhouse Monitoring",
    description:
      "Sistem untuk memonitoring dan kendali keadaan greenhouse melalui web - Project KEDAIREKA - Kerjasama Telkom University, Universitas Muhammadiyah Surakarta, dan Universitas Sebelas Maret.",
    tags: ["ESP32", "UI/UX", "React"],
    color: "yellow",
    images: [kedaireka1, kedaireka2, kedaireka3, kedaireka4, kedaireka5, kedaireka6, kedaireka7],
    demoLink: "https://dalogecu.vercel.app/",
    githubLink: "https://github.com/username-kamu/esp32-ecu-logger",
  },
  {
    title: "Sistem Kendali & Monitoring Pakan Lele",
    description:
      "Sistem otomasi pemberian pakan lele berbasis mikrokontroler dengan monitoring real-time, dirancang untuk efisiensi dan konsistensi jadwal pakan.",
    tags: ["ESP32", "Automation", "Sensors"],
    color: "blue",
    images: [lele1, lele2, lele3, lele4],
    demoLink: null,
    githubLink: null,
  },
  {
    title: "Sistem Lomba Cerdas Cermat 30 Button (MPR RI)",
    description:
      "Sistem buzzer digital untuk lomba cerdas cermat dengan 30 tombol peserta, dikembangkan untuk acara resmi MPR RI dengan deteksi tombol tercepat secara akurat.",
    tags: ["Embedded", "C++", "Hardware"],
    color: "green",
    images: [mpr1, mpr2, mpr3, mpr4, mpr5],
    demoLink: null,
    githubLink: null,
  },
  {
    title: "Project Assetman — Jagakarya Mandiri",
    description:
      "Web aplikasi manajemen aset untuk PT. Jaga Karya Mandiri, dibangun di atas Soft UI Dashboard dengan visualisasi data dan navigasi yang dimodernisasi.",
    tags: ["PHP", "Bootstrap", "Chart.js"],
    color: "orange",
    images: [jkm1, jkm2, jkm3, jkm4, jkm5],
    demoLink: "https://assetmanagement-jkm.com/login/",
    githubLink: null,
  },
  
];
export const labGallery = {
  title: "Momen Mengajar Praktikum",
  subtitle: "Asisten Laboratorium Teknik Elektro — Agustus 2024 - September 2026",
  images: [lab1, lab2, lab3, lab4, lab5, lab6, lab7],
};
export const stats = [
  { value: 4, suffix: "", label: "Projects", icon: "FolderKanban", color: "yellow" },
  { value: 10, suffix: "+", label: "Technologies", icon: "Layers", color: "blue" },
  { value: 1000, suffix: "+", label: "Hours of Learning", icon: "Clock", color: "green" },
  { value: 100, suffix: "%", label: "Passion for Innovation", icon: "Flame", color: "orange" },
];
 
export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];
 