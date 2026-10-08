// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const siteHeader = document.getElementById('siteHeader');
const menuIcon = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');

if (mobileMenuBtn && siteHeader) {
    mobileMenuBtn.addEventListener('click', () => {
        siteHeader.classList.toggle('open');
        if (siteHeader.classList.contains('open')) {
            if (menuIcon) menuIcon.style.display = 'none';
            if (closeIcon) closeIcon.style.display = 'block';
            document.body.style.overflow = 'hidden';
        } else {
            if (menuIcon) menuIcon.style.display = 'block';
            if (closeIcon) closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 1023 && siteHeader) {
            siteHeader.classList.remove('open');
            if (menuIcon) menuIcon.style.display = 'block';
            if (closeIcon) closeIcon.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
});

// Active section highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightActiveSection() {
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const icon = link.querySelector('.nav-icon');
                if (icon) icon.classList.remove('active');

                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                    const activeIcon = link.querySelector('.nav-icon');
                    if (activeIcon) activeIcon.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightActiveSection);

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

function toggleScrollTop() {
    if (scrollTopBtn) {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    }
}

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

window.addEventListener('scroll', toggleScrollTop);

// Portfolio data grouped by project
window.PROJECTS = [
    {
        id: "kidulan",
        name: "Kidulan.com Headless E-commerce",
        category: "shopify",
        thumbnail: "./images/kidulan1.jpeg",
        description: "Developed the Kidulan.com e-commerce website using a headless commerce architecture with Shopify, Hydrogen, and Sanity CMS. Connected Shopify product data with dynamic Sanity content using Sanity Connect.",
        techStack: ["Shopify", "Hydrogen", "Sanity CMS", "React", "JavaScript", "TypeScript"],
        functionality: [
            "Developed the Kidulan.com homepage using Hydrogen",
            "Integrated Sanity CMS for dynamic homepage content",
            "Created and managed Sanity schemas and structured content",
            "Implemented slug-based content handling",
            "Connected Shopify commerce data with Sanity",
            "Integrated Sanity content with the Hydrogen storefront",
            "Created reusable and dynamic homepage sections",
            "Combined CMS-managed content with Shopify product data",
            "Built a flexible headless architecture for content updates"
        ],
        images: [
            "./images/kidulan1.jpeg",
            "./images/kidulan2.jpeg",
            "./images/kidulan3.jpeg",
            "./images/kidulan4.jpeg",
            "./images/kidulan5.jpeg"
        ]
    },
    {
        id: "mobile-app-project",
        name: "ADPH WINS - Infant Safety & Health Tracking",
        category: "mobile",
        thumbnail: "./Image (1).jpg",
        description: "A comprehensive, cross-platform mobile application designed to assist parents and caregivers in managing infant health and safety. The application serves as a central hub for critical alerts, developmental tracking, and educational resources. It is built to ensure high reliability for life-saving features like in-vehicle safety alerts and severe weather warnings, even when the app is running in the background.",
        techStack: [
            "Flutter (Dart)", 
            "Riverpod", 
            "PostgreSQL (Row Level Security)", 
            "Firebase Cloud Messaging", 
            "Serverless Edge Functions",
            "WebSockets"
        ],
        functionality: [
            "In-Vehicle Child Safety Alert System: Dual-process background monitor using GPS and motion detection to prevent infants from being left in vehicles.",
            "Health & Developmental Tracking: Complex vaccine scheduling logic and age-grouped milestone tracking with offline-first synchronization.",
            "Real-Time Contextual Alerts: Integrates third-party APIs for precise severe weather warnings and automatic government product recall notices.",
            "Educational Gamification: Interactive safety quizzes with points, leveling systems, and offline-persistent scoring.",
            "Advanced Notification Pipeline: Merges events into a unified dashboard using concurrent WebSocket channels and processes high-volume dispatches via edge functions."
        ],
        images: [
            "./Image (1).jpg",
            "./Image (2).jpg",
            "./Image (3).jpg",
            "./Image (4).jpg",
            "./Image (5).jpg",
            "./Image (6).jpg",
            "./Image (7).jpg",
            "./Image (8).jpg",
            "./Image (9).jpg",
            "./Image (10).jpg",
            "./Image (11).jpg",
            "./Image (12).jpg",
            "./Image (13).jpg",
            "./Image (14).jpg",
            "./Image (15).jpg",
            "./Image (16).jpg",
            "./Image (17).jpg",
            "./Image (18).jpg",
            "./Image (19).jpg"
        ]
    },
    {
        id: "enrixa-store",
        name: "Enrixa Store",
        category: "web",
        thumbnail: "./e0.png",
        description: "Enrixa Store helps any business open its own online store in minutes, with no technical skills needed. Everything is in one place: your products, payments, delivery, design and sales reports. Designed specifically for the Indian market, it provides everything you get to run your online store efficiently and securely.",
        techStack: [
            "React", 
            "Node.js", 
            "Razorpay", 
            "Shiprocket", 
            "Built-in AI Assistant (Genie)", 
            "Google Analytics"
        ],
        functionality: [
            "Quick Store Setup: Sign up instantly, manage staff permissions, use custom domains, and migrate from Shopify/WooCommerce.",
            "Comprehensive Product Management: Track stock, offer variants, bundle warranties, and let AI write descriptions and create photos.",
            "Easy Buying & Payments: Accept UPI, cards, net banking via Razorpay, offer Cash on Delivery, and generate GST-ready bills.",
            "Order & Customer Handling: Centralized order status tracking, automated confirmation emails, and customer account portals.",
            "Custom Store Pages: Build trust with customer reviews, blog posts, contact forms, and FAQ pages.",
            "Look & Feel: Live-editable designs with the Genie AI assistant for instantaneous layout customization.",
            "Reports & Growth: Advanced sales dashboards integrated with Google Analytics to track visitors and popular products.",
            "Safe & Reliable: Ensures exact totals, private store information, and a fully custom website capability backed by the Enrixa team."
        ],
        images: [
            "./e0.png",
            "./e1.png",
            "./e2.png",
            "./e3.png",
            "./e4.png",
            "./e5.png",
            "./e6.png",
            "./e7.png",
            "./em1.png",
            "./em2.png",
            "./em3.png",
            "./em4.jpeg",
            "./em5.jpeg"



        ]
    },
    {
        id: "smart-collection-manager",
        name: "Smart Collection & Merchandising Manager for Shopify",
        category: "shopify",
        thumbnail: "./a1.png",
        description: "The Smart Collection Manager is a robust Shopify application built to automate visual merchandising for e-commerce stores. By leveraging real-time sales data and customizable rules, the app dynamically manages, creates, and sorts collections to maximize conversions. It intelligently promotes bestsellers, highlights new arrivals, and demotes out-of-stock inventory.",
        techStack: [
            "React 18",
            "Shopify Polaris",
            "Node.js",
            "PostgreSQL (Supabase)",
            "Prisma ORM",
            "Shopify App Bridge",
            "Vite",
            "TypeScript"
        ],
        functionality: [
            "Automated Dynamic Collections (Bestsellers, Trending, New Arrivals, Aging Inventory)",
            "Advanced Merchandising & Sorting Logic (OOS Demotion, New Product Promotion, Tag-Based Sorting)",
            "Scheduled Product Featuring to pin and schedule products for marketing campaigns",
            "Granular Store Settings with global exclusion rules and collection limits",
            "Background Data Synchronization via Shopify Webhooks for continuous scoring",
            "Seamless Integration running directly within the Shopify Admin via iframe"
        ],
        images: [
            "./a1.png",
            "./a2.png",
            "./a3.png",
            "./a4.png",
            "./a5.png",
            "./a6.png",
            "./a7.png",
            "./a8.png"
        ]
    },
    {
        id: "vibrant-patterns-theme",
        name: "Vibrant Patterns Custom Theme",
        category: "shopify",
        thumbnail: "./theme1.jpeg",
        description: "Vibrant Patterns is a fully custom, modern Shopify theme designed to give merchants absolute control over their brand's presentation across all devices. Built natively on Shopify's Online Store 2.0 architecture, the project focused on creating a highly responsive, aesthetic, and modular experience for e-commerce stores without sacrificing performance. The primary objective was to build a suite of custom sections (Hero Banners, Contact Forms, About Pages, and Collection Grids) that gave merchants independent control over the mobile and desktop experience directly from the Theme Editor, alongside implementing a modern, AJAX-powered cart and filtering system. While this functions as a normal theme out of the box, it serves as a highly extensible framework where we can create limitless further customizations to suit any brand. The development workflow heavily utilized the Shopify CLI, significantly reducing development time and providing a seamless, cost-free local testing environment.",
        techStack: [
            "Shopify Liquid",
            "HTML5",
            "CSS3",
            "Vanilla JavaScript",
            "Shopify CLI",
            "Theme Access API"
        ],
        functionality: [
            "Advanced Responsive Banner Engine: Developed a custom Liquid schema that allows merchants to decouple desktop and mobile visual assets entirely.",
            "Independent Image Pickers: Merchants can upload a wide aspect-ratio image for desktop and a separate portrait-oriented image for mobile.",
            "Dynamic Height Controls: Built-in sliders to set exact pixel heights for desktop (e.g., 400px) and mobile (e.g., 250px) independently.",
            "Responsive Text Alignment: Independent text alignment settings (Left, Center, Right) for desktop and mobile to ensure readability.",
            "Custom JSON Templates (OS 2.0): Leveraged Shopify 2.0 JSON templates to allow merchants to easily add, remove, and re-order blocks on static pages.",
            "AJAX-Powered Collection Filtering: Built a seamless, page-reload-free filtering experience using the Storefront AJAX API.",
            "Custom Cart Features: Implemented a bespoke cart layout with real-time DOM updates, interactive checkboxes, and a 'Delete All' bulk action function.",
            "Technical Challenge Overcome: Implemented strict deployment protocols using .shopifyignore to prevent local Shopify CLI sync processes from overwriting live merchant content.",
            "Limitless Customization & Rapid Workflow: Built as a normal theme foundation but engineered for deep, ongoing custom modifications. Utilized Shopify CLI to ensure a time-efficient, completely free, and streamlined local development process."
        ],
        images: [
            "./theme1.jpeg",
            "./theme2.jpeg",
            "./theme3.jpeg",
            "./theme4.jpeg",
            "./theme5.jpeg",
            "./theme6.jpeg",
            "./theme7.jpeg",
            "./theme8.jpeg",
            "./theme9.jpeg"
        ]
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (!portfolioGrid) {
        console.error('portfolioGrid element not found!');
        return;
    }

    function renderPortfolioItems(category = 'all') {
        const filtered = category === 'all'
            ? window.PROJECTS
            : window.PROJECTS.filter(item => item.category === category);

        console.log('Rendering', filtered.length, 'projects for category:', category);

        portfolioGrid.innerHTML = filtered.map((item, index) => `
            <a href="project-details.html?id=${item.id}" onclick="this.href = window.location.protocol === 'file:' ? 'project-details.html?id=${item.id}' : '/nida-portfolio/project-details.html?id=${item.id}';" class="portfolio-card">
                <div class="portfolio-image-wrapper">
                    <span class="portfolio-number">0${index + 1}</span>
                    <img 
                        src="${item.thumbnail}" 
                        alt="${item.name}" 
                        loading="lazy"
                        onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Image+Not+Found'; console.error('Failed to load:', '${item.thumbnail}');"
                    >
                </div>
                <div class="portfolio-content">
                    <h4 class="portfolio-title">${item.name}</h4>
                    <p class="portfolio-desc">${item.description.length > 80 ? item.description.substring(0, 80) + '...' : item.description}</p>
                    <div class="portfolio-link">View Project &rarr;</div>
                </div>
            </a>
        `).join('');
    }

    renderPortfolioItems();

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolioItems(btn.dataset.filter);
        });
    });
});


