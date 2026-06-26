<template>
  <section id="projects" class="py-5" data-aos="fade-up">
    <div class="container">
      
      <div class="text-center mb-5">
        <h2 class="section-title fw-bold">My Projects</h2>
        <p class="text-secondary">Beberapa proyek pengembangan website yang telah saya selesaikan.</p>
      </div>

      <div class="row g-4 mb-5">
        <div v-for="(project, index) in projects" :key="'card-' + index" class="col-md-6 col-lg-4">
          <div class="card-custom h-100 d-flex flex-column">
            
            <div class="project-img-wrapper">
              <img :src="project.image" :alt="project.title" class="project-img" />
            </div>

            <div class="p-4 d-flex flex-column flex-grow-1">
              <h4 class="fw-bold mb-3">{{ project.title }}</h4>
              
              <div class="d-flex flex-wrap gap-2 mb-4">
                <span v-for="(tech, tIndex) in project.techStack" :key="tIndex" class="badge bg-light text-primary border px-2 py-1 small">
                  {{ tech }}
                </span>
              </div>

              <div class="mt-auto">
                <button 
                  @click="openModal(project)"
                  class="btn btn-primary btn-sm w-100 rounded-pill py-2 fw-semibold"
                >
                  <i class="bi bi-info-circle me-1"></i> Lihat Detail
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div v-if="isModalOpen" class="vue-modal-overlay" @click.self="closeModal">
        <div class="vue-modal-dialog animate-pop">
          

          <div class="vue-modal-body">
            <div class="modal-img-wrapper mb-4 rounded-3 overflow-hidden shadow-sm text-center">
              <img :src="selectedProject.image" :alt="selectedProject.title" class="img-fluid modal-img rounded-3" />
            </div>
            
            <h6 class="fw-bold text-secondary text-uppercase small tracking-wider mb-2">Deskripsi Proyek</h6>
            <p class="text-dark leading-relaxed mb-4" style="text-align: justify; white-space: pre-line;">
              {{ selectedProject.description }}
            </p>

            <h6 class="fw-bold text-secondary text-uppercase small tracking-wider mb-2">Teknologi yang Digunakan</h6>
            <div class="d-flex flex-wrap gap-2">
              <span v-for="(tech, tIndex) in selectedProject.techStack" :key="tIndex" class="badge bg-light text-primary border px-3 py-2">
                {{ tech }}
              </span>
            </div>
          </div>

          <div class="vue-modal-footer">
            <button type="button" class="btn btn-secondary px-4 rounded-pill btn-sm" @click="closeModal">
              Tutup
            </button>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Data deskripsi buatanmu dijamin aman dan utuh tanpa berubah
const projects = ref([
  {
    title: 'Portofolio Pribadi',
    description: 'Website portofolio interaktif dan responsif menggunakan Vue.js, Vite, dan Bootstrap.',
    image: '/biodata.jpeg', 
    techStack: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'Website TEFA',
    description: 'Teaching factory SMKN 1 DENPASAR ini merupakan website jual beli barang atau jasa dari SMK Negeri 1 Denpasar, kami menyalurkan layanan ini untuk masyarakat umum.',
    image: '/tefa.jpeg', 
    techStack: ['Laravel', 'PHP', 'HTML', 'CSS', 'Bootstrap', 'JavaScript']
  },
  {
    title: 'Toko Online',
    description: 'Website e-commerce yang menjual berbagai jenis alat catokan rambut yang memiliki fitur katalog produk, pencarian, detail produk, keranjang belanja, serta tampilan yang responsif.',
    image: '/toko_online.jpeg', 
    techStack: ['Laravel Framework', 'PHP', 'HTML5', 'CSS3', 'Bootstrap 4', 'JavaScript', 'MySQL Database']
  }
])

const isModalOpen = ref(false)
const selectedProject = ref({})

// Fungsi Buka Modal (Sama sekali TIDAK MENGUNCI scroll bodi luar)
const openModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

// Fungsi Tutup Modal
const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>
.section-title {
  font-size: 2rem;
  color: #1e293b;
}

.card-custom {
  background: white;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
  overflow: hidden;
}

.card-custom:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}

.project-img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #f1f5f9;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* OVERLAY MODAL CUSTOM */
.vue-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 23, 42, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 20px;
  /* MENGHAPUS kuncian scroll bodi agar halaman utama di belakang bisa ikut digeser */
  pointer-events: auto; 
}

.vue-modal-dialog {
  background: white;
  width: 100%;
  max-width: 800px;
  max-height: 80vh; /* Agar pop up pas di layar laptop dan sisa space bisa dipakai scroll luar */
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.animate-pop {
  animation: popIn 0.2s ease-out;
}

@keyframes popIn {
  from { transform: scale(0.97); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.vue-modal-header {
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
}

.vue-close-btn {
  background: none;
  border: none;
  font-size: 1.8rem;
  line-height: 1;
  color: #94a3b8;
  cursor: pointer;
}

/* SCROLL BAGIAN DALAM MODAL (AKTIF DAN AMAN) */
.vue-modal-body {
  padding: 24px;
  overflow-y: auto; 
  -webkit-overflow-scrolling: touch;
}

.vue-modal-footer {
  padding: 16px 24px;
  display: flex;
  justify-content: flex-end;
  background: #f8fafc;
  border-top: 1px solid #f1f5f9;
}

.modal-img-wrapper {
  max-height: 320px;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-img {
  max-height: 320px;
  object-fit: contain;
}

.tracking-wider {
  letter-spacing: 0.05em;
}

.leading-relaxed {
  line-height: 1.625;
}
</style>