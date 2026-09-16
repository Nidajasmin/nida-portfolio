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
    }
];

document.addEventListener('DOMContentLoaded', function() {
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
            <a href="project-details?id=${item.id}" class="portfolio-card">
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
        modalContactForm.addEventListener('submit', function(e) {
            // Get elements
            const submitBtn = this.querySelector('button[type="submit"]');
            const modalHeader = document.querySelector('.modal-header');
            const originalHeader = modalHeader.innerHTML;
            
            // Show loading
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Listen for iframe load (form submission complete)
            if (hiddenIframe) {
                hiddenIframe.onload = function() {
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
skillsLabel.classList.add('active');
sectionTitle.textContent = content.skills.title;
sectionSubtitle.textContent = content.skills.subtitle;

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
