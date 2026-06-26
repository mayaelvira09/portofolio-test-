<template>
  <section id="contact" class="contact-section py-4 py-md-5" data-aos="fade-up" data-aos-duration="1000">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-4 mb-md-5">
        <h2 class="section-title">Hubungi Saya</h2>
        <p class="section-subtitle px-2">
          Hubungi saya untuk mendiskusikan peluang kerja, proyek kolaborasi, atau bertukar pikiran tentang programming.
        </p>
      </div>

      <div class="row g-4 align-items-stretch">
        <!-- Left: Contact Info -->
        <div class="col-lg-6">
          <div class="d-flex flex-column gap-3 h-100 justify-content-center">

            <!-- Email -->
            <a href="mailto:mayaelvirasutanto@gmail.com" class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-envelope-fill"></i>
              </div>
              <div class="contact-info text-break">
                <span class="contact-label">Email Resmi</span>
                <span class="contact-value">mayaelvirasutanto@gmail.com</span>
              </div>
            </a>

            <!-- WhatsApp -->
            <a
              href="https://wa.me/6285946934750"
              class="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="contact-icon">
                <i class="bi bi-whatsapp"></i>
              </div>
              <div class="contact-info text-break">
                <span class="contact-label">WhatsApp</span>
                <span class="contact-value">085946934750</span>
              </div>
            </a>

            <!-- Instagram -->
            <a
              href="https://instagram.com/maymay0_9"
              class="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="contact-icon">
                <i class="bi bi-instagram"></i>
              </div>
              <div class="contact-info text-break">
                <span class="contact-label">Instagram</span>
                <span class="contact-value">@maymay0_9</span>
              </div>
            </a>

            <!-- GitHub -->
            <a
              href="https://github.com/mayaelvira09"
              class="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="contact-icon">
                <i class="bi bi-github"></i>
              </div>
              <div class="contact-info text-break">
                <span class="contact-label">GitHub Profile</span>
                <span class="contact-value">github.com/mayaelvira09</span>
              </div>
            </a>

            <!-- Location -->
            <div class="contact-item">
              <div class="contact-icon">
                <i class="bi bi-geo-alt-fill"></i>
              </div>
              <div class="contact-info text-break">
                <span class="contact-label">Domisili</span>
                <span class="contact-value">Badung, Bali, Indonesia</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Right: CTA -->
        <div class="col-lg-6">
          <div class="card-custom glass-card p-4 p-md-5 text-center text-lg-start h-100 d-flex flex-column justify-content-center">
            <h3 class="h4 fw-bold text-dark mb-3">
              Tertarik untuk Bekerja Sama?
            </h3>

            <p class="text-secondary mb-4">
              Saya selalu terbuka untuk diskusi mengenai lowongan pekerjaan sebagai
              Junior Front-End Developer, proyek kolaborasi pengembangan website,
              maupun peluang untuk mengembangkan keterampilan dan pengalaman di dunia teknologi.
            </p>

            <div
              class="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-3 mt-auto"
            >
              <a
                href="https://wa.me/6285946934750"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-custom btn-primary-custom justify-content-center"
              >
                <i class="bi bi-chat-text-fill me-2"></i>
                Hubungi Saya
              </a>

              <a
                href="mailto:mayaelvirasutanto@gmail.com"
                class="btn-custom btn-outline-custom justify-content-center"
              >
                <i class="bi bi-envelope-fill me-2"></i>
                Kirim Email
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
// Contact Section
</script>

<style scoped>
.contact-section {
  background-color: var(--color-bg, #f8fafc);
  border-bottom: 1px solid rgba(91, 157, 255, 0.05);
}

/* TITLE RESPONSIVE */
.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1e293b;
}

@media (min-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }
}

.section-subtitle {
  color: #64748b;
  max-width: 600px;
  margin: auto;
  font-size: 0.95rem;
}

@media (min-width: 768px) {
  .section-subtitle {
    font-size: 1.05rem;
  }
}

/* CONTACT ITEM RESPONSIVE */
.contact-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  padding: 1rem;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.04);
}

.contact-icon {
  width: 46px;
  height: 46px;
  background: rgba(37, 99, 235, 0.08);
  color: #2563eb;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  flex-shrink: 0;
}

.contact-info {
  display: flex;
  flex-column: uppercase;
  flex-direction: column;
}

.contact-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #64748b;
  text-uppercase: uppercase;
  letter-spacing: 0.05em;
}

.contact-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e293b;
}

@media (min-width: 768px) {
  .contact-value {
    font-size: 1rem;
  }
}

/* CARD CTA */
.card-custom {
  background: white;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
}

/* BUTTON CUSTOM ADJUSTMENT */
.btn-custom {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}
</style>