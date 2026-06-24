<template>
  <nav :class="['navbar navbar-expand-lg fixed-top navbar-custom', { 'scrolled': isScrolled }]">
    <div class="container">
      <router-link to="/" class="navbar-brand fw-bold text-dark d-flex align-items-center" @click="closeCollapse">
        <span class="fs-4 text-primary me-2"><i class="bi bi-code-slash"></i></span>
        <span class="d-none d-sm-inline">Maya Elvira</span>
      </router-link>
      
      <button 
        class="navbar-toggler border-0 shadow-none" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-1 mt-3 mt-lg-0">
          <li class="nav-item" v-for="item in menuItems" :key="item.path">
            <router-link 
              :to="item.path"
              class="nav-link"
              @click="closeCollapse"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)

const menuItems = [
  { path: '/', name: 'Home' },
  { path: '/about', name: 'About' },
  { path: '/skills', name: 'Skills' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' }
]

const closeCollapse = () => {
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    const bsCollapse = window.bootstrap?.Collapse?.getInstance(navbarCollapse)
    if (bsCollapse) {
      bsCollapse.hide()
    } else {
      navbarCollapse.classList.remove('show')
    }
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Class navigation links styling using Vue Router active links is managed in style.css */
</style>
