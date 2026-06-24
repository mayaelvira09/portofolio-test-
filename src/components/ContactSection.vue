<template>
  <section id="contact" class="contact-section py-5" data-aos="fade-up" data-aos-duration="1000">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5">
        <h2 class="section-title">Hubungi Saya</h2>
        <p class="section-subtitle">Hubungi saya untuk mendiskusikan peluang kerja, proyek kolaborasi, atau bertukar pikiran tentang programming.</p>
      </div>

      <div class="row g-4 align-items-center">
        <!-- Left: Quick Contact Info Links -->
        <div class="col-lg-6">
          <div class="d-flex flex-column gap-3">
            <!-- Email -->
            <a href="mailto:mayaelvirasutanto@gmail.com" class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div class="contact-info">
                <span class="contact-label">Email Resmi</span>
                <span class="contact-value">mayaelvirasutanto@gmail.com</span>
              </div>
            </a>

            <!-- WhatsApp -->
            <a href="https://wa.me/6285946934750" class="contact-item" target="_blank" rel="noopener noreferrer">
              <div class="contact-icon">
                <i class="bi bi-whatsapp"></i>
              </div>
              <div class="contact-info">
                <span class="contact-label">WhatsApp</span>
                <span class="contact-value">085946934750</span>
              </div>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/mayaelvira09" class="contact-item" target="_blank" rel="noopener noreferrer">
              <div class="contact-icon">
                <i class="bi bi-github"></i>
              </div>
              <div class="contact-info">
                <span class="contact-label">GitHub Profile</span>
                <span class="contact-value">github.com/mayaelvira09</span>
              </div>
            </a>

            <!-- Location -->
            <div class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div class="contact-info">
                <span class="contact-label">Domisili</span>
                <span class="contact-value">Badung, Bali, Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Call to Action Card -->
        <div class="col-lg-6">
          <div class="card-custom glass-card p-5 text-center text-lg-start">
            <h3 class="h4 fw-bold text-dark mb-3">Tertarik untuk Bekerja Sama?</h3>
            <p class="text-secondary mb-4">
              Saya selalu terbuka untuk diskusi mengenai lowongan pekerjaan sebagai Junior Front-End Developer, proyek kolaborasi pengembangan website, atau bertukar ide mengenai teknologi front-end.
            </p>
            <div class="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3">
              <a href="https://wa.me/6285946934750" target="_blank" rel="noopener noreferrer" class="btn-custom btn-primary-custom justify-content-center">
                <i class="bi bi-chat-text-fill"></i> Hubungi Saya (WhatsApp)
              </a>
              <a href="mailto:mayaelvirasutanto@gmail.com" class="btn-custom btn-outline-custom justify-content-center">
                <i class="bi bi-envelope-fill"></i> Kirim Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Presentational component using reactive variables if needed, standard layout
</script>

<style scoped>
.contact-section {
  background-color: var(--color-bg);
  border-bottom: 1px solid rgba(91, 157, 255, 0.05);
}
</style>
