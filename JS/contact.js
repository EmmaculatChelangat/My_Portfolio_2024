  // Initialize Email.js with your user ID
  emailjs.init("kHjs9LamaN3EPKrfd"); // Replace with your Email.js user ID

  // Handle form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Gather form data
      const formData = new FormData(this);

      // Convert FormData to JSON
      const formObject = {};
      formData.forEach((value, key) => {
          formObject[key] = value;
      });

      // Send the email using Email.js
      emailjs.send('service_tupbxgi', 'template_rt1gbyv', formObject)
          .then(function(response) {
              console.log('Success:', response);
              alert('Your message has been sent successfully!');
              document.getElementById('contact-form').reset(); // Reset the form after successful submission
          }, function(error) {
              console.log('Failed:', error);
              alert('There was an error sending your message. Please try again.');
          });
  });