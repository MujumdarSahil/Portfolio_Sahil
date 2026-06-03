import {
  ProfileBanner,
  TimelineItem,
  Project,
  Certification,
  ContactMe,
  Skill,
} from '../types';

export const profileBannerData: ProfileBanner = {
  backgroundImage: { url: '' },
  headline: 'SAHIL MUJUMDAR',
  resumeLink: { url: '/Sahil_Mujumdar_Resume.pdf' },
  linkedinLink: 'https://www.linkedin.com/in/sahil-mujumdar-2ba179268/',
  profileSummary:
    'AI/Data Science graduate building AI-powered applications with machine learning, computer vision, and LLM-based architectures. Skilled in Python, PyTorch, and TensorFlow with hands-on experience in RAG pipelines, real-time AI systems, and model deployment.',
};

export const timelineData: TimelineItem[] = [
  {
    timelineType: 'work',
    name: 'Tobox Ventures',
    title: 'Jr. Data Scientist',
    techStack: 'Python, SQL, ML frameworks, data pipelines',
    summaryPoints: [
      'Developing predictive models and data pipelines to support business insights.',
      'Conducting data preprocessing, visualization, and statistical analysis for decision-making.',
    ],
    dateRange: 'Jul 2025 – Present',
  },
  {
    timelineType: 'work',
    name: 'National Informatics Centre (NIC)',
    title: 'Data Analyst Intern',
    techStack: 'ASP.NET, Chart.js, SQL Server, Redis, HTML',
    summaryPoints: [
      'Built an Election Dashboard with interactive UI/UX, improving data accessibility by 30%.',
      'Performed security audits, enhancing system security by 40%.',
      'Created reusable web templates and Redis integrations, reducing response time by 25%.',
    ],
    dateRange: 'Jul 2024 – Jun 2025',
  },
  {
    timelineType: 'work',
    name: 'Zscaler',
    title: 'Networking Virtual Internship',
    techStack: 'Zero Trust Exchange, secure web gateway, cloud firewalls',
    summaryPoints: [
      'Gained hands-on experience with Zscaler Zero Trust Exchange and secure cloud transformations.',
      'Identified and mitigated vulnerabilities in simulated environments.',
      'Designed policies for secure web gateway, SSL inspection, and cloud firewalls.',
    ],
    dateRange: 'Jul 2024 – Sep 2024',
  },
];

export const projectsData: Project[] = [
  {
    title: 'OmniTutor AI — Multi-LLM Orchestrator with RAG',
    description:
      'Multi-provider LLM orchestration platform with FastAPI routing across OpenAI, Groq, and Gemini. RAG pipeline using FAISS, Streamlit dashboard, circuit breakers, and failover.',
    techUsed: 'Python, FastAPI, FAISS, OpenAI, GCP',
    image: { url: 'https://picsum.photos/seed/omnitutor/400/250' },
  },
  {
    title: 'MedAgentX (E-Doctor OS)',
    description:
      'Agentic AI platform for clinical decision support with multi-agent orchestration, RAG pipelines, and human-in-the-loop governance guardrails.',
    techUsed: 'Python, PyTorch, NLP, RAG, FastAPI',
    image: { url: 'https://picsum.photos/seed/medagentx/400/250' },
  },
  {
    title: 'Blockchain Based Ammunition System',
    description:
      'Secure blockchain solution for ammunition logistics using Solidity smart contracts for tamper-proof tracking and cryptographic data protection.',
    techUsed: 'Solidity, Blockchain, Python',
    image: { url: 'https://picsum.photos/seed/blockchain-ammo/400/250' },
  },
  {
    title: 'Advanced Ammunition Prediction System',
    description:
      'ML-based predictive analytics for ammunition demand forecasting with dashboards for military logistics and inventory optimization.',
    techUsed: 'Python, TensorFlow, Scikit-learn',
    image: { url: 'https://picsum.photos/seed/ammo-prediction/400/250' },
  },
];

