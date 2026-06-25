<template>
  <section id="about" class="about-section py-5" data-aos="fade-left">
    <div class="container">

      <!-- Judul -->
      <div class="text-center mb-5">
        <h2 class="section-title">Tentang Saya</h2>
        <p class="section-subtitle">
          Mengenal lebih dekat latar belakang, kemampuan, dan tujuan karier saya.
        </p>
      </div>

      <div class="row g-4">

        <!-- KIRI -->
        <div class="col-lg-7">
          <div class="card-custom p-4 h-100">

            <h3 class="h4 mb-4">
              <i class="bi bi-person-lines-fill me-2 text-primary"></i>
              Biografi Singkat
            </h3>

            <p class="text-secondary">
              Halo, saya Maya Elvira Sutanto, seorang Front-End Web Developer
              yang memiliki minat besar dalam pengembangan website modern,
              responsif, dan user-friendly.
            </p>

            <p class="text-secondary">
              Saya memiliki pengalaman menggunakan HTML, CSS, JavaScript,
              Bootstrap, PHP, Laravel, dan MySQL untuk membangun berbagai
              proyek website. Saya senang mempelajari teknologi baru,
              meningkatkan kemampuan problem solving, serta menciptakan
              tampilan antarmuka yang menarik dan mudah digunakan.
            </p>

            <div class="motivation-box mt-4">
              <h5 class="fw-bold mb-2">
                <i class="bi bi-lightbulb-fill text-primary me-2"></i>
                Motivasi
              </h5>

              <p class="mb-0">
                "Setiap proyek adalah kesempatan untuk belajar, berkembang,
                dan menciptakan solusi digital yang bermanfaat."
              </p>
            </div>

          </div>
        </div>

        <!-- KANAN -->
        <div class="col-lg-5">

          <div class="card-custom profile-card">

            <img
              src="../assets/profile.jpeg"
              alt="Maya Elvira Sutanto"
              class="profile-photo"
            />

            <div class="profile-info">

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

                <li>
                  <span class="badge bg-primary px-3 py-2">
                    Open To Work
                  </span>
                </li>

              </ul>

            </div>

          </div>

          <!-- Career -->
          <div class="card-custom mt-4">

            <h3 class="h5 mb-3">
              <i class="bi bi-compass-fill me-2 text-primary"></i>
              Tujuan Karier
            </h3>

            <p class="text-secondary mb-4">
              Menjadi Front-End Web Developer profesional yang mampu
              menciptakan website modern, responsif, dan memberikan
              pengalaman pengguna terbaik.
            </p>

            <div class="row text-center">

              <div class="col">
                <h5 class="fw-bold text-primary">10+</h5>
                <small>Project</small>
              </div>

              <div class="col">
                <h5 class="fw-bold text-primary">6+</h5>
                <small>Tech Stack</small>
              </div>

              <div class="col">
                <h5 class="fw-bold text-primary">2026</h5>
                <small>Graduate</small>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.about-section {
  background: #f8fafc;
}

/* TITLE */
.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
}

.section-subtitle {
  color: #64748b;
  max-width: 600px;
  margin: auto;
}

/* CARD */
.card-custom {
  background: white;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
}

.card-custom:hover {
  transform: translateY(-4px);
}

/* PROFILE */
.profile-card {
  padding: 28px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.profile-photo {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #2563eb;
  flex-shrink: 0;
  border: 4px solid transparent;
  background:
  linear-gradient(white, white) padding-box,
   linear-gradient(135deg, #456dc5, #9eddf8) border-box;
   box-shadow:
    8px 8px 25px rgba(37, 99, 235, 0.25);
}

.profile-info h4 {
  font-weight: 700;
  margin-bottom: 4px;
  color: #1e293b;
}

.job-title {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 16px;
}

.profile-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.profile-list li {
  margin-bottom: 10px;
  color: #475569;
}

.profile-list i {
  color: #2563eb;
  margin-right: 10px;
}

/* MOTIVATION */
.motivation-box {
  background: #f8fafc;
  border-left: 5px solid #2563eb;
  padding: 20px;
  border-radius: 16px;
}

/* MOBILE */
@media (max-width: 768px) {

  .profile-card {
    flex-direction: column;
    text-align: center;
  }

  .profile-list {
    text-align: center;
  }

}
</style>