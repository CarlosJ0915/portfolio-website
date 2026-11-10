// Add one object per project you want to showcase.
// image paths go in src/assets/images, then import + reference them below.
import resumeTailorImg from "../assets/images/resume-tailor.jpg";

const projects = [

  {
    id: 1,
    title: "AI Resume Tailor",
    description:
    "Full-stack app that tailors a resume to a job description. An agent loop rewrites it, scores it with a separate judge call, and revises until it passes — returning the best-scoring version. Features drag-and-drop PDF and Word uploads, an animated match score with keyword and feedback breakdowns, and automatic dark mode.",
    tech: ["React", "Node.js", "Express", "Gemini API"],
    image: resumeTailorImg,
    liveUrl: "",
    repoUrl: "https://github.com/CarlosJ0915/resume-tailor-ai",
  },
  {
    id: 2,
    title: "Book Website",
    description:
      "This website is to promote my wifes book she is writing. It features a clean UI and interactive segments.",
    tech: ["React", "JavaScript", "CSS"],
    image: null, // e.g. import projectImg from '../assets/images/project1.png' at the top, then use it here
    liveUrl: "https://carlosj0915.github.io/loving-with-anxiety/",
    repoUrl: "https://github.com/CarlosJ0915/loving-with-anxiety",
  },
  {
    id: 3,
    title: "Mobile App",
    description:
      "Creating a mobile app for planning vacations.",
    tech: ["Flutter", "Dart"],
    image: null, // e.g. import projectImg from '../assets/images/project1.png' at the top, then use it here
    liveUrl: "",
    repoUrl: "",
  },
];

export default projects;
