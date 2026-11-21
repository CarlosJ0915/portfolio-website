// Courses and certifications you've completed. List newest first.
// `image` and `file` are paths inside public/ (no leading slash — the base URL
// is prefixed at render time so they keep working on GitHub Pages).
const certifications = [
  {
    id: 2,
    title: "Miami AI Hackathon — Honorable Mention",
    issuer: "Mel × ElevenLabs",
    date: "November 2026",
    description:
      "Recognized for ShopTalk AI, a bilingual voice agent that answers an auto-repair shop's phone and books appointments.",
    skills: ["ElevenLabs", "Voice AI", "AI Agents", "Next.js"],
    image: "certificates/miami-ai-hackathon.jpg",
  },
  {
    id: 1,
    title: "Full-Stack Java Developer Course with Spring Boot 4 & React",
    issuer: "Udemy",
    instructor: "Ramesh Fadatare (Java Guides)",
    date: "October 2026",
    length: "20 hours",
    credentialId: "UC-c9cfef7e-b558-4548-9b39-4184820d5c2a",
    credentialUrl: "https://ude.my/UC-c9cfef7e-b558-4548-9b39-4184820d5c2a",
    skills: ["Java", "Spring Boot", "REST APIs", "React"],
    image: "certificates/full-stack-java-developer.jpg",
    file: "certificates/full-stack-java-developer.pdf",
  },
];

export default certifications;
