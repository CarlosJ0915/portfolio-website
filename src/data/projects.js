// Add one object per project you want to showcase.
// image paths go in src/assets/images, then import + reference them below.
const projects = [
  {
    id: 1,
    title: "Book Website",
    description:
      "This website is to promote my wifes book she is writing. It features a clean UI and interactive segments.",
    tech: ["React", "JavaScript", "CSS"],
    image: null, // e.g. import projectImg from '../assets/images/project1.png' at the top, then use it here
    liveUrl: "https://carlosj0915.github.io/loving-with-anxiety/",
    repoUrl: "https://github.com/CarlosJ0915/loving-with-anxiety",
  },
  {
    id: 2,
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
