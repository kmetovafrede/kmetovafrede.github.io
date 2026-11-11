document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-history-tab]').forEach((tab) => {
        tab.addEventListener('click', () => {
            const targetId = tab.dataset.historyTab;
            const section = tab.closest('.section');
            if (!targetId || !section) return;

            section.querySelectorAll('[data-history-tab]').forEach((item) => {
                const isActive = item === tab;
                item.classList.toggle('is-active', isActive);
                item.setAttribute('aria-selected', String(isActive));
            });

            section.querySelectorAll('[data-history-panel]').forEach((panel) => {
                const isVisible = panel.id === targetId;
                panel.hidden = !isVisible;
                panel.classList.toggle('is-visible', isVisible);
            });
        });
    });

    // Mobile navigation
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksContainer = document.getElementById('nav-links');

    if (mobileToggle && navLinksContainer) {
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('show');
        });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const updateActiveNavOnScroll = () => {
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', updateActiveNavOnScroll);

    // Close navigation on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('show')) {
                navLinksContainer.classList.remove('show');
            }
        });
    });

    // Gallery photos and stories
    const galleryModal = document.getElementById('gallery-modal');
    const flipCard = document.getElementById('story-flip-card');
    const flipButton = document.getElementById('gallery-flip-button');
    const modalImage = document.getElementById('gallery-modal-image');
    const modalTitle = document.getElementById('gallery-modal-title');
    const storyTitle = document.getElementById('gallery-modal-story-title');
    const storyText = document.getElementById('gallery-modal-story');
    const previousButton = document.getElementById('gallery-previous');
    const nextButton = document.getElementById('gallery-next');
    const galleryCounter = document.getElementById('gallery-counter');
    const galleryCards = document.querySelectorAll('.gallery-card[data-story]');
    const closeButtons = document.querySelectorAll('[data-gallery-close]');
    let lastFocusedCard = null;
    let activeGalleryIndex = 0;
    let activeGalleryPhotos = [];

    if (galleryModal && flipCard && flipButton && modalImage && modalTitle && storyTitle && storyText
        && previousButton && nextButton && galleryCounter && galleryCards.length) {
        const closeGalleryModal = () => {
            galleryModal.classList.remove('is-open');
            galleryModal.setAttribute('aria-hidden', 'true');
            flipCard.classList.remove('is-flipped');
            document.body.classList.remove('modal-open');
            if (lastFocusedCard) {
                lastFocusedCard.focus();
            }
        };

        const showGalleryPhoto = index => {
            activeGalleryIndex = (index + activeGalleryPhotos.length) % activeGalleryPhotos.length;
            const photo = activeGalleryPhotos[activeGalleryIndex];
            modalImage.src = photo.src;
            modalImage.alt = photo.alt;
            modalTitle.textContent = photo.title;
            storyTitle.textContent = photo.title;
            storyText.textContent = photo.story;
            galleryCounter.textContent = `${activeGalleryIndex + 1} / ${activeGalleryPhotos.length}`;
            flipCard.classList.toggle('is-vertical', photo.orientation === 'vertical');
            modalImage.classList.toggle('is-rotated', photo.orientation === 'vertical');
            const hasMultiplePhotos = activeGalleryPhotos.length > 1;
            previousButton.disabled = !hasMultiplePhotos;
            nextButton.disabled = !hasMultiplePhotos;
            flipCard.classList.remove('is-flipped');
            flipButton.innerHTML = '<i class="fa-solid fa-rotate"></i> Otočiť fotografiu';
        };

        const openGalleryModal = card => {
            activeGalleryPhotos = Array.from(card.querySelectorAll('[data-series-photo]')).map(image => ({
                src: image.src,
                alt: image.alt,
                orientation: image.dataset.orientation,
                title: card.dataset.title,
                story: card.dataset.story
            }));
            showGalleryPhoto(0);
            lastFocusedCard = card;
            galleryModal.classList.add('is-open');
            galleryModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            flipButton.focus();
        };

        galleryCards.forEach(card => {
            card.addEventListener('click', () => openGalleryModal(card));
            card.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openGalleryModal(card);
                }
            });
        });

        flipButton.addEventListener('click', () => {
            flipCard.classList.toggle('is-flipped');
            flipButton.innerHTML = flipCard.classList.contains('is-flipped')
                ? '<i class="fa-solid fa-image"></i> Späť na fotografiu'
                : '<i class="fa-solid fa-rotate"></i> Otočiť fotografiu';
        });

        previousButton.addEventListener('click', () => showGalleryPhoto(activeGalleryIndex - 1));
        nextButton.addEventListener('click', () => showGalleryPhoto(activeGalleryIndex + 1));

        closeButtons.forEach(button => button.addEventListener('click', closeGalleryModal));
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && galleryModal.classList.contains('is-open')) {
                closeGalleryModal();
            }
            if (galleryModal.classList.contains('is-open') && event.key === 'ArrowLeft') {
                showGalleryPhoto(activeGalleryIndex - 1);
            }
            if (galleryModal.classList.contains('is-open') && event.key === 'ArrowRight') {
                showGalleryPhoto(activeGalleryIndex + 1);
            }
        });
    }
});