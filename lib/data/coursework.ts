export interface CourseCategory {
  title: string;
  courses: { code: string; name: string }[];
}

export const courseworkCategories: CourseCategory[] = [
  {
    title: "Core Math & Statistics",
    courses: [
      { code: "AMS 210", name: "Applied Linear Algebra" },
      { code: "AMS 261", name: "Applied Calculus III" },
      { code: "AMS 310", name: "Survey of Probability and Statistics" },
      { code: "AMS 311", name: "Probability Theory" },
      { code: "AMS 315", name: "Data Analysis" },
      { code: "AMS 317", name: "Introduction to Linear Regression Analysis" },
      { code: "AMS 301", name: "Finite Mathematical Structures" },
    ],
  },
  {
    title: "Quantitative Finance",
    courses: [
      { code: "AMS 318", name: "Financial Mathematics" },
      { code: "AMS 320", name: "Introduction to Quantitative Finance" },
      { code: "AMS 341", name: "Operations Research I" },
    ],
  },
  {
    title: "Computer Science & Computing",
    courses: [
      { code: "CSE 114", name: "Intro to Object-Oriented Programming" },
      { code: "CSE 214", name: "Data Structures" },
      { code: "CSE 215", name: "Foundations of Computer Science" },
      { code: "AMS 325", name: "Computing Fundamentals in AMS" },
      { code: "AMS 380", name: "Data Mining" },
    ],
  },
  {
    title: "Business & Information Systems",
    courses: [
      { code: "ISE 218", name: "Fundamentals of Information Technology" },
      { code: "ISE 305", name: "Database Design and Practice" },
      { code: "ISE 320", name: "Information Management" },
    ],
  },
];
