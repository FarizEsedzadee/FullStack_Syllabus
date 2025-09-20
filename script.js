const courseData = {
  title: "Front-End Development Kursu",
  modules: [
    {
      id: "html",
      title: "HTML",
      icon: "fas fa-code",
      lessons: [
        { id: 1, topics: ["Introduction to HTML"] },
        { id: 2, topics: ["HTML Lists"] },
        { id: 3, topics: ["HTML Tables"] },
        { id: 4, topics: ["HTML Links"] },
        { id: 5, topics: ["HTML Forms (part 1)"] },
        { id: 6, topics: ["HTML Forms (part 2)"] },
        { id: 7, topics: ["Semantic HTML tags", "Layout"] },
        {
          id: 8,
          topics: [
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and mini-projects.",
          ],
        },
      ],
    },
    {
      id: "css",
      title: "CSS",
      icon: "fas fa-palette",
      lessons: [
        { id: 9, topics: ["Introduction to CSS", "Selectors and Box model"] },
        { id: 10, topics: ["Basic CSS properties (Shadows, Font, Background, Display etc)"] },
        {
          id: 11,
          topics: [
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and mini-projects.",
          ],
        },
        { id: 12, topics: ["Introduction to CSS Positioning"] },
        { id: 13, topics: ["CSS Flexbox", "What is Flexbox and why use it?"] },
        { id: 14, topics: ["Introduction to Media Queries"] },
        {
          id: 15,
          topics: [
            "Working with Figma",
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and mini-projects.",
          ],
        },
        { id: 16, topics: ["CSS Grid"] },
        { id: 17, topics: ["CSS Transition / Animation / Transform", "Animate.css /AOS"] },
        { id: 18, topics: ["Build a fully responsive website using HTML, CSS, and Media Queries. (Figma)"] },
        { id: 19, topics: ["Bootstrap"] },
        { id: 20, topics: ["Tailwind CSS"] },
        { id: 21, topics: ["Build a fully responsive website using Tailwind CSS, AOS, Animate.css. (Figma)"] },
      ],
    },
    {
      id: "git",
      title: "Git/Github",
      icon: "fab fa-git-alt",
      lessons: [{ id: 22, topics: ["Introduction to Git/Github", "Github Pages / Netlify / Vercel"] }],
    },
    {
      id: "javascript",
      title: "JavaScript",
      icon: "fab fa-js-square",
      lessons: [
        {
          id: 23,
          topics: [
            "Introduction to JavaScript",
            "Variables and Data Types – Declaring variables with var, let, const, and basic data types (String, Number, Boolean, etc.)",
          ],
        },
        {
          id: 24,
          topics: [
            "Operators – Arithmetic, comparison, and logical operators",
            "Control Structures – if, else, switch, and other conditional statements",
          ],
        },
        { id: 25, topics: ["Using for, while, and do-while loops for iteration."] },
        { id: 26, topics: ["String and Number methods", "Voca Js, Math js"] },
        { id: 27, topics: ["Introduction to Array", "Array methods"] },
        {
          id: 28,
          topics: ["Array methods (part 2)", "Practicing using array methods and Lodash js", "Swiper js"],
        },
        { id: 29, topics: ["Working with objects, properties, and methods."] },
        {
          id: 30,
          topics: [
            "DOM - document object model",
            "Interacting with HTML using JavaScript, capturing and handling events.",
            "Changing HTML elements dynamically and handling user events.",
          ],
        },
        { id: 31, topics: ["Defining functions, function types, passing parameters, and returning values."] },
        { id: 32, topics: ["Using map(), filter(), reduce(), and other array methods."] },
        {
          id: 33,
          topics: [
            "Interacting with HTML forms, collecting data, and working with arrays using map(), filter(), reduce() and other array methods.",
          ],
        },
        {
          id: 34,
          topics: [
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and mini-projects.",
          ],
        },
        { id: 35, topics: ["Prototypes, inheritance", "Function constructor"] },
        { id: 36, topics: ["Introduction to Class"] },
        { id: 37, topics: ["JSON and Web Storage", "Using browser storage for data persistence."] },
        {
          id: 38,
          topics: [
            "Asynchronous operations in JavaScript.",
            "Callback, Promise, Async/Await",
            "Introduction to Fetch API",
          ],
        },
        {
          id: 39,
          topics: [
            "XMLHttpRequest, Fetch API, Axios",
            "Making HTTP requests using Axios and Fetch, and interacting with APIs.",
            "Integrating third-party APIs (e.g., JSONPlaceholder, OpenWeather API, etc.) in real-world projects.",
          ],
        },
        { id: 40, topics: ["Error Handling try/catch", "Understanding Closure and Event Loop"] },
        { id: 41, topics: ["Regular Expression"] },
        { id: 42, topics: ["Chart Js", "GSAP animation library and ScrollTrigger usage"] },
        {
          id: 43,
          topics: ["Using ES6 modules with import/export", "Introduction NodeJS", "NPM / NPX, Webpack, babel"],
        },
      ],
    },
    {
      id: "react",
      title: "React Js",
      icon: "fab fa-react",
      lessons: [
        {
          id: 44,
          topics: [
            "Introduction to React? Why use it?",
            "Setting up a React development environment (Node.js, npm, Create React App / Vite)",
            "React components, JSX, and rendering to the DOM",
            "Basic file structure in a React project",
          ],
        },
        {
          id: 45,
          topics: [
            "Introduction to Components (Functional vs. Class Components)",
            "Props: Passing data between components",
            "Rendering Dynamic Data in JSX",
            "Understanding state in React",
            "Handling user input with 'useState'",
          ],
        },
        {
          id: 46,
          topics: [
            "Introduction to 'useState' Hook (Functional Components)",
            "Updating State and Re-rendering Components",
            "State Lifting: Passing State Between Parent and Child Components",
            "Form Handling with 'useState'",
          ],
        },
        {
          id: 47,
          topics: [
            "Lifecycle Methods in Class Components",
            "'componentDidMount', 'componentDidUpdate', 'componentWillUnmount'",
            "'useEffect' Hook in Functional Components",
            "Fetching Data with useEffect hook",
          ],
        },
        {
          id: 48,
          topics: [
            "A review of all the topics covered in previous lessons.",
            "Applying all the learned concepts through practice exercises and projects.",
          ],
        },
        { id: 49, topics: ["Introduction to React Context API", "Prop Drilling and how Context API helps"] },
        {
          id: 50,
          topics: ["useRef and useReducer hooks", "Form Handling with 'useReducer' and 'useRef'", "Formik/Yup"],
        },
        { id: 51, topics: ["Introduction to React Router"] },
        { id: 52, topics: ["React Router (part 2)"], title: "#Lesson 52 (Part 2)" },
        {
          id: 53,
          topics: [
            "React.memo, PureComponent, and useMemo",
            "Code Splitting with React.lazy and Suspense",
            "Lazy Loading Components",
          ],
        },
        {
          id: 54,
          topics: [
            "Introduction to Redux and Redux Toolkit",
            "Practical Example: Building a todo list with Redux Toolkit",
          ],
        },
        { id: 55, topics: ["Redux Toolkit (part 2)"] },
        {
          id: 56,
          topics: ["Introduction to RTK Query", "Managing complex API interactions with RTK Query"],
          title: "#Lesson 56 (Part 3)",
        },
        { id: 57, topics: ["Custom Hooks"] },
        {
          id: 58,
          topics: [
            "Introduction to React I18next",
            "Setting up React I18next in a React application",
            "Practical Example: Building a multilingual application with React I18next",
          ],
        },
        {
          id: 59,
          topics: [
            "Material UI / Ant Design",
            "Setting up React I18next in a React application",
            "Practical Example: Building a multilingual application with React I18next",
          ],
        },
        {
          id: 60,
          topics: [
            "Understanding the build process in React",
            "Building React apps for production",
            "Deploying React apps to platforms like Netlify, Vercel, or GitHub Pages",
          ],
        },
        { id: 61, topics: ["Stripe.js"], title: "#Lesson 61 (Optional)" },
        { id: 62, topics: ["Stripe.js (part 2)"], title: "#Lesson 62 (Optional)" },
      ],
    },
  ],
}

