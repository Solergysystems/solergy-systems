<template>
  <!-- Modal Backdrop -->
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
      @click="closeModal"
    >
      <!-- Modal Content -->
      <div
        class="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden animate-fade-in max-h-[85vh] overflow-y-auto"
        @click.stop
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-3 right-3 z-10 w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Modal Image -->
        <div class="relative p-4">
          <img
            :src="images.suryaGhar.webp"
            alt="PM Surya Ghar Yojana - Get ₹78,000 Subsidy"
            class="w-full h-auto rounded-lg"
            style="max-height: 50vh; object-fit: contain;"
          />
        </div>

        <!-- Modal Footer with CTA -->
        <div class="p-4 sm:p-6 bg-gradient-to-r from-primary to-primary-700">
          <div class="text-center mb-3">
            <h3 class="text-lg sm:text-xl font-bold text-white mb-1">
              Get ₹78,000 Subsidy on Solar
            </h3>
            <p class="text-white/90 text-sm">
              PM Surya Ghar Yojana - Limited Offer
            </p>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center">
            <button
              @click="scrollToContact"
              class="btn btn-orange px-6 py-3 flex items-center justify-center space-x-2 hover:scale-105 transform transition-all"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Get Free Quote</span>
            </button>
            
            <a
              href="tel:9973953809"
              class="btn bg-white text-primary hover:bg-gray-100 px-6 py-3 flex items-center justify-center space-x-2 border-2 border-white"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </a>
          </div>

          <p class="text-center text-white/70 text-xs sm:text-sm mt-3">
            🌟 No spam, no pressure - just expert solar solutions
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const images = useImages();
const isVisible = ref(false);

// Check if modal should be shown (once per session)
const shouldShowModal = () => {
  if (typeof window === 'undefined') return false;
  
  const hasSeenModal = sessionStorage.getItem('suryaGharModalSeen');
  return !hasSeenModal;
};

// Close modal
const closeModal = () => {
  isVisible.value = false;
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('suryaGharModalSeen', 'true');
  }
};

// Scroll to contact form
const scrollToContact = () => {
  closeModal();
  
  // Wait a bit for modal to close, then scroll
  setTimeout(() => {
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      // If on a different page, navigate to home with hash
      navigateTo('/#contact');
    }
  }, 300);
};

// Show modal after 3 seconds
onMounted(() => {
  if (shouldShowModal()) {
    setTimeout(() => {
      isVisible.value = true;
    }, 3000);
  }
});
</script>

<style scoped>
/* Fade transition for backdrop */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Modal content animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}

/* Mobile responsive image */
@media (max-width: 640px) {
  .animate-fade-in {
    max-height: 90vh;
    overflow-y: auto;
  }
}
</style>
