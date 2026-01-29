<template>
  <div class="relative">
    <!-- Hero Carousel Section - Full Screen with Navbar Overlay -->
    <HeroCarousel />

    <!-- Mission Section -->
    <MissionSection />

    <!-- Services Section -->
    <ServicesSection />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
});
</script>
