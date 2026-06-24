<template>
  <div class="projects-page">
    <ProjectsSection />
  </div>
</template>

<script setup>
import ProjectsSection from '../components/ProjectsSection.vue'
</script>

<style scoped>
.projects-page {
  min-height: calc(100vh - 72px);
}
</style>
