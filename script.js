// Falling Stickers Animation for Birthday Page
if (document.querySelector('.falling-stickers')) {
    const stickersContainer = document.querySelector('.falling-stickers');
    const stickers = ['🎉', '🎊', '🎈', '🎁', '🎂', '🎀', '⭐', '✨', '💖', '💝', '🌟', '🎵', '🎶', '💕', '🌸', '🦋'];
    
    function createSticker() {
        const sticker = document.createElement('div');
        sticker.className = 'sticker';
        sticker.textContent = stickers[Math.floor(Math.random() * stickers.length)];
        sticker.style.left = Math.random() * 100 + '%';
        sticker.style.animationDuration = (Math.random() * 3 + 4) + 's'; // 4-7 seconds
        sticker.style.animationDelay = Math.random() * 2 + 's';
        sticker.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem'; // 1.5-3rem
        
        stickersContainer.appendChild(sticker);
        
        // Remove sticker after animation completes
        setTimeout(() => {
            sticker.remove();
        }, 9000);
    }
    
    // Create initial stickers
    for (let i = 0; i < 20; i++) {
        setTimeout(createSticker, i * 200);
    }
    
    // Continuously create new stickers
    setInterval(createSticker, 400);
}

// Password validation for login page
if (document.getElementById('loginForm')) {
    const loginForm = document.getElementById('loginForm');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');
    const hintMessage = document.getElementById('hintMessage');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const password = passwordInput.value;
        const correctPassword = '2041';

        if (password === correctPassword) {
            // Correct password - redirect to birthday page
            window.location.href = 'birthday.html';
        } else {
            // Wrong password - show error and hint
            errorMessage.textContent = '❌ Wrong password, try again';
            hintMessage.textContent = '💡 Hint: Your birth year in Nepali Date';
            
            // Add shake animation
            passwordInput.style.animation = 'shake 0.5s';
            setTimeout(() => {
                passwordInput.style.animation = '';
            }, 500);
            
            // Clear password field
            passwordInput.value = '';
            passwordInput.focus();
        }
    });

    // Clear error messages when user starts typing
    passwordInput.addEventListener('input', function() {
        errorMessage.textContent = '';
        hintMessage.textContent = '';
    });
}

// Auto-play music on birthday page
if (document.getElementById('birthdayMusic')) {
    const music = document.getElementById('birthdayMusic');
    
    // Try to play music automatically
    music.play().catch(function(error) {
        console.log('Autoplay was prevented. User interaction needed.');
        
        // If autoplay is blocked, play on first user interaction
        document.body.addEventListener('click', function() {
            music.play();
        }, { once: true });
    });
}

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// Add smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Fullscreen Image Modal Functionality
if (document.querySelectorAll('.clickable-image').length > 0) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close-modal');
    
    // Add click event to all clickable images
    document.querySelectorAll('.clickable-image').forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src.replace('w=400&h=400', 'w=1920&h=1080'); // Load higher resolution
            captionText.textContent = this.alt;
        });
    });
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Fullscreen Video Modal Functionality
if (document.querySelectorAll('.clickable-video').length > 0) {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = document.getElementById('modalVideoSource');
    const videoCaption = document.getElementById('videoCaption');
    const closeVideoBtn = document.querySelector('.close-video-modal');
    
    // Add click event to all clickable videos
    document.querySelectorAll('.clickable-video').forEach(function(video) {
        video.addEventListener('click', function(e) {
            // Prevent the video from playing/pausing when clicked
            e.preventDefault();
            
            // Get the video source
            const videoSrc = this.querySelector('source').src;
            
            // Set the modal video source
            modalVideoSource.src = videoSrc;
            modalVideo.load();
            
            // Show the modal
            videoModal.style.display = 'block';
            
            // Play the video
            modalVideo.play();
            
            // Set caption (you can customize this)
            videoCaption.textContent = this.nextElementSibling ? this.nextElementSibling.textContent : 'Video';
        });
    });
    
    // Close modal when clicking the X button
    closeVideoBtn.addEventListener('click', function() {
        videoModal.style.display = 'none';
        modalVideo.pause();
    });
    
    // Close modal when clicking outside the video
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.pause();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.style.display === 'block') {
            videoModal.style.display = 'none';
            modalVideo.pause();
        }
    });
}

// Fullscreen Video Modal Functionality
if (document.querySelector('.clickable-video')) {
    const videoModal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const videoCaption = document.getElementById('videoCaption');
    const closeVideoBtn = document.querySelector('.close-video-modal');
    const clickableVideo = document.querySelector('.clickable-video');
    
    // Add click event to video
    clickableVideo.addEventListener('click', function() {
        videoModal.style.display = 'block';
        modalVideo.querySelector('source').src = this.querySelector('source').src;
        modalVideo.load();
        modalVideo.play();
        videoCaption.textContent = this.parentElement.querySelector('p').textContent;
    });
    
    // Close modal when clicking the X button
    closeVideoBtn.addEventListener('click', function() {
        videoModal.style.display = 'none';
        modalVideo.pause();
    });
    
    // Close modal when clicking outside the video
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            videoModal.style.display = 'none';
            modalVideo.pause();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.style.display === 'block') {
            videoModal.style.display = 'none';
            modalVideo.pause();
        }
    });
}

// Console message for developer
console.log('🎉 Birthday Website for Yasoda 🎉');
console.log('Created with ❤️');
console.log('Password: 2041');
