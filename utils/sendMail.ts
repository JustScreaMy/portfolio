import { useCompiler } from "#vue-email";
import { createTransport } from "nodemailer";
import type SMTPTransport from "nodemailer/lib/smtp-transport";

export default async (
  senderMail: string,
  subject: string,
  content: string,
  firstName: string,
  lastName: string
): Promise<{ success: boolean }> => {
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

  const template = await useCompiler("SupportMail.vue", {
    props: {
      firstName,
      lastName,
      email: senderMail,
      subject,
      content,
    },
  });

  const sent = await transporter.sendMail({
    from: config.api.mail.from,
    to: config.api.mail.to,
    subject: "Contact Email",
    html: template.html,
    replyTo: senderMail,
  });
  return { success: sent.response.includes("queued") };
};