// ========== CONTACT MODAL FUNCTIONALITY ==========
const contactTriggerBtn = document.getElementById('contactTriggerBtn');
const contactModal = document.getElementById('contactModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalContactForm = document.getElementById('modalContactForm');
const hiddenIframe = document.getElementById('hidden_iframe');

// Check if modal elements exist
if (contactTriggerBtn && contactModal) {
    console.log('Contact modal elements found');

    // Open modal
    contactTriggerBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Contact button clicked');
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close modal function
    function closeModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close on X button
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });
    }

    // Close on overlay click
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal();
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && contactModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle form submission - Show success then redirect to hero
    if (modalContactForm) {
        modalContactForm.addEventListener('submit', function (e) {
            // Get elements
            const submitBtn = this.querySelector('button[type="submit"]');
            const modalHeader = document.querySelector('.modal-header');
            const originalHeader = modalHeader.innerHTML;

            // Show loading
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Listen for iframe load (form submission complete)
            if (hiddenIframe) {
                hiddenIframe.onload = function () {
                    // Form submitted successfully

                    // Show success message in modal
                    modalHeader.innerHTML = `
                        <h3 style="color: #b50629; margin-bottom: 10px;">✓ Message Sent Successfully!</h3>
                        <p style="color: #666;">Thank you for reaching out. Redirecting to home...</p>
                    `;

                    // Reset form
                    modalContactForm.reset();

                    // Wait 2 seconds to show success message, then redirect to hero section
                    setTimeout(() => {
                        // Close modal
                        closeModal();

                        // Restore original header for next time
                        modalHeader.innerHTML = originalHeader;
                        submitBtn.textContent = 'Send Message';
                        submitBtn.disabled = false;

                        // Redirect to hero section smoothly
                        document.getElementById('hero').scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });

                    }, 2000); // 2 second delay to show success message

                    // Clear iframe src
                    hiddenIframe.src = 'about:blank';
                };
            }

            // Fallback timeout in case iframe doesn't trigger
            setTimeout(() => {
                if (submitBtn.disabled) {
                    // Show success message
                    modalHeader.innerHTML = `
                        <h3 style="color: #b50629; margin-bottom: 10px;">✓ Message Sent Successfully!</h3>
                        <p style="color: #666;">Thank you for contact</p>
                    `;

                    modalContactForm.reset();

                    // Wait 2 seconds then redirect
                    setTimeout(() => {
                        closeModal();
                        modalHeader.innerHTML = originalHeader;
                        submitBtn.textContent = 'Send Message';
                        submitBtn.disabled = false;

                        // Scroll to hero
                        document.getElementById('hero').scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 2000);
                }
            }, 2000);
        });
    }
}

