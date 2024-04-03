import { createTransport } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";
// TODO: fix this please, it looks disgusting
export default async (
  to: string,
  subject: string,
  content: string
): Promise<{ success: boolean; error?: string }> => {
  const config = useRuntimeConfig();
  const transporter = createTransport({
    host: config.api.smtp.host,
    port: config.api.smtp.port,
    secure: config.api.smtp.secure,
    auth: {
      user: config.api.smtp.auth.user,
      pass: config.api.smtp.auth.pass,
    },
  } as SMTPTransport.Options);

  if (!(await transporter.verify())) {
    return { success: false };
  }
  const sent = await transporter.sendMail({
    from: config.api.mail.from,
    to: to,
    subject: subject,
    text: content,
  });
  if (sent.response.includes("queued")) {
    return { success: true };
  } else {
    return { success: false, error: sent.response };
  }
};
