<template>
  <section id="home" class="min-vh-100 d-flex align-items-center bg-light-section pt-5">
    <div class="container">
      <div class="row align-items-center py-5">
        <!-- Left Column: Biography Summary & Actions -->
        <div class="col-lg-6 order-2 order-lg-1" data-aos="fade-right" data-aos-duration="1000">
          <div class="mb-3">
            <span class="badge-custom fs-6">Halo, Saya 👋</span>
          </div>
          <h1 class="display-4 fw-bold mb-2">Maya Elvira Sutanto</h1>
          <h3 class="h4 text-accent mb-4 d-flex align-items-center">
            <span class="typing-cursor">{{ typedText }}</span>
          </h3>
          
          <p class="lead mb-4">
           Halo,
Saya adalah seorang Web Developer yang berdedikasi untuk menciptakan pengalaman web yang interaktif dan optimal. Selalu adaptif dengan teknologi terbaru, saya siap berkontribusi dalam tim dan membawa dampak positif bagi proyek Anda.
          </p>
          
         <!-- Badges -->
<div class="d-flex flex-wrap gap-2 mb-4">
  <span class="badge-custom">
    <i class="bi bi-geo-alt-fill text-accent"></i> Badung, Bali
  </span>


  <span class="badge-custom">
    <i class="bi bi-code-square text-accent"></i> Web Developer
  </span>
</div>
          
          <!-- Action Buttons -->
          <div class="d-flex flex-wrap gap-3 mb-4">
            <router-link to="/about" class="btn-custom btn-primary-custom">
              Tentang Saya <i class="bi bi-arrow-right"></i>
            </router-link>
            <router-link to="/projects" class="btn-custom btn-outline-custom">
              My Projects <i class="bi bi-briefcase"></i>
            </router-link>
          </div>
          
          <!-- Social Link Icons -->
          <div class="d-flex align-items-center gap-3">
            <span class="text-secondary small fw-bold">Socials:</span>
            <a href="https://github.com/mayaelvira09" class="btn-link-custom" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-github fs-5"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/maya-elvira-03a096309?utm_source=share_via&utm_content=profile&utm_medium=member_android" class="btn-link-custom" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-linkedin fs-5"></i> LinkedIn
            </a>
            <a href="https://wa.me/6285946934750" class="btn-link-custom" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-whatsapp fs-5"></i> Hubungi Saya
            </a>
          </div>
        </div>
        
        <!-- Right Column: Profile Avatar Graphic -->
        <div class="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0 text-center" data-aos="fade-left" data-aos-duration="1000">
          <div class="profile-container">
            <!-- Background Abstract Shape -->
            <div class="profile-blob"></div>
            <!-- Floating Image Wrapper -->
            <div class="profile-image-wrapper">
              <!-- If image exists and loads, show it -->
              <img
  v-if="!imageError"
  :src="imageSrc"
  alt="Maya Elvira Sutanto"
  class="profile-img-element"
  @error="handleImageError"
/>
              
              <!-- Otherwise, fall back to our beautiful stylized SVG Developer Illustration -->
              <svg 
                v-else 
                class="profile-placeholder-svg" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 200 200"
              >
                <defs>
                  <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#5B9DFF" />
                    <stop offset="100%" stop-color="#3B82F6" />
                  </linearGradient>
                  <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#E2E8F0" />
                    <stop offset="100%" stop-color="#94A3B8" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r="100" fill="url(#avatarGrad)" opacity="0.15" />
                <path d="M 0,100 L 200,100 M 100,0 L 100,200" stroke="rgba(91, 157, 255, 0.2)" stroke-width="1" />
                <rect x="40" y="40" width="120" height="90" rx="8" fill="#1E293B" opacity="0.9" />
                <circle cx="52" cy="52" r="3" fill="#EF4444" />
                <circle cx="62" cy="52" r="3" fill="#F59E0B" />
                <circle cx="72" cy="52" r="3" fill="#10B981" />
                <rect x="50" y="65" width="45" height="4" rx="2" fill="#5B9DFF" />
                <rect x="50" y="75" width="70" height="4" rx="2" fill="#3B82F6" />
                <rect x="50" y="85" width="30" height="4" rx="2" fill="#10B981" />
                <rect x="50" y="95" width="55" height="4" rx="2" fill="#F59E0B" />
                
                <circle cx="100" cy="120" r="28" fill="#FEE2E2" />
                <path d="M 70,120 C 70,95 130,95 130,120 C 130,100 70,100 70,120 Z" fill="#1E293B" />
                <path d="M 72,110 Q 100,90 128,110" fill="none" stroke="#1E293B" stroke-width="8" stroke-linecap="round" />
                <rect x="82" y="114" width="15" height="10" rx="2" fill="none" stroke="#1E293B" stroke-width="2" />
                <rect x="103" y="114" width="15" height="10" rx="2" fill="none" stroke="#1E293B" stroke-width="2" />
                <line x1="97" y1="119" x2="103" y2="119" stroke="#1E293B" stroke-width="2" />
                <path d="M 96,134 Q 100,138 104,134" fill="none" stroke="#1E293B" stroke-width="2" stroke-linecap="round" />
                
                <path d="M 60,175 C 60,150 78,145 100,145 C 122,145 140,150 140,175" fill="url(#bodyGrad)" />
                <rect x="65" y="165" width="70" height="30" rx="4" fill="#334155" />
                <polygon points="55,195 145,195 135,185 65,185" fill="#475569" />
                <path d="M 90,190 L 110,190" stroke="#CBD5E1" stroke-width="2" stroke-linecap="round" />
                <circle cx="100" cy="177" r="3" fill="#3B82F6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import profile from '../assets/profile.jpeg'

const textToType = 'Web Developer'
const typedText = ref('')

let index = 0
let isDeleting = false

const imageSrc = profile
const imageError = ref(false)

const handleImageError = (e) => {
  console.log('Gagal memuat gambar:', e)
  imageError.value = true
}

const typeEffect = () => {
  if (!isDeleting) {
    typedText.value = textToType.slice(0, index + 1)
    index++

    if (index === textToType.length) {
      isDeleting = true
      setTimeout(typeEffect, 2000)
      return
    }
  } else {
    typedText.value = textToType.slice(0, index - 1)
    index--

    if (index === 0) {
      isDeleting = false
      setTimeout(typeEffect, 500)
      return
    }
  }

  setTimeout(typeEffect, isDeleting ? 40 : 80)
}

onMounted(() => {
  console.log('Image Path:', imageSrc)
  setTimeout(typeEffect, 400)
})
</script>
<style scoped>
.bg-light-section {
  background: radial-gradient(circle at 10% 20%, rgba(91, 157, 255, 0.05) 0%, rgba(255, 255, 255, 1) 90%);
}

.profile-img-element {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  transition: var(--transition-smooth);
}

.profile-image-wrapper:hover .profile-img-element {
  transform: scale(1.05);
}
</style>