// Skills/Tools Toggle Functionality with Dynamic Title
const toggle = document.getElementById('skillsToolsToggle');
const skillsGrid = document.getElementById('skillsGrid');
const toolsGrid = document.getElementById('toolsGrid');
const skillsLabel = document.getElementById('skillsLabel');
const toolsLabel = document.getElementById('toolsLabel');
const sectionTitle = document.getElementById('skillsSectionTitle');
const sectionSubtitle = document.getElementById('skillsSectionSubtitle');

// Content for Skills and Tools
const content = {
    skills: {
        title: 'Skills',
        subtitle: 'Technical expertise in full-stack development and Shopify solutions'
    },
    tools: {
        title: 'Tools',
        subtitle: 'Development tools, software, and technologies I work with'
    }
};

// Initial state
if (skillsLabel && sectionTitle && sectionSubtitle) {
    skillsLabel.classList.add('active');
    sectionTitle.textContent = content.skills.title;
    sectionSubtitle.textContent = content.skills.subtitle;
}

if (toggle) {
    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            // Show Tools, hide Skills
            setTimeout(() => {
                toolsGrid.style.display = 'grid';
                skillsGrid.style.display = 'none';

                // Update active labels
                skillsLabel.classList.remove('active');
                toolsLabel.classList.add('active');

                // Update section title and subtitle for Tools
                sectionTitle.textContent = content.tools.title;
                sectionSubtitle.textContent = content.tools.subtitle;
            }, 200);
        } else {
            // Show Skills, hide Tools
            setTimeout(() => {
                skillsGrid.style.display = 'grid';
                toolsGrid.style.display = 'none';

                // Update active labels
                toolsLabel.classList.remove('active');
                skillsLabel.classList.add('active');

                // Update section title and subtitle for Skills
                sectionTitle.textContent = content.skills.title;
                sectionSubtitle.textContent = content.skills.subtitle;
            }, 200);
        }
    });
}

// ========== STATS COUNTER ANIMATION ==========
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-target');
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60 FPS

                let current = 0;
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
                observer.unobserve(counter); // Only animate once
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});

// ========== AOS ANIMATION INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-up, .fade-down, .fade-left, .fade-right, .stagger');

    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });
});

