<style scoped>
/* ==========================================================================
   1. STYLING NAVBAR UTAMA (DESKTOP & GLOBAL)
   ========================================================================== */
.navbar-custom {
  background-color: rgba(255, 255, 255, 0.8); /* Transparansi dasar bar navigasi */
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  transition: all 0.3s ease;
}

/* Mengubah style saat di-scroll ke bawah */
.navbar-custom.scrolled {
  background-color: rgba(255, 255, 255, 0.92);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
}

/* Styling Link Menu */
.nav-link {
  font-weight: 500;
  color: #475569;
  padding: 0.5rem 1rem !important;
  border-radius: 10px;
  transition: all 0.25s ease;
  display: inline-block;
  width: 100%; /* Membantu di HP agar area sentuh tombol penuh */
}

/* Hover & Active Link Mode (Desktop Style Bawaan) */
.nav-link:hover {
  color: #2563eb;
}

.router-link-active {
  color: #2563eb !important;
  font-weight: 600;
  background-color: #eff6ff; /* Background biru muda transparan */
}

/* ==========================================================================
   2. FIX MOBILE & TABLET (RESPONSIVE BLUR GLASSMORPHISM)
   ========================================================================== */
@media (max-width: 991.98px) {
  .navbar-collapse {
    /* Latar belakang putih tipis transparan */
    background-color: rgba(255, 255, 255, 0.88); 
    
    /* EFEK BLUR KACA - Menghancurkan tembus pandang bocor ke foto profil */
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    
    /* Layout Kotak Menu Dropdown */
    border-radius: 20px;
    padding: 1.25rem;
    margin-top: 12px;
    border: 1px solid rgba(255, 255, 255, 0.5); /* Border tipis ala kaca */
    box-shadow: 0 12px 30px rgba(15, 23, 42, 0.08); /* Bayangan pop-out */
  }

  /* Reset margin list di dalam mobile */
  .navbar-nav {
    margin-top: 0 !important; /* Hapus mt-3 bawaan html biar ga terlalu turun */
    gap: 6px !important; /* Kasih jarak antar menu biar jempol nyaman */
  }

  /* Bikin teks menu di HP rata tengah agar simetris dengan fotomu */
  .nav-link {
    text-align: center;
    padding: 0.65rem 1rem !important; /* Padding lebih tebal biar gampang dipencet */
  }
}
</style>