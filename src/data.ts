import { FoodBagThumbNail, FreelanceFinThumbNail, InstaReviewThumbNail, SingleEyeThumbNail } from "./assets/images";

export const projects: Project[] = [
  {
    id: 1,
    name: "Draft",
    description: "",
    thumbnail: FreelanceFinThumbNail,
    techStack: ['Reactjs', 'SCSS', 'React Motion'],
    githubLink: "https://github.com/Adezayn/freelance-finance-app",
    demoLink: "https://freelance-finance-app.netlify.app/"
  },
  {
    id: 3,
    name: "InstaReview",
    description: "",
    thumbnail: InstaReviewThumbNail,
    techStack: ['Nextjs', 'TailwindCSS', 'ShadcnUI', 'Firebase'],
    githubLink: "https://github.com/Adezayn/insta-review",
    demoLink: "https://instareview.netlify.app/"
  },
  {
    id: 4,
    name: "SingleEye",
    description: "",
    thumbnail: SingleEyeThumbNail,
    techStack: ['Reactjs', 'TailwindCSS', 'React Motion', 'Redux Toolkit Query'],
    githubLink: "",
    demoLink: "https://test.singleeye.io/"
  },
  {
    id: 2,
    name: "Foodbag",
    description: "",
    thumbnail: FoodBagThumbNail,
    techStack: ['Vanilla JavaScript', 'HTML', 'CSS'],
    githubLink: "https://github.com/Adezayn/food-ecommerce",
    demoLink: "https://foodbag-ecommerce.netlify.app"
  }
];