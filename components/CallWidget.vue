<template>
  <!-- Call Widget - Fixed Bottom Right -->
  <div class="fixed bottom-6 right-6 z-40">
    <!-- Phone Numbers Menu -->
    <div v-if="showMenu" class="phone-menu mb-4 animate-in">
      <a
        href="tel:+919973953809"
        class="phone-option"
        @click="showMenu = false"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <div class="ml-3">
          <div class="font-semibold text-sm">+91 9973953809</div>
          <div class="text-xs opacity-75">Primary</div>
        </div>
      </a>
      <a
        href="tel:+917763979842"
        class="phone-option"
        @click="showMenu = false"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        <div class="ml-3">
          <div class="font-semibold text-sm">+91 7763979842</div>
          <div class="text-xs opacity-75">Alternate</div>
        </div>
      </a>
    </div>

    <!-- Main Call Button -->
    <button
      @click="toggleMenu"
      class="call-button group"
      aria-label="Call us"
      type="button"
    >
      <!-- Pulse rings animation -->
      <span class="pulse-ring"></span>
      <span class="pulse-ring" style="animation-delay: 0.5s;"></span>
      
      <!-- Phone Icon -->
      <div class="relative z-10">
        <svg 
          class="w-7 h-7 md:w-8 md:h-8 text-white transform group-hover:scale-110 transition-transform" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      </div>
    </button>

    <!-- Tooltip (shows on hover) -->
    <div class="tooltip">
      <div class="font-semibold text-sm">Call Us Now</div>
      <div class="text-xs opacity-90">Choose a number</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// Close menu when clicking outside
if (process.client) {
  document.addEventListener('click', (e) => {
    const widget = document.querySelector('.fixed.bottom-6')
    if (widget && !widget.contains(e.target as Node)) {
      showMenu.value = false
    }
  })
}
</script>

<style scoped>
.call-button {
  @apply relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green to-green-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer;
  @apply hover:shadow-green/50 transition-all duration-300;
  @apply active:scale-95 border-none;
}

/* Pulse ring animation */
.pulse-ring {
  @apply absolute inset-0 rounded-full bg-green opacity-75;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.75;
  }
  50% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

/* Phone Menu */
.phone-menu {
  @apply bg-white rounded-2xl shadow-2xl overflow-hidden;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.phone-option {
  @apply flex items-center px-4 py-3 hover:bg-green/10 transition-colors border-b last:border-b-0 cursor-pointer;
  text-decoration: none;
  color: inherit;
}

.phone-option:hover {
  @apply bg-green/10;
}

.phone-option svg {
  @apply text-green flex-shrink-0;
}

.animate-in {
  animation: slideUp 0.3s ease-out;
}

/* Tooltip */
.tooltip {
  @apply absolute bottom-full right-0 mb-3 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl;
  @apply opacity-0 invisible transition-all duration-300 whitespace-nowrap;
  transform: translateY(10px);
}

.call-button:hover ~ .tooltip {
  @apply opacity-100 visible;
  transform: translateY(0);
}

/* Add arrow to tooltip */
.tooltip::after {
  content: '';
  @apply absolute top-full right-6 border-8 border-transparent border-t-gray-900;
}

/* Mobile optimization */
@media (max-width: 640px) {
  .call-button {
    @apply w-14 h-14;
  }
  
  .tooltip {
    @apply text-xs px-3 py-1.5;
  }

  .phone-option {
    @apply px-3 py-2.5 text-sm;
  }
}

/* Extra large touch target for mobile */
.call-button::before {
  content: '';
  @apply absolute inset-0 scale-150;
}
</style>
