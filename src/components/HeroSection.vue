<template>
  <section
    id="home"
    class="min-vh-100 d-flex align-items-center bg-light-section pt-5"
  >
    <div class="container">
      <div class="row align-items-center py-5">

        <!-- ngatur transisinya-->
        <div
          class="col-lg-6 order-2 order-lg-1"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="mb-3">
            <span class="badge-custom fs-6">Halo, Saya 👋</span>
          </div>

          <h1 class="display-4 fw-bold mb-2">
            Maya Elvira Sutanto
          </h1>

          <h3 class="h4 text-accent mb-4">
            Web Developer
          </h3>

          <p class="lead mb-4">
            Halo, saya adalah seorang Web Developer yang berdedikasi untuk
            menciptakan pengalaman web yang interaktif dan optimal. Selalu
            adaptif dengan teknologi terbaru, saya siap berkontribusi dalam tim
            dan membawa dampak positif bagi proyek Anda.
          </p>

          <div class="d-flex flex-wrap gap-2 mb-4">
            <span class="badge-custom">
              <i class="bi bi-geo-alt-fill text-accent"></i>
              Badung, Bali
            </span>

            <span class="badge-custom">
              <i class="bi bi-code-square text-accent"></i>
              Web Developer
            </span>
          </div>

          <div class="d-flex flex-wrap gap-3 mb-4">
            <router-link
              to="/about"
              class="btn-custom btn-primary-custom"
            >
              Tentang Saya
              <i class="bi bi-arrow-right"></i>
            </router-link>

            <router-link
              to="/projects"
              class="btn-custom btn-outline-custom"
            >
              My Projects
              <i class="bi bi-briefcase"></i>
            </router-link>
          </div>

          <div class="d-flex align-items-center gap-3 flex-wrap">
            <span class="text-secondary small fw-bold">
              Socials:
            </span>

            <a
              href="https://github.com/mayaelvira09"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-link-custom"
            >
              <i class="bi bi-github fs-5"></i>
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/maya-elvira-03a096309"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-link-custom"
            >
              <i class="bi bi-linkedin fs-5"></i>
              LinkedIn
            </a>

            <a
              href="https://wa.me/6285946934750"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-link-custom"
            >
              <i class="bi bi-whatsapp fs-5"></i>
              Hubungi Saya
            </a>
          </div>
        </div>

        <!-- Profile -->
        <div
          class="col-lg-6 order-1 order-lg-2 mb-5 mb-lg-0 text-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div class="profile-container">
            <div class="profile-blob"></div>

            <div class="profile-image-wrapper">
              <img
                v-if="!imageError"
                :src="imageSrc"
                alt="Maya Elvira Sutanto"
                class="profile-img-element"
                @error="handleImageError"
              />

              <svg
                v-else
                class="profile-placeholder-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
              >
                <!-- SVG tetap sama, tidak perlu diubah -->
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import profile from '../assets/profile.jpeg'

const imageSrc = profile
const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}
</script>

<style scoped>
.bg-light-section {
  background: radial-gradient(
    circle at 10% 20%,
    rgba(91, 157, 255, 0.05) 0%,
    rgba(255, 255, 255, 1) 90%
  );
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