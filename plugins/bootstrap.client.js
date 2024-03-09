// plugins/bootstrap.client.js
import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {
  if (process.client) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }
});
