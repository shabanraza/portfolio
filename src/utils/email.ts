import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  // Debug logs
  console.log('EmailJS Config Check:', {
    serviceId: serviceId ? `${serviceId.substring(0, 5)}...` : 'MISSING',
    templateId: templateId ? `${templateId.substring(0, 5)}...` : 'MISSING',
    publicKey: publicKey ? `${publicKey.substring(0, 5)}...` : 'MISSING'
  });

  if (!serviceId || !templateId || !publicKey) {
    console.warn('EmailJS environment variables missing. Check .env file and restart server.');
    return false;
  }

  try {
    const response = await emailjs.send(serviceId, templateId, data as unknown as Record<string, unknown>, publicKey);
    console.log('EmailJS Success!', response.status, response.text);
    return true;
  } catch (error) {
    console.error('EmailJS Failed:', error);
    return false;
  }
};

export const sendLeadMagnet = async (email: string) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_LEAD_MAGNET || import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Fallback
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !publicKey) return false;

  const checklistLink = `${window.location.origin}/mvp-checklist.html`;

  try {
    // We send a different payload for the lead magnet
    await emailjs.send(serviceId, templateId, {
      email: email, // The user's email (ensure your template maps this to "To Email")
      to_email: email, // Some templates use this
      download_link: checklistLink,
      message: `Here is your Enterprise MVP Checklist: ${checklistLink}`, // Fallback if using contact template
      projectType: 'Lead Magnet Download' // Context
    }, publicKey);
    return true;
  } catch (error) {
    console.error('Lead Magnet Email Failed:', error);
    return false;
  }
};
