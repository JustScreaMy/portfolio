import { ContactMailRequest } from "~/types/contact";
import sendMail from "~/utils/sendMail";

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactMailRequest>(event);
  const success = await sendMail(
    body.email,
    body.subject,
    body.content,
    body.firstName,
    body.lastName
  );
  return { success };
});