function createLessonCard(lesson, moduleTitle) {
  const lessonTitle = lesson.title || `#Lesson ${lesson.id}`

  return `
        <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div class="flex items-center justify-between mb-3">
                <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">${lessonTitle}</span>
                <span class="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">${moduleTitle}</span>
            </div>
            <div class="text-sm text-gray-700">
                ${lesson.topics.map((topic) => `<p>- ${topic}</p>`).join("")}
            </div>
        </div>
    `
}

function createModuleSection(module) {
  return `
        <section class="mb-12">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="bg-primary-500 text-white px-6 py-4">
                    <div class="flex items-center gap-3">
                        <i class="${module.icon} text-2xl"></i>
                        <h2 class="text-2xl font-bold">${module.title}</h2>
                    </div>
                </div>
                <div class="p-6">
                    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        ${module.lessons.map((lesson) => createLessonCard(lesson, module.title)).join("")}
                    </div>
                </div>
            </div>
        </section>
    `
}

function renderSyllabus() {
  const mainContent = document.querySelector("main")
  if (mainContent) {
    mainContent.innerHTML = `
            <div class="max-w-6xl mx-auto px-4 py-12">
                ${courseData.modules.map((module) => createModuleSection(module)).join("")}
            </div>
        `
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderSyllabus()
})
