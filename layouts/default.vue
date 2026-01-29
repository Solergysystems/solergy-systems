<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header/Navigation -->
    <AppHeader />
    
    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>
    
    <!-- Footer -->
    <AppFooter />

    <!-- PM Surya Ghar Modal (auto-opens after 3 seconds) -->
    <SuryaGharModal />

    <!-- Call Widget (fixed bottom-right) -->
    <CallWidget />
  </div>
</template>

<script setup lang="ts">
// Default layout for all pages
</script>
