<template>
  <section id="skills" class="skills-section py-5" data-aos="fade-left" data-aos-duration="1000">
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
  background: #f8fafc;
}

/* HEADER */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  width: 70px;
  height: 4px;
  background: #2563eb;
  position: absolute;
  left: 50%;
  bottom: -12px;
  transform: translateX(-50%);
  border-radius: 99px;
}

.section-subtitle {
  max-width: 650px;
  margin: 1.5rem auto 0;
  color: #64748b;
  font-size: 1.05rem;
}

/* CARD */
.skill-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.05);
  transition: all 0.35s ease;
  height: 100%;
}

.skill-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.12);
}

/* ICON */
.skill-icon-wrapper {
  width: 70px;
  height: 70px;
  background: rgba(37, 99, 235, 0.08);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
}

.skill-icon-wrapper i {
  font-size: 2rem;
  color: #2563eb;
}

/* TITLE */
.skill-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  font-weight: 600;
  font-size: 1.05rem;
}

.text-accent {
  background: #eff6ff;
  color: #2563eb;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
}

/* PROGRESS */
.skill-progress-bg {
  height: 10px;
  background: #e2e8f0;
  border-radius: 999px;
  overflow: hidden;
}

.skill-progress-bar {
  height: 100%;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    #3b82f6,
    #2563eb
  );
  transition: width 1s ease;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .skill-card {
    padding: 1.25rem;
  }
}
</style>
