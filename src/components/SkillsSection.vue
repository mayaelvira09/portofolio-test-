<template>
  <section id="skills" class="skills-section py-5" data-aos="zoom-in" data-aos-duration="1000">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5">
        <h2 class="section-title">Skills & Kompetensi</h2>
        <p class="section-subtitle">Teknologi dan alat pemrograman yang saya pelajari dan gunakan untuk membangun proyek-proyek website.</p>
      </div>

      <div class="row g-4 justify-content-center">
        <div 
          v-for="skill in skills" 
          :key="skill.name" 
          class="col-12 col-sm-6 col-lg-4 col-xl-3"
        >
          <div class="card-custom skill-card hover-card glass-card">
            <!-- Icon Wrapper -->
            <div class="skill-icon-wrapper">
              <i :class="skill.icon"></i>
            </div>
            
            <!-- Skill Details -->
            <div class="skill-info">
              <div class="skill-title text-dark">
                <span>{{ skill.name }}</span>
                <span class="text-accent small">{{ skill.level }}%</span>
              </div>
              <div class="skill-progress-bg">
                <div 
                  class="skill-progress-bar" 
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'HTML', icon: 'bi bi-filetype-html', level: 80 },
  { name: 'CSS', icon: 'bi bi-filetype-css', level: 80 },
  { name: 'Python', icon: 'bi bi-code-slash', level: 70 },
  { name: 'Bootstrap', icon: 'bi bi-bootstrap-fill', level: 35 },
  { name: 'JavaScript', icon: 'bi bi-braces-asterisk', level: 40 },
  { name: 'PHP', icon: 'bi bi-terminal-fill', level: 70 },
  { name: 'Laravel', icon: 'bi bi-gem', level: 35 },
  { name: 'MySQL', icon: 'bi bi-database-fill', level: 65 }
])
</script>

<style scoped>
.skills-section {
  background-color: var(--color-white);
  border-bottom: 1px solid rgba(91, 157, 255, 0.05);
}
</style>
