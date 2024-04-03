<template>
  <div>
    <form>
      <input type="text" v-model="firstName" />
      <input type="text" v-model="lastName" />
      <input type="text" v-model="email" />
      <input type="text" v-model="subject" />
      <textarea v-model="message" />
    </form>
  </div>
</template>

<script lang="ts" setup>
const firstName = useState("firstName");
const lastName = useState("lastName");
const email = useState("email");
const subject = useState("subject");
const message = useState("message");
</script>

<style></style>
