const { useState, useEffect } = React;

// ===== Theme Hook =====
function useTheme() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('portfolio-theme');
        return saved || 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return [theme, toggleTheme];
}

// ===== Data =====
const profileData = {
    name: "Shekhar Mohanty Hemant",
    title: "Student | Mtech AI, IIT Gandhinagar",
    phone: "+91-9110054046",
    email: "hemant436268s@gmail.com",
    linkedin: "linkedin.com/in/hem436",
    location: "Gandhinagar, Gujarat"
};

const educationData = [
    {
        degree: "Bachelor of Science (4 Year)",
        field: "Data Science and Applications",
        school: "Indian Institute of Technology Madras",
        period: "Jan 2021 - Dec 2024",
        grade: "CGPA: 8.96/10.0"
    },
    {
        degree: "Trade Apprentice - NCVT Electronics",
        field: "Electronics",
        school: "Shavak Nanavati Technical Institute",
        period: "Jan 2016 - Apr 2019",
        grade: ""
    }
];

const experienceData = [
    {
        title: "Maintenance Assistant - 2",
        company: "Tata Steel",
        period: "Apr 2019 - Present",
        description: [
            "Upgraded existing automation system and successfully commissioned ABB 800 M PLC and ACS 880 Drive.",
            "Performing regular maintenance activities and resolving breakdown of electrical equipment in Recoiling and Inspection line."
        ]
    }
];

const skillsData = {
    languages: ["C/C++", "Python", "R", "Java", "Bash Script", "Ladder", "STL", "MATLAB"],
    software: ["AutoCAD", "Fusion360", "Cura (3D Printing)", "DaVinci Resolve"],
    cloud: ["GCP", "Azure", "Azure Fundamentals", "AI Fundamentals"],
    other: ["Electronics / Electrical System Design", "ROS2", "Machine Learning", "Deep Learning"]
};

const projectsData = [
    {
        title: "Warehouse Inspection Robot",
        date: "Dec 2024",
        description: "Demonstrated autonomous navigation and object detection in a simulated warehouse environment using a robot with camera and lidar sensors. The robot navigates through waypoints, detects parcels in real-time, and logs position/orientation data.",
        tech: ["ROS2", "Gazebo", "Navigation2", "YOLOv5", "TurtleBot3", "Python"],
        github: "#",
        demo: "#"
    },
    {
        title: "Spectral Classification (CH2IIRS)",
        date: "Aug 2024",
        description: "Created a pipeline for spectral classification of Chandrayaan-2 IIRS dataset of Mare Moscoviense and Mare Gardner crater. Implemented data conversion, MNF denoising, KMeans/NFINDR algorithms, and 1D-CNN for spectral class prediction.",
        tech: ["Python", "Deep Learning", "1D-CNN", "KMeans", "MNF", "Remote Sensing"],
        github: "#",
        demo: "#"
    },
    {
        title: "Machine Unlearning",
        date: "May 2024",
        description: "Demonstrated machine unlearning for classification tasks on deep neural networks at ACM Workshop 2024. Implemented 'Fast Yet Effective Machine Unlearning' paper by Tarun et al. on a custom network.",
        tech: ["PyTorch", "Deep Learning", "Neural Networks", "Python"],
        github: "#",
        demo: "#"
    },
    {
        title: "Home Automation (Envision IoT)",
        date: "May 2023",
        description: "Built an IoT system for controlling home appliances based on human presence detection. Integrated ESP32 microcontroller with custom relay board and USB camera for smart automation.",
        tech: ["ESP32", "Arduino", "MQTT", "VueJS", "IoT", "Flespi"],
        github: "#",
        demo: "#"
    },
    {
        title: "QuantifiedSelf Web Application",
        date: "Mar 2022",
        description: "Created a comprehensive web application allowing users to create custom trackers, log data periodically, and analyze trends over time with visual insights.",
        tech: ["Flask", "VueJS", "SQLite3", "Redis", "Gunicorn", "Cronjob"],
        github: "#",
        demo: "#"
    },
    {
        title: "UAV Drone",
        date: "Mar 2017",
        description: "Assembled a quadcopter from scratch to demonstrate surveillance capabilities. Designed and integrated flight controllers, motors, and camera systems.",
        tech: ["Quadcopter", "Flight Controller", "Electronics", "CAD"],
        github: "#",
        demo: "#"
    }
];

