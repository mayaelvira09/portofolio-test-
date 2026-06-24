<template>
  <div v-if="visible" :class="['loader-overlay', { 'fade-out': !loading }]">
    <div class="loader-spinner"></div>
    <div class="loader-logo">MAYA ELVIRA</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(true)
const visible = ref(true)

onMounted(() => {
  // Hide loader after a short aesthetic delay
  setTimeout(() => {
    loading.value = false
    // Completely remove from DOM after the opacity transition ends (500ms)
    setTimeout(() => {
      visible.value = false
    }, 500)
  }, 1000)
})
</script>

<style scoped>
/* Specific scoping is not needed since styles are handled in style.css, 
   but this component is fully responsive and clean. */
</style>
