export const EMAIL_CONFIG = {
  userID: import.meta.env.VITE_APP_EMAIL_USER_ID,
  serviceID: import.meta.env.VITE_APP_EMAIL_SERVICE_ID,
  templates: {
    confirmation: import.meta.env.VITE_APP_EMAIL_CONFIRMACION_TEMPLATE_ID,
    contact: import.meta.env.VITE_APP_EMAIL_CONTACTO_TEMPLATE_ID,
  },
};

if (!EMAIL_CONFIG.userID || !EMAIL_CONFIG.serviceID || !EMAIL_CONFIG.templates.confirmation || !EMAIL_CONFIG.templates.contact) {
  throw new Error("Faltan variables de entorno para configurar EmailJS.");
}
