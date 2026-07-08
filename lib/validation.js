export function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return typeof email === 'string' && emailRegex.test(email.trim());
}

export function sanitizeString(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim();
}

export function validateContactPayload(data) {
  const errors = {};
  
  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const message = typeof data.message === 'string' ? data.message.trim() : '';
  const phone = typeof data.phone === 'string' ? data.phone.trim() : '';
  const company = typeof data.company === 'string' ? data.company.trim() : '';
  const service = typeof data.service === 'string' ? data.service.trim() : '';

  if (!name) {
    errors.name = 'Name is required';
  } else if (name.length < 2 || name.length > 100) {
    errors.name = 'Name must be between 2 and 100 characters';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!message) {
    errors.message = 'Message is required';
  } else if (message.length < 10 || message.length > 5000) {
    errors.message = 'Message must be between 10 and 5000 characters';
  }

  if (phone && (phone.length < 7 || phone.length > 20)) {
    errors.phone = 'Phone number must be between 7 and 20 characters';
  }

  if (company && company.length > 150) {
    errors.company = 'Company name cannot exceed 150 characters';
  }

  if (service && service.length > 100) {
    errors.service = 'Service type cannot exceed 100 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      name: sanitizeString(name),
      email: email.toLowerCase(),
      message: sanitizeString(message),
      phone: sanitizeString(phone),
      company: sanitizeString(company),
      service: sanitizeString(service)
    }
  };
}

export function validateLoginPayload(data) {
  const errors = {};
  
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const password = typeof data.password === 'string' ? data.password : '';

  if (!email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6 || password.length > 128) {
    errors.password = 'Password must be between 6 and 128 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      email: email.toLowerCase(),
      password
    }
  };
}

export function validateRegisterPayload(data) {
  const errors = {};
  
  const name = typeof data.name === 'string' ? data.name.trim() : '';
  const email = typeof data.email === 'string' ? data.email.trim() : '';
  const password = typeof data.password === 'string' ? data.password : '';
  const otp = typeof data.otp === 'string' ? data.otp.trim() : '';

  if (!name) {
    errors.name = 'Name is required';
  } else if (name.length < 2 || name.length > 100) {
    errors.name = 'Name must be between 2 and 100 characters';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!validateEmail(email)) {
    errors.email = 'Please provide a valid email address';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 6 || password.length > 128) {
    errors.password = 'Password must be between 6 and 128 characters';
  }

  if (!otp) {
    errors.otp = 'Verification code is required';
  } else if (otp.length < 4 || otp.length > 10) {
    errors.otp = 'Verification code is invalid';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    sanitized: {
      name: sanitizeString(name),
      email: email.toLowerCase(),
      password,
      otp
    }
  };
}