const researchData = [
    {
        title: "Fast Yet Effective Machine Unlearning",
        conference: "ACM Workshop 2024",
        year: "2024",
        abstract: "Presented implementation and demonstration of machine unlearning techniques for classification tasks on deep neural networks, based on the foundational work by Tarun et al.",
        link: "#"
    },
    {
        title: "Spectral Classification of Chandrayaan-2 IIRS Dataset",
        conference: "Remote Sensing Analysis Project",
        year: "2024",
        abstract: "Developed a comprehensive pipeline for spectral classification of lunar surface data from Mare Moscoviense and Mare Gardner crater using advanced signal processing and deep learning techniques.",
        link: "#"
    }
];

const blogData = [
    {
        id: 0,
        title: "My Resume / CV",
        date: "February 8, 2026",
        excerpt: "View or download my latest CV highlighting my education, experience, skills, and achievements.",
        type: "pdf",
        pdfUrl: "Shekhar_Mohanty_Hemant_CV.pdf"
    },
    {
        id: 1,
        title: "Getting Started with ROS2 Navigation Stack",
        date: "December 15, 2024",
        excerpt: "A comprehensive guide to setting up and using the ROS2 Navigation2 stack for autonomous robot navigation in simulated environments.",
        content: "In this post, I'll walk you through the process of setting up ROS2 Navigation2 stack for autonomous robot navigation. We'll cover everything from installation to creating custom waypoints and handling obstacle avoidance.\n\nThe Navigation2 stack is a powerful tool that provides a complete navigation solution for mobile robots. It includes path planning, obstacle avoidance, and recovery behaviors.\n\nKey topics covered:\n- Setting up a Gazebo simulation environment\n- Configuring the Nav2 stack parameters\n- Creating custom waypoint following behavior\n- Integrating with sensor data from lidar and cameras\n\nThis is a placeholder for the full blog post content. In a production environment, this would contain detailed tutorials, code snippets, and images."
    },
    {
        id: 2,
        title: "Understanding Machine Unlearning: A Practical Approach",
        date: "November 20, 2024",
        excerpt: "Exploring the concept of machine unlearning and how to implement it effectively in deep neural networks for privacy-preserving AI.",
        content: "Machine unlearning is an emerging field in AI that addresses the challenge of removing specific data from trained models without retraining from scratch.\n\nIn this post, we explore:\n- Why machine unlearning matters for privacy\n- The mathematical foundations behind unlearning\n- Implementation strategies using PyTorch\n- Real-world applications and challenges\n\nThis is a placeholder for the full blog post content. The actual implementation details and code examples would be included in the production version."
    },
    {
        id: 3,
        title: "Building IoT Solutions with ESP32 and MQTT",
        date: "August 5, 2023",
        excerpt: "Learn how to create a complete IoT home automation system using ESP32, MQTT protocol, and a Vue.js frontend for real-time control.",
        content: "IoT (Internet of Things) has revolutionized how we interact with our homes and environments. In this tutorial, we'll build a complete home automation system.\n\nTopics covered:\n- Setting up ESP32 for WiFi connectivity\n- Understanding MQTT protocol for IoT\n- Building a responsive Vue.js dashboard\n- Integrating presence detection sensors\n\nThis is a placeholder for the full blog post content with code examples and circuit diagrams."
    },
    {
        id: 4,
        title: "My Journey: From Trade Apprentice to IIT Madras",
        date: "January 10, 2023",
        excerpt: "A personal reflection on my unconventional path from a trade apprentice in electronics to pursuing a degree in Data Science at IIT Madras.",
        content: "Every journey has its unique path, and mine was far from conventional. After completing my trade apprenticeship at Shavak Nanavati Technical Institute, I never imagined I would one day be studying at IIT Madras.\n\nIn this personal post, I share:\n- My early experiences in electronics\n- The decision to pursue higher education\n- Balancing work at Tata Steel with studies\n- Lessons learned along the way\n\nThis is a placeholder for the full personal blog post content."
    }
];

const achievementsData = [
    "AIR 170 in GATE (Data Science and Artificial Intelligence) 2024 - Score: 739",
    "1st Place in PLC Programming at CII National Workskill Competition 2019",
    "Working with IFTR (through Tata Pro Engage) to create an application for collecting farmers' data from remote locations in Chennai"
];

// ===== Components =====

