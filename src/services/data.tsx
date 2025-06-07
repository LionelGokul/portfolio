import { ExperienceType } from '../types/experience'
import { MyProject } from '../types/project'
import MyEstate from '../images/myestate.png'
import MovieRecommendation from '../images/movie_recommendation.jpeg'
import RepairerSquad from '../images/repairer_squad.jpg'
import SlickSplit from '../images/SlickSplit.png'
import ToDo from '../images/ToDo.png'
import Gogs from '../images/Gogs.png'

export const experiencesData: ExperienceType[] = [
  {
    companyName: 'Cavintek',
    role: 'Senior Software Developer',
    startedAt: 'June 2022',
    endedAt: 'August 2023',
    responsibilities: `
      - Led the development and deployment of SkillRobo, a MERN stack-based online pre-employment assessment platform, delivering a scalable and efficient solution.<br>
      - Integrated the frontend server with Google Analytics, Mixpanel, and Segment, enabling data-driven insights to improve user experience and inform product roadmap decisions.<br>
      - Re-architected the frontend application, splitting it into two independent modules for enhanced scalability, maintainability, and performance.<br>
      - Decomposed the API into microservices and containerized them using Docker and Kubernetes, significantly enhancing backend reliability and scalability.<br>
      - Developed and launched ARIV, an AI-powered assistant using GPT-4 API, to guide users through the platform contextually and generate new assessment tests dynamically.<br>
      - Integrated AWS Lambda functions to optimize server load and improve system efficiency during high-traffic periods.<br>
      - Led the SCRUM process, managing sprint boards and coordinating with cross-functional teams to meet development milestones.<br>
      - Designed and implemented a REST API, providing public API services with comprehensive documentation using Swagger and OpenAPI.<br>
      - Developed and integrated GraphQL API endpoints to optimize client-server interactions.<br>
      - Interviewed and mentored junior developers, offering technical guidance in product development and Agile methodologies.
    `,
    skills: []
  },
  {
    companyName: 'Cavintek',
    role: 'Software Developer',
    startedAt: 'April 2020',
    endedAt: 'May 2022',
    responsibilities: `
      - Migrated a CRM application from Angular to ASP.NET MVC, utilizing PostgreSQL as the database, which significantly enhanced both scalability and performance.<br>
      - Implemented Inversion of Control (IoC) and Dependency Injection (DI) principles for a loosely coupled, maintainable system.<br>
      - Developed reusable ReactJS components and UI forms, improving development efficiency across multiple projects.<br>
      - Contributed to the development of API endpoints for CRUD operations and business logic using Node.js.<br>
      - Refactored critical backend endpoints and middleware, reducing response times and improving code readability and performance.<br>
      - Designed and optimized database schemas and data models, improving query performance and data management.<br>
      - Implemented payment integration and subscription validation with Stripe, ensuring secure and efficient transactions.<br>
      - Integrated the system with Bigin CRM for improved customer management and engagement.<br>
      - Managed user roles and authorization modules, enhancing system security and flexibility.
    `,
    skills: []
  },
  {
    companyName: 'BigFday',
    role: 'Software Developer',
    startedAt: 'February 2020',
    endedAt: 'March 2020',
    responsibilities: `
      - Participated in Agile software development, collaborating with teams to meet sprint goals and product deliverables.<br>
      - Boosted application performance by optimizing slow-loading pages and features through profiling and refactoring.<br>
      - Integrated Slack Slash Commands to streamline internal communication and reporting processes.<br>
      - Leveraged AWS DynamoDB to handle real-time customer analytics and reporting, helping us spot actionable insights faster while significantly reducing the load on our server.
    `,
    skills: []
  },
  {
    companyName: 'BigFday',
    role: 'Junior Software Developer',
    startedAt: 'February 2019',
    endedAt: 'January 2020',
    responsibilities: `
      - Worked within the ASP.NET MVC framework to develop web applications and enhance customer management features.<br>
      - Improved customer analytics by designing SQL procedures and automating data processing tasks.<br>
      - Automated sitemap generation and other redundant tasks via a scheduled AWS SQS worker.<br>
      - Integrated Google Sheets API with internal systems, allowing data sharing between departments and improving team productivity.<br>
      - Designed and implemented new pages using Razor View for better user experiences.
    `,
    skills: []
  },
  {
    companyName: 'Exeter Premedia Services',
    role: 'Junior Software Engineer Intern',
    startedAt: 'November 2018',
    endedAt: 'January 2019',
    responsibilities: `
      - Automated data processing and manipulation of XML documents using XSLT.<br>
      - Developed backend services with Node.js and SQL, providing efficient data connectivity for internal systems.<br>
      - Automated email processing tasks with Python, improving response times and reducing manual workloads.<br>
      - Created dynamic forms using PHP, enhancing the system’s data collection capabilities.
    `,
    skills: []
  }
]

export const projectsData: MyProject[] = [
  {
    title: 'MyEstate',
    description:
      'An online real estate platform where users can view properties for sale/rent or upload the properties they want to sell/rent.',
    skills: ['JavaScript', 'React JS', 'Flask', 'SQL'],
    coverImage: MyEstate,
    liveUrl: '',
    repoUrl: 'https://github.com/LionelGokul/MyEstate',
    priority: 1
  },
  {
    title: 'Movie Recommendation Engine',
    description:
      'A web application that recommends movies to the user using the Cosine Vector Similarity model.',
    skills: ['Machine Learning', 'Python', 'Flask', 'pandas', 'Scikit-learn'],
    coverImage: MovieRecommendation,
    liveUrl: '',
    repoUrl: 'https://github.com/LionelGokul/Movie-Recommendation-Engine',
    priority: 2
  },
  {
    title: 'Repairer Squad',
    description:
      'An online platform connecting various repairers with users and vice versa. Developed a CRM application for managing repairers and users.',
    skills: ['Python', 'Django', 'React JS', 'MYSQL'],
    coverImage: RepairerSquad,
    liveUrl: '',
    repoUrl: '',
    priority: 3
  },
  {
    title: 'ToDo App',
    description:
      'A ToDo application where users can create tasks, mark them as completed, edit task details, and delete tasks. It provides a simple, clean interface on the front end and efficient data handling on the back end.',
    skills: [
      'Next.js',
      'Node.js',
      'Express.js',
      'MySQL',
      'Prisma',
      'Tailwind CSS',
      'TypeScript'
    ],
    coverImage: ToDo,
    liveUrl: '',
    repoUrl: 'https://github.com/LionelGokul/To-do-List-App',
    priority: 2
  },
  {
    title: 'SlickSplit',
    description:
      'A Splitwise-like application where users can add other users to split expenses among them seamlessly.',
    skills: [
      'Next.js',
      'Vercel',
      'Express.js',
      'MongoDB',
      'Prisma',
      'Material UI',
      'TypeScript'
    ],
    coverImage: SlickSplit,
    liveUrl: '',
    repoUrl: 'https://github.com/LionelGokul/SlickSplit',

    priority: 5
  },
  {
    title: 'Gogs Payment Hook',
    description:
      'Built a server-side Python post-receive hook on a Gogs VPS to automate Algorand (testnet) payments for merged pull requests, with email receipts via smtplib.',
    skills: [
      'Python',
      'AWS EC2',
      'Gogs',
      'Git',
      'Algorand Testnet',
      'smtplib',
      'Linux'
    ],
    coverImage: Gogs,
    liveUrl: '',
    repoUrl: '',
    priority: 2
  }
]
