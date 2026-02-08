import { useState } from 'react';
import './QuoteForm.css';

function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const serviceOptions = [
    'Plumbing',
    'Electrical',
    'Handyman',
    'Multiple Services',
  ];

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\d\s+()-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Service type validation
    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (touched[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    // Validate the field on blur
    validateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid - submission logic will be added in Prompt 9
      console.log('Form is valid:', formData);
    }
  };

  return (
    <form className="quote-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${errors.name ? 'input-error' : ''}`}
          placeholder="Your full name"
        />
        {errors.name && <p className="error-message">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${errors.email ? 'input-error' : ''}`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input ${errors.phone ? 'input-error' : ''}`}
          placeholder="(123) 456-7890"
        />
        {errors.phone && <p className="error-message">{errors.phone}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="serviceType">Service Type *</label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input form-select ${errors.serviceType ? 'input-error' : ''}`}
        >
          <option value="">Select a service...</option>
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceType && <p className="error-message">{errors.serviceType}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
          placeholder="Tell us about your project..."
          rows="6"
        />
        {errors.message && <p className="error-message">{errors.message}</p>}
      </div>

      <button type="submit" className="form-submit-btn">
        Request a Quote
      </button>
    </form>
  );
}

export default QuoteForm;