export const certificationsData: Certification[] = [
  {
    title: 'Networking Virtual Internship',
    issuer: 'Zscaler',
    issuedDate: '2024',
    link: 'https://drive.google.com/file/d/1ttypuumrsjwe_2MVZjDkWZ-B2JXQGjMu/view?usp=drive_link',
    iconName: 'cisco',
  },
  {
    title: 'Cloud Foundations',
    issuer: 'AWS',
    issuedDate: '2024',
    link: 'https://drive.google.com/file/d/1duZ30ZbC4WwNzSOWZW-fSsqkEr0y5rts/view?usp=drive_link',
    iconName: 'amazon',
  },
  {
    title: 'Kubernetes Foundation',
    issuer: 'Udemy',
    issuedDate: '2024',
    link: 'https://drive.google.com/file/d/10WmjAQmffuh9Fj5c7tOM_PUYbGkLDL2J/view?usp=drive_link',
    iconName: 'udemy',
  },
  {
    title: 'Data Engineering Professional',
    issuer: 'Professional Certification',
    issuedDate: '2024',
    link: 'https://drive.google.com/file/d/1cGOCm0TdbrdMwXQYEoklpjhYFAWXi6kf/view?usp=sharing',
    iconName: 'datascience',
  },
  {
    title: 'Data Engineering Master',
    issuer: 'Professional Certification',
    issuedDate: '2024',
    link: 'https://drive.google.com/file/d/1r3ZtJ3532SxNyXnFWbSD6uNXQLEmWYeY/view?usp=sharing',
    iconName: 'datascience',
  },
  {
    title: 'Machine Learning Professional',
    issuer: 'Professional Certification',
    issuedDate: '2024',
    link: 'https://drive.google.com/file/d/1If2UeTNM85t36NWs4Q4F__EDddpO-gLH/view?usp=sharing',
    iconName: 'datascience',
  },
  {
    title: 'Machine Learning Master',
    issuer: 'Professional Certification',
    issuedDate: '2024',
    link: 'https://drive.google.com/file/d/1VOpDUUP4flYkozxTGJ31cG3eo2px-SKS/view?usp=sharing',
    iconName: 'datascience',
  },
  {
    title: 'Power BI',
    issuer: 'Udemy',
    issuedDate: '2024',
    link: 'https://drive.google.com/file/d/1vjpThnuDO1Ov0jO3kuv9OHbj4brOHSQV/view?usp=drive_link',
    iconName: 'udemy',
  },
];

export const publicationLink =
  'https://drive.google.com/file/d/1CvLnb9SIzECA-7HZunOlNNhWTUmLvGTe/view?usp=sharing';

export const skillsData: Skill[] = [
  { name: 'Python', category: 'Languages', description: 'ML pipelines, APIs, and data analysis', icon: 'FaPython' },
  { name: 'SQL', category: 'Languages', description: 'Database queries and analytics', icon: 'SiMysql' },
  { name: 'R', category: 'Languages', description: 'Statistical computing', icon: 'FaChartLine' },
  { name: 'TensorFlow', category: 'Frameworks', description: 'Deep learning and neural network training', icon: 'SiTensorflow' },
  { name: 'PyTorch', category: 'Frameworks', description: 'Neural networks and computer vision', icon: 'SiPytorch' },
  { name: 'Keras', category: 'Frameworks', description: 'High-level deep learning API', icon: 'SiTensorflow' },
  { name: 'Scikit-learn', category: 'Frameworks', description: 'Classical ML and predictive models', icon: 'SiScikitlearn' },
  { name: 'OpenCV', category: 'Frameworks', description: 'Computer vision and image processing', icon: 'FaEye' },
  { name: 'NLP', category: 'AI / ML', description: 'Natural language processing workflows', icon: 'FaPython' },
  { name: 'Computer Vision', category: 'AI / ML', description: 'Image classification and detection', icon: 'FaEye' },
  { name: 'FAISS & RAG', category: 'AI / LLM', description: 'Vector search and retrieval-augmented generation', icon: 'FaDatabase' },
  { name: 'MySQL', category: 'Databases', description: 'Relational data storage', icon: 'SiMysql' },
  { name: 'MongoDB', category: 'Databases', description: 'NoSQL document storage', icon: 'FaDatabase' },
  { name: 'AWS', category: 'Cloud', description: 'Cloud deployments and foundations', icon: 'FaAws' },
  { name: 'GCP', category: 'Cloud', description: 'Google Cloud Platform services', icon: 'SiGooglecloud' },
  { name: 'Apache Spark', category: 'Big Data', description: 'Distributed data processing', icon: 'FaDatabase' },
  { name: 'Git & GitHub', category: 'Tools', description: 'Version control and collaboration', icon: 'FaGitAlt' },
  { name: 'Docker', category: 'DevOps', description: 'Containerized deployments', icon: 'FaDocker' },
  { name: 'Kubernetes', category: 'DevOps', description: 'Container orchestration', icon: 'SiKubernetes' },
];

export const contactMeData: ContactMe = {
  profilePicture: { url: '' },
  name: 'Sahil Nitin Mujumdar',
  title: 'Data Scientist',
  summary:
    'AI/Data Science graduate experienced in ML, computer vision, LLM architectures, and production AI APIs. Open to collaborations in data science and AI engineering.',
  companyUniversity: 'Tobox Ventures · Jr. Data Scientist',
  linkedinLink: 'https://www.linkedin.com/in/sahil-mujumdar-2ba179268/',
  email: '21107050.sahil.mujumdar@gmail.com',
  phoneNumber: '+91 7588005913',
  githubLink: 'https://github.com/MujumdarSahil',
};
