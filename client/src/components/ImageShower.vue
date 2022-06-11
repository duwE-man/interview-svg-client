<template>
  <div>
    Username: {{username}}, date: {{date}}
    <div v-html="message">
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{message?: string | null, username?: string | null, date?: string | null}>()
</script>