<template>
  <div class="home-view">
    <!-- Hero Banner Section -->
    <HeroSection />

    <!-- Statistics Counters Section -->
    <StatisticsSection />

    <!-- Why Choose Me Highlights Section -->
    <WhyChooseMeSection />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import StatisticsSection from '../components/StatisticsSection.vue'
import WhyChooseMeSection from '../components/WhyChooseMeSection.vue'
</script>

<style scoped>
.home-view {
  min-height: calc(100vh - 72px);
}
</style>
