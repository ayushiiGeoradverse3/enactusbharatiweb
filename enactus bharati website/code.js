let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-item');
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (i === index) {
                    slide.classList.add('active');
                }
            });
        }
        
        function changeSlide(direction) {
            currentSlide = (currentSlide + direction + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Auto slide every 5 seconds
        setInterval(() => {
            changeSlide(1);
        }, 5000);
        
        // Initialize first slide
        showSlide(currentSlide);
        const cards = document.querySelectorAll('.cards-text h2');
        cards.forEach((card, index) => {
            card.style.opacity = 0;
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }, index * 300);
        });