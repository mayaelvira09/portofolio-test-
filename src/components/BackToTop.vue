<template>
  <button 
    :class="['back-to-top', { 'show': showButton }]" 
    @click="scrollToTop" 
    aria-label="Back to top"
  >
    <i class="bi bi-arrow-up-short"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Scoped overrides if needed, styling is handled globally in style.css */
</style>
