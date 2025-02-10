
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      const formData = { name, email, message };
      localStorage.setItem('formData', JSON.stringify(formData));
      alert('Thank you for contacting us!');
    } else {
      alert('Please fill out all fields.');
    }
  });
  