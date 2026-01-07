        // Data
        const galleryImages = [
            'journals/1jour.jpg',
            'journals/2jour.jpg',
            'journals/3jour.jpg',
            'journals/4jour.jpg',
            'journals/5jour.jpg',
            'journals/6jour.jpg',
            'journals/7jour.jpg'
        ];

        const projects = [
            {
                id: 1,
                title: 'Mini E-Commerce',
                category: 'web',
                description: 'A full-featured online shopping platform with cart, checkout, and payment integration.',
                image: 'miniecommerce.png',
                tags: ['React', 'Django'],
                demoLink: '#',
                githubLink: '#',
            },
            {
                id: 2,
                title: 'Gaming Hub',
                category: 'web',
                description: 'An interactive gaming platform featuring real-time analytics, dynamic charts, and engaging data visualizations to track performance and trends.',
                image: 'gaminghub.png',
                tags: ['Html', 'Css', 'JavaScript'],
                demoLink: '#',
                githubLink: '#',
            },
            {
                id: 3,
                title: 'Movie Hub App',
                category: 'mobile',
                description: 'A mobile application for browsing and managing movies, offering a smooth user experience with cloud-based data storage and seamless synchronization.',
                image: 'moviehub.png',
                tags: ['Android Studio', 'Java', 'Firebase'],
                demoLink: '#',
                githubLink: '#',
            },
            {
                id: 4,
                title: 'Developer Portfolio',
                category: 'design',
                description: 'Clean and modern portfolio website with smooth animations and responsive design.',
                image: 'portfolio.png',
                tags: ['React', 'Tailwind CSS', 'Framer Motion'],
                demoLink: '#',
                githubLink: '#',
            },
        ];

        const journalEntries = [
            {
                id: 1,
                title: 'Startup Innovation at UP Cebu InIT',
                location: 'Cebu City',
                country: 'Philippines',
                date: 'November 12, 2025',
                day: 'Day 1 – Nov 12',
                image: 'https://cdn.slidesharecdn.com/ss_thumbnails/tbipresentation2017slingshot-170201013834-thumbnail.jpg?width=640&height=640&fit=bounds',
                excerpt: 'Learning how technology startups are nurtured through mentorship, innovation, and collaboration at UP Cebu Business Incubator for IT.',
                tags: ['Startups', 'Innovation', 'Entrepreneurship'],
                content: 'UP Cebu Business Incubator for Information Technology (InIT) is a technology business incubation center established by the University of the Philippines Cebu in partnership with the Department of Science and Technology. Founded in 2010, it aims to support technology-driven startups, especially in information and communication technology, creative media, and innovation-focused industries.\n\nDuring our visit, we learned how startups are provided with office spaces, mentoring, business development training, networking opportunities, and access to university resources such as faculty expertise, student interns, and research facilities. The incubator also works closely with the UP Cebu FabLab to help startups develop prototypes and improve their products.\n\nThis experience showed me that the IT industry is not only about coding but also about strategic planning, teamwork, creativity, and understanding market needs.',
                highlights: [
                    'Observed how startups receive mentorship beyond technical skills',
                    'Learned the importance of business strategy and marketing in IT',
                    'Saw how the UP Cebu FabLab supports prototype development'
                ]
            },
            {
                id: 2,
                title: 'Strengthening IT Foundations at RIVAN IT Cebu',
                location: 'Cebu City',
                country: 'Philippines',
                date: 'November 13, 2025',
                day: 'Day 2 – Nov 13',
                image: 'https://tse4.mm.bing.net/th/id/OIP.9TdykJp__Xt_16uc5GaBdgHaE6?rs=1&pid=ImgDetMain&o=7&rm=3',
                excerpt: 'Gaining hands-on experience in networking and understanding the importance of specialization in the IT industry.',
                tags: ['Networking', 'Cybersecurity', 'Career Growth'],
                content: 'RIVAN IT Cebu, through Cyber Institute, focuses on empowering IT professionals by offering training in Cybersecurity, Network Engineering, and DevOps. The session was facilitated by Sir Anton Diego H. Lim, who effectively explained IT concepts suitable for third-year BSIT students.\n\nWe were given hands-on activities using Cisco tools, including configuring voice ports and testing communication between two telephones. These activities helped us understand real-life networking setups and the importance of having a strong technical foundation.\n\nThis visit made me realize that specializing in a specific IT field, such as Network Engineering, can provide better career opportunities compared to being a general IT professional.',
                highlights: [
                    'Participated in hands-on Cisco networking activities',
                    'Learned the value of specialization in IT careers',
                    'Realized the importance of continuous skill development'
                ]
            },
            {
                id: 3,
                title: 'Understanding Data Insights at Dynata Philippines',
                location: 'Cebu City',
                country: 'Philippines',
                date: 'November 13, 2025',
                day: 'Day 2 – Nov 13',
                image: 'https://www.slashgear.com/img/gallery/what-is-dynata-and-why-they-keep-calling-you/l-intro-1743016883.jpg',
                excerpt: 'Discovering how data analytics and research help companies make informed business decisions.',
                tags: ['Data Analytics', 'Research', 'Business Intelligence'],
                content: 'Dynata Philippines Inc. is a global leader in first-party data and consumer insights, supporting over 6,000 companies worldwide. During the visit, the facilitator explained how data is collected, processed, and analyzed to support marketing research and business strategies.\n\nI observed how important data accuracy and proper research methodologies are in understanding consumer behavior. The use of advanced tools and large-scale datasets allows companies to make data-driven decisions.\n\nThis experience helped me appreciate how IT is closely connected to research, analytics, and business intelligence, not just software development.',
                highlights: [
                    'Learned how consumer data is collected and analyzed',
                    'Understood the role of data in business decision-making',
                    'Gained insight into IT careers related to analytics and research'
                ]
            },
            {
                id: 4,
                title: 'Exploring Virtual Reality with Mata Technologies',
                location: 'Cebu City',
                country: 'Philippines',
                date: 'November 14, 2025',
                day: 'Day 3 – Nov 14',
                image: 'mata.png',
                excerpt: 'Learning how virtual reality and 360-degree mapping support tourism and real estate industries.',
                tags: ['Virtual Reality', 'Tourism Tech', 'Innovation'],
                content: 'Mata Technologies Inc. is a Filipino company specializing in virtual tours and virtual reality maps for real estate and tourism. Inspired by the Filipino word “mata” meaning eyes, the company aims to provide immersive 360-degree previews of locations across the Philippines.\n\nThe facilitator explained how 360-degree mapping works and how it allows users to explore places without being physically present. This technology helps businesses, tourists, and property buyers visualize locations more effectively.\n\nThis visit showed me that technology can be used beyond entertainment and can greatly support business growth, marketing, and national tourism.',
                highlights: [
                    'Observed how VR tools create immersive virtual tours',
                    'Learned how technology supports tourism and real estate',
                    'Understood the importance of innovation in digital services'
                ]
            },
            {
                id: 5,
                title: 'Emergency Response and Public Safety at T.A.R.S.I.E.R. 117',
                location: 'Bohol',
                country: 'Philippines',
                date: 'November 15, 2025',
                day: 'Day 4 – Nov 15',
                image: 'https://coe-psp.dap.edu.ph/wp-content/uploads/2020/10/bohol.jpg',
                excerpt: 'Understanding how emergency response systems protect tourists and local communities through coordination and technology.',
                tags: ['Public Safety', 'Disaster Management', 'Emergency Response'],
                content: 'T.A.R.S.I.E.R. 117 is an emergency response and disaster management unit established by the Provincial Government of Bohol. Operating 24/7 through hotline 117, it ensures the safety of both tourists and residents.\n\nThe team demonstrated how they coordinate with agencies such as the Philippine National Police, Bureau of Fire Protection, and Department of Tourism. Their training, preparedness, and organization allow them to respond quickly during emergencies.\n\nThis experience emphasized the importance of public safety units and how IT and communication systems play a vital role in emergency operations and coordination.',
                highlights: [
                    'Observed coordinated emergency response operations',
                    'Learned the importance of disaster preparedness',
                    'Understood the role of IT in emergency communication systems'
                ]
            },
            {
                id: 6,
                title: 'Certificate Of Completion',
                country: 'Philippines',
                date: 'November 15, 2025',
                day: 'Day 4 – Nov 15',
                image: 'cert.jpg',
                excerpt: 'This certificate recognizes the successful completion of the Cebu–Bohol Educational Tour, acknowledging active participation, sincere effort, and meaningful attendance. It highlights visits to key institutions and companies that enriched our understanding of technology, innovation, and public service.',
                tags: ['Certificate Of Completion', 'TimeLine'],
                content:'Companies Visited:\n\nUP Cebu Business Incubator for IT\n\nDynata Philippines, Inc\n\nRIVANT IT Cebu\n\nMATA Technologies, Inc.\n\nTelephone and Radio System Integrated Emergency Response',
                highlights: [
                    "Day 1 – November 12, 2025",
                    "✈️ Arrival in Cebu via PAL",
                    "🏛️ Cebu Heritage Tour",
                    "🍽️ Lunch at Viking’s SM City",
                    "🧠 Visit: UP Cebu Information Technology Center",
                    "🏨 Check-in at Bai Hotel",
                    "🍴 Dinner (own choice, budget provided)",
                    "",
                    "Day 2 – November 13, 2025",
                    "🍳 Breakfast Buffet at Café Bai Hotel",
                    "🧠 Visits: ENG’G: Alliance Software, Inc., BSIT A: Rivant IT Cebu, BSIT B: Dynata Philippines",
                    "🍽️ Lunch Buffet at Buffet 101",
                    "🧠 Afternoon Visits: ENG’G: Tecdia Cebu Inc., BSIT A: Dynata Philippines, BSIT B: Rivant IT Cebu",
                    "🏨 Return to Bai Hotel, free time to relax",
                    "",
                    "Day 3 – November 14, 2025",
                    "🍳 Breakfast Buffet at Café Bai Hotel",
                    "🧠 Visits: ENG’G: Rivant IT Cebu, BSIT A & B: Mata Technologies",
                    "🍽️ Lunch at Somac Korean Buffet, SM Seaside",
                    "🚢 Travel to Tagbilaran via Supercat",
                    "🏨 Check-in at Panglao Vista Suites",
                    "🍽️ Dinner Buffet, free time to explore Panglao",
                    "",
                    "Day 4 – November 15, 2025",
                    "🍳 Breakfast Buffet at Vista Suites, check-out",
                    "🛡️ Visit: T.A.R.S.I.E.R. 117 Emergency Response Center",
                    "🚤 Lunch Fiesta Buffet on Loboc River Cruise with Harana",
                    "🏛️ Heritage Tour: Baclayon Church, Chocolate Hills, Tarsier Conservation, Man-Made Forest, Mirror of the World, Blood Compact Site, Pasalubong Shopping",
                    "🌾 Dinner Buffet at South Farm",
                    "✈️ Departure: Panglao Airport → Manila → Davao"
                ]
            }
        ];

        const skills = [
            {
                title: 'Frontend Development',
                skills: [
                    { name: 'React', level: 60 },
                    { name: 'TypeScript', level: 65 },
                    { name: 'Tailwind CSS', level: 60 },
                    { name: 'Next.js', level: 40 },
                ],
            },
            {
                title: 'Backend Development',
                skills: [
                    { name: 'Node.js', level: 50 },
                    { name: 'Python', level: 75 },
                    { name: 'MongoDB', level: 60 },
                    { name: 'PostgreSQL', level: 45 },
                ],
            },
            {
                title: 'Tools & Technologies',
                skills: [
                    { name: 'Git & GitHub', level: 70 },
                    { name: 'Docker', level: 40 },
                    { name: 'AWS', level: 30 },
                    { name: 'Figma', level: 85 },
                ],
            },
            {
                title: 'Soft Skills',
                skills: [
                    { name: 'Problem Solving', level: 90 },
                    { name: 'Communication', level: 85 },
                    { name: 'Team Collaboration', level: 95 },
                    { name: 'Adaptability', level: 90 },
                ],
            },
        ];

        // Utility Functions
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        // Render Projects
        function renderProjects(filter = 'all') {
            const grid = document.getElementById('projectsGrid');
            const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);
            
            grid.innerHTML = filtered.map(project => `
                <article class="project-card" data-category="${escapeHtml(project.category)}">
                    <div class="project-image">
                        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${escapeHtml(project.title)}</h3>
                        <p class="project-description">${escapeHtml(project.description)}</p>
                        <div class="project-tags">
                            ${project.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${escapeHtml(project.demoLink)}" class="project-link" target="_blank" rel="noopener noreferrer">
                                <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                                <span>Live Demo</span>
                            </a>
                            <a href="${escapeHtml(project.githubLink)}" class="project-link" target="_blank" rel="noopener noreferrer">
                                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                                <span>Code</span>
                            </a>
                        </div>
                    </div>
                </article>
            `).join('');
        }

        // Filter Projects
        function filterProjects(category) {
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.getAttribute('data-filter') === category) {
                    btn.classList.add('active');
                }
            });
            renderProjects(category);
        }

        // Render Journal
        function renderJournal() {
            const grid = document.getElementById('journalGrid');
            grid.innerHTML = journalEntries.map(entry => `
                <article class="journal-card" onclick="openJournalModal(${entry.id})" role="button" tabindex="0">
                    <div class="journal-image">
                        <img src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)}" loading="lazy">
                        <div class="journal-country-badge">${escapeHtml(entry.country)}</div>
                    </div>
                    <div class="journal-content">
                        <div class="journal-meta">
                            <div class="journal-meta-item">📍 ${escapeHtml(entry.location)}</div>
                            <div class="journal-meta-item">📅 ${escapeHtml(entry.date)}</div>
                            <div class="journal-meta-item">🗓️ ${escapeHtml(entry.day)}</div>
                        </div>
                        <h3 class="journal-title">${escapeHtml(entry.title)}</h3>
                        <p class="journal-excerpt">${escapeHtml(entry.excerpt)}</p>
                        <div class="project-tags">
                            ${entry.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                        </div>
                        <div class="read-more">
                            <span>Read More</span>
                            <span>→</span>
                        </div>
                    </div>
                </article>
            `).join('');
        }

        // Journal Modal
        function openJournalModal(id) {
            const entry = journalEntries.find(e => e.id === id);
            if (!entry) return;
            
            const modal = document.getElementById('journalModal');
            const modalBody = document.getElementById('modalBody');

            
            modalBody.innerHTML = `
                <h2 class="modal-title" id="modalTitle">${escapeHtml(entry.title)}</h2>
                <img src="${escapeHtml(entry.image)}" alt="${escapeHtml(entry.title)}" class="modal-image">
                <div class="journal-meta" style="margin-bottom: 1.5rem;">
                    <div class="journal-meta-item">📍 ${escapeHtml(entry.location)}, ${escapeHtml(entry.country)}</div>
                    <div class="journal-meta-item">📅 ${escapeHtml(entry.date)}</div>
                    <div class="journal-meta-item">🗓️ ${escapeHtml(entry.day)}</div>
                </div>
                <div class="project-tags" style="margin-bottom: 1.5rem;">
                    ${entry.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join('')}
                </div>
                ${entry.content.split('\n\n').map(p => `<p style="color: var(--color-text-secondary); margin-bottom: 1rem; line-height: 1.8;">${escapeHtml(p)}</p>`).join('')}
                <div class="modal-highlights">
                    <h4>${entry.id === 6 ? 'Educational Tour Timeline: Day 1 to Day 4' : 'Key Highlights'}</h4>
                    <ul class="highlights-list">
                        ${entry.highlights.map(item => `
                            <li>
                                <span style="color: var(--color-accent-light);">→</span>
                                <span>${escapeHtml(item)}</span>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('journalModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Gallery Modal
        function openGalleryModal() {
            const modal = document.getElementById('journalModal');
            const modalBody = document.getElementById('modalBody');

            modalBody.innerHTML = `
                <h2 class="modal-title">Journal Gallery</h2>
                <div class="gallery-grid">
                    ${galleryImages.map((src, index) => `<img src="${escapeHtml(src)}" alt="Journal Picture" onclick="openImageModal(${index})" loading="lazy">`).join('')}
                </div>
            `;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Single Image Modal
        function openImageModal(index) {
            const modal = document.getElementById('journalModal');
            const modalBody = document.getElementById('modalBody');
            const src = galleryImages[index];

            modalBody.innerHTML = `
                <div class="image-view">
                    <img src="${escapeHtml(src)}" alt="Journal Picture" class="large-image">
                    <div class="image-nav">
                        <button class="nav-btn prev-btn" onclick="navigateImage(${index - 1})" ${index === 0 ? 'disabled' : ''}>← Previous</button>
                        <button class="back-btn" onclick="openGalleryModal()">Back to Gallery</button>
                        <button class="nav-btn next-btn" onclick="navigateImage(${index + 1})" ${index === galleryImages.length - 1 ? 'disabled' : ''}>Next →</button>
                    </div>
                </div>
            `;

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Navigate to next/previous image
        function navigateImage(index) {
            if (index >= 0 && index < galleryImages.length) {
                openImageModal(index);
            }
        }

        // Render Skills
        function renderSkills() {
            const grid = document.getElementById('skillsGrid');
            grid.innerHTML = skills.map((category, catIndex) => `
                <div class="skill-category">
                    <h3 class="skill-category-title">${escapeHtml(category.title)}</h3>
                    ${category.skills.map((skill, skillIndex) => `
                        <div class="skill-item">
                            <div class="skill-header">
                                <span class="skill-name">${escapeHtml(skill.name)}</span>
                                <span class="skill-level">${skill.level}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" data-width="${skill.level}" id="skill-${catIndex}-${skillIndex}"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('');
            
            // Animate skill bars when in view
            observeSkillBars();
        }

        // Observe skill bars for animation
        function observeSkillBars() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target;
                        const width = progressBar.getAttribute('data-width');
                        setTimeout(() => {
                            progressBar.style.width = width + '%';
                        }, 100);
                        observer.unobserve(progressBar);
                    }
                });
            }, { threshold: 0.5 });
            
            document.querySelectorAll('.skill-progress').forEach(bar => {
                observer.observe(bar);
            });
        }

        // Navigation
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active nav links
                updateActiveNavLink(id);

                // Close mobile menu
                document.getElementById('mobileMenu').classList.remove('active');
                document.querySelector('.mobile-menu-btn').setAttribute('aria-expanded', 'false');
            }
        }

        function updateActiveNavLink(activeId) {
            document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelectorAll(`[onclick*="'${activeId}'"]`).forEach(link => {
                link.classList.add('active');
            });
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobileMenu');
            const btn = document.querySelector('.mobile-menu-btn');
            const isOpen = menu.classList.toggle('active');
            btn.setAttribute('aria-expanded', isOpen);
        }

        // Scroll behavior
        let lastScrollPosition = 0;
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            const currentScrollPosition = window.scrollY;
            
            // Add scrolled class
            if (currentScrollPosition > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Update active section
            const sections = ['home', 'about', 'projects', 'journal', 'contact'];
            const scrollPosition = currentScrollPosition + 100;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        updateActiveNavLink(section);
                    }
                }
            });

            lastScrollPosition = currentScrollPosition;
        });

        // Form submission
        function handleSubmit(e) {
            e.preventDefault();
            showToast("Message sent successfully! I'll get back to you soon.");
            e.target.reset();
        }

        // Toast notification
        function showToast(message) {
            const toast = document.getElementById('toast');
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // Close modal on outside click
        document.getElementById('journalModal').addEventListener('click', (e) => {
            if (e.target.id === 'journalModal') {
                closeModal();
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const modal = document.getElementById('journalModal');
                if (modal.classList.contains('active')) {
                    closeModal();
                }
            }
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderProjects();
            renderJournal();
            renderSkills();
            document.getElementById('currentYear').textContent = new Date().getFullYear();
        });