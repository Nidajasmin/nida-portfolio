document.addEventListener('DOMContentLoaded', function() {
    // Parse the URL to get the project ID
    const urlParams = new URLSearchParams(window.location.search);
    let projectId = urlParams.get('id');
    
    const errorMessage = document.getElementById('errorMessage');
    const projectContent = document.getElementById('projectContent');
    
    // Find the project in our global PROJECTS array (from portfolio.js)
    if (!window.PROJECTS || window.PROJECTS.length === 0) {
        showError();
        return;
    }
    
    // If no ID is provided in the URL, default to the first project (Kidulan)
    if (!projectId) {
        projectId = window.PROJECTS[0].id;
    }
    
    const project = window.PROJECTS.find(p => p.id === projectId);
    
    if (!project) {
        showError();
        return;
    }
    
    // Populate the page with project data
    document.title = project.name + " - Project Details";
    
    document.getElementById('projectName').textContent = project.name;
    
    const categoryName = project.category === 'web' ? 'Web App' : 
                         project.category === 'shopify' ? 'Shopify Store' : 
                         project.category === 'ai' ? 'AI Project' : project.category;
    document.getElementById('projectCategory').textContent = categoryName.toUpperCase();
    
    document.getElementById('projectDescription').textContent = project.description;
    
    // Populate Tech Stack
    const techStackList = document.getElementById('projectTechStack');
    project.techStack.forEach(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        techStackList.appendChild(li);
    });
    
    // Populate Functionality
    const functionalityList = document.getElementById('projectFunctionality');
    project.functionality.forEach(func => {
        const li = document.createElement('li');
        li.textContent = func;
        functionalityList.appendChild(li);
    });
    
    // Populate Images and Dots
    const galleryTrack = document.getElementById('projectGallery');
    const dotsContainer = document.getElementById('carouselDots');
    
    project.images.forEach((imgSrc, index) => {
        const div = document.createElement('div');
        div.className = 'carousel-slide';
        div.innerHTML = `<img src="${imgSrc}" alt="${project.name} image" loading="lazy">`;
        galleryTrack.appendChild(div);
        
        const dot = document.createElement('button');
        dot.className = index === 0 ? 'carousel-dot active' : 'carousel-dot';
        dot.dataset.index = index;
        if (dotsContainer) dotsContainer.appendChild(dot);
    });

    // Carousel Buttons & Scrolling Logic
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.carousel-dot');
    
    const updateCarouselUI = () => {
        const scrollLeft = galleryTrack.scrollLeft;
        const scrollWidth = galleryTrack.scrollWidth;
        const clientWidth = galleryTrack.clientWidth;
        
        // Faded buttons at edges
        if (scrollLeft <= 5) {
            prevBtn.classList.add('faded');
        } else {
            prevBtn.classList.remove('faded');
        }
        
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
            nextBtn.classList.add('faded');
        } else {
            nextBtn.classList.remove('faded');
        }
        
        // Active dot
        const currentIndex = Math.round(scrollLeft / clientWidth);
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };
    
    if (prevBtn && nextBtn && galleryTrack) {
        // Initial state
        setTimeout(updateCarouselUI, 100);
        
        galleryTrack.addEventListener('scroll', () => {
            requestAnimationFrame(updateCarouselUI);
        });
        
        prevBtn.addEventListener('click', () => {
            galleryTrack.scrollBy({ left: -galleryTrack.clientWidth, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            galleryTrack.scrollBy({ left: galleryTrack.clientWidth, behavior: 'smooth' });
        });
        
        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const index = parseInt(e.target.dataset.index);
                galleryTrack.scrollTo({ left: index * galleryTrack.clientWidth, behavior: 'smooth' });
            });
        });
    }
    
    // Show content
    projectContent.style.display = 'block';
    
    function showError() {
        errorMessage.style.display = 'block';
        projectContent.style.display = 'none';
    }
});
