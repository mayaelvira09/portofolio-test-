<template>
  <section id="skills" class="skills-section py-5" data-aos="fade-left" data-aos-duration="1000">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5">
        <h2 class="section-title">Skills & Kompetensi</h2>
        <p class="section-subtitle">Teknologi dan alat pemrograman yang saya pelajari dan gunakan untuk membangun proyek-proyek website.</p>
      </div>

      <!-- Grid Daftar Skills Terang & Berwarna -->
      <div class="row g-4 justify-content-center">
        <div 
          v-for="skill in skills" 
          :key="skill.name" 
          class="col-6 col-md-4 col-lg-3"
        >
          <!-- Menggunakan variabel CSS '--glow-color' untuk bayangan pastel pas di-hover -->
          <div class="skill-light-card text-center" :style="{ '--glow-color': skill.color }">
            <!-- Icon Box dengan warna khas masing-masing -->
            <div class="icon-box mb-3" :style="{ color: skill.color, backgroundColor: skill.color + '12' }">
              <i :class="skill.icon"></i>
            </div>
            <!-- Nama Skill & Level -->
            <h5 class="skill-name text-dark mb-1 fw-bold">{{ skill.name }}</h5>
            <span class="skill-level-text small text-secondary text-uppercase tracking-wider">{{ skill.level }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Data skills asli kamu dengan kode warna pastel/neon khas masing-masing logonya
const skills = ref([
  { name: 'HTML', icon: 'bi bi-filetype-html', level: 'Advanced', color: '#e34c26' },
  { name: 'CSS', icon: 'bi bi-filetype-css', level: 'Advanced', color: '#264de4' },
  { name: 'Python', icon: 'bi bi-code-slash', level: 'Intermediate', color: '#b89200' }, // Dipasasin biar kontras di background putih
  { name: 'Bootstrap', icon: 'bi bi-bootstrap-fill', level: 'Beginner', color: '#7952b3' },
  { name: 'JavaScript', icon: 'bi bi-braces-asterisk', level: 'Intermediate', color: '#ccb200' }, // Dipasasin biar kelihatan terang
  { name: 'PHP', icon: 'bi bi-terminal-fill', level: 'Intermediate', color: '#525694' },
  { name: 'Laravel', icon: 'bi bi-gem', level: 'Beginner', color: '#ff2d20' },
  { name: 'MySQL', icon: 'bi bi-database-fill', level: 'Intermediate', color: '#006175' }
])
</script>

<style scoped>
/* Kembali ke latar belakang terang bawaan asli portofoliomu */
.skills-section {
  background: #f8fafc; 
  position: relative;
}

/* HEADER STYLE */
.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e293b;
  letter-spacing: -0.02em;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  width: 50px;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6, #2563eb);
  position: absolute;
  left: 50%;
  bottom: -12px;
  transform: translateX(-50%);
  border-radius: 99px;
}

.section-subtitle {
  max-width: 600px;
  margin: 1.5rem auto 0;
  font-size: 1.05rem;
  color: #64748b;
}

/* LIGHT CARD DESIGN (Aesthetic Putih Bersih) */
.skill-light-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 2rem 1.5rem;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
  height: 100%;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.02);
}

/* EFEK HOVER GLOW PASTEL HALUS */
.skill-light-card:hover {
  transform: translateY(-6px);
  border-color: var(--glow-color);
  /* Memberikan efek bayangan menyala tipis transparan sesuai warna tech-nya */
  box-shadow: 0 12px 30px -5px rgba(15, 23, 42, 0.04),
              0 10px 25px var(--glow-color) 30; /* Angka 30 di ujung untuk transparansi kelembutan */
}

/* ICON BOX */
.icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 18px;
  transition: all 0.3s ease;
}

.skill-light-card:hover .icon-box {
  transform: scale(1.1) rotate(4deg);
}

.icon-box i {
  font-size: 2.2rem;
}

/* TEXT TYPOGRAPHY */
.skill-name {
  font-size: 1.15rem;
  letter-spacing: -0.01em;
  color: #0f172a;
}

.skill-level-text {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  opacity: 0.7;
}

/* RESPONSIVE */
@media (max-width: 576px) {
  .section-title {
    font-size: 2rem;
  }
  .skill-light-card {
    padding: 1.5rem 1rem;
    border-radius: 20px;
  }
  .icon-box {
    width: 55px;
    height: 55px;
  }
  .icon-box i {
    font-size: 1.8rem;
  }
}
</style>