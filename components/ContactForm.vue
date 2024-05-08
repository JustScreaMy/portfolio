<template>
  <div v-if="modalShow">
    {{ modalText }}
  </div>
  <form @submit.prevent="submitForm">
    <fieldset>
      <legend>Personal Information</legend>
      <label for="firstName">First Name</label>
      <input type="text" v-model="firstName" id="firstName" />
      <label for="lastName">Last Name</label>
      <input type="text" v-model="lastName" id="lastName" />
    </fieldset>
    <fieldset>
      <legend>Contact</legend>
      <label for="email">Email</label>
      <input type="text" v-model="email" id="email" />
    </fieldset>
    <fieldset>
      <legend>Message</legend>
      <label for="subject">Subject</label>
      <input type="text" id="subject" v-model="subject" />
      <label for="content">Content</label>
      <textarea v-model="content" id="content"></textarea>
    </fieldset>
    <input type="submit" value="Send" />
  </form>
</template>

<script lang="ts" setup>
const firstName = useState<string>("firstName");
const lastName = useState<string>("lastName");
const email = useState<string>("email");
const subject = useState<string>("subject");
const content = useState<string>("content");

const modalShow = useState<boolean>("modalShow", () => true);
const modalText = useState<string>("errorText");

const submitForm = async (_event: Event) => {
  const success = await $fetch("/api/mail", {
    method: "POST",
    body: {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      subject: subject.value,
      content: content.value,
    },
  });
  if (!success) {
  } else {
  }
};
</script>

<style scoped>
form {
  width: 60%;
  margin: auto;
  padding-bottom: 1em;
}
form fieldset {
  margin-bottom: 2rem;
  border-radius: 8px;
}

form label {
  display: block;
  margin-bottom: 0.5rem;
}

form input[type="text"],
form textarea {
  border-radius: 4px;
  border: 0;
  color: #0a0908;
  background-color: #fbfff1;
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  box-sizing: border-box;
  font-family: "Source Code Pro", monospace;
}

form input[type="submit"] {
  padding: 1rem 1.5rem;
  background-color: #f79f79;
  color: #0a0908;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Source Code Pro", monospace;
  font-size: x-large;
  width: 100%;
}
@media only screen and (max-width: 800px) {
  form {
    width: 100%;
  }
}
</style>
