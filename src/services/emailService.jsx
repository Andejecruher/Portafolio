import emailjs from "emailjs-com";
import { EMAIL_CONFIG } from "../config/email";

export const sendEmailConfirmation = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templates.confirmation,
      formData,
      EMAIL_CONFIG.userID
    );
    return response;
  } catch (error) {
    console.error("Error enviando email de confirmación:", error);
    return error;
  }
};

export const sendEmailContact = async (formData) => {
  try {
    const response = await emailjs.send(
      EMAIL_CONFIG.serviceID,
      EMAIL_CONFIG.templates.contact,
      formData,
      EMAIL_CONFIG.userID
    );
    return response;
  } catch (error) {
    console.error("Error enviando email de contacto:", error);
    return error;
  }
};
