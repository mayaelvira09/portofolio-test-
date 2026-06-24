<template>
  <section class="statistics-section py-5 bg-gradient-light" data-aos="zoom-in" data-aos-duration="1000">
    <div class="container">
      <div class="row g-4">
        <!-- Stat Card 1: Projects -->
        <div class="col-6 col-md-3">
          <div class="card-custom stat-card hover-card glass-card">
            <div class="stat-icon"><i class="bi bi-folder-fill"></i></div>
            <div class="stat-number">5+</div>
            <div class="stat-label">Projects</div>
          </div>
        </div>

        <!-- Stat Card 2: Skills -->
        <div class="col-6 col-md-3">
          <div class="card-custom stat-card hover-card glass-card">
            <div class="stat-icon"><i class="bi bi-patch-check-fill"></i></div>
            <div class="stat-number">10+</div>
            <div class="stat-label">Skills</div>
          </div>
        </div>

        <!-- Stat Card 3: Focus -->
        <div class="col-6 col-md-3">
          <div class="card-custom stat-card hover-card glass-card">
            <div class="stat-icon"><i class="bi bi-window-sidebar"></i></div>
            <div class="stat-number fs-4 text-accent py-2 fw-bold">Front-End</div>
            <div class="stat-label">Development</div>
          </div>
        </div>

        <!-- Stat Card 4: Status -->
        <div class="col-6 col-md-3">
          <div class="card-custom stat-card hover-card glass-card">
            <div class="stat-icon"><i class="bi bi-mortarboard-fill"></i></div>
            <div class="stat-number fs-4 text-accent py-2 fw-bold">Student</div>
            <div class="stat-label">Developer</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Presentational static component
</script>

<style scoped>
.statistics-section {
  background: linear-gradient(180deg, #F8FBFF 0%, rgba(91, 157, 255, 0.05) 100%);
  border-bottom: 1px solid rgba(91, 157, 255, 0.05);
}
</style>
