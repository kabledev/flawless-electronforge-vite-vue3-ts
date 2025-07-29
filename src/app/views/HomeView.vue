<script setup lang="ts">
import { ref } from 'vue';
import { useAppStore } from '@/app/stores/app.store';

const appStore = useAppStore()

const message = ref('')
const hello = () => {
  message.value = appStore.hello()
}

</script>
<template>
  <h1>💖 Hello World!</h1>
  <p>Welcome to your Electron application.</p>
  <hr />
  <p v-html="message"></p>
  <button @click="hello">Test</button>
</template>