// Header Component
function Header({ activeTab, setActiveTab, theme, toggleTheme }) {
    const tabs = [
        { id: 'about', label: 'About', icon: 'fa-user' },
        { id: 'projects', label: 'Projects / Demos', icon: 'fa-code' },
        { id: 'research', label: 'Research', icon: 'fa-flask' },
        { id: 'blog', label: 'Blog', icon: 'fa-pen' }
    ];

    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <span className="logo-accent">..  ..</span>
                </div>
                <nav className="nav-links">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            <i className={`fas ${tab.icon}`} style={{ marginRight: '0.5rem' }}></i>
                            {tab.label}
                        </button>
                    ))}
                    <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                </nav>
            </div>
        </header>
    );
}

// About Section Component
function AboutSection() {
    return (
        <section className="section">
            <div className="about-hero">
                <aside className="profile-sidebar">
                    <div className="profile-card">
                        <div className="profile-image">
                            <i className="fas fa-user"></i>
                        </div>
                        <h1 className="profile-name">{profileData.name}</h1>
                        <p className="profile-title">{profileData.title}</p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="fas fa-phone"></i>
                                <span>{profileData.phone}</span>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <a href={`mailto:${profileData.email}`}>{profileData.email}</a>
                            </div>
                            <div className="contact-item">
                                <i className="fab fa-linkedin"></i>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <span>{profileData.location}</span>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="about-content">
                    {/* Education */}
                    <div className="card">
                        <h2 className="card-title">
                            <i className="fas fa-graduation-cap"></i>
                            Education
                        </h2>
                        <div className="education-list">
                            {educationData.map((edu, index) => (
                                <div key={index} className="education-item">
                                    <div className="education-degree">{edu.degree}</div>
                                    <div className="education-school">{edu.school}</div>
                                    <div className="education-details">
                                        {edu.field} • {edu.period}
                                        {edu.grade && ` • ${edu.grade}`}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="card">
                        <h2 className="card-title">
                            <i className="fas fa-briefcase"></i>
                            Work Experience
                        </h2>
                        <div className="timeline">
                            {experienceData.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-date">{exp.period}</div>
                                    <div className="timeline-title">{exp.title}</div>
                                    <div className="timeline-company">{exp.company}</div>
                                    <ul className="timeline-description">
                                        {exp.description.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="card">
                        <h2 className="card-title">
                            <i className="fas fa-tools"></i>
                            Skills
                        </h2>
                        <div className="skill-category">
                            <div className="skill-category-title">Programming Languages</div>
                            <div className="skills-container">
                                {skillsData.languages.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-category">
                            <div className="skill-category-title">Software & Tools</div>
                            <div className="skills-container">
                                {skillsData.software.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-category">
                            <div className="skill-category-title">Cloud & Certifications</div>
                            <div className="skills-container">
                                {skillsData.cloud.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="skill-category">
                            <div className="skill-category-title">Other Skills</div>
                            <div className="skills-container">
                                {skillsData.other.map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="card">
                        <h2 className="card-title">
                            <i className="fas fa-trophy"></i>
                            Achievements & Volunteering
                        </h2>
                        <div className="achievements-list">
                            {achievementsData.map((achievement, index) => (
                                <div key={index} className="achievement-item">
                                    <i className="fas fa-star"></i>
                                    <span>{achievement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Projects Section Component
function ProjectsSection() {
    return (
        <section className="section">
            <h2 className="section-title">
                <i className="fas fa-code"></i>
                Projects
            </h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header">
                            <i className="fas fa-folder-open project-icon"></i>
                            <div className="project-links">
                                <a href={project.github} className="project-link" title="GitHub">
                                    <i className="fab fa-github"></i>
                                </a>
                                <a href={project.demo} className="project-link" title="Live Demo">
                                    <i className="fas fa-external-link-alt"></i>
                                </a>
                            </div>
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <div className="project-date">{project.date}</div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Research Section Component
function ResearchSection() {
    return (
        <section className="section">
            <h2 className="section-title">
                <i className="fas fa-flask"></i>
                Research Work
            </h2>
            <div className="research-list">
                {researchData.map((research, index) => (
                    <div key={index} className="research-card">
                        <h3 className="research-title">{research.title}</h3>
                        <div className="research-meta">
                            <span>
                                <i className="fas fa-book"></i>
                                {research.conference}
                            </span>
                            <span>
                                <i className="fas fa-calendar"></i>
                                {research.year}
                            </span>
                        </div>
                        <p className="research-abstract">{research.abstract}</p>
                        <a href={research.link} className="research-link">
                            <i className="fas fa-file-pdf"></i>
                            View Publication
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Blog Section Component
function BlogSection() {
    const [selectedPost, setSelectedPost] = useState(null);

    // Load blog posts and PDFs, using localStorage (admin) with hardcoded blogData as fallback
    const [allPosts, setAllPosts] = useState(() => {
        let posts = [];
        const seenIds = new Set();

        // 1. Load admin-saved blog posts
        const savedBlogs = localStorage.getItem('portfolio_blogs');
        if (savedBlogs) {
            try {
                JSON.parse(savedBlogs).forEach(b => {
                    if (!seenIds.has(b.id)) { seenIds.add(b.id); posts.push(b); }
                });
            } catch(e) { /* ignore */ }
        }

        // 2. Load admin-saved blog PDFs
        const savedPdfs = localStorage.getItem('portfolio_blog_pdfs');
        if (savedPdfs) {
            try {
                JSON.parse(savedPdfs).forEach(b => {
                    if (!seenIds.has(b.id)) { seenIds.add(b.id); posts.push(b); }
                });
            } catch(e) { /* ignore */ }
        }

        // 3. Fill in any hardcoded defaults not already present
        blogData.forEach(b => {
            if (!seenIds.has(b.id)) { seenIds.add(b.id); posts.push(b); }
        });

        return posts;
    });

    // Full-page blog post view
    if (selectedPost) {
        return (
            <section className={`section blog-fullpage ${selectedPost.type === 'pdf' ? 'blog-fullpage-pdf' : ''}`}>
                <button className="blog-back-btn" onClick={() => setSelectedPost(null)}>
                    <i className="fas fa-arrow-left"></i> Back to Blog
                </button>
                <article className="blog-full-article">
                    <header className="blog-full-header">
                        <div className="blog-full-date">
                            {selectedPost.type === 'pdf' && <i className="fas fa-file-pdf" style={{ marginRight: '0.5rem' }}></i>}
                            {selectedPost.date}
                        </div>
                        <h1 className="blog-full-title">{selectedPost.title}</h1>
                    </header>
                    {selectedPost.type === 'pdf' ? (
                        <div className="blog-full-body blog-pdf-body">
                            <iframe
                                src={selectedPost.pdfUrl}
                                className="blog-pdf-viewer"
                                title={selectedPost.title}
                            ></iframe>
                            <a href={selectedPost.pdfUrl} target="_blank" rel="noopener noreferrer" className="pdf-download-link">
                                <i className="fas fa-download"></i> Open / Download PDF
                            </a>
                        </div>
                    ) : (
                        <div className="blog-full-body">
                            {selectedPost.content.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    )}
                </article>
            </section>
        );
    }

    // Blog list view
    return (
        <section className="section">
            <h2 className="section-title">
                {/* <i className="fas fa-pen"></i> */}
                {/* Personal Blog */}
            </h2>
            <div className="blog-list">
                {allPosts.map((post) => (
                    <div 
                        key={post.id} 
                        className="blog-card"
                        onClick={() => setSelectedPost(post)}
                    >
                        <div className="blog-date">
                            {post.type === 'pdf' && <i className="fas fa-file-pdf" style={{ marginRight: '0.5rem' }}></i>}
                            {post.date}
                        </div>
                        <h3 className="blog-title">{post.title}</h3>
                        <p className="blog-excerpt">{post.excerpt}</p>
                        <span className="read-more">
                            {post.type === 'pdf' ? (
                                <>View PDF <i className="fas fa-file-pdf"></i></>
                            ) : (
                                <>Read More <i className="fas fa-arrow-right"></i></>
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}

// Footer Component
function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Shekhar Mohanty Hemant. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem' }}>
                Built with <i className="fas fa-heart" style={{ color: 'var(--accent-primary)' }}></i>
            </p>
        </footer>
    );
}

// Main App Component
function App() {
    const [activeTab, setActiveTab] = useState('about');
    const [theme, toggleTheme] = useTheme();

    // Handle URL hash for basic routing
    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (['about', 'projects', 'research', 'blog'].includes(hash)) {
            setActiveTab(hash);
        }
    }, []);

    useEffect(() => {
        window.location.hash = activeTab;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [activeTab]);

    const renderSection = () => {
        switch (activeTab) {
            case 'about':
                return <AboutSection />;
            case 'projects':
                return <ProjectsSection />;
            case 'research':
                return <ResearchSection />;
            case 'blog':
                return <BlogSection />;
            default:
                return <AboutSection />;
        }
    };

    return (
        <>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} theme={theme} toggleTheme={toggleTheme} />
            <main className="main-container">
                {renderSection()}
            </main>
            <Footer />
        </>
    );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
