<template>
  <section id="about" class="about-section py-5" data-aos="fade-up" data-aos-duration="1000">
    <div class="container">
      <!-- Section Header -->
      <div class="text-center mb-5">
        <h2 class="section-title">Tentang Saya</h2>
        <p class="section-subtitle">Kenali saya lebih dekat, latar belakang pendidikan, serta impian karier saya dalam bidang pengembangan website.</p>
      </div>

      <div class="row g-4 align-items-stretch">
        <!-- Left: Biography and Vision -->
        <div class="col-lg-7 d-flex flex-column justify-content-between">
          <div class="card-custom h-100 mb-4 p-4 d-flex flex-column justify-content-center">
            <h3 class="h4 text-accent mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-person-lines-fill"></i> Biografi Singkat
            </h3>
            <p class="lead text-dark fs-6 mb-4">
              Halo! Saya Maya Elvira Sutanto, siswi SMKN 1 Denpasar jurusan Rekayasa Perangkat Lunak yang memiliki ketertarikan mendalam di bidang Web Development. Saya senang mempelajari teknologi baru dan terus mengembangkan kemampuan dalam membangun website modern, responsif, dan mudah digunakan.
            </p>
            <p class="text-secondary mb-4">
              Saat ini saya siap untuk terjun ke dunia industri teknologi secara profesional untuk berkontribusi secara aktif dan terus mengasah skill sebagai Front-End Web Developer. Saya siap menghadirkan solusi digital kreatif dengan dedikasi tinggi serta etos kerja yang disiplin.
            </p>
            
            <!-- Vision Banner -->
            <div class="p-3 bg-light rounded-4 border-start border-primary border-4 mt-2">
              <div class="d-flex gap-3 align-items-start">
                <i class="bi bi-chat-quote-fill text-primary fs-3 flex-shrink-0"></i>
                <div>
                  <h5 class="fw-bold mb-1 fs-6">Komitmen Belajar</h5>
                  <p class="small text-secondary mb-0">"Proses belajar tidak pernah berhenti. Setiap tantangan baru adalah kesempatan untuk menjadi developer yang lebih andal."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Glassmorphism Information Cards -->
        <div class="col-lg-5 d-flex flex-column gap-4">
          <!-- Biodata Card -->
          <div class="card-custom glass-card p-4 flex-grow-1">
            <h3 class="h5 text-accent mb-4 d-flex align-items-center gap-2">
              <i class="bi bi-card-list"></i> Informasi Diri
            </h3>
            <div class="d-flex flex-column gap-3">
              <div class="d-flex justify-content-between border-bottom pb-2">
                <span class="text-secondary">Nama Lengkap</span>
                <span class="fw-bold text-dark text-end">Maya Elvira Sutanto</span>
              </div>
              <div class="d-flex justify-content-between border-bottom pb-2">
                <span class="text-secondary">Sekolah</span>
                <span class="fw-semibold text-dark text-end">SMKN 1 Denpasar</span>
              </div>
              <div class="d-flex justify-content-between border-bottom pb-2">
                <span class="text-secondary">Jurusan</span>
                <span class="fw-semibold text-dark text-end">Rekayasa Perangkat Lunak</span>
              </div>
              <div class="d-flex justify-content-between border-bottom pb-2">
                <span class="text-secondary">Status Akademik</span>
                <span class="badge bg-primary text-white py-1.5 px-2">Siswi Kelas XII</span>
              </div>
              <div class="d-flex justify-content-between border-bottom pb-2">
                <span class="text-secondary">Domisili</span>
                <span class="fw-semibold text-dark text-end">Badung, Bali</span>
              </div>
              <div class="d-flex justify-content-between pb-1">
                <span class="text-secondary">Minat</span>
                <span class="text-primary fw-bold text-end">Web Development</span>
              </div>
            </div>
          </div>

          <!-- Career Goal Card -->
          <div class="card-custom glass-card p-4">
            <h3 class="h5 text-accent mb-3 d-flex align-items-center gap-2">
              <i class="bi bi-compass"></i> Tujuan Karier
            </h3>
            <p class="mb-0 text-dark small">
              Menjadi seorang <strong>Front-End Web Developer</strong> yang mampu membangun website modern, responsif, dan memberikan pengalaman pengguna yang baik melalui proses belajar yang konsisten.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Purely functional component, data driven and static
</script>

<style scoped>
.about-section {
  background-color: var(--color-white);
  border-bottom: 1px solid rgba(91, 157, 255, 0.05);
}
</style>
