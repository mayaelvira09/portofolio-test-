<template>
  <footer class="footer-section py-4">
    <div class="container text-center">
      <!-- Social Media Links -->
      <div class="footer-social-links d-flex justify-content-center gap-4 mb-3">
        <!-- Tombol GitHub -->
        <a href="https://github.com/mayaelvira09" class="footer-social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i class="bi bi-github"></i>
        </a>

        <!-- Tombol Instagram -->
        <a href="https://instagram.com/mayaelvira09" class="footer-social-link" target="_blank" rel="noopener noreferrer" title="Instagram">
          <i class="bi bi-instagram"></i>
        </a>

        <!-- Tombol Email -->
        <a href="mailto:mayaelvirasutanto@gmail.com" class="footer-social-link" title="Email">
          <i class="bi bi-envelope-fill"></i>
        </a>
      </div>
      
      <!-- Credits -->
      <p class="mb-0 text-dark small fw-semibold px-2">
        &copy; 2026 Maya Elvira Sutanto. All Rights Reserved.
      </p>
      
    </div>
  </footer>
</template>

<script setup>
// Presentational component
</script>

<style scoped>
.footer-section {
  background: #ffffff;
  border-top: 1px solid #f1f5f9;
}

.footer-social-link {
  font-size: 1.4rem; /* Ukuran ikon pas di HP maupun Laptop */
  color: #64748b;
  transition: all 0.3s ease;
  display: inline-block;
  text-decoration: none;
}

@media (min-width: 768px) {
  .footer-social-link {
    font-size: 1.6rem;
  }
}

.footer-social-link:hover .bi-instagram {
  color: #e1306c !important; 
}

.footer-social-link:hover .bi-github {
  color: #0f172a !important;
}

.footer-social-link:hover .bi-envelope-fill {
  color: #2563eb !important;
}

.footer-social-link:hover {
  transform: translateY(-3px); 
}
</style>