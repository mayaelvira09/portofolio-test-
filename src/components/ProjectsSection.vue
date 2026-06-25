<template>
  <section id="projects" class="projects-section py-5" data-aos="fade-up" data-aos-duration="1000">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5">
        <h2 class="section-title">My Projects</h2>
        <p class="section-subtitle">Beberapa project yang telah saya kerjakan selama proses belajar pengembangan website dan pengembangan aplikasi.</p>
      </div>



      <!-- Projects Grid (Other Projects) -->
      <div class="row g-4">
        <div 
          v-for="project in otherProjects" 
          :key="project.title" 
          class="col-12 col-md-6 col-lg-4"
        >
          <div class="card-custom hover-card project-card glass-card">
            <!-- Project Image Placeholder -->
            <div class="project-img-wrapper">
              <img 
                v-if="!project.imageError" 
                :src="project.image" 
                @error="handleImageError(project)" 
                :alt="project.title" 
                class="project-img-element"
              />
              <div v-else :class="['project-placeholder', project.gradientClass]">
                <i :class="project.icon"></i>
                <span class="small fw-semibold mt-1">Project Mockup</span>
              </div>
            </div>
            
            <!-- Project Details -->
            <h4 class="h5 fw-bold text-dark mb-2">{{ project.title }}</h4>
            <p class="text-secondary small flex-grow-1 mb-3">{{ project.description }}</p>
            
            <div class="mb-3">
              <div class="d-flex flex-wrap gap-1-5">
                <span v-for="tech in project.technologies" :key="tech" class="tech-badge me-1 mb-1">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="d-flex gap-2 mt-auto">
              <button @click="openModal(project)" class="btn-custom btn-primary-custom btn-sm flex-fill justify-content-center py-2 fs-7">
                <i class="bi bi-eye"></i> Detail
              </button>
            
            </div>
          </div>
        </div>
      </div>

  <!-- =======================
     PROJECT DETAIL MODAL
======================== -->
<div
  class="custom-modal-overlay"
  v-if="showModal"
  @click.self="closeModal"
>
  <div class="custom-modal-content">
<button
  type="button"
  class="btn-close-custom"
  @click="closeModal"
>
  <i class="bi bi-x-lg"></i>
</button>

    <!-- Gambar -->
    <div class="modal-image shadow-sm">

      <img
        v-if="!currentProject.imageError"
        :src="currentProject.image"
        @error="handleModalImageError"
        :alt="currentProject.title"
        class="modal-project-img"
      />

      <div
        v-else
        :class="['project-placeholder', currentProject.gradientClass || 'bg-featured-grad']"
      >
        <i :class="currentProject.icon || 'bi bi-folder-fill'"></i>
      </div>

    </div>

    <!-- Isi -->
    <div class="modal-body-custom">

      <h2 class="modal-title">
        {{ currentProject.title }}
      </h2>

      <p class="modal-description">
        {{ currentProject.detailedDescription || currentProject.description }}
      </p>

      <h6 class="tech-title">
        Teknologi yang Digunakan
      </h6>

      <div class="modal-tech">

        <span
          v-for="tech in currentProject.technologies"
          :key="tech"
          class="tech-badge"
        >
          {{ tech }}
        </span>

      </div>

      <div class="modal-footer-custom">

        <a
          v-if="currentProject.vercelLink && currentProject.vercelLink !== '#'"
          :href="currentProject.vercelLink"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-custom btn-primary-custom"
        >
          <i class="bi bi-box-arrow-up-right"></i>
          Kunjungi Website
        </a>

      </div>

    </div>

  </div>
</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const currentProject = ref(null)



