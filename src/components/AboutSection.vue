<template>
  <section id="about" class="about-section py-4 py-md-5" data-aos="fade-left">
    <div class="container">

      <!-- Header Section Responsif -->
      <div class="text-center mb-4 mb-md-5">
        <h2 class="section-title">Tentang Saya</h2>
        <p class="section-subtitle px-2">
          Mengenal lebih dekat latar belakang, kemampuan, dan tujuan karier saya.
        </p>
      </div>

      <div class="row g-4">

        <!-- Sisi Kiri: Biografi -->
        <div class="col-lg-7">
          <div class="card-custom p-4 h-100">

            <h3 class="h4 mb-3 mb-md-4 text-center text-md-start">
              <i class="bi bi-person-lines-fill me-2 text-primary"></i>
              Biografi Singkat
            </h3>

            <p class="text-secondary text-justify">
              Halo, saya Maya Elvira Sutanto, seorang Front-End Web Developer
              yang memiliki minat besar dalam pengembangan website modern,
              responsif, dan user-friendly.
            </p>

            <p class="text-secondary text-justify">
              Saya memiliki pengalaman menggunakan HTML, CSS, JavaScript,
              Bootstrap, PHP, Laravel, dan MySQL untuk membangun berbagai
              proyek website. Saya senang mempelajari teknologi baru,
              meningkatkan kemampuan problem solving, serta menciptakan
              tampilan antarmuka yang menarik dan mudah digunakan.
            </p>

            <div class="motivation-box mt-4">
              <h5 class="fw-bold mb-2 text-center text-md-start">
                <i class="bi bi-lightbulb-fill text-primary me-2"></i>
                Motivasi
              </h5>

              <p class="mb-0 text-center text-md-start fst-italic">
                "Setiap proyek adalah kesempatan untuk belajar, berkembang,
                dan menciptakan solusi digital yang bermanfaat."
              </p>
            </div>

          </div>
        </div>

        <!-- Sisi Kanan: Profil & Statistik -->
        <div class="col-lg-5 d-flex flex-column gap-4">

          <!-- Card Profil Utama -->
          <div class="card-custom profile-card">

            <img
              src="/profile.jpeg"
              alt="Maya Elvira Sutanto"
              class="profile-photo"
            />

            <div class="profile-info w-100">

              <h4>Maya Elvira Sutanto</h4>

              <p class="job-title">
                Front-End Web Developer
              </p>

              <ul class="profile-list">

                <li>
                  <i class="bi bi-geo-alt-fill"></i>
                  Badung, Bali
                </li>

                <li>
                  <i class="bi bi-mortarboard-fill"></i>
                  Rekayasa Perangkat Lunak
                </li>

                <li>
                  <i class="bi bi-code-slash"></i>
                  Web Development
                </li>

                <li class="mt-3 badge-wrapper">
                  <span class="badge bg-primary px-3 py-2 rounded-pill">
                    Open To Work
                  </span>
                </li>

              </ul>

            </div>

          </div>

          <!-- Card Tujuan Karier & Angka Statistik -->
          <div class="card-custom p-4 flex-grow-1 d-flex flex-column justify-content-center">

            <h3 class="h5 mb-3 text-center text-md-start">
              <i class="bi bi-compass-fill me-2 text-primary"></i>
              Tujuan Karier
            </h3>

            <p class="text-secondary mb-4 text-center text-md-start text-justify">
              Menjadi Front-End Web Developer profesional yang mampu
              menciptakan website modern, responsif, dan memberikan
              pengalaman pengguna terbaik.
            </p>

            <!-- Statistik Grid Mini -->
            <div class="row g-2 text-center mt-auto">

              <div class="col-4">
                <h5 class="fw-bold text-primary mb-1 fs-4 fs-md-3">10+</h5>
                <small class="text-muted d-block text-truncate">Project</small>
              </div>

              <div class="col-4">
                <h5 class="fw-bold text-primary mb-1 fs-4 fs-md-3">6+</h5>
                <small class="text-muted d-block text-truncate">Tech Stack</small>
              </div>

              <div class="col-4">
                <h5 class="fw-bold text-primary mb-1 fs-4 fs-md-3">2026</h5>
                <small class="text-muted d-block text-truncate">Graduate</small>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// Presentational component
</script>

<style scoped>
.about-section {
  background: #f8fafc;
}

/* TITLE */
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

/* CARD */
.card-custom {
  background: white;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-custom:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.07);
}

/* PROFILE CARD RESPONSIVE */
.profile-card {
  padding: 24px;
  display: flex;
  flex-direction: column; /* Default di HP: Menurun */
  align-items: center;
  text-align: center;
  gap: 20px;
}

@media (min-width: 576px) {
  .profile-card {
    flex-direction: row; /* Layar tablet/laptop: Menyamping */
    text-align: left;
    padding: 28px;
    gap: 24px;
  }
}

.profile-photo {
  width: 105px;
  height: 105px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(135deg, #456dc5, #9eddf8) border-box;
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.2);
  border: 4px solid transparent;
}

.profile-info h4 {
  font-weight: 700;
  margin-bottom: 4px;
  color: #1e293b;
  font-size: 1.25rem;
}

.job-title {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 0.95rem;
}

.profile-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block; /* Mengunci list agar ikon & teks tidak pecah alignment-nya */
  text-align: left;
}

.profile-list li {
  margin-bottom: 8px;
  color: #475569;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
}

.profile-list i {
  color: #2563eb;
  margin-right: 10px;
  font-size: 1rem;
}

.badge-wrapper {
  display: flex;
  justify-content: center;
}

@media (min-width: 576px) {
  .badge-wrapper {
    justify-content: flex-start;
  }
}

/* MOTIVATION BOX */
.motivation-box {
  background: #f8fafc;
  border-left: 5px solid #2563eb;
  padding: 16px;
  border-radius: 16px;
  font-size: 0.95rem;
}

/* UTILITY HELPERS */
.text-justify {
  text-align: justify;
}

@media (max-width: 576px) {
  /* Hilangkan perataan justify di layar super kecil jika baris teks terlalu pendek */
  .text-justify {
    text-align: center;
  }
}
</style>