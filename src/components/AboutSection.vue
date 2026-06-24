<template>
  <section id="about" class="about-section py-5" data-aos="fade-up">
    <div class="container">
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

            <p class="lead fs-6 text-dark">
              Halo, saya Maya Elvira Sutanto, seorang Front-End Web Developer
              yang memiliki minat besar dalam pengembangan website modern,
              responsif, dan user-friendly. Saya memiliki kemampuan dalam
              menggunakan HTML, CSS, JavaScript, PHP, Laravel, dan MySQL untuk
              membangun solusi digital yang efektif dan mudah digunakan.
            </p>

            <p class="text-secondary">
              Saya senang mempelajari teknologi baru, mengembangkan kemampuan
              problem solving, serta terus meningkatkan keterampilan untuk
              menghasilkan website yang berkualitas. Saya juga terbiasa bekerja
              secara mandiri maupun dalam tim dan selalu berusaha memberikan
              hasil terbaik dalam setiap proyek yang dikerjakan.
            </p>

            <div
              class="mt-4 p-4 rounded-4 bg-light border-start border-4 border-primary"
            >
              <h5 class="fw-bold mb-2">
                <i class="bi bi-lightbulb-fill text-primary me-2"></i>
                Motivasi
              </h5>

              <p class="mb-0 text-secondary">
                "Setiap proyek adalah kesempatan untuk belajar, berkembang, dan
                menciptakan solusi digital yang memberikan manfaat bagi banyak
                orang."
              </p>
            </div>
          </div>
        </div>

        <!-- KANAN -->
        <div class="col-lg-5">
          <div class="card-custom p-4 mb-4">
            <div class="text-center">
              <div
                class="mx-auto rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center mb-3"
                style="width:90px;height:90px;"
              >
                <i class="bi bi-person-workspace text-primary fs-1"></i>
              </div>

              <h4 class="fw-bold mb-1">
                Maya Elvira Sutanto
              </h4>

              <p class="text-primary fw-semibold mb-4">
                Front-End Web Developer
              </p>
            </div>

            <div class="border-top pt-3">
              <div class="d-flex justify-content-between mb-3">
                <span class="text-secondary">Domisili</span>
                <span class="fw-semibold">Badung, Bali</span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-secondary">Pendidikan</span>
                <span class="fw-semibold">Rekayasa Perangkat Lunak</span>
              </div>

              <div class="d-flex justify-content-between mb-3">
                <span class="text-secondary">Bidang</span>
                <span class="fw-semibold text-primary">
                  Web Development
                </span>
              </div>

              <div class="d-flex justify-content-between">
                <span class="text-secondary">Status</span>
                <span class="badge bg-success">
                  Open To Work
                </span>
              </div>
            </div>
          </div>

          <div class="card-custom p-4">
            <h3 class="h5 mb-3">
              <i class="bi bi-compass me-2 text-primary"></i>
              Tujuan Karier
            </h3>

            <p class="mb-0 text-secondary">
              Menjadi Front-End Web Developer profesional yang mampu
              menciptakan website modern, responsif, dan memberikan pengalaman
              pengguna yang optimal melalui teknologi web terkini.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// About Section
</script>

<style scoped>
.about-section {
  background: #ffffff;
}

.section-title {
  font-weight: 700;
}

.section-subtitle {
  color: #6c757d;
}

.card-custom {
  background: #fff;
  border-radius: 20px;
  padding: 1.5rem;
  border: 1px solid #eef2f7;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}
</style>