const otherProjects = ref([
  {
    title: 'GlowHair',
    description: 'Website e-commerce yang menjual berbagai jenis alat catokan rambut yang memiliki fitur katalog produk, pencarian, detail produk, keranjang belanja, serta tampilan yang responsif.',
    detailedDescription: 'GlowHair adalah platform toko online catok rambut modern yang dirancang untuk memberikan kenyamanan transaksi berbelanja produk kecantikan penata rambut. Dibangun menggunakan Laravel MVC, website ini dilengkapi dengan katalog filter pencarian dinamis, detail produk lengkap, kelola keranjang belanja interaktif, form checkout, serta panel administratif dasar untuk kelola data inventori produk.',
    technologies: ['Laravel Framework', 'PHP', 'HTML5', 'CSS3', 'Bootstrap 4', 'JavaScript', 'MySQL Database', 'Git & GitHub'],
    icon: 'bi bi-bag-heart-fill',
    image: 'src/assets/toko_online.jpeg',
    imageError: false, 
    gradientClass: 'bg-grad-1',
    vercelLink: '#',
    
  },
  {
    title: 'Tefa - SMKN 1 DENPASAR',
    description: 'Teaching factory SMKN 1 DENPASAR ini merupakan website jual beli barang atau jasa dari SMK Negeri 1 Denpasar, kami menyalurkan layanan ini untuk masyarakat umum.',
    detailedDescription: 'Teaching Factory (Tefa) SMK Negeri 1 Denpasar merupakan sebuah sistem platform layanan e-marketplace lokal sekolah untuk memfasilitasi pemasaran produk kreativitas siswa dan pemesanan jasa kejuruan (seperti perbaikan komputer, servis jaringan, perakitan, dan pembuatan web) oleh masyarakat umum. Dikembangkan dengan Laravel untuk memastikan sistem database transaksi aman, rapi, dan mudah dioperasikan.',
    technologies: ['Laravel', 'PHP', 'HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    icon: 'bi bi-box-seam-fill',
    image: 'src/assets/tefa.jpeg',
    imageError: false,
    gradientClass: 'bg-grad-2',
    vercelLink: '#',
    githubLink: 'https://github.com/mayaelvira09'
  },
  {
    title: 'Website Biodata',
    description: 'Website profil pribadi yang menampilkan informasi diri, pendidikan, kemampuan, serta kontak dengan desain modern dan responsif.',
    detailedDescription: 'Website biodata interaktif "Cerita Liburan Maya" yang berfungsi sebagai portofolio sederhana sekaligus melatih visualisasi layout CSS. Menampilkan biografi pribadi, timeline pendidikan, hobi, catatan cerita liburan interaktif, kemampuan teknis, serta formulir kontak responsif yang dikemas secara bersih dan estetik.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: 'bi bi-person-badge-fill',
    image: 'src/assets/biodata.jpeg',
    imageError: false,
    gradientClass: 'bg-grad-4',
    vercelLink: 'https://ceritakkpw.vercel.app/',
    githubLink: 'https://github.com/mayaelvira09',
  }
])

const handleImageError = (project) => {
  if (project.image.endsWith('.jpg')) {
    project.image = project.image.replace('.jpeg', '.png')
  } else {
    project.imageError = true
  }
}

const handleModalImageError = () => {
  if (currentProject.value) {
    if (currentProject.value.image.endsWith('.jpg')) {
      currentProject.value.image = currentProject.value.image.replace('.jpg', '.png')
    } else {
      currentProject.value.imageError = true
    }
  }
}
const openModal = (project) => {
  currentProject.value = project
  showModal.value = true

const openModal = (project) => {
  currentProject.value = project
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  currentProject.value = null
}
}

const closeModal = () => {
  showModal.value = false
  currentProject.value = null

 
}
</script>


<style scoped>
.projects-section {
  background: var(--color-bg);
  padding: 90px 0;
}

/* =========================
   Section
========================= */

.section-title {
  font-size: 2.4rem;
  font-weight: 700;
  color: var(--color-primary);
}

.section-subtitle {
  max-width: 700px;
  margin: auto;
  color: #6c757d;
  line-height: 1.8;
}

.fs-7 {
  font-size: .82rem;
}

.gap-1-5 {
  gap: .4rem;
}

/* =========================
   Card
========================= */

.glass-card {
  background: rgba(255,255,255,.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,.35);
}

.card-custom {
  padding: 28px;
  transition: .35s ease;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0,0,0,.06);
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 18px 40px rgba(0,0,0,.12);
}

