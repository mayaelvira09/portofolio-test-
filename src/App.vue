<template>
  <!-- Loading Screen Intro overlay -->
  <LoadingAnimation />

  <!-- Navigation Bar -->
  <Navbar />

  <!-- Main Body Content -->
  <main class="main-content">
    <router-view />
  </main>

  <!-- Scroll Back to Top Button -->
  <BackToTop />

  <!-- Footer Section -->
  <FooterSection />
</template>

<script setup>
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import AOS from 'aos'

// Layout Component Imports
import LoadingAnimation from './components/LoadingAnimation.vue'
import Navbar from './components/Navbar.vue'
import FooterSection from './components/FooterSection.vue'
import BackToTop from './components/BackToTop.vue'

const route = useRoute()

onMounted(() => {
  // Initialize Animate On Scroll (AOS) with smooth default configurations
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true, // Whether animation should happen only once - while scrolling down
    anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
  })
})

// Watch route path changes to refresh AOS configurations for dynamic views
watch(() => route.path, () => {
  nextTick(() => {
    setTimeout(() => {
      AOS.refresh()
    }, 150) // Small offset to let DOM updates finish
  })
})
</script>

<style>
/* Global CSS is imported in main.js, spacing adjustments for navbar offset */
.main-content {
  padding-top: 72px; /* Smooth padding matching sticky navbar height */
}
</style>
