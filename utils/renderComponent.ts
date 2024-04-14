import { SupportMail } from "#build/components";
import { createApp } from "vue";
import { renderToString } from "vue/server-renderer";

export default async (
  firstName: string,
  lastName: string,
  email: string,
  subject: string,
  content: string
): Promise<string> => {
  return await renderToString(
    createApp(SupportMail, {
      firstName,
      lastName,
      email,
      subject,
      content,
    })
  );
};