/* =========================
   Image
========================= */

.project-img-wrapper {
  width: 100%;
  height: 230px;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 20px;
}

.project-img-element,
.modal-project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: .4s;
}

.project-card:hover .project-img-element,
.featured-project-card:hover .project-img-element {
  transform: scale(1.08);
}

.project-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}

.project-placeholder i {
  font-size: 4rem;
  margin-bottom: 12px;
}


.bg-featured-grad{
background:linear-gradient(135deg,#2563eb,#7c3aed);
}

.bg-grad-1{
background:linear-gradient(135deg,#0ea5e9,#3b82f6);
}

.bg-grad-2{
background:linear-gradient(135deg,#22c55e,#0ea5e9);
}

.bg-grad-4{
background:linear-gradient(135deg,#9333ea,#2563eb);
}

/* =========================
   Badge
========================= */

.tech-badge{
padding:6px 14px;
background:#eef4ff;
color:#2563eb;
border-radius:50px;
font-size:.78rem;
font-weight:600;
}

/* =========================
   Button
========================= */

.btn-custom{
display:inline-flex;
align-items:center;
gap:8px;
padding:12px 22px;
border:none;
border-radius:12px;
font-weight:600;
cursor:pointer;
transition:.3s;
text-decoration:none;
}

.btn-primary-custom{
background:#2563eb;
color:white;
}

.btn-primary-custom:hover{
background:#1d4ed8;
transform:translateY(-2px);
}

.btn-sm{
padding:9px 16px;
}

/* =========================
   Featured Animation
========================= */

.animate-controller{
animation:float 3s ease-in-out infinite alternate;
}

@keyframes float{
0%{
transform:translateY(0);
}
100%{
transform:translateY(-10px);
}
}

@keyframes fade{
from{
opacity:0;
}
to{
opacity:1;
}
}

/* =========================
   Responsive
========================= */

@media(max-width:768px){

.section-title{
font-size:2rem;
}

.card-custom{
padding:20px;
}

.project-img-wrapper{
height:190px;
}

.custom-modal-content{
padding:22px;
}

.project-placeholder i{
font-size:3rem;
}

}

/* =========================
   MODAL MODERN
========================= */

.custom-modal-content {
  position: relative;

  width: 100%;
  max-width: 850px;

  background: #fff;
  border-radius: 28px;

  padding: 0;

  max-height: 90vh;

  overflow-y: auto;
  overflow-x: hidden;

  box-shadow: 0 25px 70px rgba(0,0,0,.25);

  scrollbar-width: thin;
}

.custom-modal-overlay{
  position: fixed;
  inset: 0;

  background: rgba(15,23,42,.6);
  backdrop-filter: blur(8px);

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;

  z-index: 9999;
}
.modal-image {
  width: 100%;
  max-height: 210px;
  overflow: hidden;
}

.modal-project-img {
  width: 100%;
  height: auto;
  display: block;
}
.modal-project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* CLOSE BUTTON */

.btn-close-custom {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 45px;
  height: 45px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,.95);
  box-shadow: 0 5px 15px rgba(0,0,0,.15);
  z-index: 10;
  transition: .3s;
}

.btn-close-custom:hover {
  transform: rotate(90deg);
}

/* BODY */

.modal-body-custom {
  padding: 35px;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 18px;
  line-height: 1.3;
}

.modal-description {
  color: #64748b;
  line-height: 1.9;
  margin-bottom: 28px;
}

/* TECH */

.tech-title {
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 15px;
}

.modal-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

/* FOOTER */

.modal-footer-custom {
  display: flex;
  justify-content: flex-start;
}

/* SCROLL */

.custom-modal-content::-webkit-scrollbar {
  width: 8px;
}

.custom-modal-content::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 999px;
}

/* MOBILE */

@media (max-width:768px){

  .modal-image{
    height:220px;
  }

  .modal-body-custom{
    padding:24px;
  }

  .modal-title{
    font-size:1.5rem;
  }

}
</style>
