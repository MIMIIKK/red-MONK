import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Replace these with your own EmailJS details
    const serviceID = 'service_bg7x81u';
    const templateID = 'template_sp6twk8';
    const userID = 'X3bEGf40wd0tCNWUo';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then(response => {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
      })
      .catch(error => {
        setStatus({
          type: 'error',
          message: 'Something went wrong. Please try again later.'
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>ennzaen@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Butwal, Nepal</span>
              </div>
              <div className="social-links">
                <a href="https://github.com/MIMIIKK" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ennzaen/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/the.salvador_dali/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            {status.message && (
              <div className={`alert ${status.type === 'success' ? 'alert-success' : 'alert-error'}`}>
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;