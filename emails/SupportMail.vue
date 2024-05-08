<template>
  <h1>You have received a message!</h1>
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Subject of the message</th>
        <th>Content</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ props.firstName }}</td>
        <td>{{ props.lastName }}</td>
        <td>{{ props.email }}</td>
        <td>{{ props.subject }}</td>
        <td>{{ props.content }}</td>
      </tr>
    </tbody>
  </table>
  <EStyle>
    table { width: 100%; } table, th, td { border: 2px solid black;
    border-collapse: collapse; font-size: large; } td, th { padding: 20px; }
  </EStyle>
</template>

<script lang="ts" setup>
import { EStyle } from "vue-email";
const props = defineProps<{
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  content: string;
}>();
</script>

<style></style>
