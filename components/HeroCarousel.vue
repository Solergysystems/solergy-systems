<template>
  <section class="relative w-full h-screen overflow-hidden -mt-20">
    <!-- Swiper Carousel -->
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
      :speed="1000"
      class="w-full h-full"
    >
      <SwiperSlide v-for="(image, index) in images.hero" :key="image.id">
        <div class="relative w-full h-full">
          <!-- Hero Image with Ken Burns Effect -->
          <div class="hero-image-wrapper">
            <img
              :src="image.avif || image.jpg"
              :alt="`Solergy Solar Solutions ${index + 1}`"
              class="hero-image"
            />
          </div>
          
          <!-- Dark Overlay -->
          <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        </div>
      </SwiperSlide>
    </Swiper>

    <!-- Hero Text Overlay -->
    <div class="absolute inset-0 z-10 flex items-center justify-center">
      <div class="container-custom text-center px-4">
        <!-- Main Headline -->
        <h1 
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 animate-fade-in"
          style="text-shadow: 2px 4px 8px rgba(0,0,0,0.5);"
        >
          Empowering Life with<br class="hidden sm:block">
          <span class="text-gradient-hero">Solar Harmony</span>
        </h1>

        <!-- Subheadline -->
        <p 
          class="text-lg sm:text-xl md:text-2xl text-white/95 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up"
          style="text-shadow: 1px 2px 4px rgba(0,0,0,0.5);"
        >
          Clean Energy Solutions for Bihar | Get ₹78,000 PM Surya Ghar Subsidy
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.2s;">
          <NuxtLink 
            to="/#contact" 
            class="btn btn-orange text-lg px-8 py-4 shadow-2xl hover:shadow-orange/50 transform hover:scale-105 transition-all w-full sm:w-auto"
          >
            <span class="flex items-center justify-center space-x-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Get Free Quote</span>
            </span>
          </NuxtLink>

          <!-- Phone Menu Button -->
          <div class="hero-phone-menu-container relative w-full sm:w-auto">
            <button
              @click="togglePhoneMenu"
              class="btn bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl border-2 border-white transform hover:scale-105 transition-all w-full flex items-center justify-center space-x-2"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </button>

            <!-- Phone Menu Dropdown -->
            <div v-if="showPhoneMenu" class="hero-phone-dropdown">
              <a
                href="tel:+919973953809"
                class="hero-phone-option"
                @click="showPhoneMenu = false"
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
                class="hero-phone-option"
                @click="showPhoneMenu = false"
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
          </div>
        </div>

        <!-- Trust Badge -->
        <div class="mt-8 sm:mt-12 animate-fade-in" style="animation-delay: 0.4s;">
          <p class="text-white/90 text-sm sm:text-base font-medium">
            ⭐ Trusted by 500+ Happy Customers in Bihar
          </p>
        </div>
      </div>
    </div>

    <!-- Scroll Down Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden sm:block">
      <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { ref } from 'vue'

const images = useImages();
const modules = [Autoplay, EffectFade];
const showPhoneMenu = ref(false)

const togglePhoneMenu = () => {
  showPhoneMenu.value = !showPhoneMenu.value
}

// Close menu when clicking outside
if (process.client) {
  document.addEventListener('click', (e) => {
    const heroSection = document.querySelector('.hero-phone-menu-container')
    if (heroSection && !heroSection.contains(e.target as Node)) {
      showPhoneMenu.value = false
    }
  })
}
</script>

<style scoped>
/* Hero Image Wrapper with Ken Burns Effect */
.hero-image-wrapper {
  @apply w-full h-full overflow-hidden;
}

.hero-image {
  @apply w-full h-full object-cover;
  animation: kenBurns 10s ease-out infinite alternate;
}

/* Ken Burns (Zoom + Pan) Effect */
@keyframes kenBurns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.15) translate(-2%, -2%);
  }
}

/* Text Gradient Effect */
.text-gradient-hero {
  background: linear-gradient(135deg, #ffd700 0%, #ffed4e 50%, #ffa500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

/* Fade In Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

/* Slide Up Animation */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 1s ease-out;
}

/* Ensure proper z-index layering */
.swiper {
  @apply relative z-0;
}

/* Prevent text selection on hero */
.hero-image-wrapper,
.hero-image {
  user-select: none;
  -webkit-user-select: none;
}

/* Hero Phone Menu Styles */
.hero-phone-menu-container {
  position: relative;
}

.hero-phone-dropdown {
  @apply absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50 w-full sm:w-80;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-phone-option {
  @apply flex items-center px-4 py-3 hover:bg-primary/10 transition-colors border-b last:border-b-0 cursor-pointer;
  text-decoration: none;
  color: inherit;
}

.hero-phone-option:hover {
  @apply bg-primary/10;
}

.hero-phone-option svg {
  @apply text-primary flex-shrink-0;
}
</style>
