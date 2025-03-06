// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        burger.classList.toggle('toggle');
    });

    // Trip planning form submission
    const tripForm = document.getElementById('trip-form');
    tripForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const startPoint = document.getElementById('start-point').value;
        const endPoint = document.getElementById('end-point').value;
        const travelMode = document.getElementById('travel-mode').value;

        // Here you would typically send this data to your backend
        console.log('Planning trip:', { startPoint, endPoint, travelMode });

        // For demo purposes, let's add a suggestion to the trip suggestions area
        const suggestionsArea = document.getElementById('trip-suggestions');
        suggestionsArea.innerHTML = `
            <div class="suggestion">
                <h4>Suggested Route:</h4>
                <p>From ${startPoint} to ${endPoint} by ${travelMode}</p>
                <p>Estimated eco-points: 50</p>
            </div>
        `;
    });

    // Simulated rewards data
    const rewardsData = [
        { name: 'Free Bus Pass', points: 500, image: 'https://example.com/bus-pass.jpg' },
        { name: 'Bike Discount', points: 1000, image: 'https://example.com/bike-discount.jpg' },
        { name: 'Tree Planting', points: 1500, image: 'https://example.com/tree-planting.jpg' },
    ];

    // Populate rewards catalog
    const rewardsCatalog = document.getElementById('rewards-catalog');
    rewardsData.forEach(reward => {
        const rewardElement = document.createElement('div');
        rewardElement.className = 'reward-item';
        rewardElement.innerHTML = `
            <img src="${reward.image}" alt="${reward.name}">
            <h3>${reward.name}</h3>
            <p>${reward.points} points</p>
            <button class="btn btn-secondary">Redeem</button>
        `;
        rewardsCatalog.appendChild(rewardElement);
    });

    // Community forum post submission
    const postForm = document.getElementById('post-form');
    const forumPosts = document.getElementById('forum-posts');
    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const postContent = document.getElementById('post-content').value;
        if (postContent.trim() !== '') {
            const postElement = document.createElement('div');
            postElement.className = 'forum-post';
            postElement.innerHTML = `
                <p>${postContent}</p>
                <small>Posted just now by You</small>
            `;
            forumPosts.prepend(postElement);
            document.getElementById('post-content').value = '';
        }
    });

    // Simulated user data update
    function updateUserData() {
        document.getElementById('user-name').textContent = 'John Doe';
        document.getElementById('eco-trips').textContent = '15';
        document.getElementById('carbon-saved').textContent = '75 kg';
        document.querySelector('#user-points span').textContent = '1500';
    }

    updateUserData();

    // Add smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Enhance interactivity for blog posts
    const blogPosts = document.querySelectorAll('.blog-post');
    blogPosts.forEach(post => {
        post.addEventListener('click', () => {
            alert('Read more about this topic!');
        });
    });

    // Add smooth transition for contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Simulate form submission
        console.log('Contact Form Submitted:', { name, email, message });
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');

        // Clear form fields
        contactForm.reset();
    });
});