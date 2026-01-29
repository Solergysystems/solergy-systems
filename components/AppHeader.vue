<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="isScrolled ? 'bg-white shadow-lg' : 'bg-white/5 backdrop-blur-sm'"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img 
            :src="images.logo.png" 
            alt="Solergy" 
            class="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            :class="isScrolled ? 'mix-blend-multiply' : ''"
          >
          <div class="hidden sm:block">
            <h1 class="text-xl font-bold transition-colors duration-300" :class="isScrolled ? 'text-primary' : 'text-white drop-shadow-lg'">Solergy</h1>
            <p class="text-xs transition-colors duration-300" :class="isScrolled ? 'text-gray-600' : 'text-white/90 drop-shadow'">Solar Harmony</p>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.path"
            :to="link.path"
            class="nav-link font-extrabold text-lg transition-colors duration-300"
            :class="[
              isActive(link.path) ? (isScrolled ? 'text-primary' : 'text-white drop-shadow-lg') : '',
              !isActive(link.path) && isScrolled ? 'text-gray-700 hover:text-primary' : '',
              !isActive(link.path) && !isScrolled ? 'text-white/90 hover:text-white drop-shadow-lg' : ''
            ]"
          >
            {{ link.name }}
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="isScrolled ? 'hover:bg-gray-100' : 'hover:bg-white/20'"
          aria-label="Toggle menu"
        >
          <svg 
            v-if="!isMenuOpen" 
            class="w-6 h-6 transition-colors duration-300" 
            :class="isScrolled ? 'text-gray-700' : 'text-white'"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            v-else 
            class="w-6 h-6 transition-colors duration-300" 
            :class="isScrolled ? 'text-gray-700' : 'text-white'"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition name="slide">
        <div 
          v-if="isMenuOpen" 
          class="md:hidden py-4 border-t border-gray-200"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLink 
              v-for="link in navLinks" 
              :key="link.path"
              :to="link.path"
              @click="closeMenu"
              class="mobile-nav-link"
              :class="{ 'active': isActive(link.path) }"
            >
              {{ link.name }}
            </NuxtLink>
            
            <!-- Mobile CTA -->
            <a 
              href="tel:9973953809" 
              class="btn btn-primary flex items-center justify-center space-x-2 w-full"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call: 9973953809</span>
            </a>
          </div>
        </div>
      </Transition>
    </nav>
  </header>

  <!-- Spacer to prevent content from going under fixed header -->
  <div class="h-20"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const images = useImages();
const route = useRoute();

// Navigation links
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Blogs', path: '/blog' }
];

// State
const isScrolled = ref(false);
const isMenuOpen = ref(false);

// Check if link is active
const isActive = (path: string) => {
  return route.path === path;
};

// Toggle mobile menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Close mobile menu
const closeMenu = () => {
  isMenuOpen.value = false;
};

// Handle scroll for sticky navbar shadow
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 font-medium hover:text-primary transition-colors duration-300 relative;
}

.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300;
}

.nav-link:hover::after,
.nav-link.active::after {
  @apply w-full;
}

.nav-link.active {
  @apply text-primary;
}

.mobile-nav-link {
  @apply text-gray-700 font-medium hover:text-primary hover:bg-gray-50 transition-colors duration-300 px-4 py-3 rounded-lg;
}

.mobile-nav-link.active {
  @apply text-primary bg-primary-50;
}

/* Slide animation for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
