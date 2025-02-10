// Here I  Select the hamburger button and the nav links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Here I Add a click event listener to the hamburger button
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class on the nav links
  navLinks.classList.toggle('active');
});



const testimonials = [
  { text: "Valimoore Roofing did an amazing job!", author: "John D." },
  { text: "Professional and reliable!", author: "Sarah K." },
  {text: "Great communication and quality work. We couldn't be happier!", author:"Michael T."}

];

const testimonialContainer = document.querySelector('.testimonial-cards');
testimonials.forEach(testimonial => {
  testimonialContainer.innerHTML += `
    <div class="testimonial-card">
      <p>${testimonial.text}</p>
      <p class="author">- ${testimonial.author}</p>
    </div>
  `;
});

