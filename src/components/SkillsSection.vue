<template>
  <section id="skills" class="skills-section py-4 py-md-5" data-aos="fade-left" data-aos-duration="1000">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-4 mb-md-5">
        <h2 class="section-title">Skills & Kompetensi</h2>
        <p class="section-subtitle px-2">Teknologi dan alat pemrograman yang saya pelajari dan gunakan untuk membangun proyek-proyek website.</p>
      </div>

      <!-- Grid Daftar Skills - Di HP jadi 2 kolom sejajar, di laptop jadi 4 kolom -->
      <div class="row g-3 g-md-4 justify-content-center">
        <div 
          v-for="skill in skills" 
          :key="skill.name" 
          class="col-6 col-md-4 col-lg-3"
        >
          <div class="skill-light-card text-center" :style="{ '--glow-color': skill.color }">
            <!-- Icon Box dengan ukuran dinamis -->
            <div class="icon-box mb-2 mb-md-3" :style="{ color: skill.color, backgroundColor: skill.color + '12' }">
              <i :class="skill.icon"></i>
            </div>
            <!-- Nama Skill & Level -->
            <h5 class="skill-name mb-1 fw-bold">{{ skill.name }}</h5>
            <span class="skill-level-text small text-secondary text-uppercase tracking-wider">{{ skill.level }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'HTML', icon: 'bi bi-filetype-html', level: 'Advanced', color: '#e34c26' },
  { name: 'CSS', icon: 'bi bi-filetype-css', level: 'Advanced', color: '#264de4' },
  { name: 'Python', icon: 'bi bi-code-slash', level: 'Intermediate', color: '#b89200' }, 
  { name: 'Bootstrap', icon: 'bi bi-bootstrap-fill', level: 'Beginner', color: '#7952b3' },
  { name: 'JavaScript', icon: 'bi bi-braces-asterisk', level: 'Intermediate', color: '#ccb200' }, 
  { name: 'PHP', icon: 'bi bi-terminal-fill', level: 'Intermediate', color: '#525694' },
  { name: 'Laravel', icon: 'bi bi-gem', level: 'Beginner', color: '#ff2d20' },
  { name: 'MySQL', icon: 'bi bi-database-fill', level: 'Intermediate', color: '#006175' }
])
</script>

<style scoped>
.skills-section {
  background: #f8fafc; 
}

/* HEADER STYLE RESPONSIVE */
.section-title {
  font-size: 1.8rem; /* Ukuran default HP */
  font-weight: 800;
  color: #1e293b;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.5rem; /* Ukuran naik di laptop */
  }
}

.section-title::after {
  content: "";
  width: 40px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  position: absolute;
  left: 50%;
  bottom: -8px;
  transform: translateX(-50%);
  border-radius: 99px;
}

.section-subtitle {
  max-width: 600px;
  margin: 1rem auto 0;
  font-size: 0.9rem;
  color: #64748b;
}

@media (min-width: 768px) {
  .section-subtitle {
    font-size: 1.05rem;
  }
}

/* LIGHT CARD DESIGN (Aesthetic & Nyaman di Jari HP) */
.skill-light-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 1.25rem 1rem; /* Padding lebih tipis di HP biar hemat ruang */
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  height: 100%;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.01);
}

@media (min-width: 768px) {
  .skill-light-card {
    padding: 2rem 1.5rem;
    border-radius: 24px;
  }
}

.skill-light-card:hover {
  transform: translateY(-5px);
  border-color: var(--glow-color);
  box-shadow: 0 10px 25px var(--glow-color) 25; 
}

/* ICON BOX RESPONSIVE */
.icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 14px;
  transition: all 0.3s ease;
}

@media (min-width: 768px) {
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 18px;
  }
}

.icon-box i {
  font-size: 1.6rem;
}

@media (min-width: 768px) {
  .icon-box i {
    font-size: 2.2rem;
  }
}

/* TEXT TYPOGRAPHY */
.skill-name {
  font-size: 0.95rem;
  color: #0f172a;
}

@media (min-width: 768px) {
  .skill-name {
    font-size: 1.15rem;
  }
}

.skill-level-text {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  opacity: 0.7;
}

@media (min-width: 768px) {
  .skill-level-text {
    font-size: 0.72rem;
  }
}
</style>