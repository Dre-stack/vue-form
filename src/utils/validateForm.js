export default function validateFormData(formData) {
  const errors = {};
  const { name, phone, subject } = formData;
  if (!name) errors.name = 'Required';
  if (!phone) errors.phone = 'Required';
  if (!subject) errors.subject = 'Required';
  if (name && !/[a-z]+/.test(name)) errors.name = 'Invalid name';
  if (phone && !/[0-9]+/.test(phone)) errors.phone = 'Invalid phone';
  return errors;
}
