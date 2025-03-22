import { Skill, Experience, Project, BlogPost, SocialLink, MessageWelcome } from '../types';

export const skills: Skill[] = [
  {
    id: 1,
    name: 'JavaScript (Dummy)',
    level: 90,
    category: 'Frontend',
    icon: 'Code',
    language: 'en',
  },
  {
    id: 2,
    name: 'React (Dummy)',
    level: 85,
    category: 'Frontend',
    icon: 'Atom',
    language: 'en',
  },
  {
    id: 3,
    name: 'TypeScript (Dummy)',
    level: 80,
    category: 'Frontend',
    icon: 'FileCode',
    language: 'en',
  },
  {
    id: 4,
    name: 'Node.js (Dummy)',
    level: 75,
    category: 'Backend',
    icon: 'Server',
    language: 'en',
  },
  {
    id: 5,
    name: 'Python (Dummy)',
    level: 70,
    category: 'Backend',
    icon: 'FileCode',
    language: 'en',
  },
  {
    id: 6,
    name: 'SQL (Dummy)',
    level: 65,
    category: 'Database',
    icon: 'Database',
    language: 'en',
  },
  {
    id: 7,
    name: 'MongoDB (Dummy)',
    level: 60,
    category: 'Database',
    icon: 'Database',
    language: 'en',
  },
  {
    id: 8,
    name: 'CSS/SCSS (Dummy)',
    level: 85,
    category: 'Frontend',
    icon: 'Palette',
    language: 'en',
  },
  // Spanish skills
  {
    id: 9,
    name: 'JavaScript (Ficticio/a)',
    level: 90,
    category: 'Frontend',
    icon: 'Code',
    language: 'es',
  },
  {
    id: 10,
    name: 'React (Ficticio/a)',
    level: 85,
    category: 'Frontend',
    icon: 'Atom',
    language: 'es',
  },
  {
    id: 11,
    name: 'TypeScript (Ficticio/a)',
    level: 80,
    category: 'Frontend',
    icon: 'FileCode',
    language: 'es',
  },
  // French skills
  {
    id: 12,
    name: 'JavaScript (Factice)',
    level: 90,
    category: 'Frontend',
    icon: 'Code',
    language: 'fr',
  },
  {
    id: 13,
    name: 'React (Factice)',
    level: 85,
    category: 'Frontend',
    icon: 'Atom',
    language: 'fr',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Solutions Inc.',
    position: 'Senior Frontend Developer',
    startDate: '2021-01',
    endDate: null,
    description: 'Leading the frontend development team in creating responsive web applications using React and TypeScript. Implementing best practices and mentoring junior developers.',
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    language: 'en',
  },
  {
    id: 2,
    company: 'Digital Innovations',
    position: 'Full Stack Developer',
    startDate: '2018-06',
    endDate: '2020-12',
    description: 'Developed and maintained web applications using the MERN stack. Collaborated with designers and product managers to deliver high-quality software solutions.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    language: 'en',
  },
  {
    id: 3,
    company: 'WebCraft Studios',
    position: 'Junior Developer',
    startDate: '2016-03',
    endDate: '2018-05',
    description: 'Assisted in the development of client websites and web applications. Gained experience in frontend technologies and responsive design principles.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    language: 'en',
  },
  // Spanish experiences
  {
    id: 4,
    company: 'Tech Solutions Inc.',
    position: 'Senior Desarrollador Frontend',
    startDate: '2021-01',
    endDate: null,
    description: 'Liderando el equipo de desarrollo frontend en la creación de aplicaciones web receptivas utilizando React y TypeScript. Implementando las mejores prácticas y mentorando a desarrolladores junior.',
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    language: 'es',
  },
  // French experiences
  {
    id: 5,
    company: 'Tech Solutions Inc.',
    position: 'Développeur Frontend Senior',
    startDate: '2021-01',
    endDate: null,
    description: 'Diriger l\'équipe de développement frontend dans la création d\'applications web réactives en utilisant React et TypeScript. Mise en œuvre des meilleures pratiques et mentorat des développeurs juniors.',
    technologies: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    language: 'fr',
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product catalog, shopping cart, and payment processing.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    demoUrl: 'https://example.com/ecommerce-demo',
    repoUrl: 'https://github.com/example/ecommerce',
    language: 'en',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop functionality and team collaboration features.',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
    demoUrl: 'https://example.com/task-app-demo',
    repoUrl: 'https://github.com/example/task-app',
    language: 'en',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather dashboard that displays current conditions and forecasts for multiple locations.',
    imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS Grid'],
    demoUrl: 'https://example.com/weather-demo',
    repoUrl: 'https://github.com/example/weather-app',
    language: 'en',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A pixel art style portfolio website inspired by Pokemon GameBoy aesthetics.',
    imageUrl: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    demoUrl: 'https://example.com/portfolio-demo',
    repoUrl: 'https://github.com/example/portfolio',
    language: 'en',
  },
  // Spanish projects
  {
    id: 5,
    title: 'Plataforma de E-commerce',
    description: 'Una plataforma de e-commerce completa con catálogo de productos, carrito de compras y procesamiento de pagos.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    demoUrl: 'https://example.com/ecommerce-demo',
    repoUrl: 'https://github.com/example/ecommerce',
    language: 'es',
  },
  // French projects
  {
    id: 6,
    title: 'Plateforme de E-commerce',
    description: 'Une plateforme de e-commerce complète avec catalogue de produits, panier d\'achat et traitement des paiements.',
    imageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    demoUrl: 'https://example.com/ecommerce-demo',
    repoUrl: 'https://github.com/example/ecommerce',
    language: 'fr',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Understanding React Hooks',
    summary: 'A deep dive into React Hooks and how they can simplify your component logic.',
    date: '2023-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    readTime: '8 min',
    tags: ['React', 'JavaScript', 'Web Development'],
    language: 'en',
  },
  {
    id: 2,
    title: 'The Power of TypeScript',
    summary: 'How TypeScript can improve your development workflow and help catch errors before runtime.',
    date: '2023-04-02',
    imageUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    readTime: '6 min',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    language: 'en',
  },
  {
    id: 3,
    title: 'CSS Grid vs Flexbox',
    summary: 'A comparison of CSS Grid and Flexbox, and when to use each for your layouts.',
    date: '2023-03-10',
    imageUrl: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    readTime: '5 min',
    tags: ['CSS', 'Web Design', 'Frontend'],
    language: 'en',
  },
  {
    id: 4,
    title: 'Getting Started with Node.js',
    summary: 'A beginner-friendly guide to setting up and building your first Node.js application.',
    date: '2023-02-18',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    readTime: '10 min',
    tags: ['Node.js', 'JavaScript', 'Backend'],
    language: 'en',
  },
  // Spanish blog posts
  {
    id: 5,
    title: 'Comprendiendo React Hooks',
    summary: 'Una inmersión profunda en React Hooks y cómo pueden simplificar la lógica de tus componentes.',
    date: '2023-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    readTime: '8 min',
    tags: ['React', 'JavaScript', 'Desarrollo Web'],
    language: 'es',
  },
  // French blog posts
  {
    id: 6,
    title: 'Comprendre les Hooks React',
    summary: 'Une plongée profonde dans les Hooks React et comment ils peuvent simplifier la logique de vos composants.',
    date: '2023-05-15',
    imageUrl: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    readTime: '8 min',
    tags: ['React', 'JavaScript', 'Développement Web'],
    language: 'fr',
  },
];

export const socialLink: SocialLink[] = [
  {
    id: 1,
    name: 'Github',
    url: 'https://github.com',
    icon: 'Github',
    language: 'en',
  },
  {
    id: 2,
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'LinkedIn',
    language: 'en',
  },
  {
    id: 3,
    name: 'Email',
    url: 'mailto:example@example.com',
    icon: 'Mail',
    language: 'en',
  },
  // Spanish social links
  {
    id: 4,
    name: 'Github',
    url: 'https://github.com',
    icon: 'Github',
    language: 'es',
  },
  // French social links
  {
    id: 5,
    name: 'Github',
    url: 'https://github.com',
    icon: 'Github',
    language: 'fr',
  },
];

export const messageWelcome: MessageWelcome = {
  id: 1,
  title: 'Welcome to my portfolio!',
  message: 'I am a passionate developer with a love for clean code and elegant design. Check out my projects and blog posts below!',
  language: 'en',
};