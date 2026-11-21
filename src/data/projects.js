// Add one object per project you want to showcase.
// image paths go in src/assets/images, then import + reference them below.
import resumeTailorImg from "../assets/images/resume-tailor.jpg";
import bookWebsiteImg from "../assets/images/book-website.jpg";
import shoptalkImg from "../assets/images/shoptalk-ai.jpg";

const projects = [

  {
    id: 1,
    title: "AI Resume Tailor",
    description:
    "Full-stack app that tailors a resume to a job description. An agent loop rewrites it, scores it with a separate judge call, and revises until it passes — returning the best-scoring version. Features drag-and-drop PDF and Word uploads, an animated match score with keyword and feedback breakdowns, and automatic dark mode.",
    tech: ["React", "Node.js", "Express", "Gemini API"],
    image: resumeTailorImg,
    liveUrl: "https://carlosj0915.github.io/resume-tailor-ai/",
    repoUrl: "https://github.com/CarlosJ0915/resume-tailor-ai",
  },
  {
    id: 2,
    title: "Book Website",
    description:
      "This website is to promote my wife's book she is writing. It features a clean UI and interactive segments.",
    tech: ["React", "JavaScript", "CSS"],
    image: bookWebsiteImg,
    liveUrl: "https://carlosj0915.github.io/loving-with-anxiety/",
    repoUrl: "https://github.com/CarlosJ0915/loving-with-anxiety",
  },
  {
    id: 3,
    title: "ShopTalk AI",
    description:
      "Bilingual voice agent built for the Miami AI Hackathon (Mel × ElevenLabs), where it earned an honorable mention. It answers an auto-repair shop's phone in English or Spanish, switches languages mid-call, checks real availability, and books an appointment only after explicit confirmation. Staff get a dashboard with the transcript, collected details, and a full tool audit trail.",
    tech: ["Next.js", "TypeScript", "ElevenLabs", "Tailwind CSS"],
    image: shoptalkImg,
    liveUrl: "https://shoptalk-ai.vercel.app",
    repoUrl: "https://github.com/CarlosJ0915/shoptalk-ai",
  },
];

export default projects;
